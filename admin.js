/* ================================================
   LETHES LEGACY — Painel de Admin
   Auth + CRUD (Supabase) + upload de media (R2 via /api/upload)
   ================================================ */
(function () {
  'use strict';

  var cfg = window.LL_CONFIG || {};
  if (!cfg.SUPABASE_URL || cfg.SUPABASE_URL.indexOf('SEU-PROJETO') !== -1 || !cfg.SUPABASE_ANON_KEY || cfg.SUPABASE_ANON_KEY.indexOf('SUA-ANON') !== -1) {
    alert('Falta configurar o Supabase em config.js (SUPABASE_URL / SUPABASE_ANON_KEY).');
  }
  var sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);

  // ── elementos ──
  var loginView  = document.getElementById('login-view');
  var panelView  = document.getElementById('panel-view');
  var loginForm  = document.getElementById('login-form');
  var loginError = document.getElementById('login-error');
  var listEl     = document.getElementById('listing-list');
  var editor     = document.getElementById('editor');
  var editorForm = document.getElementById('editor-form');
  var editorTitle= document.getElementById('editor-title');
  var toastEl    = document.getElementById('toast');

  var listings = [];
  var state = null; // { id, gallery:[], videos:[], cover:'' }

  // ── AUTH ──────────────────────────────────────
  init();
  async function init() {
    var res = await sb.auth.getSession();
    (res.data && res.data.session) ? showPanel() : showLogin();
    sb.auth.onAuthStateChange(function (_e, session) { session ? showPanel() : showLogin(); });
  }
  function showLogin() { panelView.hidden = true; editor.hidden = true; loginView.hidden = false; }
  async function showPanel() { loginView.hidden = true; panelView.hidden = false; await loadListings(); }

  loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    loginError.textContent = '';
    var r = await sb.auth.signInWithPassword({
      email: document.getElementById('login-email').value.trim(),
      password: document.getElementById('login-pass').value
    });
    if (r.error) loginError.textContent = 'Não foi possível entrar: ' + r.error.message;
  });
  document.getElementById('btn-logout').addEventListener('click', function () { sb.auth.signOut(); });

  // ── LISTAGEM ──────────────────────────────────
  async function loadListings() {
    listEl.innerHTML = '<p class="muted">A carregar…</p>';
    var r = await sb.from('listings').select('*').order('position').order('created_at');
    if (r.error) { listEl.innerHTML = '<p class="error">Erro a carregar: ' + esc(r.error.message) + '</p>'; return; }
    listings = r.data || [];
    renderList();
  }
  function renderList() {
    if (!listings.length) { listEl.innerHTML = '<p class="muted">Ainda não há alojamentos. Clique em “Adicionar alojamento”.</p>'; return; }
    listEl.innerHTML = listings.map(function (l) {
      var img = l.cover || (l.gallery && l.gallery[0]) || '';
      var nf = (l.gallery || []).length, nv = (l.videos || []).length;
      return '<article class="adm-card">' +
        '<div class="adm-card-img">' + (img ? '<img src="' + esc(img) + '" alt="" loading="lazy">' : '') + '</div>' +
        '<div class="adm-card-body"><h3>' + esc(l.title) + '</h3>' +
          '<p>' + esc(l.badge || l.type) + ' · ' + nf + ' foto' + (nf === 1 ? '' : 's') + ' · ' + nv + ' vídeo' + (nv === 1 ? '' : 's') + '</p></div>' +
        '<div class="adm-card-actions">' +
          '<button class="btn-mini" data-edit="' + esc(l.id) + '">Editar</button>' +
          '<button class="btn-mini danger" data-del="' + esc(l.id) + '">Eliminar</button>' +
        '</div></article>';
    }).join('');
  }
  listEl.addEventListener('click', function (e) {
    var ed = e.target.closest('[data-edit]'), dl = e.target.closest('[data-del]');
    if (ed) openEditor(find(ed.getAttribute('data-edit')));
    else if (dl) removeListing(dl.getAttribute('data-del'));
  });
  function find(id) { return listings.filter(function (x) { return String(x.id) === String(id); })[0]; }

  async function removeListing(id) {
    var l = find(id);
    if (!confirm('Eliminar “' + (l ? l.title : '') + '”?\nEsta ação não pode ser anulada.')) return;
    var r = await sb.from('listings').delete().eq('id', id);
    if (r.error) return toast('Erro ao eliminar: ' + r.error.message, true);
    if (l) deleteMedia([].concat(l.cover || [], l.gallery || [], l.videos || []).filter(Boolean));
    toast('Alojamento eliminado.');
    await loadListings();
  }

  // ── EDITOR ────────────────────────────────────
  document.getElementById('btn-add').addEventListener('click', function () { openEditor(null); });
  document.getElementById('editor-close').addEventListener('click', closeEditor);
  document.getElementById('editor-cancel').addEventListener('click', closeEditor);
  function markDirty() { if (state) state.dirty = true; }
  editorForm.addEventListener('input', markDirty);
  editorForm.addEventListener('change', markDirty);

  function openEditor(l) {
    state = {
      id: l ? l.id : null,
      gallery: (l && l.gallery) ? l.gallery.slice() : [],
      videos: (l && l.videos) ? l.videos.slice() : [],
      cover: l ? (l.cover || '') : '',
      pending: [],
      vpending: [],
      dirty: false
    };
    if (state.cover && state.gallery.indexOf(state.cover) === -1) state.gallery.unshift(state.cover);
    if (!state.cover && state.gallery.length) state.cover = state.gallery[0];

    editorTitle.textContent = l ? 'Editar alojamento' : 'Novo alojamento';
    setVal('title', l && l.title);
    setVal('type', (l && l.type) || 'casas');
    setVal('badge', l && l.badge);
    setVal('meta', l && l.meta);
    setVal('feature', l && l.feature);
    setVal('capacity', l && l.capacity);
    setVal('price', l && l.price);
    setVal('address', l && l.address);
    setVal('position', (l && l.position) || 0);
    setVal('description', l && l.description);
    renderUnits((l && l.units) || []);
    renderPhotos();
    renderVideos();

    editor.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeEditor() {
    if (state && state.dirty && !confirm('Tem alterações não guardadas. Descartar?')) return;
    editor.hidden = true; state = null; document.body.style.overflow = '';
  }

  // Tipologias (units)
  document.getElementById('add-unit').addEventListener('click', function () { addUnitRow('', ''); });
  function renderUnits(units) {
    var box = document.getElementById('units-list'); box.innerHTML = '';
    (units || []).forEach(function (u) { addUnitRow(u.name, u.details); });
  }
  function addUnitRow(name, details) {
    var row = document.createElement('div');
    row.className = 'unit-row';
    row.innerHTML =
      '<input placeholder="Nome (ex.: Casa completa)" value="' + esc(name || '') + '">' +
      '<input placeholder="Detalhes (ex.: 5 hóspedes, 2 quartos)" value="' + esc(details || '') + '">' +
      '<button type="button" class="btn-mini danger" aria-label="Remover">×</button>';
    row.querySelector('button').addEventListener('click', function () { row.remove(); markDirty(); });
    document.getElementById('units-list').appendChild(row);
  }
  function collectUnits() {
    return Array.prototype.map.call(document.querySelectorAll('#units-list .unit-row'), function (r) {
      var i = r.querySelectorAll('input');
      return { name: i[0].value.trim(), details: i[1].value.trim() };
    }).filter(function (u) { return u.name || u.details; });
  }

  // Fotos
  var photoInput = document.getElementById('photo-input');
  setupDrop('photo-drop', photoInput, handlePhotos);
  photoInput.addEventListener('change', function () { handlePhotos(photoInput.files); photoInput.value = ''; });

  function renderPhotos() {
    var html = state.gallery.map(function (url, i) {
      var isCover = url === state.cover || (i === 0 && !state.cover);
      return '<div class="media-item' + (isCover ? ' is-cover' : '') + '">' +
        '<img src="' + esc(url) + '" alt="">' +
        (isCover ? '<span class="cover-badge">Capa</span>' : '') +
        '<div class="media-tools">' +
          '<button type="button" data-mv="' + i + '|-1" title="Recuar">◀</button>' +
          (isCover ? '' : '<button type="button" data-cover="' + i + '" title="Definir capa">★</button>') +
          '<button type="button" data-mv="' + i + '|1" title="Avançar">▶</button>' +
          '<button type="button" class="danger" data-rm="' + i + '" title="Remover">×</button>' +
        '</div></div>';
    }).join('');
    html += (state.pending || []).map(function (p) {
      return '<div class="media-item pending" title="' + esc(p.name) + '"><div class="spinner"></div><span class="pending-name">' + esc(p.name) + '</span></div>';
    }).join('');
    document.getElementById('photos-grid').innerHTML = html;
  }
  document.getElementById('photos-grid').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (b.dataset.rm != null) {
      var i = +b.dataset.rm, wasCover = state.gallery[i] === state.cover;
      state.gallery.splice(i, 1);
      if (wasCover) state.cover = state.gallery[0] || '';
    } else if (b.dataset.cover != null) {
      var x = state.gallery.splice(+b.dataset.cover, 1)[0];
      state.gallery.unshift(x); state.cover = x;
    } else if (b.dataset.mv != null) {
      var p = b.dataset.mv.split('|'), from = +p[0], to = from + (+p[1]);
      if (to < 0 || to >= state.gallery.length) return;
      var t = state.gallery[from]; state.gallery[from] = state.gallery[to]; state.gallery[to] = t;
      if (!state.cover) state.cover = state.gallery[0];
    }
    markDirty();
    renderPhotos();
  });
  async function handlePhotos(files) {
    var slug = slugify(getVal('title') || 'geral');
    var list = Array.prototype.filter.call(files, function (f) { return /^image\//.test(f.type) || isHeic(f); });
    if (!list.length) return;
    toast('A enviar ' + list.length + ' foto' + (list.length > 1 ? 's' : '') + '…');
    updateSaveGuard();
    await runLimited(list, 3, async function (f) {
      var pend = { key: uid(), name: f.name };
      state.pending.push(pend); renderPhotos();
      try {
        var res = await compressImage(f);
        if (res.lowRes) toast('“' + f.name + '”: resolução baixa, pode ficar menos nítida.', true);
        var url = await uploadFile(res.file, 'image', slug);
        state.gallery.push(url);
        if (!state.cover) state.cover = url;
        markDirty();
      } catch (err) {
        toast('“' + f.name + '”: ' + err.message, true);
      } finally {
        state.pending = state.pending.filter(function (p) { return p.key !== pend.key; });
        renderPhotos(); updateSaveGuard();
      }
    });
    toast('Fotos atualizadas (' + state.gallery.length + ').');
  }

  // Vídeos
  var videoInput = document.getElementById('video-input');
  setupDrop('video-drop', videoInput, handleVideos);
  videoInput.addEventListener('change', function () { handleVideos(videoInput.files); videoInput.value = ''; });

  function renderVideos() {
    var html = state.videos.map(function (url, i) {
      return '<div class="media-item"><video src="' + esc(url) + '" muted preload="metadata"></video>' +
        '<div class="media-tools"><button type="button" class="danger" data-rmv="' + i + '" title="Remover">×</button></div></div>';
    }).join('');
    html += (state.vpending || []).map(function (p) {
      return '<div class="media-item pending" title="' + esc(p.name) + '"><div class="spinner"></div><span class="pending-name">' + esc(p.name) + '</span></div>';
    }).join('');
    document.getElementById('videos-grid').innerHTML = html;
  }
  document.getElementById('videos-grid').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (b.dataset.rmv != null) { state.videos.splice(+b.dataset.rmv, 1); markDirty(); renderVideos(); }
  });
  async function handleVideos(files) {
    var slug = slugify(getVal('title') || 'geral');
    var list = Array.prototype.filter.call(files, function (f) { return /^video\//.test(f.type); });
    if (!list.length) return;
    toast('A enviar ' + list.length + ' vídeo' + (list.length > 1 ? 's' : '') + '… (pode demorar)');
    updateSaveGuard();
    await runLimited(list, 2, async function (f) {
      var pend = { key: uid(), name: f.name };
      state.vpending.push(pend); renderVideos();
      try {
        state.videos.push(await uploadFile(f, 'video', slug));
        markDirty();
      } catch (err) {
        toast('“' + f.name + '”: ' + err.message, true);
      } finally {
        state.vpending = state.vpending.filter(function (p) { return p.key !== pend.key; });
        renderVideos(); updateSaveGuard();
      }
    });
    toast('Vídeos atualizados.');
  }

  // Guardar
  editorForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    var title = getVal('title').trim();
    if (!title) return toast('O título é obrigatório.', true);
    if (state.pending.length || state.vpending.length) return toast('Aguarde o fim dos uploads.', true);
    if (!state.gallery.length && !confirm('Este alojamento não tem fotos. Guardar mesmo assim?')) return;

    var gallery = state.gallery.slice();
    var cover = state.cover || gallery[0] || '';
    var row = {
      title: title,
      type: getVal('type'),
      badge: getVal('badge').trim(),
      meta: getVal('meta').trim(),
      feature: getVal('feature').trim(),
      capacity: getVal('capacity').trim(),
      address: getVal('address').trim(),
      price: getVal('price').trim(),
      description: getVal('description').trim(),
      position: parseInt(getVal('position'), 10) || 0,
      cover: cover,
      gallery: gallery,
      preview: gallery.slice(0, 4),
      videos: state.videos.slice(),
      units: collectUnits()
    };

    var saveBtn = document.getElementById('editor-save'); saveBtn.disabled = true;
    var r = state.id
      ? await sb.from('listings').update(row).eq('id', state.id)
      : await sb.from('listings').insert(row);
    saveBtn.disabled = false;
    if (r.error) return toast('Erro ao guardar: ' + r.error.message, true);
    if (state.id) {
      var oldL = find(state.id);
      if (oldL) {
        var kept = {};
        [].concat(cover, gallery, state.videos).forEach(function (u) { if (u) kept[u] = 1; });
        var gone = [].concat(oldL.cover || [], oldL.gallery || [], oldL.videos || []).filter(function (u) { return u && !kept[u]; });
        if (gone.length) deleteMedia(gone);
      }
    }
    state.dirty = false;
    toast('Guardado com sucesso.');
    closeEditor();
    await loadListings();
  });

  // ── helpers ───────────────────────────────────
  async function uploadFile(file, kind, slug) {
    var s = (await sb.auth.getSession()).data.session;
    if (!s) throw new Error('Sessão expirada. Faça login novamente.');
    var fd = new FormData();
    fd.append('file', file); fd.append('kind', kind); fd.append('slug', slug);
    var res = await fetch('/api/upload', { method: 'POST', headers: { authorization: 'Bearer ' + s.access_token }, body: fd });
    if (!res.ok) {
      var er = await res.json().catch(function () { return {}; });
      throw new Error(er.error || ('Falha no upload (' + res.status + ').'));
    }
    return (await res.json()).url;
  }

  // Apaga media do R2 (best-effort — não bloqueia se falhar / se o endpoint ainda não existir).
  function deleteMedia(urls) {
    if (!urls || !urls.length) return Promise.resolve();
    return sb.auth.getSession().then(function (r) {
      var t = r.data.session && r.data.session.access_token;
      if (!t) return;
      return fetch('/api/delete', {
        method: 'POST',
        headers: { authorization: 'Bearer ' + t, 'content-type': 'application/json' },
        body: JSON.stringify({ urls: urls })
      }).catch(function () {});
    });
  }

  function isHeic(file) {
    return /image\/hei[cf]/i.test(file.type || '') || /\.hei[cf]$/i.test(file.name || '');
  }

  var _heicLoader;
  function ensureHeic2any() {
    if (window.heic2any) return Promise.resolve();
    if (_heicLoader) return _heicLoader;
    _heicLoader = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/heic2any@0.0.4/dist/heic2any.min.js';
      s.onload = resolve;
      s.onerror = function () { _heicLoader = null; reject(new Error('não consegui carregar o conversor HEIC')); };
      document.head.appendChild(s);
    });
    return _heicLoader;
  }

  function loadImgEl(blob) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () { resolve(img); };
      img.onerror = function () { reject(new Error('imagem ilegível')); };
      img.src = URL.createObjectURL(blob);
    });
  }
  function loadBitmap(blob) {
    if (window.createImageBitmap) {
      return createImageBitmap(blob, { imageOrientation: 'from-image' }).catch(function () { return loadImgEl(blob); });
    }
    return loadImgEl(blob);
  }

  // Devolve { file, lowRes }. Corrige orientação (EXIF), converte HEIC e comprime para WebP.
  async function compressImage(file, maxDim, quality) {
    maxDim = maxDim || 1800; quality = quality || 0.82;
    var source = file;
    if (isHeic(file)) {
      await ensureHeic2any();
      var out = await window.heic2any({ blob: file, toType: 'image/jpeg', quality: 0.92 });
      source = Array.isArray(out) ? out[0] : out;
    }
    var bmp;
    try { bmp = await loadBitmap(source); }
    catch (e) { return { file: file, lowRes: false }; }
    var w = bmp.width || bmp.naturalWidth, h = bmp.height || bmp.naturalHeight;
    var lowRes = Math.max(w, h) < 1200;
    var scale = Math.min(1, maxDim / Math.max(w, h));
    var cw = Math.max(1, Math.round(w * scale)), ch = Math.max(1, Math.round(h * scale));
    var c = document.createElement('canvas'); c.width = cw; c.height = ch;
    c.getContext('2d').drawImage(bmp, 0, 0, cw, ch);
    if (bmp.close) bmp.close();
    var blob = await new Promise(function (r) { c.toBlob(r, 'image/webp', quality); });
    if (!blob) return { file: file, lowRes: lowRes };
    var name = (file.name || 'foto').replace(/\.[^.]+$/, '') + '.webp';
    return { file: new File([blob], name, { type: 'image/webp' }), lowRes: lowRes };
  }

  function setupDrop(zoneId, input, onFiles) {
    var z = document.getElementById(zoneId);
    z.addEventListener('click', function () { input.click(); });
    ['dragover', 'dragenter'].forEach(function (ev) { z.addEventListener(ev, function (e) { e.preventDefault(); z.classList.add('drag'); }); });
    ['dragleave', 'drop'].forEach(function (ev) { z.addEventListener(ev, function (e) { e.preventDefault(); z.classList.remove('drag'); }); });
    z.addEventListener('drop', function (e) { if (e.dataTransfer && e.dataTransfer.files) onFiles(e.dataTransfer.files); });
  }

  function setVal(name, v) { var el = editorForm.elements[name]; if (el) el.value = (v == null ? '' : v); }
  function getVal(name) { var el = editorForm.elements[name]; return el ? el.value : ''; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function slugify(s) { return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'geral'; }

  function uid() { return 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function runLimited(items, limit, worker) {
    var i = 0;
    function next() {
      if (i >= items.length) return Promise.resolve();
      var idx = i++;
      return Promise.resolve(worker(items[idx], idx)).then(next);
    }
    var starters = [];
    for (var k = 0; k < Math.min(limit, items.length); k++) starters.push(next());
    return Promise.all(starters);
  }
  function updateSaveGuard() {
    var busy = state && (state.pending.length || state.vpending.length);
    var btn = document.getElementById('editor-save');
    if (btn) btn.disabled = !!busy;
  }

  function toast(msg, isErr) {
    toastEl.textContent = msg;
    toastEl.className = 'toast' + (isErr ? ' err' : '');
    toastEl.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { toastEl.hidden = true; }, isErr ? 5000 : 2800);
  }

})();

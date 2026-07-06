(function () {
  var whatsappNumber = '351927155336';

  var icons = {
    stay: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5L12 3l9 7.5V21H3V10.5z"/><path d="M9 21v-7h6v7"/></svg>',
    camera: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h4l2-3h4l2 3h4v13H4V7z"/><circle cx="12" cy="13" r="4"/></svg>',
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>',
    users: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-5.25 7-12a7 7 0 0 0-14 0c0 6.75 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    arrowLeft: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>'
  };

  var listings = [
];

  // URL base dos ficheiros media (Cloudflare R2).
  // Para passar ao domínio próprio, mudar SÓ esta linha (ex: 'https://media.letheslegacy.pt/').
  var mediaBase = 'https://pub-aa72ada04c444be4ba353768bbc5513b.r2.dev/';

  function withBase(path) {
    if (!path) return path;
    if (/^https?:\/\//.test(path)) return path;
    return mediaBase + path.replace(/^\/+/, '');
  }

  function normalizeMedia(listing) {
    if (listing.cover) listing.cover = withBase(listing.cover);
    if (listing.preview) listing.preview = listing.preview.map(withBase);
    if (listing.gallery) listing.gallery = listing.gallery.map(withBase);
    if (listing.videos) listing.videos = listing.videos.map(withBase);
    return listing;
  }

  var modal;
  var activeListing = null;
  var activeMedia = [];
  var activePhotoIndex = 0;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function unique(values) {
    var seen = {};
    return values.filter(function (value) {
      if (!value || seen[value]) return false;
      seen[value] = true;
      return true;
    });
  }

  function galleryPhotos(listing) {
    return unique([listing.cover].concat(listing.gallery || []));
  }

  function previewPhotos(listing) {
    return unique([listing.cover].concat(listing.preview || listing.gallery || [])).slice(0, 4);
  }

  function whatsappUrl(title) {
    var text = 'Olá! Tenho interesse no alojamento ' + title + '. Podiam dar-me mais informações sobre disponibilidade e preços?';
    return 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(text);
  }

  function mapsUrl(address) {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address || '');
  }

  function thumbnailMarkup(listing) {
    return previewPhotos(listing).slice(1).map(function (photo, index) {
      return '<img src="' + escapeHtml(photo) + '" alt="' + escapeHtml(listing.title) + ' - fotografia ' + (index + 2) + '" loading="lazy">';
    }).join('');
  }

  function unitMarkup(listing) {
    return (listing.units || []).map(function (unit) {
      return [
        '<li>',
        '  <strong>' + escapeHtml(unit.name) + '</strong>',
        '  <span>' + escapeHtml(unit.details) + '</span>',
        '</li>'
      ].join('');
    }).join('');
  }

  function photoLabel(count) {
    return count + (count === 1 ? ' fotografia' : ' fotografias');
  }

  function listingCard(listing, index) {
    var photoCount = galleryPhotos(listing).length;
    return [
      '<article class="listing-card" data-type="' + escapeHtml(listing.type) + '" data-listing-index="' + index + '" tabindex="0" role="button" aria-label="Ver mais informações de ' + escapeHtml(listing.title) + '">',
      '  <div class="listing-img-wrap">',
      '    <img src="' + escapeHtml(listing.cover) + '" alt="' + escapeHtml(listing.title) + '" loading="lazy">',
      '    <span class="listing-type-badge">' + escapeHtml(listing.badge) + '</span>',
      '  </div>',
      '  <div class="listing-body">',
      '    <h3 class="listing-name">' + escapeHtml(listing.title) + '</h3>',
      '    <p class="listing-location">' + escapeHtml(listing.meta) + '</p>',
      '    <div class="listing-amenities">',
      '      <span class="listing-amenity">' + icons.stay + escapeHtml(listing.feature) + '</span>',
      '      <span class="listing-amenity">' + icons.users + escapeHtml(listing.capacity || 'Sob consulta') + '</span>',
      '      <span class="listing-amenity">' + icons.camera + photoLabel(photoCount) + '</span>',
      '    </div>',
      '    <p class="listing-address">' + icons.pin + escapeHtml(listing.address || 'Ponte de Lima') + '</p>',
      '    <div class="listing-photo-strip">' + thumbnailMarkup(listing) + '</div>',
      '    <p class="listing-more">Mais informações e galeria completa</p>',
      '    <div class="listing-footer">',
      '      <div class="listing-price">' + escapeHtml(listing.price || 'Sob consulta') + '</div>',
      '      <a href="' + whatsappUrl(listing.title) + '" target="_blank" rel="noopener noreferrer" class="btn-wa-listing">' + icons.chat + 'Reservar</a>',
      '    </div>',
      '  </div>',
      '</article>'
    ].join('');
  }

  function ensureModal() {
    if (modal) return modal;

    modal = document.createElement('div');
    modal.className = 'listing-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = [
      '<div class="listing-modal-backdrop" data-modal-close></div>',
      '<section class="listing-modal-panel" role="dialog" aria-modal="true" aria-labelledby="listing-modal-title">',
      '  <button type="button" class="listing-modal-close" data-modal-close aria-label="Fechar">&times;</button>',
      '  <div class="listing-modal-gallery">',
      '    <div class="listing-modal-image-frame">',
      '      <img class="listing-modal-image" src="" alt="">',
      '      <video class="listing-modal-video" controls playsinline preload="metadata" style="display:none"></video>',
      '      <button type="button" class="listing-gallery-nav listing-gallery-prev" aria-label="Fotografia anterior">' + icons.arrowLeft + '</button>',
      '      <button type="button" class="listing-gallery-nav listing-gallery-next" aria-label="Fotografia seguinte">' + icons.arrowRight + '</button>',
      '      <span class="listing-modal-counter"></span>',
      '    </div>',
      '  </div>',
      '  <aside class="listing-modal-info">',
      '    <p class="listing-modal-eyebrow">Mais informações</p>',
      '    <h2 id="listing-modal-title"></h2>',
      '    <p class="listing-modal-meta"></p>',
      '    <div class="listing-modal-facts">',
      '      <div><span>Tipo</span><strong data-modal-type></strong></div>',
      '      <div><span>Capacidade</span><strong data-modal-capacity></strong></div>',
      '      <div><span>Fotografias</span><strong data-modal-count></strong></div>',
      '      <div><span>Reserva</span><strong data-modal-price></strong></div>',
      '    </div>',
      '    <div class="listing-modal-address">',
      '      <span>' + icons.pin + 'Localização</span>',
      '      <p data-modal-address></p>',
      '      <a href="#" target="_blank" rel="noopener noreferrer" class="btn-map-listing">' + icons.pin + 'Abrir no Google Maps</a>',
      '    </div>',
      '    <section class="listing-modal-units-wrap">',
      '      <h3>Tipologias</h3>',
      '      <ul class="listing-modal-units"></ul>',
      '    </section>',
      '    <p class="listing-modal-copy"></p>',
      '    <a href="#" target="_blank" rel="noopener noreferrer" class="btn-wa-listing listing-modal-whatsapp">' + icons.chat + 'Reservar no WhatsApp</a>',
      '  </aside>',
      '</section>'
    ].join('');

    document.body.appendChild(modal);

    modal.querySelectorAll('[data-modal-close]').forEach(function (button) {
      button.addEventListener('click', closeModal);
    });
    modal.querySelector('.listing-gallery-prev').addEventListener('click', function () { showPhoto(activePhotoIndex - 1); });
    modal.querySelector('.listing-gallery-next').addEventListener('click', function () { showPhoto(activePhotoIndex + 1); });

    return modal;
  }

  function showPhoto(index) {
    if (!activeMedia.length) return;
    activePhotoIndex = (index + activeMedia.length) % activeMedia.length;

    var item = activeMedia[activePhotoIndex];
    var image = modal.querySelector('.listing-modal-image');
    var video = modal.querySelector('.listing-modal-video');

    if (item.type === 'video') {
      image.style.display = 'none';
      video.style.display = '';
      if (video.getAttribute('src') !== item.src) video.src = item.src;
    } else {
      try { video.pause(); } catch (e) {}
      video.removeAttribute('src');
      video.style.display = 'none';
      image.style.display = '';
      image.src = item.src;
      image.alt = activeListing.title + ' - fotografia ' + (activePhotoIndex + 1);
    }
    modal.querySelector('.listing-modal-counter').textContent = (activePhotoIndex + 1) + ' / ' + activeMedia.length;
  }

  function openListing(index, requestedPhoto) {
    var listing = listings[index];
    if (!listing) return;

    activeListing = listing;
    activeMedia = galleryPhotos(listing).map(function (src) { return { type: 'image', src: src }; })
      .concat((listing.videos || []).map(function (src) { return { type: 'video', src: src }; }));
    activePhotoIndex = 0;
    if (requestedPhoto) {
      for (var i = 0; i < activeMedia.length; i++) {
        if (activeMedia[i].src === requestedPhoto) { activePhotoIndex = i; break; }
      }
    }

    ensureModal();
    modal.querySelector('#listing-modal-title').textContent = listing.title;
    modal.querySelector('.listing-modal-meta').textContent = listing.meta + ' · ' + listing.feature + ' · ' + (listing.capacity || 'Sob consulta');
    modal.querySelector('[data-modal-type]').textContent = listing.badge;
    modal.querySelector('[data-modal-capacity]').textContent = listing.capacity || 'Sob consulta';
    modal.querySelector('[data-modal-count]').textContent = photoLabel(galleryPhotos(listing).length);
    modal.querySelector('[data-modal-price]').textContent = listing.price || 'Sob consulta';
    modal.querySelector('.listing-modal-whatsapp').href = whatsappUrl(listing.title);
    modal.querySelector('[data-modal-address]').textContent = listing.address || 'Ponte de Lima';
    modal.querySelector('.btn-map-listing').href = mapsUrl(listing.address || listing.title);
    modal.querySelector('.listing-modal-units').innerHTML = unitMarkup(listing);
    modal.querySelector('.listing-modal-copy').textContent = listing.description || 'Veja a galeria completa deste alojamento e fale connosco para confirmar disponibilidade, preço e condições de reserva.';

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    showPhoto(activePhotoIndex);
    modal.querySelector('.listing-modal-close').focus();
  }

  function closeModal() {
    if (!modal || !modal.classList.contains('open')) return;
    var video = modal.querySelector('.listing-modal-video');
    if (video) { try { video.pause(); } catch (e) {} }
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function onDocumentKeydown(event) {
    if (!modal || !modal.classList.contains('open')) return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowLeft') showPhoto(activePhotoIndex - 1);
    if (event.key === 'ArrowRight') showPhoto(activePhotoIndex + 1);
  }

  var grid = document.querySelector('.listings-grid');

  function renderGrid() {
    grid.innerHTML = listings.map(listingCard).join('');
    grid.classList.add('is-rendered');
    document.dispatchEvent(new CustomEvent('listings:rendered'));
  }

  function bindGrid() {
    grid.addEventListener('click', function (event) {
      if (event.target.closest('a')) return;
      var card = event.target.closest('.listing-card');
      if (!card) return;
      var image = event.target.closest('img');
      openListing(Number(card.dataset.listingIndex), image ? image.getAttribute('src') : undefined);
    });

    grid.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      var card = event.target.closest('.listing-card');
      if (!card) return;
      event.preventDefault();
      openListing(Number(card.dataset.listingIndex));
    });
  }

  function loadListings() {
    grid.innerHTML = '<p class="listings-status">A carregar alojamentos…</p>';
    var cfg = window.LL_CONFIG || {};
    if (!window.supabase || !cfg.SUPABASE_URL) {
      grid.innerHTML = '<p class="listings-status listings-error">Configuração indisponível. Contacte-nos.</p>';
      return;
    }
    var sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
    sb.from('listings').select('*').order('position').order('created_at').then(function (res) {
      if (res.error) throw res.error;
      listings = (res.data || []).map(normalizeMedia);
      renderGrid();
    }).catch(function (err) {
      if (window.console) console.error('Erro a carregar alojamentos:', err);
      grid.innerHTML = '<p class="listings-status listings-error">Não foi possível carregar os alojamentos. Atualize a página ou contacte-nos.</p>';
    });
  }

  if (grid) {
    bindGrid();
    loadListings();
  }

  document.addEventListener('keydown', onDocumentKeydown);
})();

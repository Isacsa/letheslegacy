(function () {
  var whatsappNumber = '351927155336';

  var icons = {
    stay: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5L12 3l9 7.5V21H3V10.5z"/><path d="M9 21v-7h6v7"/></svg>',
    camera: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h4l2-3h4l2 3h4v13H4V7z"/><circle cx="12" cy="13" r="4"/></svg>',
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>',
    users: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-5.25 7-12a7 7 0 0 0-14 0c0 6.75 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    share: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4"/></svg>',
    arrowLeft: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>'
  };

  var listings = [
];

  // URL base dos ficheiros media (domínio próprio ligado ao bucket R2).
  var mediaBase = 'https://media.letheslegacy.com/';

  // Qualquer host *.r2.dev é reescrito para o domínio próprio: o endpoint de
  // desenvolvimento tem rate limiting e sem CDN, e já circularam variantes com
  // typo (env mal configurada) — o padrão apanha todas.
  var legacyMediaBase = /^https?:\/\/[a-z0-9-]+\.r2\.dev\//;

  function withBase(path) {
    if (!path) return path;
    if (legacyMediaBase.test(path)) return path.replace(legacyMediaBase, mediaBase);
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
  var modalHistoryEntry = false;
  var defaultDocumentTitle = document.title;

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

  function slugify(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'alojamento';
  }

  function listingKey(listing) {
    var slug = slugify(listing.title);
    var hasDuplicate = listings.some(function (other) {
      return other !== listing && slugify(other.title) === slug;
    });
    return hasDuplicate && listing.id ? slug + '--' + listing.id : slug;
  }

  function listingUrl(listing) {
    var url = new URL(window.location.href);
    url.searchParams.set('alojamento', listingKey(listing));
    return url.toString();
  }

  function urlWithoutListing() {
    var url = new URL(window.location.href);
    url.searchParams.delete('alojamento');
    return url.toString();
  }

  function listingFromUrl() {
    var requestedKey = new URL(window.location.href).searchParams.get('alojamento');
    if (!requestedKey) return null;

    // Continua a aceitar os links antigos com UUID para não quebrar nada que já
    // tenha sido enviado antes de os URLs passarem a usar apenas o nome.
    var separator = requestedKey.lastIndexOf('--');
    var requestedId = separator === -1 ? requestedKey : requestedKey.slice(separator + 2);
    var listingById = listings.find(function (listing) {
      return String(listing.id || '') === requestedId;
    });
    if (listingById) return listingById;

    var listingsBySlug = listings.filter(function (listing) {
      return slugify(listing.title) === requestedKey;
    });
    return listingsBySlug.length === 1 ? listingsBySlug[0] : null;
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
      '    <a class="listing-more listing-details-link" href="' + escapeHtml(listingUrl(listing)) + '">Mais informações e galeria completa</a>',
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
      '    <div class="listing-modal-actions">',
      '      <a href="#" target="_blank" rel="noopener noreferrer" class="btn-wa-listing listing-modal-whatsapp">' + icons.chat + 'Reservar no WhatsApp</a>',
      '      <button type="button" class="btn-share-listing">' + icons.share + '<span>Partilhar alojamento</span></button>',
      '    </div>',
      '    <p class="listing-share-status" role="status" aria-live="polite"></p>',
      '  </aside>',
      '</section>'
    ].join('');

    document.body.appendChild(modal);

    modal.querySelectorAll('[data-modal-close]').forEach(function (button) {
      button.addEventListener('click', closeModal);
    });
    modal.querySelector('.listing-gallery-prev').addEventListener('click', function () { showPhoto(activePhotoIndex - 1); });
    modal.querySelector('.listing-gallery-next').addEventListener('click', function () { showPhoto(activePhotoIndex + 1); });
    modal.querySelector('.btn-share-listing').addEventListener('click', shareActiveListing);

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

  function openListing(index, requestedPhoto, updateHistory) {
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
    modal.querySelector('.listing-share-status').textContent = '';
    modal.querySelector('.btn-share-listing span').textContent = 'Partilhar alojamento';

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    document.title = listing.title + ' — Lethes Legacy';
    if (updateHistory !== false) {
      window.history.pushState({ listingModal: true }, '', listingUrl(listing));
      modalHistoryEntry = true;
    } else {
      modalHistoryEntry = Boolean(window.history.state && window.history.state.listingModal);
    }
    showPhoto(activePhotoIndex);
    modal.querySelector('.listing-modal-close').focus();
  }

  function hideModal() {
    if (!modal || !modal.classList.contains('open')) return;
    var video = modal.querySelector('.listing-modal-video');
    if (video) { try { video.pause(); } catch (e) {} }
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    document.title = defaultDocumentTitle;
    activeListing = null;
    activeMedia = [];
  }

  function closeModal(updateHistory) {
    if (!modal || !modal.classList.contains('open')) return;
    var shouldGoBack = modalHistoryEntry;
    hideModal();
    modalHistoryEntry = false;

    if (updateHistory === false) return;
    if (shouldGoBack) {
      window.history.back();
    } else {
      window.history.replaceState({}, '', urlWithoutListing());
    }
  }

  function copyText(value) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(value);
    }
    return new Promise(function (resolve, reject) {
      var input = document.createElement('textarea');
      input.value = value;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      try {
        if (!document.execCommand('copy')) throw new Error('copy failed');
        resolve();
      } catch (err) {
        reject(err);
      } finally {
        document.body.removeChild(input);
      }
    });
  }

  function shareActiveListing() {
    if (!activeListing) return;
    var url = listingUrl(activeListing);
    var status = modal.querySelector('.listing-share-status');
    var label = modal.querySelector('.btn-share-listing span');
    var shareData = {
      title: activeListing.title + ' — Lethes Legacy',
      text: 'Veja este alojamento da Lethes Legacy: ' + activeListing.title,
      url: url
    };

    if (navigator.share) {
      navigator.share(shareData).catch(function (err) {
        if (err && err.name !== 'AbortError') copyListingLink(url, status, label);
      });
      return;
    }
    copyListingLink(url, status, label);
  }

  function copyListingLink(url, status, label) {
    copyText(url).then(function () {
      label.textContent = 'Link copiado';
      status.textContent = 'O link deste alojamento foi copiado.';
      window.setTimeout(function () {
        label.textContent = 'Partilhar alojamento';
      }, 2500);
    }).catch(function () {
      status.textContent = 'Não foi possível copiar automaticamente. Copie o endereço do navegador.';
    });
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
      var detailsLink = event.target.closest('.listing-details-link');
      if (detailsLink) event.preventDefault();
      else if (event.target.closest('a')) return;
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
      openListingFromUrl();
    }).catch(function (err) {
      if (window.console) console.error('Erro a carregar alojamentos:', err);
      grid.innerHTML = '<p class="listings-status listings-error">Não foi possível carregar os alojamentos. Atualize a página ou contacte-nos.</p>';
    });
  }

  function openListingFromUrl() {
    var listing = listingFromUrl();
    if (!listing) {
      closeModal(false);
      return;
    }
    var canonicalUrl = listingUrl(listing);
    if (window.location.href !== canonicalUrl) {
      window.history.replaceState(window.history.state || {}, '', canonicalUrl);
    }
    openListing(listings.indexOf(listing), undefined, false);
  }

  if (grid) {
    bindGrid();
    loadListings();
  }

  document.addEventListener('keydown', onDocumentKeydown);
  window.addEventListener('popstate', openListingFromUrl);
})();

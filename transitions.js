/* ================================================
   LETHES LEGACY — Page Transitions
   Elegant fade veil between pages.
   Entry is CSS-only (see .page-transition); this script
   handles the exit fade and back/forward (bfcache) restore.
   ================================================ */
(function () {
  'use strict';

  var root     = document.documentElement;
  var DURATION = 520; // keep in sync with --pt-duration in style.css
  var REDUCED  = window.matchMedia &&
                 window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Back/forward restore: clear a stuck "leaving" veil and
        replay the reveal animation when served from bfcache. ── */
  window.addEventListener('pageshow', function (e) {
    root.classList.remove('pt-leaving');
    if (e.persisted) {
      var veil = document.querySelector('.page-transition');
      if (veil) {
        veil.style.animation = 'none';
        void veil.offsetWidth;        // force reflow
        veil.style.animation = '';    // restart the CSS reveal
      }
    }
  });

  if (REDUCED) return; // honour reduced-motion: navigate instantly

  /* ── EXIT: intercept same-site page navigations ── */
  function isInternalPageLink(a) {
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return false;
    var raw = a.getAttribute('href');
    if (!raw || /^(mailto:|tel:|#)/i.test(raw)) return false;

    var url;
    try { url = new URL(a.href, location.href); }
    catch (err) { return false; }

    if (url.host !== location.host) return false;         // external
    if (url.pathname === location.pathname) return false; // same page (hash)
    return /\.html?$/i.test(url.pathname) || url.pathname === '/';
  }

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 ||
        e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    var a = e.target.closest && e.target.closest('a');
    if (!isInternalPageLink(a)) return;

    e.preventDefault();
    var dest = a.href;
    root.classList.add('pt-leaving');
    setTimeout(function () { window.location.href = dest; }, DURATION);
  });
})();

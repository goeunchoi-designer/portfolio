(function () {
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var revealEls = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('visible'); });
    } else {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' });

      revealEls.forEach(function (el) {
        revealObserver.observe(el);
      });

      // Safety net: force everything visible if the observer misses an element
      // (e.g. a scroll faster than the observer callback can keep up with).
      setTimeout(function () {
        revealEls.forEach(function (el) { el.classList.add('visible'); });
      }, 2500);
    }

    var sections = Array.from(document.querySelectorAll('.cs-section[id]'));
    var navLinks = Array.from(document.querySelectorAll('.section-nav a'));

    function updateActiveNav() {
      if (!sections.length || !navLinks.length) return;
      var current = sections[0].id;
      sections.forEach(function (section) {
        if (section.getBoundingClientRect().top <= 130) current = section.id;
      });
      navLinks.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();

    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        var href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        var target = document.querySelector(href);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    var cardSelector = [
      '.callout',
      '.obs-item',
      '.obs-emoji-item',
      '.insight-card',
      '.decision-card',
      '.outcome-card',
      '.related-card',
      '.hero-stat',
      '.process-step',
      '.anno-card',
      '.role-cell'
    ].join(', ');
    var cardEls = Array.from(document.querySelectorAll(cardSelector));

    cardEls.forEach(function (card) {
      card.classList.add('card-enter');
    });

    document.querySelectorAll('.decision-grid, .outcome-grid, .three-col, .obs-list, .hero-stats, .process-steps, .related-grid').forEach(function (grid) {
      Array.from(grid.children).forEach(function (child, index) {
        if (child.classList.contains('card-enter')) {
          child.style.transitionDelay = (index * 0.1) + 's';
        }
      });
    });

    var cardObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('card-visible');
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    cardEls.forEach(function (card) {
      cardObserver.observe(card);
    });

    var processFlow = document.getElementById('processStepFlow');
    if (processFlow) {
      var processObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          processFlow.querySelectorAll('.step-pill, .step-connector').forEach(function (el, index) {
            setTimeout(function () {
              el.classList.add('visible');
            }, index * 180);
          });
          processObserver.unobserve(processFlow);
        }
      }, { threshold: 0.4 });
      processObserver.observe(processFlow);
    }

    var slideObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          slideObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.slide-left, .slide-right').forEach(function (el) {
      slideObserver.observe(el);
    });

    document.querySelectorAll('.feat-tab-btn').forEach(function (button) {
      button.addEventListener('click', function () {
        var group = button.closest('.feat-tabs') || document;
        group.querySelectorAll('.feat-tab-btn').forEach(function (item) {
          item.classList.remove('active');
        });
        group.querySelectorAll('.feat-tab-panel').forEach(function (panel) {
          panel.classList.remove('active');
        });
        button.classList.add('active');
        var panel = document.getElementById(button.dataset.tab);
        if (panel) panel.classList.add('active');
      });
    });

    var overlay = document.querySelector('.lightbox-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'lightbox-overlay';
      overlay.innerHTML = '<button class="lightbox-close" aria-label="Close">✕</button><img>';
      document.body.appendChild(overlay);
    }

    var lightboxImage = overlay.querySelector('img');
    var closeButton = overlay.querySelector('.lightbox-close');

    function openLightbox(src, alt) {
      if (!overlay || !lightboxImage || !src) return;
      lightboxImage.src = src;
      lightboxImage.alt = alt || '';
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      if (!overlay) return;
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    window.openLightbox = openLightbox;

    document.querySelectorAll('.lb-trigger, .img-block img, .anno-img img').forEach(function (el) {
      el.classList.add('lb-trigger');
      el.addEventListener('click', function () {
        var image = el.matches('img') ? el : el.querySelector('img');
        if (image) openLightbox(image.src, image.alt);
      });
    });

    if (closeButton) closeButton.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) closeLightbox();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeLightbox();
    });
  });
})();

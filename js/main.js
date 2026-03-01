/* ============================================================
   CAROLINE ARNAUD — Site vitrine
   JavaScript — Menu, scroll, form, animations
   ============================================================ */

(function () {
  'use strict';

  // --- Mobile Burger Menu ---
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobile-nav');

  if (burger && mobileNav) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('burger--open');
      mobileNav.classList.toggle('mobile-nav--open');
      document.body.style.overflow = mobileNav.classList.contains('mobile-nav--open') ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('.mobile-nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.classList.remove('burger--open');
        mobileNav.classList.remove('mobile-nav--open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Header Scroll Effect ---
  const header = document.getElementById('header');

  if (header) {
    function updateHeader() {
      if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  // --- Scroll Animations (Intersection Observer) ---
  var animateElements = document.querySelectorAll('.animate');

  if (animateElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    animateElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately
    animateElements.forEach(function (el) {
      el.classList.add('animate--visible');
    });
  }

  // --- Contact Form Validation ---
  var form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      var isValid = true;

      // Reset errors
      form.querySelectorAll('.form__group--error').forEach(function (group) {
        group.classList.remove('form__group--error');
      });

      // Validate required fields
      var requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(function (field) {
        var group = field.closest('.form__group');
        if (!field.value.trim()) {
          if (group) group.classList.add('form__group--error');
          isValid = false;
        }
      });

      // Validate email format
      var emailField = form.querySelector('#email');
      if (emailField && emailField.value.trim()) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value.trim())) {
          var emailGroup = emailField.closest('.form__group');
          if (emailGroup) emailGroup.classList.add('form__group--error');
          isValid = false;
        }
      }

      if (!isValid) {
        e.preventDefault();
        // Scroll to first error
        var firstError = form.querySelector('.form__group--error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // If Formspree is not configured (placeholder URL), prevent submit and show success
      var action = form.getAttribute('action');
      if (action && action.indexOf('VOTRE_ID') !== -1) {
        e.preventDefault();
        var successMsg = document.getElementById('form-success');
        if (successMsg) {
          successMsg.classList.add('form__success--visible');
          form.reset();
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });

    // Clear error on input
    form.querySelectorAll('.form__input, .form__select, .form__textarea').forEach(function (field) {
      field.addEventListener('input', function () {
        var group = field.closest('.form__group');
        if (group) group.classList.remove('form__group--error');
      });
    });
  }
})();

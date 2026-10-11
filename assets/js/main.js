document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Light / Dark)
  const themeToggleBtn = document.getElementById('btnThemeToggle');
  const storedTheme = localStorage.getItem('site_theme') || 'light';
  
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('site_theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
    }
  }

  applyTheme(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // 2. Language Management
  const langToggleBtn = document.getElementById('btnLangToggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      window.I18N.toggleLang();
    });
  }
  window.I18N.setLang(window.I18N.currentLang);

  // 3. Header Scroll Glass Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 4. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });
  }

  // 5. Cookie Banner Management
  const cookieBanner = document.getElementById('cookieBanner');
  const acceptCookie = document.getElementById('btnAcceptCookie');
  const declineCookie = document.getElementById('btnDeclineCookie');
  
  if (cookieBanner) {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      cookieBanner.classList.remove('hidden');
    }
    acceptCookie?.addEventListener('click', () => {
      localStorage.setItem('cookie_consent', 'accepted');
      cookieBanner.classList.add('hidden');
    });
    declineCookie?.addEventListener('click', () => {
      localStorage.setItem('cookie_consent', 'declined');
      cookieBanner.classList.add('hidden');
    });
  }

  // 6. Persian Datepicker Initialization
  if (window.$ && $.fn && $.fn.persianDatepicker) {
    $('.persian-datepicker-input').persianDatepicker({
      format: 'YYYY/MM/DD',
      autoClose: true,
      initialValue: false,
      calendar: {
        persian: {
          locale: 'fa'
        }
      }
    });
  }
});

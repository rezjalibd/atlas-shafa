const translations = {
  fa: {
    brand_name: "اطلس شفاء آماتیس",
    brand_tagline: "پیوند سلامت، فناوری و تولید تخصصی",
    nav_home: "صفحه اصلی",
    nav_about: "درباره ما",
    nav_services: "خدمات درمانی و تشخیصی",
    nav_products: "محصولات و تجهیزات",
    nav_tech: "فناوری و سلامت",
    nav_rnd: "تحقیق و توسعه",
    nav_cert: "مجوزها و استانداردها",
    nav_coop: "همکاری سازمانی",
    nav_contact: "تماس با ما",
    cta_consult: "دریافت مشاوره و نوبت",
    hero_badge: "اکوسیستم هوشمند سلامت و فناوری پزشکی",
    hero_title: "از تشخیص و درمان تا فناوری و تولید؛ <span>زنجیره‌ای برای آینده سلامت</span>",
    hero_desc: "اطلس شفاء آماتیس، مجموعه‌ای چندحوزه‌ای و پیشرو در توسعه زنجیره سلامت، فناوری پزشکی، رادیولوژی تخصصی فک و صورت، نرم‌افزارهای سلامت و تولید تجهیزات پزشکی استاندارد است.",
    btn_explore: "آشنایی با حوزه‌ها",
    btn_services: "مشاهده خدمات",
    stat_sectors: "۴ حوزه کلیدی",
    stat_desc: "پوشش جامع زنجیره ارزش سلامت",
    theme_toggle: "تغییر تم (تاریک/روشن)",
    lang_toggle: "English",
    cookie_title: "حریم خصوصی و استفاده از کوکی‌ها",
    cookie_desc: "وب‌سایت اطلس شفاء آماتیس جهت بهبود تجربه کاربری و حفظ استانداردهای امنیتی از فایل‌های کوکی استفاده می‌کند.",
    cookie_accept: "پذیرش همه",
    cookie_decline: "رد کردن"
  },
  en: {
    brand_name: "Atlas Shafa Amatis",
    brand_tagline: "Bridging Healthcare, Technology & Precision Manufacturing",
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Clinical & Diagnostics",
    nav_products: "Medical Products",
    nav_tech: "HealthTech & Software",
    nav_rnd: "R&D & Innovation",
    nav_cert: "Certifications & Permits",
    nav_coop: "Corporate Partnership",
    nav_contact: "Contact Us",
    cta_consult: "Consultation & Booking",
    hero_badge: "Intelligent Healthcare & MedTech Ecosystem",
    hero_title: "From Diagnostics & Care to Advanced Tech; <span>Chain for the Future of Health</span>",
    hero_desc: "Atlas Shafa Amatis is a multi-sector healthtech enterprise advancing precision maxillofacial imaging, healthcare software, clinical services, and certified medical manufacturing.",
    btn_explore: "Explore Ecosystem",
    btn_services: "Our Services",
    stat_sectors: "4 Core Sectors",
    stat_desc: "Comprehensive Healthcare Value Chain",
    theme_toggle: "Toggle Theme",
    lang_toggle: "فارسی",
    cookie_title: "Privacy & Cookies",
    cookie_desc: "Atlas Shafa Amatis website uses cookies to provide the best user experience and maintain safety standards.",
    cookie_accept: "Accept All",
    cookie_decline: "Decline"
  }
};

window.I18N = {
  currentLang: localStorage.getItem('site_lang') || 'fa',
  t(key) {
    const lang = this.currentLang;
    return (translations[lang] && translations[lang][key]) || (translations['fa'] && translations['fa'][key]) || key;
  },
  setLang(lang) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'fa' ? 'rtl' : 'ltr';
    this.applyTranslations();
  },
  toggleLang() {
    this.setLang(this.currentLang === 'fa' ? 'en' : 'fa');
  },
  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    });
    const langBtn = document.getElementById('btnLangToggle');
    if (langBtn) {
      langBtn.innerHTML = this.currentLang === 'fa' ? 'EN' : 'فا';
    }
  }
};

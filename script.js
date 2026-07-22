// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const scrollTopBtn = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');
const animatedElements = document.querySelectorAll('.section, .skill-card, .education-card, .contact-item, .stat-item');

// Language content
const translations = {
  en: {
    // Navigation
    'nav-brand-text': 'Wael Arman',
    'nav-about-text': 'About',
    'nav-exp-text': 'Experience',
    'nav-skills-text': 'Skills',
    'nav-edu-text': 'Education',
    'nav-contact-text': 'Contact',
    
    // Hero Section
    'hero-name': 'Wael Mohamed Arman',
    'hero-title': 'Customer Service & E-Marketing Specialist',
    'about-btn-text': 'About Me',
    'contact-btn-text': 'Contact',
    
    // About Section
    'about-title-text': 'About Me',
    'about-description': 'I am an enthusiastic professional in customer service and digital marketing, with a growing interest in programming and web development. I have strong experience in team management and enhancing customer experience. I enjoy using marketing tools, managing social media pages, and creating appealing content.',
    'years-exp': 'Years Experience',
    'projects': 'Projects',
    'clients': 'Happy Clients',
    
    // Experience Section
    'experience-title-text': 'Professional Experience',
    'exp-1-title': 'Admin and CC Leader - Dacktra App',
    'exp-1-period': '2024–2025',
    'exp-1-desc': 'Leading customer service operations and managing call center activities for the Dacktra application.',
    'exp-2-title': 'Assistant Customer Service Manager - Al Agha Restaurant',
    'exp-2-period': '2023–2024',
    'exp-2-desc': 'Assisted in managing customer service operations and team coordination.',
    'exp-3-title': 'Call Center Supervisor - Al Agha Restaurant',
    'exp-3-period': '2022–2023',
    'exp-3-desc': 'Supervised call center operations and ensured quality customer service delivery.',
    'exp-4-title': 'Online & Delivery Supervisor - Al Agha Restaurant',
    'exp-4-period': '2021–2022',
    'exp-4-desc': 'Managed online orders and delivery operations for the restaurant.',
    'exp-5-title': 'Accountant - Electro Hani Company',
    'exp-5-period': '2022–2023',
    'exp-5-desc': 'Handled accounting responsibilities and financial record keeping.',
    
    // Skills Section
    'skills-title-text': 'Skills',
    'skill-1-title': 'Communication & Problem Solving',
    'skill-1-desc': 'Excellent communication skills with proven ability to resolve complex customer issues.',
    'skill-2-title': 'Data Analysis & Performance Improvement',
    'skill-2-desc': 'Skilled in analyzing performance metrics and implementing improvement strategies.',
    'skill-3-title': 'Training & Team Development',
    'skill-3-desc': 'Experience in training team members and developing their professional skills.',
    'skill-4-title': 'Social Media & Logo Design',
    'skill-4-desc': 'Proficient in managing social media platforms and creating visual content.',
    'skill-5-title': 'Microsoft Office Suite',
    'skill-5-desc': 'Full proficiency in Word, Excel, PowerPoint, and Outlook applications.',
    'skill-6-title': 'Web Development',
    'skill-6-desc': 'Growing interest and skills in programming and web development technologies.',
    
    // Education Section
    'education-title-text': 'Education & Courses',
    'edu-1-title': 'Bachelor\'s Degree in Physics',
    'edu-1-school': 'Damascus University',
    'edu-1-year': '2024',
    'edu-2-title': 'Customer Service Course',
    'edu-2-school': 'Professional Training',
    'edu-2-year': '2023',
    'edu-3-title': 'Bachelor of Business Administration (Currently Studying)',
    'edu-3-school': 'University of the People',
    'edu-3-year': 'Currently Studying',
    'edu-3-desc': 'Currently pursuing a Bachelor\'s degree in Business Administration with coursework focused on management, marketing, finance, leadership, and strategic business decision-making.',
    'edu-4-title': 'Professional Diploma in Marketing',
    'edu-4-school': 'Arab Academy for Science, Technology & Maritime Transport (AASTMT)',
    'edu-4-year': '2026',
    'edu-4-desc': 'Successfully completed a Professional Diploma in Marketing, covering digital marketing, branding, consumer behavior, market research, marketing strategy, and business development.',
    'edu-5-title': 'Coaching Practices',
    'edu-5-school': 'University of California, Davis',
    'edu-5-year': '2026',
    'edu-5-desc': 'Completed professional training in Coaching Practices, focusing on leadership, coaching techniques, effective communication, team development, mentoring, and performance improvement.',
    
    // Contact Section
    'contact-title-text': 'Contact Me',
    'email-label': 'Email',
    'phone-label': 'Phone / WhatsApp',
    'address-label': 'Address',
    'address-text': 'Giza, Egypt - El Qawmiya, Kamal Wahba El Kholy Street',
    'send-btn-text': 'Send Message',
    
    // Footer
    'footer-name': 'Wael Mohamed Arman',
    'footer-desc': 'Customer Service & E-Marketing Specialist',
    'footer-contact-title': 'Contact',
    'footer-follow-title': 'Follow Me',
    'footer-copyright-name': 'Wael Mohamed Arman',
    'footer-rights': 'All rights reserved.'
  },
  ar: {
    // Navigation
    'nav-brand-text': 'وائل أرمَن',
    'nav-about-text': 'من أنا',
    'nav-exp-text': 'الخبرات',
    'nav-skills-text': 'المهارات',
    'nav-edu-text': 'التعليم',
    'nav-contact-text': 'تواصل',
    
    // Hero Section
    'hero-name': 'وائل محمد أرمَن',
    'hero-title': 'أخصائي خدمة عملاء وتسويق إلكتروني',
    'about-btn-text': 'من أنا',
    'contact-btn-text': 'تواصل معي',
    
    // About Section
    'about-title-text': 'من أنا',
    'about-description': 'أنا متخصص متحمس في خدمة العملاء والتسويق الرقمي، وأهتم أيضًا بالبرمجة وتطوير الويب. أتمتع بخبرة قوية في إدارة الفرق وتحسين تجربة العملاء، وأحب استخدام أدوات التسويق الرقمية، وإدارة صفحات السوشيال ميديا، وتصميم المحتوى الجذاب.',
    'years-exp': 'سنوات الخبرة',
    'projects': 'مشروع',
    'clients': 'عميل سعيد',
    
    // Experience Section
    'experience-title-text': 'الخبرات المهنية',
    'exp-1-title': 'مسؤول مركز اتصال وتطبيق دكاترة',
    'exp-1-period': '2024–2025',
    'exp-1-desc': 'قيادة عمليات خدمة العملاء وإدارة أنشطة مركز الاتصال لتطبيق دكاترة.',
    'exp-2-title': 'مساعد مدير خدمة عملاء - مطعم الأغا',
    'exp-2-period': '2023–2024',
    'exp-2-desc': 'المساعدة في إدارة عمليات خدمة العملاء وتنسيق الفريق.',
    'exp-3-title': 'مشرف كول سنتر - مطعم الأغا',
    'exp-3-period': '2022–2023',
    'exp-3-desc': 'الإشراف على عمليات مركز الاتصال وضمان تقديم خدمة عملاء عالية الجودة.',
    'exp-4-title': 'مشرف توصيل ومنصات أونلاين - مطعم الأغا',
    'exp-4-period': '2021–2022',
    'exp-4-desc': 'إدارة الطلبات عبر الإنترنت وعمليات التوصيل للمطعم.',
    'exp-5-title': 'محاسب - شركة الكترو هاني',
    'exp-5-period': '2022–2023',
    'exp-5-desc': 'التعامل مع المسؤوليات المحاسبية وحفظ السجلات المالية.',
    
    // Skills Section
    'skills-title-text': 'المهارات',
    'skill-1-title': 'التواصل وحل المشكلات',
    'skill-1-desc': 'مهارات تواصل ممتازة مع قدرة مثبتة على حل المشاكل المعقدة للعملاء.',
    'skill-2-title': 'تحليل البيانات وتحسين الأداء',
    'skill-2-desc': 'ماهر في تحليل مقاييس الأداء وتنفيذ استراتيجيات التحسين.',
    'skill-3-title': 'التدريب وتطوير الفريق',
    'skill-3-desc': 'خبرة في تدريب أعضاء الفريق وتطوير مهاراتهم المهنية.',
    'skill-4-title': 'إدارة السوشيال ميديا وتصميم الشعارات',
    'skill-4-desc': 'ماهر في إدارة منصات التواصل الاجتماعي وإنشاء المحتوى المرئي.',
    'skill-5-title': 'حزمة Microsoft Office',
    'skill-5-desc': 'إتقان كامل لتطبيقات Word و Excel و PowerPoint و Outlook.',
    'skill-6-title': 'تطوير الويب',
    'skill-6-desc': 'اهتمام متزايد ومهارات في البرمجة وتقنيات تطوير الويب.',
    
    // Education Section
    'education-title-text': 'التعليم والدورات',
    'edu-1-title': 'بكالوريوس في الفيزياء',
    'edu-1-school': 'جامعة دمشق',
    'edu-1-year': '2024',
    'edu-2-title': 'دورة في خدمة العملاء',
    'edu-2-school': 'تدريب مهني',
    'edu-2-year': '2023',
    'edu-3-title': 'بكالوريوس إدارة الأعمال (قيد الدراسة حاليًا)',
    'edu-3-school': 'جامعة الناس',
    'edu-3-year': 'قيد الدراسة حاليًا',
    'edu-3-desc': 'أواصل دراسة بكالوريوس إدارة الأعمال مع مقررات تركز على الإدارة والتسويق والتمويل والقيادة واتخاذ القرارات التجارية الاستراتيجية.',
    'edu-4-title': 'دبلوم مهني في التسويق',
    'edu-4-school': 'الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري (AASTMT)',
    'edu-4-year': '2026',
    'edu-4-desc': 'أكملت بنجاح دبلومًا مهنيًا في التسويق، يغطي التسويق الرقمي والهوية التجارية وسلوك المستهلك وبحوث السوق واستراتيجية التسويق وتطوير الأعمال.',
    'edu-5-title': 'ممارسات التدريب والإرشاد',
    'edu-5-school': 'جامعة كاليفورنيا، ديفيس',
    'edu-5-year': '2026',
    'edu-5-desc': 'أكملت تدريبًا مهنيًا في ممارسات التدريب والإرشاد، مع التركيز على القيادة وتقنيات الإرشاد والتواصل الفعال وتطوير الفريق والتوجيه وتحسين الأداء.',
    
    // Contact Section
    'contact-title-text': 'تواصل معي',
    'email-label': 'البريد الإلكتروني',
    'phone-label': 'الهاتف / واتساب',
    'address-label': 'العنوان',
    'address-text': 'الجيزة - القومية - شارع كمال وهبة الخولي',
    'send-btn-text': 'إرسال الرسالة',
    
    // Footer
    'footer-name': 'وائل محمد أرمَن',
    'footer-desc': 'أخصائي خدمة عملاء وتسويق إلكتروني',
    'footer-contact-title': 'تواصل',
    'footer-follow-title': 'تابعني',
    'footer-copyright-name': 'وائل محمد أرمَن',
    'footer-rights': 'جميع الحقوق محفوظة.'
  }
};

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 300);
  }

  switchLang('en');
  initScrollEffects();
  initMobileNav();
  initContactForm();
  initScrollToTop();
  initAnimations();
});

// Language switching function
function switchLang(lang) {
  const currentLang = translations[lang];

  document.documentElement.setAttribute('lang', lang);
  document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  const englishButton = document.getElementById('en-btn');
  const arabicButton = document.getElementById('ar-btn');
  if (englishButton && arabicButton) {
    englishButton.classList.toggle('active', lang === 'en');
    arabicButton.classList.toggle('active', lang === 'ar');
    englishButton.setAttribute('aria-pressed', String(lang === 'en'));
    arabicButton.setAttribute('aria-pressed', String(lang === 'ar'));
  }

  Object.keys(currentLang).forEach(key => {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = currentLang[key];
    }
  });

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const placeholders = lang === 'ar'
    ? { name: 'اسمك', email: 'بريدك الإلكتروني', subject: 'الموضوع', message: 'رسالتك' }
    : { name: 'Your Name', email: 'Your Email', subject: 'Subject', message: 'Your Message' };

  if (nameInput) nameInput.placeholder = placeholders.name;
  if (emailInput) emailInput.placeholder = placeholders.email;
  if (subjectInput) subjectInput.placeholder = placeholders.subject;
  if (messageInput) messageInput.placeholder = placeholders.message;
}

// Scroll to section function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }

  closeMobileMenu();
}

function closeMobileMenu() {
  if (navMenu && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
  if (navToggle) {
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  }
}

// Initialize scroll effects
function initScrollEffects() {
  const updateScrollState = () => {
    const scrollY = window.scrollY;

    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 50);
    }

    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('visible', scrollY > 300);
    }

    animateOnScroll();
  };

  window.addEventListener('scroll', debounce(updateScrollState, 10), { passive: true });
  updateScrollState();
}

// Animate elements when they come into view
function animateOnScroll() {
  animatedElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('is-visible');
    }
  });
}

// Initialize mobile navigation
function initMobileNav() {
  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target)) {
      closeMobileMenu();
    }
  });
}

// Initialize contact form
function initContactForm() {
  if (!contactForm) return;

  contactForm.addEventListener('submit', (event) => {
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    if (!data.name || !data.email || !data.subject || !data.message) {
      event.preventDefault();
      showNotification('Please fill in all fields', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      event.preventDefault();
      showNotification('Please enter a valid email address', 'error');
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (!submitBtn) return;

    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      showNotification('Message sent successfully! I will get back to you soon.', 'success');
      contactForm.reset();
    }, 1000);

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}



// Initialize scroll to top button
function initScrollToTop() {
  if (!scrollTopBtn) return;

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Show notification function
function showNotification(message, type = 'info') {
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}" aria-hidden="true"></i>
      <span>${message}</span>
      <button class="notification-close" type="button" aria-label="Close notification">
        <i class="fas fa-times" aria-hidden="true"></i>
      </button>
    </div>
  `;

  document.body.appendChild(notification);

  requestAnimationFrame(() => {
    notification.style.transform = 'translateX(0)';
  });

  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => {
    notification.style.transform = 'translateX(120%)';
    setTimeout(() => notification.remove(), 300);
  });

  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.transform = 'translateX(120%)';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Add smooth scrolling for all internal links
document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;

  event.preventDefault();
  const targetId = link.getAttribute('href').substring(1);
  scrollToSection(targetId);
});

function initAnimations() {
  if (!('IntersectionObserver' in window)) {
    animatedElements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  animatedElements.forEach((element) => observer.observe(element));
}

// Add keyboard navigation support
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }

  if (event.key === 'Enter' && event.target.classList.contains('lang-btn')) {
    const lang = event.target.id === 'en-btn' ? 'en' : 'ar';
    switchLang(lang);
  }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

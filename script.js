// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const scrollTopBtn = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');

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
  // Hide loading screen immediately (no loading delay)
  loadingScreen.classList.add('hidden');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 300);
  
  // Initialize language
  switchLang('en');
  
  // Initialize scroll effects
  initScrollEffects();
  
  // Initialize mobile navigation
  initMobileNav();
  
  // Initialize contact form
  initContactForm();
  
  // Initialize scroll to top button
  initScrollToTop();
});

// Language switching function
function switchLang(lang) {
  const currentLang = translations[lang];
  
  // Update document direction and language
  document.documentElement.setAttribute('lang', lang);
  document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  
  // Update language buttons
  document.getElementById('en-btn').classList.toggle('active', lang === 'en');
  document.getElementById('ar-btn').classList.toggle('active', lang === 'ar');
  
  // Update all translatable elements
  Object.keys(currentLang).forEach(key => {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = currentLang[key];
    }
  });
  
  // Update form placeholders for Arabic
  if (lang === 'ar') {
    document.getElementById('name').placeholder = 'اسمك';
    document.getElementById('email').placeholder = 'بريدك الإلكتروني';
    document.getElementById('subject').placeholder = 'الموضوع';
    document.getElementById('message').placeholder = 'رسالتك';
  } else {
    document.getElementById('name').placeholder = 'Your Name';
    document.getElementById('email').placeholder = 'Your Email';
    document.getElementById('subject').placeholder = 'Subject';
    document.getElementById('message').placeholder = 'Your Message';
  }
}

// Scroll to section function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 80; // Account for fixed navbar
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
  
  // Close mobile menu if open
  if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  }
}

// Initialize scroll effects
function initScrollEffects() {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Navbar background effect
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Scroll to top button visibility
    if (scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
    
    // Animate elements on scroll
    animateOnScroll();
  });
}

// Animate elements when they come into view
function animateOnScroll() {
  const elements = document.querySelectorAll('.section, .skill-card, .education-card, .contact-item, .stat-item');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Initialize mobile navigation
function initMobileNav() {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });
}

// Initialize contact form
function initContactForm() {
  contactForm.addEventListener('submit', (e) => {
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      e.preventDefault();
      showNotification('Please fill in all fields', 'error');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      e.preventDefault();
      showNotification('Please enter a valid email address', 'error');
      return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Let the form submit naturally to Formspree
    // The form will redirect to Formspree success page
    // We'll show a success message here as well
    setTimeout(() => {
      showNotification('Message sent successfully! I will get back to you soon.', 'success');
      contactForm.reset();
    }, 1000);
    
    // Reset button after form submission
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}



// Initialize scroll to top button
function initScrollToTop() {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Show notification function
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
      <span>${message}</span>
      <button class="notification-close">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 400px;
  `;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Close button functionality
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      notification.remove();
    }, 300);
  });
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }
  }, 5000);
}

// Add smooth scrolling for all internal links
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    scrollToSection(targetId);
  }
});

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.section, .skill-card, .education-card, .contact-item, .stat-item');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  // Escape key to close mobile menu
  if (e.key === 'Escape') {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  }
  
  // Enter key on language buttons
  if (e.key === 'Enter' && e.target.classList.contains('lang-btn')) {
    const lang = e.target.id === 'en-btn' ? 'en' : 'ar';
    switchLang(lang);
  }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartY - touchEndY;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe up - could be used for navigation
    } else {
      // Swipe down - could be used for navigation
    }
  }
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
  const scrollY = window.scrollY;
  
  if (scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  if (scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler); 
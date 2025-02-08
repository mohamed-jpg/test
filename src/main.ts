import './style.css';

// Navigation Menu Toggle
const createNav = () => {
  const nav = document.createElement('header');
  nav.innerHTML = `
    <nav class="container">
      <div class="logo">شركة حرب للصيانة المنزلية</div>
      <div class="nav-links">
        <a href="#home">الرئيسية</a>
        <a href="#services">خدماتنا</a>
        <a href="#testimonials">آراء العملاء</a>
        <a href="#contact">اتصل بنا</a>
      </div>
    </nav>
  `;
  return nav;
};

// Enhanced Slider Section
const createSlider = () => {
  const slider = document.createElement('section');
  slider.className = 'slider';
  slider.id = 'home';
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
      title: 'خدمات صيانة المكيفات',
      description: 'خدمة احترافية على مدار الساعة مع ضمان الجودة'
    },
    {
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1',
      title: 'صيانة الغسالات',
      description: 'فريق متخصص من الفنيين ذوي الخبرة العالية'
    },
    {
      image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30',
      title: 'صيانة الثلاجات',
      description: 'خدمة سريعة وموثوقة مع ضمان شامل على جميع الإصلاحات'
    }
  ];
  
  const slidesHTML = slides.map((slide, index) => `
    <div class="slide ${index === 0 ? 'active' : ''}" style="background-image: url('${slide.image}')">
      <div class="slide-content">
        <h2>${slide.title}</h2>
        <p>${slide.description}</p>
        <a href="#contact" class="btn">احجز خدمتك الآن</a>
      </div>
    </div>
  `).join('');
  
  const dotsHTML = slides.map((_, index) => `
    <div class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
  `).join('');
  
  slider.innerHTML = `
    ${slidesHTML}
    <div class="slider-nav">${dotsHTML}</div>
  `;
  
  return slider;
};

// Enhanced Services Section
const createServices = () => {
  const services = document.createElement('section');
  services.className = 'services animate-on-scroll';
  services.id = 'services';
  services.innerHTML = `
    <div class="container">
      <h2>خدماتنا المتميزة</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-image-container">
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952" alt="تكييف" class="service-image">
          </div>
          <div class="service-content">
            <h3>تركيب وصيانة المكيفات</h3>
            <p>نقدم خدمات شاملة للمكيفات تشمل التركيب والصيانة والإصلاح مع ضمان الجودة</p>
            <a href="#contact" class="btn">احجز الخدمة</a>
          </div>
        </div>
        <div class="service-card">
          <div class="service-image-container">
            <img src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1" alt="غسالة" class="service-image">
          </div>
          <div class="service-content">
            <h3>صيانة الغسالات</h3>
            <p>خدمات صيانة وإصلاح لجميع أنواع الغسالات مع ضمان على قطع الغيار والعمل</p>
            <a href="#contact" class="btn">احجز الخدمة</a>
          </div>
        </div>
        <div class="service-card">
          <div class="service-image-container">
            <img src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30" alt="ثلاجة" class="service-image">
          </div>
          <div class="service-content">
            <h3>صيانة الثلاجات</h3>
            <p>خدمات صيانة وإصلاح احترافية للثلاجات مع فريق متخصص وخبرة طويلة</p>
            <a href="#contact" class="btn">احجز الخدمة</a>
          </div>
        </div>
      </div>
    </div>
  `;
  return services;
};

// Enhanced Testimonials Section
const createTestimonials = () => {
  const testimonials = document.createElement('section');
  testimonials.className = 'testimonials animate-on-scroll';
  testimonials.id = 'testimonials';
  testimonials.innerHTML = `
    <div class="container">
      <h2>ماذا يقول عملاؤنا</h2>
      <div class="testimonial-grid">
        <div class="testimonial-card">
          <p>"تجربة رائعة مع فريق محترف. الخدمة كانت سريعة والنتائج ممتازة. أنصح بشدة بالتعامل معهم."</p>
          <h4>م. أحمد محمد</h4>
        </div>
        <div class="testimonial-card">
          <p>"خدمة عملاء متميزة وأسعار معقولة. الفني كان محترفاً جداً وقام بحل المشكلة بسرعة."</p>
          <h4>د. محمد علي</h4>
        </div>
        <div class="testimonial-card">
          <p>"من أفضل شركات الصيانة التي تعاملت معها. خدمة ما بعد البيع ممتازة والضمان شامل."</p>
          <h4>م. عبدالله أحمد</h4>
        </div>
      </div>
    </div>
  `;
  return testimonials;
};

// Enhanced Contact Form
const createContact = () => {
  const contact = document.createElement('section');
  contact.className = 'contact animate-on-scroll';
  contact.id = 'contact';
  contact.innerHTML = `
    <div class="container">
      <h2>تواصل معنا</h2>
      <div class="contact-container">
        <form id="contactForm">
          <div class="form-group">
            <label>الاسم الكامل</label>
            <input type="text" placeholder="أدخل اسمك الكامل" required>
          </div>
          <div class="form-group">
            <label>رقم الجوال</label>
            <input type="tel" placeholder="05xxxxxxxx" required>
          </div>
          <div class="form-group">
            <label>البريد الإلكتروني</label>
            <input type="email" placeholder="example@domain.com" required>
          </div>
          <div class="form-group">
            <label>نوع الخدمة المطلوبة</label>
            <input type="text" placeholder="مثال: صيانة مكيف" required>
          </div>
          <div class="form-group">
            <label>تفاصيل الطلب</label>
            <textarea rows="4" placeholder="اكتب تفاصيل طلبك هنا..." required></textarea>
          </div>
          <button type="submit" class="btn">إرسال الطلب</button>
        </form>
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d-123.456!3d12.345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ3JzE4LjAiTiA4MMKwMDEnMjMuMCJF!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  `;
  return contact;
};

// Enhanced Footer
const createFooter = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>تواصل معنا</h3>
          <p>الرياض، المملكة العربية السعودية</p>
          <p>هاتف: 966-xx-xxxxxxx+</p>
          <p>البريد الإلكتروني: info@example.com</p>
        </div>
        <div class="footer-section">
          <h3>ساعات العمل</h3>
          <p>السبت - الخميس: 8 صباحاً - 10 مساءً</p>
          <p>الجمعة: 2 ظهراً - 10 مساءً</p>
        </div>
        <div class="footer-section">
          <h3>تابعنا</h3>
          <div class="social-links">
            <a href="#" target="_blank">فيسبوك</a>
            <a href="#" target="_blank">تويتر</a>
            <a href="#" target="_blank">انستغرام</a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>جميع الحقوق محفوظة © ${new Date().getFullYear()} محمد جاويش  </p>
      </div>
    </div>
  `;
  return footer;
};

// Enhanced Slider functionality
const initSlider = () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dot');
  
  const setActiveSlide = (index: number) => {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  };
  
  // Auto-advance slides
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    setActiveSlide(currentSlide);
  }, 5000);
  
  // Click handlers for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      setActiveSlide(currentSlide);
    });
  });
};

// Enhanced Scroll Animation
const initScrollAnimation = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const checkScroll = () => {
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.8) {
        element.classList.add('visible');
      }
    });
  };
  
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Initial check
};

// Initialize App
const initApp = () => {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.appendChild(createNav());
  app.appendChild(createSlider());
  app.appendChild(createServices());
  app.appendChild(createTestimonials());
  app.appendChild(createContact());
  app.appendChild(createFooter());

  // Initialize components
  initSlider();
  initScrollAnimation();

  // Enhanced form submission
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('شكراً لك! تم استلام طلبك بنجاح. سيتواصل معك فريقنا خلال 24 ساعة.');
  });
};

// Start the application
document.addEventListener('DOMContentLoaded', initApp);
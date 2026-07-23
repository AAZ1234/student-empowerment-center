/* =========================================================
   main.js - سلوكيات مشتركة بين جميع صفحات الموقع
   (تفعيل مكتبة AOS للحركات - القائمة المتنقلة -
   تمييز الصفحة الحالية - ظل شريط التنقل)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 0) تفعيل مكتبة AOS (Animate On Scroll) ---------- */
  // المكتبة مسؤولة عن كل حركات "الظهور عند التمرير" في الموقع
  // عبر خاصية data-aos الموجودة على العناصر في كل صفحة
  if (typeof AOS !== 'undefined'){
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80
    });
  }

  /* ---------- 1) فتح/إغلاق القائمة في الموبايل ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');

  function setToggleIcon(isOpen){
    const icon = navToggle.querySelector('i');
    if (!icon) return;
    icon.classList.toggle('fa-bars', !isOpen);
    icon.classList.toggle('fa-xmark', isOpen);
  }

  if (navToggle && navLinks){
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('nav-active');
      setToggleIcon(isOpen);
    });

    // إغلاق القائمة تلقائياً عند الضغط على أي رابط (مفيد في شاشات الموبايل)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        setToggleIcon(false);
      });
    });
  }

  /* ---------- 2) تمييز رابط الصفحة الحالية في شريط التنقل ---------- */
  const currentPage = (window.location.pathname.split('/').pop() || 'index.html');

  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage){
      link.classList.add('current');
    }
  });

  /* ---------- 3) إضافة ظل خفيف لشريط التنقل عند التمرير ---------- */
  const navbar = document.querySelector('.navbar');
  if (navbar){
    const toggleShadow = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    };
    toggleShadow();
    window.addEventListener('scroll', toggleShadow);
  }

});

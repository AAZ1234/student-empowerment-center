/* =========================================================
   programs.js - سلوكيات خاصة بصفحة البرامج والدورات (programs.html)
   (فلترة البطاقات حسب التصنيف + تأثير Animate.css عند إظهارها)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  const buttons = document.querySelectorAll('.category-buttons button');
  const cards = document.querySelectorAll('.program-card');

  if (!buttons.length || !cards.length){
    return;
  }

  function filterByCategory(category){
    cards.forEach(card => {
      const matches = category === 'all' || card.dataset.category === category;

      if (matches){
        card.classList.remove('hidden');
        // إعادة تشغيل حركة الظهور (Animate.css) في كل مرة تُفلتر فيها البطاقة
        card.classList.remove('animate__animated', 'animate__fadeIn');
        // إعادة تشغيل الحركة تتطلب "إعادة تدفق" العنصر قبل إضافة الكلاس من جديد
        void card.offsetWidth;
        card.classList.add('animate__animated', 'animate__fadeIn');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.category || 'all';
      filterByCategory(category);
    });
  });

});

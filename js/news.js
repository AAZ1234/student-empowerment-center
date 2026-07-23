/* =========================================================
   news.js - سلوكيات خاصة بصفحة الأخبار والفعاليات (news.html)
   ملاحظة: حركات "الظهور عند التمرير" أصبحت الآن من مكتبة AOS
   عبر خاصية data-aos الموجودة مباشرة في news.html
   هنا نضيف فقط تأثير Animate.css على أيقونة التاريخ عند المرور بالمؤشر
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  const dateIcons = document.querySelectorAll('.news-content span i, .event-card p i');

  dateIcons.forEach(icon => {
    const card = icon.closest('.news-card, .event-card');
    if (!card) return;

    card.addEventListener('mouseenter', () => {
      icon.classList.add('animate__animated', 'animate__heartBeat');
    });

    icon.addEventListener('animationend', () => {
      icon.classList.remove('animate__animated', 'animate__heartBeat');
    });
  });

});

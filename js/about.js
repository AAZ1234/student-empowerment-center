/* =========================================================
   about.js - سلوكيات خاصة بصفحة عن المركز (about.html)
   ملاحظة: حركات "الظهور عند التمرير" أصبحت الآن من مكتبة AOS
   عبر خاصية data-aos الموجودة مباشرة في about.html
   هنا نضيف فقط تأثير Animate.css عند المرور فوق بطاقات القيم
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  const valueCards = document.querySelectorAll('.value-card i');

  valueCards.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.classList.add('animate__animated', 'animate__rubberBand');
    });

    // إزالة الكلاس بعد انتهاء الحركة حتى تتكرر في كل مرور بالمؤشر
    icon.addEventListener('animationend', () => {
      icon.classList.remove('animate__animated', 'animate__rubberBand');
    });
  });

});

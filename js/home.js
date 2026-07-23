/* =========================================================
   home.js - سلوكيات خاصة بالصفحة الرئيسية (index.html)
   (عداد الإحصائيات المتحرك)
   ملاحظة: حركات "الظهور عند التمرير" أصبحت الآن من مكتبة AOS
   عبر خاصية data-aos الموجودة مباشرة في index.html
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- عداد الإحصائيات المتحرك ---------- */
  const statNumbers = document.querySelectorAll('.stats-container h2');

  function animateCount(el){
    const rawText = el.textContent.trim();
    const target = parseInt(rawText.replace(/\D/g, ''), 10);
    const suffix = rawText.replace(/[0-9]/g, '');

    if (isNaN(target)){
      return;
    }

    const duration = 1400;
    const startTime = performance.now();

    function tick(now){
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = current + suffix;

      if (progress < 1){
        requestAnimationFrame(tick);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(tick);
  }

  if (statNumbers.length){
    if ('IntersectionObserver' in window){
      const statsIO = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            animateCount(entry.target);
            statsIO.unobserve(entry.target);
          }
        });
      }, { threshold: .4 });

      statNumbers.forEach(el => statsIO.observe(el));
    } else {
      statNumbers.forEach(animateCount);
    }
  }

});


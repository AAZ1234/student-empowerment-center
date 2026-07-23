/* =========================================================
   contact.js - سلوكيات خاصة بصفحة تواصل معنا (contact.html)
   (التحقق من صحة النموذج قبل الإرسال)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('contactForm');
  const successBox = document.getElementById('formSuccess');

  if (!form){
    return;
  }

  const fields = [
    { id: 'name', type: 'text' },
    { id: 'email', type: 'email' },
    { id: 'subject', type: 'text' },
    { id: 'message', type: 'text' }
  ];

  function isValidEmail(value){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validateField(field){
    const input = document.getElementById(field.id);
    if (!input) return true;

    const group = input.closest('.form-group');
    const value = input.value.trim();
    let valid = value.length > 0;

    if (valid && field.type === 'email'){
      valid = isValidEmail(value);
    }

    if (group){
      group.classList.toggle('invalid', !valid);

      // اهتزاز الحقل غير الصالح عبر مكتبة Animate.css
      if (!valid){
        group.classList.remove('animate__animated', 'animate__shakeX');
        void group.offsetWidth; // لإعادة تشغيل الحركة في كل محاولة
        group.classList.add('animate__animated', 'animate__shakeX');
      }
    }

    return valid;
  }

  // إخفاء رسالة الخطأ فور الكتابة في الحقل
  fields.forEach(field => {
    const input = document.getElementById(field.id);
    if (!input) return;
    input.addEventListener('input', () => {
      const group = input.closest('.form-group');
      if (group) group.classList.remove('invalid');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let allValid = true;
    fields.forEach(field => {
      const valid = validateField(field);
      if (!valid) allValid = false;
    });

    if (!allValid){
      if (successBox) successBox.classList.remove('show');
      return;
    }

    // لا يوجد خادم فعلي هنا؛ نعرض رسالة نجاح ونعيد تصفير النموذج
    if (successBox){
      successBox.classList.add('show', 'animate__animated', 'animate__tada');
      successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        successBox.classList.remove('show', 'animate__animated', 'animate__tada');
      }, 6000);
    }

    form.reset();
  });

});

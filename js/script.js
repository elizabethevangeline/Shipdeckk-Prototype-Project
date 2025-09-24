document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscribeForm');
    const successMessage = document.getElementById('successMessage');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
  
      if (!name) {
        alert('Please enter your full name.');
        form.name.focus();
        return;
      }
  
      if (!email) {
        alert('Please enter your email address.');
        form.email.focus();
        return;
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        form.email.focus();
        return;
      }
  
      successMessage.style.display = 'block';
      form.reset();
    });
  });
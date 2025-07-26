// Initialize EmailJS with your public key
(function () {
  emailjs.init("ukbBg_JnsaCjwjMJB");
})();

const form = document.getElementById('appointmentForm');
const status = document.getElementById('status');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Basic form validation
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const date = form.date.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !phone || !date || !message) {
    status.style.color = 'red';
    status.textContent = '❗ Please fill in all required fields.';
    return;
  }

  if (!phone.match(/^\d{10}$/)) {
    status.style.color = 'red';
    status.textContent = '❗ Enter a valid 10-digit phone number.';
    return;
  }

  // Send the form using EmailJS
  status.style.color = 'white';
  status.textContent = '📨 Sending appointment request...';

  emailjs.sendForm('service_8lcv1uv', 'template_qdem0qj', form)
    .then(function () {
      status.style.color = 'lightgreen';
      status.textContent = `✅ Thank you, ${name}! Your appointment for ${date} has been sent.`;
      form.reset();
    }, function (error) {
      status.style.color = 'red';
      status.textContent = '❌ Failed to send appointment.';
      console.error('EmailJS Error:', error);
    });
});


  
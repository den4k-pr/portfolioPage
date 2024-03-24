emailjs.init("mgGge6lFl89jokMfs");

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Отримуємо дані з форми
    var form = event.target;

    // Відправляємо лист
    emailjs.sendForm('service_1aq5vjf', 'template_wvoxyea', form)
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          document.getElementById("success-message").style.display = "block";
      }, function(error) {
          console.log('FAILED...', error);
          document.getElementById("error-message").style.display = "block";
      });

    // Очистка форми після відправки
    form.reset();

    // Приховати повідомлення про успішну або невдалу відправку після 3 секунд
    setTimeout(function() {
      document.getElementById("success-message").style.display = "none";
      document.getElementById("error-message").style.display = "none";
    }, 3000);
  });

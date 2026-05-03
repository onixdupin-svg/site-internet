(function() {
  emailjs.init("TON_PUBLIC_KEY"); // Remplace par ta clé EmailJS
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("TON_SERVICE_ID", "TON_TEMPLATE_ID", {
    from_name: this.name.value,
    from_email: this.email.value,
    message: this.message.value
  })
  .then(function() {
    alert("Message envoyé !");
  }, function(error) {
    alert("Erreur : " + JSON.stringify(error));
  });

  this.reset();
});
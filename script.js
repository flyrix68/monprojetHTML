document.addEventListener('DOMContentLoaded', function() {
  // Afficher/masquer le formulaire
  document.getElementById('ajouterCoursbtn').addEventListener('click', function() {
    var form = document.getElementById('ajouterCoursForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  });

  // Gérer la soumission du formulaire
  document.getElementById('ajouterCoursForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Formulaire soumis !"); // Testez dans la console (F12)
    // Ici, vous pouvez ajouter la logique pour envoyer les données
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Afficher/masquer le formulaire
  document.getElementById('ajouterCoursbtn').addEventListener('click', function() {
    var form = document.getElementById('ajouterCoursForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  });


});

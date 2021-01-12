function filtrerVille(elem)
{
  var data = elem.dataset.ville; // Data du bouton cliqué
//   alert(elem.dataset.ville); // Alerte avec le data
  var row = document.getElementsByTagName('tr'); // Les lignes du tableau
  for (var i = 0; i < row.length; i++) // Tu parcours toutes les lignes du tableau
  {
    if(row[i].dataset.ville != data) row[i].style.display = 'none'; // Si le data de la ligne n'est pas égal au data envoyé par le bouton, tu masques la ligne
  }
   
}
function calcularCalorias() {
    var peso = parseInt(document.getElementById('peso').value);
    var altura = parseInt(document.getElementById('altura').value);
    var edad = parseInt(document.getElementById('edad').value);
    var actividad = parseFloat(document.getElementById('actividad').value);
  
    var tmb = 66 + (13.7 * peso) + (5 * altura) - (6.8 * edad);
    var calorias = Math.round(tmb * actividad);
  
    document.getElementById('resultado').innerHTML = 'Calorías recomendadas por día: ' + calorias; 
  }

  
  
  
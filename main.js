
//Consulta la cantidad de veces que se desea lanzar los dados y luego genera un grafico estadistico con la concurrencia de resultados en la suma de ambos.
const lanzarDados  = () => {

  let cantidadDeTiradas = prompt("Cuantas veces tiras el dado?");

  resultados = GenerarResultados(cantidadDeTiradas);

  GenerarGrafico(resultados);
}

//Calcula un numero al azar entre el maximo y el minimo incluyendolos
const Azar = (valorMaximo, valorminimo) => {
  let resultado = Math.floor(Math.random() * (valorMaximo-valorminimo + 1)) + valorminimo;
  return resultado;
}

//Se le indica la cantidad de veces que se deben lanzar dos dados y retorna un array con los resultados de esos lanzamientos
const GenerarResultados = (cantidad) =>{
  let resultados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let resultado ;
  for (let i = 0; i < cantidad; i++) {
    resultado = Azar(6, 1) + Azar(6, 1);
    resultados[resultado - 2]++; // usar el resultado como índice para actualizar la matriz
  }
  return resultados;
} 

//Genera el grafico por medios de los resultados guardados en un array
const GenerarGrafico = (resultados) =>{
  //Grafico 1
  const ctx = document.getElementById('comun');
  console.log(resultados.reduce((total,valor) => total + valor))
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      datasets: [{
        label: '# cantidad de veces que salio este numero',
        data: resultados, // usar la matriz de resultados en lugar de variables separadas
        borderWidth: 1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ]
      }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  //Grafico 2
  const cty = document.getElementById('lineas');
  console.log(resultados.reduce((total,valor) => total + valor))
  new Chart(cty, {
    type: 'line',
    data: {
      labels: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      datasets: [{
        label: '# cantidad de veces que salio este numero',
        data: resultados, // usar la matriz de resultados en lugar de variables separadas
        fill: false,
        borderColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.5
      }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  //Dona
  const ctd = document.getElementById('dona');

  console.log(resultados.reduce((total,valor) => total + valor))
  new Chart(ctd, {
    type: 'doughnut',
    data: {
      labels: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      datasets: [{
        label: '# cantidad de veces que salio este numero',
        data: resultados, // usar la matriz de resultados en lugar de variables separadas
        borderWidth: 1,
        backgroundColor: [
          'rgba(255, 205, 86, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(99, 255, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ]
      }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

lanzarDados();





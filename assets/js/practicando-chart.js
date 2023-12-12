

console.log('practicando chart.js');


const ctx = document.querySelector('#container-chart').getContext('2d');

// info recuperda del API /api/data/
const apiData = [12, 19, 3, 5, 2];

const configChart = {
    type: 'pie',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [{
        label: 'Ventas',
        data: apiData,
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 205, 86)',
            'rgb(255, 205, 86)',
          ],
        borderColor: 'yellow',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }


const myChart = new Chart(ctx, configChart);

console.log(myChart);





//// practicando con el paquete moment

moment.locale('es');

 const dataTime =  moment().format('MMMM dddd YYYY, h:mm'); // December 11th 2023, 8:26:25 pm

// const dataTime = moment().format('dddd');                    // Monday


console.log(dataTime);
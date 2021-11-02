
const endpointWorld = 'https://api.covid19api.com/summary';
const endpointMorocco = 'https://api.covid19api.com/dayone/country/morocco/status/confirmed'




const ctx = document.getElementById('myChart').getContext('2d')
const ctxBar = document.getElementById('myBarChart').getContext('2d')


window.addEventListener('DOMContentLoaded',async() => {
    const dataWord = await getData(endpointWorld);
    
    const dateOfDay =  dataWord.Global.Date.substring(0,10)
    console.log(dateOfDay)
    const dt = document.getElementById('date')
    dt.textContent = dateOfDay
    
    drawPieChart(endpointWorld);
    drawBarChart(endpointMorocco);
    
})

async function getData(url){
    const response = await fetch(url,{
        mathid:'GET',
        headers: {
            'Content-type': 'application/json; charset =utf8'
        }
    })
    
    const data = await response.json();
  
    return data;
}



async function drawPieChart(url){
    const data = await getData(url)
    const newConfirmed = data.Global.NewConfirmed
    const totalConfirmed = data.Global.TotalConfirmed
    const newDeaths = data.Global.NewDeaths
    const totalDeaths = data.Global.TotalDeaths
    const totalRecovered = data.Global.TotalRecovered

    const dataShart = {
        labels:[
            'nouveaux cas confirmés',
            'total cas cnfirmés',
            'nouveau décès',
            'total des décès',
            'total rétablis'
        ],
        datasets: [{
            label: 'World Summary',
            data: [newConfirmed, totalConfirmed, newDeaths,totalDeaths,totalRecovered],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(255, 105, 86)',
              'rgb(255, 5, 86)'
            ],
            hoverOffset: 4
          }]
        };

    const config = {
        type: 'doughnut',
        data: dataShart,
      };

   const myChart = new Chart(ctx,config)


}

async function drawBarChart(url){
    const dataMorocco = await getData(url);

    const dataMoroccoLast15Days = dataMorocco.slice(dataMorocco.length-15, dataMorocco.length) //recuperer les donnés des15 derniers jours
    console.log(dataMoroccoLast15Days);

function numberCases(data){
    let cases = []
    data.forEach(element => {
        cases.push(element.Cases);
    })
    return cases;
}

function datesCases(data){
    let dates  = []
    data.forEach(element => {
        dates.push(element.Date.substring(0,10));
    })
    return dates;
}
    console.log(numberCases(dataMoroccoLast15Days));
    console.log(datesCases(dataMoroccoLast15Days));

    const config = {
        type: 'bar',
        data: {
                labels: datesCases(dataMoroccoLast15Days),
                datasets: [{ label: 'Morocco COVID19 information', 
                            data: numberCases(dataMoroccoLast15Days)}],
                backgroundColor: [
                    'rgb(255,159,64)', //orange
                    'rgb(255,99,132)', //red
                    'rgb(54,162,235)', //blue
                    'rgb(75,192,192)', //green
                    'rgb(153,102,255)', //purple
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(255, 105, 86)',
                    'rgb(255, 5, 86)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)'

                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                  ],
                  
                  borderWidth: 1
                }
              };

      const myBarChart = new Chart(ctxBar,config)
    }
    

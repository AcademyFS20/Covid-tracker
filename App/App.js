
const endpointWorld = 'https://api.covid19api.com/summary';
const endpointMorocco = 'https://api.covid19api.com/dayone/country/morocco/status/confirmed'




const ctx = document.getElementById('myChart').getContext('2d')
const ctxBar = document.getElementById('myBarChart').getContext('2d')
const ctxLine = document.getElementById('myLineChart').getContext('2d')

window.addEventListener('DOMContentLoaded',async() => {
    const dataWord = await getData(endpointWorld);
    
    const dateOfDay =  dataWord.Global.Date.substring(0,10)
    console.log(dateOfDay)
    const dt = document.getElementById('date')
    dt.textContent = dateOfDay
    
    drawPieChart(endpointWorld);
    drawBarChart(endpointMorocco);
    drawLineChart(endpointWorld);
  
    
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
    //console.log(dataMoroccoLast15Days);

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
    // console.log(numberCases(dataMoroccoLast15Days));
    //console.log(datesCases(dataMoroccoLast15Days));

const config = {
        type: 'bar',
        data: {
                labels: datesCases(dataMoroccoLast15Days),
                datasets: [
                    { label: 'Case numbers', 
                        data: numberCases(dataMoroccoLast15Days),
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(220, 205, 86)',
                            'rgb(120, 105, 86)',
                            'rgb(130, 5, 86)',
                            'rgb(155, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(20, 205, 86)',
                            'rgb(40, 105, 86)',
                            'rgb(10, 66, 86)',
                            'rgb(90, 99, 132)',
                            'rgb(80, 162, 235)',
                            'rgb(44, 205, 86)',
                            'rgb(25, 105, 86)',
                            'rgb(66, 5, 86)'
                        ],
                        
                        borderColor: '#777',
                          
                        borderWidth: 2,
                        hoveredBorderColor: '#000',
                        hoverBorderWidth:2,
                        
                        }],
             
                options:{
                    title:{
                        display:true,
                        text:'Morocco Covid 19 information'
                    }
                }
            }
                
        };

    const myBarChart = new Chart(ctxBar,config)
}


function getCountires(data){
  
    let countries = [];
    data.Countries.forEach(element=>{
        countries.push(element.Country);
        
    })
   console.log(countries)
    return countries;
}


function getTotalConfirmed(data){
    let totalConf = [];
    data.Countries.forEach(element=>{
        totalConf.push(element.TotalConfirmed);
        
    })
    console.log(totalConf);
    return totalConf;
}

function getTotaldeaths(data){
    let totalDeaths = [];
    data.Countries.forEach(element=>{
        totalDeaths.push(element.TotalDeaths);
        
    })
    console.log(totalDeaths);
    return totalDeaths;
}

async function drawLineChart(url){
    const data = await getData(url)
    const countries = getCountires(data)
    const totalConfirmed = getTotalConfirmed(data)
    const totalDeaths = getTotaldeaths(data)
    let deaths = totalDeaths.map(item=> item*1000)
    
    const dataShart = {
        labels:countries,
        datasets: [{
            label: 'les cas confirmés',
            data: totalConfirmed,
            backgroundColor: 'rgb(255, 99, 132)',
            hoverOffset: 4
          },
          {
            label: 'les décès',
            data: deaths,
            backgroundColor: 'rgb(255, 255, 132)',
            hoverOffset: 4
          },
            ]
        };

        const config = {
            type: 'line',
            data: dataShart,
            options: {
              responsive: true,
              interaction: {
                mode: 'index',
                intersect: false,
              },
              stacked: false,
              plugins: {
                title: {
                  display: true,
                  text: 'informations sur les cas Covid 19'
                }
              },
              scales: {
                y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                },
                y1: {
                  type: 'linear',
                  display: true,
                  position: 'right',
                 
          
                  // grid line settings
                  grid: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                  },
                },
                
              }
            },
          };

   const myChart = new Chart(ctxLine,config)


}


let api_url_Morocco ='https://api.covid19api.com/dayone/country/morocco/status/confirmed';
let api_url_world='https://api.covid19api.com/summary';


/*****GET DATA FROM MOROCCO *********/
getData()
.then(reponse=>{
    let caseNumbers = reponse.map(({Cases})=>Cases);
    let dates= res.map(({Date})=>Date);
    showCases(dates,caseNumbers)
})
.catch(erreur=>{
    console.log('erreur');
});

/******GET GLOBAL DATA WORLDWIDE *****/
getWolrdData()
.then(reponse => {
    const {Global} = reponse;
    const {Countries} = reponse;
    const pays= Countries.map(({Country})=> Country);
    const casConfirm = Countries.map(({TotalConfirmed})=>TotalConfirmed);
    const casDeces = Countries.map(({TotalDeaths})=>TotalDeaths);
    showWorldData(Global);
    ShowCountriesData(pays,casConfirm,casDeces)
})
.catch(error=>console.log("erreur"));

    
async function getData(){
    reponse = await fetch(api_url_Morocco);
    res = await reponse.json();
    /* let cases= res.map(({Cases,Country})=>[Cases,Country]);
    let caseNumbers = res.map(({Cases})=>Cases);
    let dates= res.map(({Date})=>Date); */
    return res;
}

async function getWolrdData(){
    reponse = await fetch(api_url_world);
    res = await reponse.json();
    
    return res;
}


/********************Moroccan cases chart function*******************/
function showCases(dates,caseNumbers){
     
     const labels = dates;
 
     const data = {
       labels: labels,
       datasets: [{
         label: 'My First dataset',
         backgroundColor: 'rgb(255, 99, 132)',
         borderColor: 'rgb(255, 99, 132)',
         data: caseNumbers,
       }]
     };

   const config = {
       type: 'line',
       data: data,
       options: {}
     };

     const myChart = new Chart(
       document.getElementById('myChart'),
       config
     );
}

/********************World chart function Doughnut*******************/
function showWorldData(Global){
    
    const data = {
        labels: [
          'NewConfirmed',
          'TotalConfirmed',
          'NewDeaths',
          'TotalDeaths',
          'NewRecovered',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [Global.NewConfirmed, Global.TotalConfirmed, Global.NewDeaths, Global.TotalDeaths ,Global.NewRecovered],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(0, 128, 0)',
            'rgb(128, 0, 128)'
          ],
          hoverOffset: 4
        }]
      };

      const config = {
        type: 'doughnut',
        data: data,
      };

      const myChart = new Chart(
        document.getElementById('Chart'),
        config
      );
}

/********************Countries chart function Lines*******************/
function ShowCountriesData(pays,casConfirm,casDeces){
    const labels = pays;
    const data = {
        labels: labels,
        datasets: [{
        label: 'Cas Confirmés',
        data: casConfirm,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        yAxisID: 'y'
  },{
    label: 'Cas de decés',
    data: casDeces,
    fill: false,
    borderColor: 'rgb(128, 0, 128)',
    tension: 0.1,
    yAxisID: 'y1'
}]
};

    


const config = {
    type: 'line',
    data: data ,
    options:{
        scales:{
            y:{
                beginAtZero: true,
                position:'left'
            },
            y1:{
                beginAtZero: true,
                position:'right',
                grid:{
                    drawOnChartArea: false
                }
            }
        }
    }
    
  };

  const myChart = new Chart(
    document.getElementById('worldChart'),
    config
  );

}
    


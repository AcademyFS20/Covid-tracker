
const Tab=["","Est ce que tu a la fiévre ces derniers jours","Quelle est ta température?","Est ce que tu avais la toux dans les jours précédents?","Avez vous des douleurs musculaires?","Est ce que ta gorge te fait mal?","Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ? ","Avez-vous une fatigue inhabituelle ces derniers jours ?","Si oui cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ? ","Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h","Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ? ","Comment vous sentez-vous ? ","Avez-vous d’autre symptôme ? ","Quel est votre âge ?","Quel est votre poids ? Quelle est votre taille ?","Avez-vous de l’hypertension artérielle ? ","Êtes-vous diabétique ? ","Avez-vous ou avez-vous eu un cancer ? ","Avez-vous une maladie respiratoire ?","Avez-vous une insuffisance rénale chronique dialysée ?","Avez-vous une maladie chronique du foie ?","Êtes-vous enceinte ? ","Avez-vous une maladie connue pour diminuer vos défenses immunitaires?","Prenez-vous un traitement immunosuppresseur ? "];
const suivant=document.querySelectorAll(".main__container--lien")[1];
const precedent=document.querySelectorAll(".main__container--lien")[0];
const title=document.querySelector('.main__title');
const headmain=document.querySelector('.headmain');
const form=document.querySelector('.main__form');
const progress=document.querySelector('.progressbar__container--div');
const span=document.querySelector(".progressbar__span");
let i=0;
suivant.addEventListener('click',function(e){
    e.preventDefault();
    i++;
    if(i>Tab.length-1)
    {
        i=Tab.length-1;
    }
    title.innerText=Tab[i];
    progress.style.width=`${(100/(Tab.length-1))*i}%`;
    form.classList.add(`.main__form${i}`)
    form.classList.remove(`.main__form${i-1}`)
    if((i==1)||(i>2 && i<11)||(i>11 && i<12) || (i>12 && i<13) || (i>13 && i<14) || (i>14 && i<15) || (i>15 && i<21) || (i>21 && i<22) || (i>22 && i<23))
    {
        form.innerHTML=`<div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="oui" value="oui"><label class="main__form--label" for="oui">oui</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="non" value="non"><label class="main__form--label" for="non">non</label>
    </div>`;
    }
    else if(i==11)
    {
        form.innerHTML=`<div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="bien" value="bien"><label class="main__form--label" for="bien">bien</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="assez" value="assez bien"><label class="main__form--label" for="assez">Assez bien</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="mal" value="mal"><label class="main__form--label" for="mal">mal</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="tres" value="tres mal"><label class="main__form--label" for="tres">Tres mal</label>
    </div>
    `;
    }
    else if(i==2)
    {
        form.innerHTML=`<label class="main__form--label" for="temp">Température:</label>
        <input class="main__form--input" type="number" placeholder="37" name="temp" id="temp">`;
    }
    else if(i==12)
    {
        form.innerHTML=`<label class="main__form--label" for="symp">Symptomes:</label>
        <input class="main__form--input" type="text" placeholder="symptomes" name="sump" id="sump">`;
    }
    
    else if(i==13)
    {
        form.innerHTML=`<div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="moins50" value="moins50"><label class="main__form--label" for="bien"><50 ans</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="entre" value="entre"><label class="main__form--label" for="entre">50-69ans</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="sup70" value="sup70"><label class="main__form--label" for="sup70">>=70ans</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="inf15" value="inf15"><label class="main__form--label" for="inf15"><15ans</label>
    </div>
    `;
    }
    else if(i==14)
    {
        form.innerHTML=`<div class="form-group"><label class="main__form--label" for="taille">Taille:</label>
        <input class="main__form--input" type="number" placeholder="Taille" name="taille" id="taille"></div>
        <div class="form-group"><label class="main__form--label" for="poid">Poids:</label>
        <input class="main__form--input" type="number" placeholder="Poids" name="poids" id="poids"></div>`;
    }
    else if((i==15)||(i==22)||(i==23))
    {
        form.innerHTML=`<div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="oui" value="oui"><label class="main__form--label" for="oui">oui</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="non" value="non"><label class="main__form--label" for="non">non</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="ne-sais-pas" value="ne-sais-pas"><label class="main__form--label" for="ne-sais-pas">ne sais pas</label>
    </div>`
    }
    else if(i==21)
    {
        form.innerHTML=`<div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="oui" value="oui"><label class="main__form--label" for="oui">oui</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="non" value="non"><label class="main__form--label" for="non">non</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="non-applicable" value="non-applicable"><label class="main__form--label" for="non-applicable">Non applicable</label>
    </div>`
    }
    span.innerText=i;
})
precedent.addEventListener('click',function(e){
    e.preventDefault();
    i--;
    if(i<1)
    {
        i=1;
    }
    title.innerText=Tab[i];
    progress.style.width=`${(100/(Tab.length-1))*i}%`;
    form.classList.add(`.main__form${i}`)
    span.innerText=i;
    form.classList.remove(`.main__form${i+1}`)
    if(i==2)
    {
        form.innerHTML=`<label class="main__form--label" for="temp">Température:</label>
        <input class="main__form--input" type="number" placeholder="37" name="temp" id="temp">`;
        form.children[1]
    }
    else if((i==1)||(i>2 && i<11)||(i>11 && i<12) || (i>12 && i<13) || (i>13 && i<14) || (i>14 && i<15) || (i>15 && i<21) || (i>21 && i<22) || (i>22 && i<23))
    {
        form.innerHTML=`<div class="form-group">
    <input class="main__form--radio" type="radio" name="reponse" id="oui" value="oui"><label class="main__form--label" for="oui">oui</label>
</div>
<div class="form-group">
    <input class="main__form--radio" type="radio" name="reponse" id="non" value="non"><label class="main__form--label" for="non">non</label>
</div>`;
    }
    else if(i==11)
    {
        form.innerHTML=`<div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="bien" value="bien"><label class="main__form--label" for="bien">bien</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="assez" value="assez bien"><label class="main__form--label" for="assez">Assez bien</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="mal" value="mal"><label class="main__form--label" for="mal">mal</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="tres" value="tres mal"><label class="main__form--label" for="tres">Tres mal</label>
    </div>
    `;
    }
    else if(i==12)
    {
        form.innerHTML=`<label class="main__form--label" for="symp">Symptomes:</label>
        <input class="main__form--input" type="text" placeholder="symptomes" name="sump" id="sump">`;
    }
    else if(i==13)
    {
        form.innerHTML=`<div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="moins50" value="moins50"><label class="main__form--label" for="bien"><50 ans</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="entre" value="entre"><label class="main__form--label" for="entre">50-69ans</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="sup70" value="sup70"><label class="main__form--label" for="sup70">>=70ans</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="inf15" value="inf15"><label class="main__form--label" for="inf15"><15ans</label>
    </div>
    `;
    }
    else if(i==14)
    {
        form.innerHTML=`<div class="form-group"><label class="main__form--label" for="taille">Taille:</label>
        <input class="main__form--input" type="number" placeholder="Taille" name="taille" id="taille"></div>
        <div class="form-group"><label class="main__form--label" for="poid">Poids:</label>
        <input class="main__form--input" type="number" placeholder="Poids" name="poids" id="poids"></div>`;
    }
    else if(i==15 || i==22 || i==23)
    {
        form.innerHTML=`<div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="oui" value="oui"><label class="main__form--label" for="oui">oui</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="non" value="non"><label class="main__form--label" for="non">non</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="ne-sais-pas" value="ne-sais-pas"><label class="main__form--label" for="ne-sais-pas">ne sais pas</label>
    </div>`
    }
    else if(i==21)
    {
        form.innerHTML=`<div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="oui" value="oui"><label class="main__form--label" for="oui">oui</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="non" value="non"><label class="main__form--label" for="non">non</label>
    </div>
    <div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="non-applicable" value="non-applicable"><label class="main__form--label" for="non-applicable">Non applicable</label>
    </div>`
    }
})
window.addEventListener("load",function(){
    progress.style.width=0;
    const div=document.createElement("div");
    div.innerHTML=`<div class="containerSteper"><div class="containerSteper__preambule">
    <h1 class="containerSteper__titrePreambule"> Préambule</h1>
    <p class="containerSteper__preambule--p"> L'application est fournie à titre gratuit, en l'état,
        uniquement à des finds d'informations pour contribuer à fluidifier 
        la prise en charge des personnes par les services d'urgences pendant
        l'épidémie de Coronavirus COVID-19. L'exhaustivité, l'exctitude, le caractère
        à jour des informations et contenus mis à disposition dans cette application,
        ou leur adéquation à des finalités particulières, ne sont pas garantis.
    </p>
    <hr class="containerSteper__preambule--hr">
    <p class="containerSteper__preambule--p"> L'utilisation de l'application et de son contenu ne remplace en aucun cas le 
        conseil nécessaire donné par votre médecin ou votre pharmacien ou tout autre 
        professionnel de santé  compétent dans chaque cas particulier. 
        Tout examen ou décision de l'utilisateur doit être réalisé ou prise de manière
        autonome sur la base de l'information scientifique et clinique pertinente, de 
        la notice officielle du produit concerné le cas échéant et en cas de doute, en 
        consultant un médecin compétent. 

    </p>

</div>

<button type="button" class="containerSteper--btn"> Démarrer le test </button>

</div></div>`;
    document.querySelector('.main').appendChild(div);
    headmain.innerHTML=`<div class="headmain">
    <div class="headmain__pointprin">
        <div class="headmain__pointprin--pointsecond"></div>
    </div>
    <div class="headmain__pointblue"></div>
    <div class="headmain__pointblue"></div>
</div>`;
    span.innerText=0;
    title.style.display="none";
    form.style.display="none";
    document.querySelector('.main__container').style.display="none";
    const btn=document.querySelector('.containerSteper--btn');
    btn.addEventListener("click",function(){
        i=1;
        // headmain.style.visibility="visible";
        headmain.innerHTML=`<div class="headmain">
    <div class="headmain__pointblue"></div>
    <div class="headmain__pointprin">
        <div class="headmain__pointprin--pointsecond"></div>
    </div>
    <div class="headmain__pointblue"></div>
</div>`;
        let pointprin=document.querySelector(".headmain__pointprin");
        let style = window.getComputedStyle(pointprin, '::before');
        pointprin.style.setProperty('--before','-120px');
        progress.style.width="4.5%"
        div.style.display="none";
        title.style.display="block";
        form.style.display="block";
        document.querySelector('.main__container').style.display="block";
        title.innerText=Tab[1];
        span.innerText="1";
        form.innerHTML=`<div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="oui" value="oui"><label class="main__form--label" for="oui">oui</label>
        </div>
        <div class="form-group">
            <input class="main__form--radio" type="radio" name="reponse" id="non" value="non"><label class="main__form--label" for="non">non</label>
        </div>`;
    })
    
})

























const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const API_KEY = '';
const endpointWorld = 'https://api.covid19api.com/summary';
const endpointMorocco = 'https://api.covid19api.com/dayone/country/morocco/status/confirmed'
//const searchURL = 'https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query="';

window.addEventListener('DOMContentLoaded',async() => {
    const dataWord = await getData(endpointWorld);
    console.log(dataWord);
    const dataMorocco = await getData(endpointMorocco);
    console.log(dataMorocco);
    
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



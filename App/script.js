const progress=document.querySelector(".progressbar__container--div");
const form=document.querySelector(".main__form");
const title=document.querySelector(".main__title");
const precedent=document.querySelector(".lien-prec");
const span=document.querySelector(".progressbar__span");
const suivant=document.querySelector(".lien-suiv");
const Tab=["","Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?","Si oui : quelle est votre température ?","Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?","Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours?","Avez-vous un mal de gorge apparu ces derniers jours ?","Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ? ","Avez-vous une fatigue inhabituelle ces derniers jours ? ","Si oui cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ? ","Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h?","Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ? ","Comment vous sentez-vous ? ","Avez-vous d’autre symptôme ? ","Quel est votre âge ?","Quel est votre poids ? Quelle est votre taille ?","Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez vous un traitement à visée cardiologique ? ","●	Êtes-vous diabétique ? ","Avez-vous ou avez-vous eu un cancer ? ","Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ? ","Avez-vous une insuffisance rénale chronique dialysée ?","Avez-vous une maladie chronique du foie ? ","Êtes-vous enceinte ? ","●	Avez-vous une maladie connue pour diminuer vos défenses immunitaires ","Prenez-vous un traitement immunosuppresseur ?"];
let i=0;
suivant.addEventListener("click",function(){
    i++;
    if(i>Tab.length-1)
    {
        i=Tab.length-1;
    }
    if(i==2)
    {
        form.innerHTML=`<label class="main__form--label" for="temp">Température:</label>
        <input type="number" placeholder="37" class="main__form--input" id="temp" name="temp">`;
    }
    else if(i==11)
    {
        form.innerHTML=`
        <div class="form-group">
                <input class="main__form--input" type="radio" name="choix" value="bien" id="bien">
                <label class="main__form--label" for="bien">Bien</label>
                
            </div>
            <div class="form-group">
                <input class="main__form--input" type="radio" name="choix" value="assez" id="assez">
                <label class="main__form--label" for="assez">Assz bien</label>
                
            </div>
            <div class="form-group">
                <input class="main__form--input" type="radio" name="choix" value="mal" id="mal">
                <label class="main__form--label" for="mal">mal</label>
                
            </div>
            <div class="form-group">
                <input class="main__form--input" type="radio" name="choix" value="tres-mal" id="tres-mal">
                <label class="main__form--label" for="tres-mal">tres mal</label>
        `;
    }    
        else if(i==12)
        {
            form.innerHTML=`<label class="main__form--label" for="symp">Symptomes:</label>
            <input type="text" placeholder="symptomes" class="main__form--input" id="symp" name="symp">`;
        }
        else if(i==13)
        {
            form.innerHTML=`<div class="form-group">
                <input class="main__form--input" type="radio" name="choix" value="moins-50" id="moins-50">
                <label class="main__form--label" for="moins-50">moins de 50ans</label>
            </div>
            <div class="form-group">
                <input class="main__form--input" type="radio" name="choix" value="50-69" id="50-69">
                <label class="main__form--label" for="50-69">50-69ans</label>
            </div>
            <div class="form-group">
                <input class="main__form--input" type="radio" name="choix" value="sup-70" id="sup-70">
                <label class="main__form--label" for="sup-70">supérieur à 70 ans</label>
            </div>
            <div class="form-group">
                <input class="main__form--input" type="radio" name="choix" value="moins-15" id="moins-15">
                <label class="main__form--label" for="moins-15">moins de 15 ans</label>`
        }
    
    form.classList.add(`.main__form${i}`);
    form.classList.remove(`.main__form${i-1}`);
    progress.style.width=`${(i*(100/23))}%`;
    title.innerText=Tab[i];
    span.innerText=i;
})
window.addEventListener("load",function(){
    span.innerText=1;
})


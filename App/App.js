const Tab=["","Est ce que tu a la fiévre ces derniers jours","Quelle est ta température?","Est ce que tu avais la toux dans les jours précédents?","Avez vous des douleurs musculaires?","Est ce que ta gorge te fait mal?","Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ? ","Avez-vous une fatigue inhabituelle ces derniers jours ?","Si oui cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ? ","Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h","Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ? ","Comment vous sentez-vous ? ","Avez-vous d’autre symptôme ? ","Quel est votre âge ?","Quel est votre poids ? Quelle est votre taille ?","Avez-vous de l’hypertension artérielle ? ","Êtes-vous diabétique ? ","Avez-vous ou avez-vous eu un cancer ? ","Avez-vous une maladie respiratoire ?","Avez-vous une insuffisance rénale chronique dialysée ?","Avez-vous une maladie chronique du foie ?","Êtes-vous enceinte ? ","Avez-vous une maladie connue pour diminuer vos défenses immunitaires?","Prenez-vous un traitement immunosuppresseur ? "];
const suivant=document.querySelectorAll(".main__container--lien")[1];
const precedent=document.querySelectorAll(".main__container--lien")[0];
const title=document.querySelector('.main__title');
const form=document.querySelector('.main__form');
const progress=document.querySelector('.progressbar__container--div');
const span=document.querySelector(".progressbar__span");
let i=1;
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
    title.innerText=Tab[1];
    span.innerText="1";
    form.innerHTML=`<div class="form-group">
    <input class="main__form--radio" type="radio" name="reponse" id="oui" value="oui"><label class="main__form--label" for="oui">oui</label>
</div>
<div class="form-group">
    <input class="main__form--radio" type="radio" name="reponse" id="non" value="non"><label class="main__form--label" for="non">non</label>
</div>`;
})

























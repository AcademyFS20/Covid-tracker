
const Tab=["","Est ce que tu a la fiévre ces derniers jours","Quelle est ta température?","Est ce que tu avais la toux dans les jours précédents?","Avez vous des douleurs musculaires?","Est ce que ta gorge te fait mal?","Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ? ","Avez-vous une fatigue inhabituelle ces derniers jours ?","Si oui cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ? ","Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h","Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ? ","Comment vous sentez-vous ? ","Avez-vous d’autre symptôme ? ","Quel est votre âge ?","Quel est votre poids ? Quelle est votre taille ?","Avez-vous de l’hypertension artérielle ? ","Êtes-vous diabétique ? ","Avez-vous ou avez-vous eu un cancer ? ","Avez-vous une maladie respiratoire ?","Avez-vous une insuffisance rénale chronique dialysée ?","Avez-vous une maladie chronique du foie ?","Êtes-vous enceinte ? ","Avez-vous une maladie connue pour diminuer vos défenses immunitaires?","Prenez-vous un traitement immunosuppresseur ? "];
const suivant=document.querySelectorAll(".main__container--lien")[1];
const precedent=document.querySelectorAll(".main__container--lien")[0];
const title=document.querySelector('.main__title');
const headmain=document.querySelector('.headmain');
const form=document.querySelector('.main__form');
const progress=document.querySelector('.progressbar__container--div');
const span=document.querySelector(".progressbar__span");
let i=0;
let Res=[];
suivant.addEventListener('click',function(e){
    e.preventDefault();
    i++;
    if(i>Tab.length-1)
    {
        i=Tab.length-1;
    }
    if(i==Tab.length-1)
    {
        this.innerText="Voir Résultats";
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
    // form.addEventListener("change",function()
    // {
    //     let input=document.querySelectorAll("input");
    //     for(let j=0;j<input.length;j++)
    //     {
    //         if(input[j].checked)
    //         {
    //             console.log(input[j].value);
    //         }
    //     }
    // })
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
    // form.addEventListener("change",function()
    // {
    //     let input=document.querySelectorAll("input");
    //     for(let j=0;j<input.length;j++)
    //     {
    //         if(input[j].checked)
    //         {
    //             console.log(input[j].value);
    //         }
    //     }
    // })
    }
    
    else if(i==2)
    {
        form.innerHTML=`<label class="main__form--label" for="temp">Température:</label>
        <input class="main__form--input" type="number" placeholder="37" name="temp" id="temp">`;
        // let input=document.querySelector('input');
        // console.log(input.value);
    }
    else if(i==12)
    {
        form.innerHTML=`<label class="main__form--label" for="symp">Symptomes:</label>
        <input class="main__form--input" type="text" placeholder="symptomes" name="sump" id="sump">`;
        let input=document.querySelector('input');
        // Res[i]=input.value;
        // alert(Res[i]);
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
    // form.addEventListener("change",function()
    // {
    //     let input=document.querySelectorAll("input");
    //     for(let j=0;j<input.length;j++)
    //     {
    //         if(input[j].checked)
    //         {
    //             Res[i]=input[j].value;
    //         }
    //     }
    //     alert(Res[i])
    // })
    }
    else if(i==14)
    {
        form.innerHTML=`<div class="form-group"><label class="main__form--label" for="taille">Taille:</label>
        <input class="main__form--input" type="number" placeholder="Taille" name="taille" id="taille"></div>
        <div class="form-group"><label class="main__form--label" for="poid">Poids:</label>
        <input class="main__form--input" type="number" placeholder="Poids" name="poids" id="poids"></div>`;
        // let input=document.querySelectorAll('input');
        // Res[i][0]=input[0].value;
        // Res[i][1]=input[1].value;
        // alert(Res[i]);
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
    </div>`;
    // form.addEventListener("change",function()
    // {
    //     let input=document.querySelectorAll("input");
    //     for(let j=0;j<input.length;j++)
    //     {
    //         if(input[j].checked)
    //         {
    //             Res[i]=input[j].value;
    //         }
    //     }
    //     alert(Res[i])
    // })
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
    // form.addEventListener("change",function()
    // {
    //     let input=document.querySelectorAll("input");
    //     for(let j=0;j<input.length;j++)
    //     {
    //         if(input[j].checked)
    //         {
    //             Res[i]=input[j].value;
    //         }
    //     }
    //     alert(Res[i])
    // })
    span.innerText=i;
})
precedent.addEventListener('click',function(e){
    e.preventDefault();
    i--;
    if(i<1)
    {
        i=1;
    }
    if(i<Tab.length-1)
    {
        suivant.innerText="Question suivante";
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
    <div class="headmaine__pointprin">
        <div class="headmaine__pointprin--pointsecond"></div>
    </div>
    <div class="headmaine__pointblue"></div>
    <div class="headmaine__pointblue"></div>
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
        form.classList.add(`.main__form${1}`)
        span.innerText="1";
        form.innerHTML=`<div class="form-group">
        <input class="main__form--radio" type="radio" name="reponse" id="oui" value="oui"><label class="main__form--label" for="oui">oui</label>
        </div>
        <div class="form-group">
            <input class="main__form--radio" type="radio" name="reponse" id="non" value="non"><label class="main__form--label" for="non">non</label>
        </div>`;
    })
    
})

            // Algorithme de Covid

form.addEventListener("change",function()
{
    let input=document.querySelectorAll("input");
    if(i==2 || i==12)
    {
        Res[i]=[...input][0].value;
    }
    else if(i==14)
    {
        let taille=document.querySelector("[name='taille']")
        let poids=document.querySelector("[name='poids']")
        Res[i]="";
        const poid=Res[i];
        
        
    }
    
    for(let j=0;j<input.length;j++)
    {
        if(input[j].checked)
        {
            Res[i]=input[j].value;
        }
    }
    if(i==23)
    {
        let Reponse="";
        let [empty,fievre,temp,toux,muscle,gorge,diahree,fatigue,repos,boire,gene,sent,symp,age,poids,hyper,diab,cancer,respir,dialys,foie,enceinte,defense,immun]=Res;


                    /**** Fonctions des conditions de l'algorithme***********/
        function FPEQUAL0()
        {
            let [empty,fievre,temp,toux,muscle,gorge,diahree,fatigue,repos,boire,gene,sent,symp,age,poids,hyper,diab,cancer,respir,dialys,foie,enceinte,defense,immun]=Res;
            if((age!='sup70')&&(hyper=='non')&&(diab=='non')&&(cancer=='non')&&(respir=='non')&&(dialys=='non')&&((enceinte=='non')||(enceinte=='non-applicable'))&&(defense=='non')&&(immun=='non'))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        function FGEQUAL0()
        {
            let [empty,fievre,temp,toux,muscle,gorge,diahree,fatigue,repos,boire,gene,sent,symp,age,poids,hyper,diab,cancer,respir,dialys,foie,enceinte,defense,immun]=Res;
            if((temp<39)&&(fatigue=='non')&&(!(sent=='mal'||sent=='tres mal'))&&(gene=='non')&&(boire=='non')&&(temp>35.4))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        function FGMINSUP1()
        {
            let [empty,fievre,temp,toux,muscle,gorge,diahree,fatigue,repos,boire,gene,sent,symp,age,poids,hyper,diab,cancer,respir,dialys,foie,enceinte,defense,immun]=Res;
            if((temp>=39)||(fatigue=='oui')||(sent=='mal'||sent=='tres mal'))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        function FGMINEQUAL1()
        {
            let [empty,fievre,temp,toux,muscle,gorge,diahree,fatigue,repos,boire,gene,sent,symp,age,poids,hyper,diab,cancer,respir,dialys,foie,enceinte,defense,immun]=Res;
            if(((temp>=39)&&(fatigue=='non')&&(!(sent=='mal'||sent=='tres mal')))||((temp<39)&&(fatigue=='oui')&&(!(sent=='mal'||sent=='tres mal')))||((temp<39)&&(fatigue=='non')&&((sent=='mal'||sent=='tres mal'))))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        function FGMINSUP2()
        {
            let [empty,fievre,temp,toux,muscle,gorge,diahree,fatigue,repos,boire,gene,sent,symp,age,poids,hyper,diab,cancer,respir,dialys,foie,enceinte,defense,immun]=Res;
            if(((temp>=39)&&(fatigue=='oui')&&(!(sent=='mal'||sent=='tres mal')))||((temp>=39)&&(fatigue=='non')&&((sent=='mal'||sent=='tres mal')))||((temp<39)&&(fatigue=='oui')&&((sent=='mal'||sent=='tres mal'))))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        function FPSUP1()
        {
            let [empty,fievre,temp,toux,muscle,gorge,diahree,fatigue,repos,boire,gene,sent,symp,age,poids,hyper,diab,cancer,respir,dialys,foie,enceinte,defense,immun]=Res;
            if((age=='sup70')||(hyper=='oui')||(diab=='oui')||(cancer=='oui')||(respir=='oui')||(dialys=='oui')||(enceinte=='oui')||(defense=='oui')||(immun=='oui'))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        function FGMAJEQUAL0()
        {
            let [empty,fievre,temp,toux,muscle,gorge,diahree,fatigue,repos,boire,gene,sent,symp,age,poids,hyper,diab,cancer,respir,dialys,foie,enceinte,defense,immun]=Res;
            if(gene=='non'&&boire=='non'&&temp>35.4)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        function FGMAJSUP1()
        {
            let [empty,fievre,temp,toux,muscle,gorge,diahree,fatigue,repos,boire,gene,sent,symp,age,poids,hyper,diab,cancer,respir,dialys,foie,enceinte,defense,immun]=Res;
            if(gene=='oui'||boire=='oui'||temp<=35.4)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        function FGSUP1()
        {
            let [empty,fievre,temp,toux,muscle,gorge,diahree,fatigue,repos,boire,gene,sent,symp,age,poids,hyper,diab,cancer,respir,dialys,foie,enceinte,defense,immun]=Res;
            if((temp>=39)||(fatigue=='oui')||((sent=='mal'||sent=='tres mal'))||(gene=='oui')||(boire=='oui')||(temp<=35.4))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        function scenario1()
        {
            let [empty,fievre,temp,toux,muscle,gorge,diahree,fatigue,repos,boire,gene,sent,symp,age,poids,hyper,diab,cancer,respir,dialys,foie,enceinte,defense,immun]=Res;
            if(fievre=='oui'||(toux=='oui'&&gorge=='oui')||(toux='oui'&&muscle=='oui')||(fievre=='oui'&&diahree=='oui'))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        
    

        /******** Code Algorithme */
        let Reponses="";
         if(scenario1()&&FPEQUAL0()&&(FGEQUAL0()&&age=='moins50'))
         {
             Reponses="nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.";
            //  console.log(Reponse);
         }
         else if(scenario1()&&FPEQUAL0()&&((FGEQUAL0()&&age=='entre')||(FGEQUAL0()&&FGMINEQUAL1())))
         {
             Reponses="téléconsultation ou médecin généraliste ou visite à domicile";
            //  console.log(Reponse);
         }
         else if(scenario1()&&FPSUP1()&&FGEQUAL0())
         {
            Reponses="téléconsultation ou médecin généraliste ou visite à domicile";
            // console.log(Reponse);
         }
         else if(scenario1()&&FPSUP1()&&FGMINEQUAL1())
         {
            Reponses="Un seul facteur de gravité mineur : téléconsultation ou médecin généraliste ou visite à domicile";
            // console.log(Reponse);
         }
         else if(scenario1()&&FPSUP1()&&FGMINSUP2())
         {
            Reponses="appel 141";
            // console.log(Reponse);
         }
         else if(scenario1()&&(FPEQUAL0()||FPSUP1())&&FGMAJSUP1())
         {
            Reponses="appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.";
            // console.log(Reponse);
         }
         else if((fievre=='oui'&&toux=='oui')&&FPEQUAL0()&&(FGEQUAL0||(FGMINSUP1&&FGMAJEQUAL0())))
         {
            Reponses="Sans facteur de gravité ou au moins 1 facteur de gravité mineur sans facteur de gravité majeur : téléconsultation ou médecin généraliste ou visite à domicile";
            // console.log(Reponse);
         }
         else if((fievre=='oui'&&toux=='oui')&&FPSUP1()&&FGEQUAL0())
         {
            Reponses="téléconsultation ou médecin généraliste ou visite à domicile";
            // console.log(Reponse);
         }
         else if((fievre=='oui'&&toux=='oui')&&FPSUP1()&&FGMINEQUAL1())
         {
            Reponses="téléconsultation ou médecin généraliste ou visite à domicile";
            // console.log(Reponse);
         }
         else if((fievre=='oui'&&toux=='oui')&&FPSUP1()&&FGMINSUP2())
         {
            Reponses="appel 141";
            // console.log(Reponse);
         }
         else if((fievre=='oui'&&toux=='oui')&&(FPSUP1()||FPEQUAL0())&&FGSUP1())
         {
            Reponses="Appel 141";
            // console.log(Reponse);
         }
         else if((fievre=='oui'||toux=='oui'||gorge=='oui'||muscle=='oui'||diahree=='oui')&&FGEQUAL0)
         {
            Reponses="Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.";
            // console.log(Reponse);
         }
         else if((fievre=='oui'||toux=='oui'||gorge=='oui'||muscle=='oui'||diahree=='oui')&&(FGSUP1()||FPSUP1()))
         {
            Reponses="Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141. ";
            // console.log(Reponse);
         }
         else if(fievre=='non'&&toux=='non'&&gorge=='non'&&muscle=='non'&&diahree=='non'&&fatigue=='non'&&repos=='non'&&boire=='non'&&gene=='non'&&hyper=='non'&&diab=='non'&&cancer=='non'&&dialys=='non'&&respir=='non'&&foie=='non'&&(enceinte=='non'||enceinte=='non-applicable')&&defense=='non'&&immun=='non')
         {
            Reponses="Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil. ";
            // console.log(Reponse);
         }
         else if(fievre=='oui'&&toux=='oui'&&gorge=='oui'&&muscle=='oui'&&diahree=='oui'&&fatigue=='oui'&&repos=='oui'&&boire=='oui'&&gene=='oui'&&hyper=='oui'&&diab=='oui'&&cancer=='oui'&&dialys=='oui'&&respir=='oui'&&foie=='oui'&&enceinte=='oui'&&defense=='oui'&&immun=='oui')
         {
            Reponses="Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène. ";
            // console.log(Reponse);
         }
         else if(age=='inf15')
         {
            Reponses="Cette application n'est pas adapté aux personnes moins agées";
            // console.log(Reponse);
         }
        //  console.log(Reponses);
         suivant.addEventListener('click',function(){
            title.style.display="none";
            form.style.display="none";
            suivant.style.display="none";
            precedent.style.display="none";
            // console.log(Reponses);
            const div=document.createElement("div");
            div.style.height='200px';
            div.innerHTML=`<div class="containerSteper"><div class="containerSteper__preambule">
            <h1 class="containerSteper__titrePreambule"> Résultats:</h1>
            <p class="containerSteper__preambule--p"> ${Reponses}
            </p>
        </div>`;
        document.querySelector(".main").appendChild(div);
        headmain.innerHTML=`
        <div class="headmain__resultatblue1"></div>
        <div class="headmain__resultatblue2"></div>
        <div class="headmain__principblue">
            <div class="headmain__principblue--secondblue"></div>
        </div>
        `;
         })
        }})
        

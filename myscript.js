const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'img/angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'img/walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'img/scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'img/barbara-ramos-graphic-designer.jpg',
    },
  ];

//definisco le variabili
  const bottone = document.getElementById("addMemberButton");
  console.log(bottone);
  const teamContainer = document.querySelector(".team-container");
  console.log(teamContainer);
  
  
//creo una funzione per aggiungere i membri 
function aggiungiMembro() {
    teamContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img
                src="${team[i].image}"
                alt=""
            />
        </div>
        <div class="card-text">
            <h3>${team[i].name}</h3>
            <p>${team[i].role}</p>
        </div>
    </div>
    `
}

//ripeto la funzione per ogni oggetto
for (i = 0; i < team.length; i++){
    aggiungiMembro (team[i])
}
  
//bonus
function aggiungiMembroCustom() {
    const nome = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const image = document.getElementById('image').value;
  
    reset();
  
    let membroCustom = {
      nome : nome,
      role : role,
      image : image,
    }
  
    teamContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img
                src="${image}"
                alt=""
            />
        </div>
        <div class="card-text">
            <h3>${nome}</h3>
            <p>${role}</p>
        </div>
    </div>
    `
    
    team.push(membroCustom);
    console.log(team);
}

bottone.addEventListener("click", aggiungiMembroCustom);

function reset(){
    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
    document.getElementById("image").value = "" ;
}  

  
  



  
    
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


  



  
    
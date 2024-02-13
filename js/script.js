
// Array di oggetti con le informazioni fornite.

const teamMembers = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto:  "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto:  "img/angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto:  "img/walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto:  "img/angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto:  "img/scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto:  "img/barbara-ramos-graphic-designer.jpg",
    }
];

const rowElement = document.getElementById("card-layout")

//stampa in console delle varie proprietà degli oggetti
for (i=0; i<teamMembers.length;i++){

    let actualMember = teamMembers[i];
    
    //creazione card
    let cardElement = document.createElement("div");
    rowElement.append(cardElement);

    cardElement.classList = "card bg-light-subtle"
    cardElement.style = "width: 18rem;"

    //creazione img
    let imgElement = document.createElement("img");
    cardElement.append(imgElement);
    imgElement.src = actualMember.foto;

    imgElement.classList = "card-img-top mt-2 rounded-3" 

    // creazione div-card
    let divElement = document.createElement("div");
    cardElement.append(divElement);

    divElement.classList = "card-body"

    //creazione titolo(nome user)
    let titleCard = document.createElement("h5");
    divElement.append(titleCard);
    titleCard.innerHTML = `${actualMember.nome}`

    titleCard.classList = "card-title"


    //creazione sottotitolo (lavoro)
    let jobTitle = document.createElement("p");
    divElement.append(jobTitle);
    jobTitle.innerHTML = `${actualMember.ruolo}`

    jobTitle.classList = "card-text"

    
    
}


//stilizzazione layout


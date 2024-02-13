
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




//stampa in console delle varie proprietà degli oggetti
for (i=0; i<teamMembers.length;i++){
    
    let actualMember = teamMembers[i];


    document.querySelector(`div:nth-of-type(${i+1}) h5`).innerHTML = `${actualMember.nome}`
    document.querySelector(`div:nth-of-type(${i+1}) p`).innerHTML = `${actualMember.ruolo}`
    document.querySelector(`div:nth-of-type(${i+1}) img`).src = `${actualMember.foto}`

    
}


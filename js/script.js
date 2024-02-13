
// Array di oggetti con le informazioni fornite.
const teamMembers = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto:  "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto:  "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto:  "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto:  "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto:  "scott-estrada-developer.jpgg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto:  "barbara-ramos-graphic-designer.jpg",
    }
];


//stampa in console delle varie proprietà degli oggetti
for (i=0; i<teamMembers.length;i++){

    let actualMember = teamMembers[i];

    for (let key in actualMember){
        console.log(`${key}: ${actualMember[key]}`);
        
    }
    console.log("_______");
    
}

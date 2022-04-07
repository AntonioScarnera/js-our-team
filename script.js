

const cards = [
    {
        immagine: 'wayne-barnett-founder-ceo.jpg',
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO'
    },
    {
        immagine: 'angela-caroll-chief-editor.jpg',
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor'
    },
    {
        immagine: 'walter-gordon-office-manager.jpg',
        nome: 'Walter Gordon',
        ruolo: 'Office Manager'
    },
    {
        immagine: 'angela-lopez-social-media-manager.jpg',
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager'
    },
    {
        immagine: 'scott-estrada-developer.jpg',
        nome: 'Scott Estrada',
        ruolo: 'Developer'
    },
    {
        immagine: 'barbara-ramos-graphic-designer.jpg',
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer'
    }
];




let container = document.querySelector(".team-container");

for(let i = 0; i < cards.length; i++){
           
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("team-card");
    container.append(cardContainer);
       
    let cardImg = document.createElement("div");
    cardImg.classList.add("card-image");
    cardImg.innerHTML = `<img
    src="img/${cards[i].immagine}"
    alt="${cards[i].nome}"/>`;
       
    let cardInfo = document.createElement("div");
    cardInfo.classList.add("card-text");
    cardInfo.innerHTML = `<h3>${cards[i].nome}</h3>
    <p>${cards[i].ruolo}</p>`
       
    cardContainer.append(cardImg, cardInfo);
}
       


let btn = document.getElementById("addMemberButton");
let nome = document.getElementById("name");
let ruolo = document.getElementById("role");
let image = document.getElementById("image");

btn.addEventListener('click', ()=>{
    console.log(btn.value, nome.value, ruolo.value, image.value);

    let flag = false;
    if((image.value === "") && (nome.value === "") && (ruolo.value === "")){
        flag = false;
    }else{
        flag = true;
    }

    if(flag === true){
        console.log(flag);
        let card ={
            immagine: `${image.value}`,
            nome: `${nome.value}`,
            ruolo: `${ruolo.value}`
        }
        cards.push(card);
    
        container.innerHTML = "";
        for(let i = 0; i < cards.length; i++){
            let cardContainer = document.createElement("div");
            cardContainer.classList.add("team-card");
            container.append(cardContainer);
        
            let cardImg = document.createElement("div");
            cardImg.classList.add("card-image");
            cardImg.innerHTML = `<img
            src="img/${cards[i].immagine}"
            alt="${cards[i].nome}"/>`;
        
            let cardInfo = document.createElement("div");
            cardInfo.classList.add("card-text");
            cardInfo.innerHTML = `<h3>${cards[i].nome}</h3>
            <p>${cards[i].ruolo}</p>`
        
            cardContainer.append(cardImg, cardInfo);
        }
    }
})






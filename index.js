let merlot = {
    name: "merlot",
    title: "MERLOT",
    description: "Límpido e brilhante, coloração rubi, aroma de frutas vermelhas e especiarias, médio corpo e taninos agradáveis ao paladar. \n \n Maturação: 6 meses em barricas de carvalho francês e americano.  \n \n Região: Serra Gaúcha - RS \n \n Altitude: 750 metros. \n \n Colheita: Safra 2020.  \n \n Sugestão de Harmonização: Pratos leves, queijos com pouca maturação e carnes grelhadas. \n \n Temperatura de consumo: 15º a 18º C.",
};
let chardonnay = {
    name: "chardonnay",
    title: "CHARDONNAY",
    description: "Límpido e brilhante, coloração amarelo-palha com toques esverdeados, com aroma mineral intenso, toques frutados e florais, apresenta bom volume de boca com final leve e refrescante. \n \n Região: Serra Gaúcha - RS \n \n Altitude: 750 metros. \n \n Colheita: Safra 2020.  \n \n Sugestão de Harmonização: Peixes e frutos do mar, carnes brancas com molhos leves. \n \n Temperatura de consumo: 15º a 18º C.",
};

let sauvignon = {
    name: "sauvignon",
    title: "SAUVIGNON",
    description: "Límpido e brilhante, coloração rubi, aroma de frutas negras e vermelhas, especiarias e tostado, bom volume de boca com final macio e agradável. \n \n Maturação: 6 meses em barricas de carvalho francês e americano.  \n \n Região: Serra Gaúcha - RS \n \n Altitude: 750 metros. \n \n Colheita: Safra 2020.  \n \n Sugestão de Harmonização: Carnes vermelhas e de caça, massas condimentadas e queijos de massas duras. \n \n Temperatura de consumo: 15º a 18º C.",
};

let tannat = {
    name: "tannat",
    title: "TANNAT",
    description: "Límpido e brilhante, coloração rubi violáceo, com notas de frutas vermelhas, tostado e frutas negras, bom volume de boca e com final macio e agradável. \n \n Maturação: 6 meses em barricas de carvalho francês e americano.  \n \n Região: Serra Gaúcha - RS \n \n Altitude: 750 metros. \n \n Colheita: Safra 2020.  \n \n Sugestão de Harmonização: Carnes grelhadas com molhos condimentados ou picantes, risotos e massas. \n \n Temperatura de consumo: 15º a 18º C.",
};

let franc = {
    name: "franc",
    title: "CABERNET FRANC",
    description: "Límpido e brilhante, coloração rubi, com aroma frutado intenso, framboesa e notas mentoladas, com frescor e textura macia. \n \n Maturação: 12 meses em barricas de carvalho francês e americano.  \n \n Região: Serra Gaúcha - RS \n \n Altitude: 750 metros. \n \n Colheita: Safra 2021, 4ª Semana de Fevereiro.  \n \n Sugestão de Harmonização: Carnes de caça e massa com molhos vermelhos. \n \n Temperatura de consumo: 15º a 18º C.",
};

let malbec = {
    name: "malbec",
    title: "MALBEC",
    description: "Límpido e brilhante, rubi intenso, com notas de flores, rosas secas, pimenta negra e traços de especiarias, apresenta bom corpo, com final de boca persistente e taninos macios. \n \n Maturação: 12 meses em barricas de carvalho francês e americano.  \n \n Região: Serra do Sudeste - RS \n \n Altitude: 450 metros. \n \n Colheita: Safra 2021, 4ª Semana de Fevereiro.  \n \n Sugestão de Harmonização: Carnes vermelhas, churrasco e massas com molhos condimentados. \n \n Temperatura de consumo: 15º a 18º C.",
};

let marselan = {
    name: "marselan",
    title: "MARSELAN",
    description: "Límpido e brilhante, rubi intenso, com notas de frutas vermelhas, pimenta negra e mentolado, apresenta bom corpo, com final de boca persistente e taninos macios. \n \n Maturação: 12 meses em barricas de carvalho francês e americano.  \n \n Região: Serra do Sudeste - RS \n \n Altitude: 450 metros. \n \n Colheita: Safra 2021, 1ª Semana de Março.  \n \n Sugestão de Harmonização: Carnes grelhadas, massas condimentadas e queijos maturados. \n \n Temperatura de consumo: 15º a 18º C.",
};

let branco = {
    name: "branco",
    title: "BRUT BRANCO",
    description: "Límpido e brilhante, amarelo-palha, com notas esverdeadas, apresenta perlage firme e consistente, aroma cítrico e frutado, em boca leve, refrescante e com boa maciez. \n \n Região: Serra Gaúcha - RS \n \n Altitude: 750 metros. \n \n Sugestão de Harmonização: Saladas, canapés e frutos do mar. \n \n Temperatura de consumo: 4º a 6º C.",
};

let rose = {
    name: "rose",
    title: "BRUT ROSÉ",
    description: "Límpido e brilhante, rosa tênue, apresenta perlage fina e consistente, aroma cítrico com notas de frutas vermelhas, em boca leve, com bom corpo e refrescante. \n \n Região: Serra Gaúcha - RS \n \n Altitude: 750 metros. \n \n Sugestão de Harmonização: Frutos do mar, massas leves e risotos. \n \n Temperatura de consumo: 4º a 6º C.",
};

let wineDescriptionList = [merlot, chardonnay, sauvignon, tannat, franc, malbec, marselan, branco, rose];
let indexMax = wineDescriptionList.length - 1;

function showDescription(id) {
    let idName = id;
    let descriptionToShow = "";
    let descriptionTitle = "";
    for(let i=0; i<=indexMax; i++){
       if(wineDescriptionList[i].name == idName){
            descriptionToShow = wineDescriptionList[i].description;  
            descriptionTitle = wineDescriptionList[i].title; 
       }
    }
    swal(descriptionTitle, descriptionToShow);
}


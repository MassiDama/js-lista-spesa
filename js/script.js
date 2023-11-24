
const listaSpesa = ["gamberetti", "patate", "uova", "pasta", "pizza", "zucchine"];
console.log(listaSpesa);

const elementUl = document.querySelector(".lista-spesa")

let i = 0;

while (i < listaSpesa.length) {

    let itemSpesa = listaSpesa[i];

    i++;

    console.log(itemSpesa);

    // andiamo a visualizzarlo sulla pagina 

    // creiamo il li
    const elementLi = document.createElement("li");

    // inseriamo dentro il li il contenuto
    elementLi.append(itemSpesa);

    // inseriamo il nuovo li dentro ul
    elementUl.append(elementLi);
   

}
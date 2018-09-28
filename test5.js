/**

Visibilità prodotto : 

    isActive                false   true        true
    isInStock               true    true        false
    isWarehouseClose        true    true        true

Dati prodotto:

    name                    Pizza   Piadina     Kebab
    price                   8       5           4.5
    qty                     10      30          20

Dati generici: 

    taxRate                 21      21          21
    shippingPrice           1       0.5         0.5


Tre box a frontend:


____________________|____________________|____________________|
IMMAGINE DELLA      |IMMAGINE DELLA      |IMMAGINE DEL        |
PIZZA               |PIADINA             |KEBAB               |
                    |                    |                    |
quantità della      |quantità della      |quantità del        |
Pizza               |Piadina             |Kebab               |
                    |                    |                    |
Button acquista     |Button acquista     |Button acquista     |
                    |                    |                    |
____________________|____________________|____________________|


<input id="pizza" type="number"/>
<input id="piadina" type="number"/>
<input id="kebab" type="number"/>
<script type="text/javascript">
    function getData(productName) {
        return document.getElementById(productName).value;
    }
</script>

*/

//VARIABLES ARRAY
const isActive = [false, true, true],
    shopCartDiv = ['pizzaDiv', 'piadinaDiv', 'kebabDiv'],
    shopCartInput = ['prendiPizza', 'prendiPiadina', 'prendiKebab'],
    shopCartInputNumber = ['pizza', 'piadina', 'kebab'],
    isInStock = [true, true, false],
    isWarehouseClose = [true, true, true];

//VARIABLES NUMBER
const costo_pizza = 8,
    costo_piadina = 5,
    costo_kebab = 4.5,
    quantityOfPizza = 10,
    quantityOfPiadine = 30,
    quantityOfKebab = 20,
    taxRate = 21,
    shippingPricePizza = 1,
    shippingPriceOther = 0.5;


//GET DATA FROM PRODUCT NAME AND CONTROL VALUES
/**
 * 
 * @param {element form dom} productName 
 */
function getData(productName) {
    let elementProduct = document.getElementById(productName);
    if (elementProduct.value > 0 && elementProduct.value != 0) {
        getTotalPrice(productName);
    }
    return document.getElementById(productName).value;
}


document.addEventListener("DOMContentLoaded", function (event) {
    let el = document.querySelectorAll('[type="button"]');
    for (let i = 0; i < el.length; i++) {

        el[i].addEventListener('click', function () {
            let elementProduct = document.querySelectorAll('[type="number"]')[i];
            if (elementProduct.value > 0) {
                getTotalPrice(elementProduct.id);
            } else {
                alert('Inserisci un valore valido');
            }
            return elementProduct.id.value;

        });
    }
})


//ACTIVE ELEMENT
for (let i = 0; i < isActive.length; i++) {
    let elementActive = document.getElementById(shopCartDiv[i]);
    if (!isActive[i]) {
        elementActive.classList.add('notActive');
    }
}

//IN STOCK OR IN WAREHOUSE
for (let i = 0; i < isInStock.length; i++) {
    if (!isInStock[i]) {
        let Buttons = document.getElementById(shopCartInput[i]);
        Buttons.value = 'Non in stock';
        Buttons.setAttribute('disabled', 'true');

        let disabledButtons = document.getElementById(shopCartInputNumber[i]);
        disabledButtons.setAttribute('disabled', 'true');

        if (isWarehouseClose[i]) {
            var paragraph = document.getElementById(shopCartDiv[i]);
            var text = document.createTextNode("You can find this items in warehouse close to you!");
            paragraph.appendChild(text);
        }
    }
}

//CALC OF TOTALE PRICE FROM PRODUCT NAME
/**
 * 
 * @param {number} productName 
 */
function getTotalPrice(productName) {

    var totalOfProduct = parseInt(document.getElementById(productName).value);

    switch (productName) {
        case "pizza":
            {
                if (totalOfProduct <= quantityOfPizza) {
                    //Calcolo prezzo della pizza totale
                    var totalPrice = costo_pizza * totalOfProduct;

                    //Totale delle tasse da pagare
                    var totalPriceTax = totalPrice * (21 / 100);

                    //Aggiunta tasse
                    totalPrice = totalPrice + totalPriceTax;

                    //Aggiunta spedizione
                    totalPrice = totalPrice + (shippingPricePizza * totalOfProduct);

                    //Stampa totale della pizza
                    console.log("Pizza's order is " + totalPrice + "$.");

                    alert("Pizza's order is " + totalPrice + "$.");

                } else {
                    console.log("I'm sorry but we don't have this quantity of pizza");
                }
                break;
            }
        case "piadina":
            {
                if (totalOfProduct <= quantityOfPiadine) {
                    //Calcolo prezzo della pizza totale
                    var totalPrice = costo_piadina * totalOfProduct;

                    //Totale delle tasse da pagare
                    var totalPriceTax = totalPrice * (21 / 100);

                    //Aggiunta tasse
                    totalPrice = totalPrice + totalPriceTax;

                    //Aggiunta spedizione
                    totalPrice = totalPrice + (shippingPriceOther * totalOfProduct);

                    //Stampa totale della pizza
                    console.log("Piadina's order is " + totalPrice + "$.");

                    alert("Piadina's order is " + totalPrice + "$.");

                } else {
                    console.log("I'm sorry but we don't have this quantity of piadina");
                }
                break;
            }
        case "kebab":
            {
                if (totalOfProduct <= quantityOfKebab) {
                    //Calcolo prezzo della pizza totale
                    var totalPrice = costo_kebab * totalOfProduct;

                    //Totale delle tasse da pagare
                    var totalPriceTax = totalPrice * (21 / 100);

                    //Aggiunta tasse
                    totalPrice = totalPrice + totalPriceTax;

                    //Aggiunta spedizione
                    totalPrice = totalPrice + (shippingPriceOther * totalOfProduct);

                    //Stampa totale della pizza
                    console.log("Kebab's order is " + totalPrice + "$.");

                    alert("Kebab's order is " + totalPrice + "$.");

                } else {
                    console.log("I'm sorry but we don't have this quantity of kebab");
                }
                break;
            }
        default:
            {
                break;
            }
    }
}
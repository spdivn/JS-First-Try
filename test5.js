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

//Variable for calc of total price
const isActive = [false, true, true],
    shopCartDiv = ['pizzaDiv', 'piadinaDiv', 'kebabDiv'],
    shopCartInput = ['prendiPizza', 'prendiPiadina', 'prendiKebab'],
    shopCartInputNumber = ['pizza', 'piadina', 'kebab'],
    isInStock = [true, true, false],
    isWarehouseClose = [true, true, true];


for (let i = 0; i < isActive.length; i++) {
    if (!isActive[i]) {
        document.getElementById(shopCartDiv[i]).classList.add('notActive');
    }
}
for (let i = 0; i < isInStock.length; i++) {
    if (!isInStock[i]) {
        let Buttons = document.getElementById(shopCartInput[i]);
        Buttons.value = 'Non in stock';
        Buttons.setAttribute('disabled', 'true');
        document.getElementById(shopCartInputNumber[i]).setAttribute('disabled', 'true');
        if (isWarehouseClose[i]) {
            var paragraph = document.getElementById(shopCartDiv[i]);
            var text = document.createTextNode("You can find this items in warehouse close to you!");
            paragraph.appendChild(text);
        }
    }
}
const costo_pizza = 8,
    costo_piadina = 5,
    costo_kebab = 4.5,
    quantityOfPizza = 10,
    quantityOfPiadine = 30,
    quantityOfKebab = 20,
    taxRate = 21,
    shippingPricePizza = 1,
    shippingPriceOther = 0.5;

function getData(productName) {
    if (document.getElementById(productName).value > 0) {
        getTotalPrice(productName);
    }
    return document.getElementById(productName).value;
}

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

                } else {
                    console.log("I'm sorry but we don't have this quantity of pizza");
                }
                break;
            }
        case "kebab":
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
                } else {
                    console.log("I'm sorry but we don't have this quantity of piadina");
                }
                break;
            }
        case "piadina":
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
// Preisrunter API URL for getting cart items
const baseUrl = "https://api.preisrunter.net/v1/cart/";

async function loadCartData(cartName) {
    try {
        const urlWithCartName = `${baseUrl}${encodeURIComponent(cartName)}`;
        const request = new Request(urlWithCartName);
        request.method = "GET";
 
        request.headers = {"Content-Type": "application/json"};
 
        const response = await request.loadJSON();
 
        if (response && response.products) {
            return response.products;
        } else {
            console.log("Keine Einträge im Warenkorb.");
            return [];
        }
    } catch (error) {
        console.error("Fehler beim Laden der Daten: ", error);
        return [];
    }
}
 
async function createWidget(products) {
    let widget = new ListWidget();
 
    if (products.length > 0) {
        products.forEach(product => {
            let productLine = widget.addText(`${product.productName} - ${product.productPrice} € - ${product.productMarket}`);
            productLine.font = Font.systemFont(12);
            widget.addSpacer(4);
        });
    } else {
        widget.addText("Keine Einträge im Warenkorb.");
    }
    return widget;
}
 
async function main() {
    if (config.runsInWidget) {
        const cartName = "INSERT-CART-NAME-HERE";
        const products = await loadCartData(cartName);
        let widget = await createWidget(products);
        Script.setWidget(widget);
    } else {
        console.log("Dieses Script funktioniert nur als Widget und nicht direkt in Scriptable.");
    }
}
 
main();

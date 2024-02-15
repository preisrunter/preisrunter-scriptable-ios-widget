const settings = {
    cartName: "INSERT-CART-NAME-HERE", // mit Deinem Warenkorb-Namen ersetzen
    baseUrl: "https://api.preisrunter.net/v1/cart/"
};

async function loadCartData(cartName) {
    const urlWithCartName = `${settings.baseUrl}?q=${encodeURIComponent(cartName)}`;
    try {
        const response = await fetch(urlWithCartName, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        const data = await response.json();
        return data.products || [];
    } catch (error) {
        console.error("Fehler beim Laden der Daten: ", error);
        return [];
    }
}

async function createWidget(products) {
    let widget = new ListWidget();
    if (products.length == 0) {
        widget.addText("Keine Einträge im Warenkorb.");
        return widget;
    }
    products.forEach(product => {
        const productLine = widget.addText(`${product.productName} - ${product.productPrice} € - ${product.productMarket}`);
        productLine.font = Font.systemFont(12);
        widget.addSpacer(4);
    });
    return widget;
}

async function main() {
    if (config.runsInWidget) {
        const products = await loadCartData(settings.cartName);
        const widget = await createWidget(products);
        Script.setWidget(widget);
    } else {
        console.log("Dieses Script funktioniert nur als Widget und nicht direkt in Scriptable.");
    }
}
 
main();

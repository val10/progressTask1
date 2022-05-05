for (let i = 0; i < storeProducts.length; i++) {
    const body = document.body;
    const div = document.createElement("div");


    const pName = document.createElement('p');
    const pPrice = document.createElement('p');
    const pQty = document.createElement('p');
    const pDate = document.createElement('p');

    const productName = storeProducts[i].ProductName;
    const unitPrice = storeProducts[i].UnitPrice;
    const qty = storeProducts[i].UnitsInStock;
    const date = storeProducts[i].DeliveryOn;

    // Check for values in qty and if there is 0 value, add style , color red 
    if (qty === 0) {
        pQty.style.color = "red"
        pQty.classList.add("notAvailableItems")


    } else {
        pQty.style.color = "none"
        pQty.classList.add("availabelItems")

    }

    pName.innerText = "Product name: " + productName;
    pPrice.innerText = "Price: " + unitPrice + "$";
    pQty.innerText = "Quantity: " + qty + "pcs.";
    pDate.innerText = "Delivered on: " + date;

    div.append(pName);
    pName.classList.add("itemName");

    div.append(pPrice);
    pPrice.classList.add("itemPrice");

    div.append(pQty);

    div.append(pDate);
    pDate.classList.add("date")


    body.append(div)



}
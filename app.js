//because database is on our local drive I will not use fetch or async functions.
//for iterating over the database it will be used , for loop.

for (let i = 0; i < storeProducts.length; i++) {
    const body = document.body;

    //creating all the elements that will contain the values of the properties from DB
    const div = document.createElement("div");
    const pName = document.createElement('p');
    const pPrice = document.createElement('p');
    const pQty = document.createElement('p');
    const pDate = document.createElement('p');

    //taking the values from DB
    const productName = storeProducts[i].ProductName;
    const unitPrice = storeProducts[i].UnitPrice;
    const qty = storeProducts[i].UnitsInStock;
    const date = storeProducts[i].DeliveryOn;

    // Check for values in qty and if there is 0 value, add style , color red.
    if (qty === 0) {
        pQty.style.color = "red";
        pQty.classList.add("notAvailableItems");
    } else {
        pQty.style.color = "none";
        pQty.classList.add("availabelItems");

    }

    //pushing the taken values to the HTML elements nd concatinate with description to be showed.
    pName.innerText = "Product name: " + productName;
    pPrice.innerText = "Price: " + unitPrice + "$";
    pQty.innerText = "Quantity: " + qty + "pcs.";
    pDate.innerText = "Delivered on: " + date;

    //creating classes for every element for easy styling with CSS or SASS .
    div.append(pName);
    pName.classList.add("itemName");

    div.append(pPrice);
    pPrice.classList.add("itemPrice");

    div.append(pQty);

    div.append(pDate);
    pDate.classList.add("date")

    //append all the elements to the DOM. 
    body.append(div)



}

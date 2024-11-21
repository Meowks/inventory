//Инпуты
let productType = document.getElementById("type-select")
let productName = document.getElementById("product-name")
let productCount = document.getElementById("product-count")

//Список
let productList = document.getElementsByClassName("products-list")[0]

let htmlContent = ""

//Кнопки
let addProductButton = document.getElementsByClassName("add-product")[0];
let clearListButton = document.getElementsByClassName("clear-list")[0]
let productArray = []

//Добавление слушателей событий
addProductButton.addEventListener("click", addProduct)

// Функция для добавления продукта
function addProduct(){
    const productTypeValue = productType.value;
    const productNameValue = productName.value;
    const productCountValue = productCount.value;
    if (
        productTypeValue != "" &&
        productNameValue != "" &&
        productCountValue != "" 
    ) {
        let obj = {
            productType: productTypeValue,
            productName: productNameValue,
            productCount: productCountValue,
        };
        productArray.push(obj);
        htmlContent = "";
        productArray.forEach((e)=>{
            htmlContent += `
            <div class="product-item">Тип: ${e.productType}.</div>
            <div class="product-item">Название: ${e.productName}.</div>
            <div class="product-item">Количество: ${e.productCount}.</div>`
        })
        
        productList.innerHTML = htmlContent;
        
    }

    //Добавление слушателей событий
    clearListButton.addEventListener("click", clearList)

    function clearList(){
        productList.innerHTML = ""
        productArray = []
        console.log(productArray);
    }
    

    console.log(productList);
    
    console.log(productArray);
    productType.value = ""
    productName.value = ""
    productCount.value = ""
    
    
}
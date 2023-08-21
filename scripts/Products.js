import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedItem = clickEvent.target
       
        if (clickedItem.dataset.type === "product") {
            const priceOfProduct = (parseFloat(clickedItem.dataset.price).toFixed(2))

            window.alert(`${clickedItem.dataset.name} costs $${priceOfProduct}`)
        }

    }
)

export const Products = () => {
    let html = `<ul>`

    for (const product of products) {
        html += `<li 
            data-type="product" 
            data-id="${product.id}" 
            data-price="${product.price}" 
            data-name="${product.name}"
            >${product.name}
            </li>`
    }

    html += "</ul>"

    return html
}


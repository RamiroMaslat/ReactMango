import products from "./products";

function getProducts() {
    return new Promise((resolve) => {
            setTimeout(()=>{resolve(products)}, 2000)
        }
    )
}

export function getProductById (productId) {
    const requestProduct = products.find(product => product.id === Number(productId))
    const promiseProduct = new Promise((resolve) => {
        setTimeout(() => {resolve(requestProduct)}, 1000)
    })
    return promiseProduct
}

export function getProductByCategory (categParam) {
    const requestedCategory = products.filter(product => product.category === categParam)
    
    const promiseProduct = new Promise((resolve) => {
        resolve(requestedCategory)
    })
    return promiseProduct
}


export default getProducts; 
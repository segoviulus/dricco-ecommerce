import productList from "./productList";

export const customFetch = (time, task) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(task);
        }, time)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productList.find(product => product.id === id));
        }, 2000)
    })
}

export const getProductByCat = (categoria) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productList.filter(product => product.categoria == categoria));
        }, 2000)
    })
}
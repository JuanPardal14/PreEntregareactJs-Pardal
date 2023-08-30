const products = [
    { id: "1", name: "iphone 14", price: 1499, category: "phones" },
    { id: "2", name: "iphone 13", price: 1299, category: "phones" },
    { id: "3", name: "Samsung S23", price: 1399, category: "phones" },
    { id: "4", name: "Notebook Samsung", price: 999, category: "notebooks" },
    { id: "5", name: "MacBook Air", price: 1399, category: "notebooks"},
    { id: "6", name: "Ipad mini", price: 799, category: "tablets" },
    { id: "7", name: "Samsung Table", price: 599, category: "tablets" },
];

export const getProduct = (id) => {
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            const product = products.fin(p => p.id === id)

            if (product) {
                resolve(product)
                } else{
                    reject("No se encontro el producto")
            }
        }, 1000);
        })
    };

export const getProduct = (category) ={
    return new Promise ((resolve) => {
        setTimeout (() =>{
            const productFiltered =category
             ? products.filter(product => product.category === category) 
             : products;
            resolve(productsFiltered)
        },1000);
    });
};
import {db, doc, getDoc, collection, getDocs, query, where, getFirestore, QuerySnapshot} from "firebase/firestore";

const products = [
    { id: "1", name: "iphone 14", price: 1499, category: "phones" },
    { id: "2", name: "iphone 13", price: 1299, category: "phones" },
    { id: "3", name: "Samsung S23", price: 1399, category: "phones" },
    { id: "4", name: "Galaxy book", price: 999, category: "notebooks" },
    { id: "5", name: "MacBook Air", price: 1399, category: "notebooks"},
    { id: "6", name: "Ipad mini", price: 799, category: "tablets" },
    { id: "7", name: "Galaxy tab", price: 599, category: "tablets" },
];

export const getProduct = (id) => {
    return new Promise((resolve , reject)=>{
        const db = getFirestore();

        const itemDoc = doc(db, "items", id);

        getDoc(itemDoc)
            .then((doc) => {
            if (doc.exists()) {
                resolve({id: doc.id, ...doc.data()});
            } else {
                resolve(null)
            }
            });
    
    });
 };

export const getProduct = (categoryId) = {
    return new Promise ((resolve) => {
        const db = getFirestore();

        const itemcollection = collection(db, "items")

        let q
        if (categoryId) {
            q=query(itemcollection, where("categoryId","==",categoryId));
        }   else {
                q = query(itemcollection);
        }

        getDocs(q)
         .then(QuerySnapshot) => {
            const products = QuerySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            resolve(products);
    }});
};

    
         
        
        
        


        
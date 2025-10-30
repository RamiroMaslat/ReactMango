
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc,getDocs, addDoc, collection, query, where } from "firebase/firestore";

 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_APIKEY,
  authDomain: "mangoreact-e28c2.firebaseapp.com",
  projectId: import.meta.env.VITE_FIRESTORE_PROYECT_ID,
  storageBucket: "mangoreact-e28c2.firebasestorage.app",
  messagingSenderId: "452917402273",
  appId: import.meta.env.VITE_FIRESTORE_APP_ID
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app)

export async function getProducts() { 

    const productsRef = collection(db, 'products')
    const documentsSnapshot = await getDocs(productsRef)
    const documents = documentsSnapshot.docs
    const data = documents.map( doc => {return {id: doc.id, ...doc.data()}})    
    return data; 
}

export async function getProductById(idParam) {
    const documentRef = doc(db, 'products', idParam)
    const documentSnapshot = await getDoc(documentRef)
    const docData = documentSnapshot.data()
    return {id: documentSnapshot.id, ...docData}

}

export async function getProductByCategory(categParam){
     const q = query(collection(db, 'products'), where('category', '==', categParam))
    const documentsSnapshot = await getDocs(q)
    const documents = documentsSnapshot.docs
    const data = documents.map( doc => {return {id: doc.id, ...doc.data() }})  
  
    return data

}




export async function createBuyOrder(orderData) {
   
    const ordersRef = collection(db, 'orders')
    const newOrderDoc = await addDoc(ordersRef, orderData)
    return newOrderDoc
}

export default app
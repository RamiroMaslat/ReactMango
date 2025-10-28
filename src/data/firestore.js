
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc,getDocs, addDoc, collection, query, where } from "firebase/firestore";

 

const firebaseConfig = {
  apiKey: "AIzaSyC-wb-kHaSvRFDwMEcQCpxjZ8Ihog4AMhg",
  authDomain: "mangoreact-e28c2.firebaseapp.com",
  projectId: "mangoreact-e28c2",
  storageBucket: "mangoreact-e28c2.firebasestorage.app",
  messagingSenderId: "452917402273",
  appId: "1:452917402273:web:233a9eea51c90be3da2ee0"
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


}

export default app
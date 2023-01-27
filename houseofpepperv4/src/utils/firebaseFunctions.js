import {collection, query, doc, getDoc, getDocs, orderBy, setDoc} from 'firebase/firestore';
import {firestore} from '../firebase.config';


export const getAllFoodItems = async () =>{
    const items = await getDocs(
        query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    )

    return items.docs.map((doc) => doc.data())
}
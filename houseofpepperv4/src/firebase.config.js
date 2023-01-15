import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {

    apiKey: "AIzaSyBB80Y9AEW1AntVvlMI44FCs_bX_QHtTxg",
  
    authDomain: "houseofpepper-9e79a.firebaseapp.com",
  
    databaseURL: "https://houseofpepper-9e79a-default-rtdb.asia-southeast1.firebasedatabase.app",
  
    projectId: "houseofpepper-9e79a",
  
    storageBucket: "houseofpepper-9e79a.appspot.com",
  
    messagingSenderId: "842453718492",
  
    appId: "1:842453718492:web:1fad608a4db78ff9a2ab19",
  
    measurementId: "G-D6BMSHVWDL"
  
  };

  const app = getApps.length >0 ? getApp() : initializeApp(firebaseConfig);
  
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};


  
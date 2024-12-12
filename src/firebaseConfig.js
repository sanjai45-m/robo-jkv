import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAEtOExKy6kpd2xUg72x6Zrl_4cpm4AV_0",
  authDomain: "snews-8ed67.firebaseapp.com",
  databaseURL: "https://snews-8ed67-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "snews-8ed67",
  storageBucket: "snews-8ed67.appspot.com",
  messagingSenderId: "419020799007",
  appId: "1:419020799007:android:4cb0178f867d6eca91292a",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;

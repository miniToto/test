import firebase from "firebase";
import "firebase/storage";
import { useCollectionData } from "react-firebase-hooks/firestore"

const config = {
  apiKey: "AIzaSyC-IlrQmpFkFW7W9nkenEF8os3zwm7Q6vM",
  authDomain: "pagina-oribttas.firebaseapp.com",
  databaseURL: "https://pagina-oribttas.firebaseio.com",
  projectId: "pagina-oribttas",
  storageBucket: "pagina-oribttas.appspot.com",
  messagingSenderId: "577051000090",
  appId: "1:577051000090:web:d3bcb5d643424838",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const storage = firebase.storage();
const firestore = firebase.firestore()

// Te da todos los documentos en una coleccion de firestore
export function GetCollection(str) {
  const Ref = firestore.collection(str)

  // ... espacio para hacer comprobaciones en un futuro

  const [ref] = useCollectionData(Ref, { idField: "id" })
  return ref
}

// Crea un nuevo documento en la coleccion que elijas (pone id automaticamente)
export function CreateDocument(collection, data) {
  firestore.collection(collection).doc().set(data)
}

export function DeleteDocument(collection, doc) {
  firestore.collection(collection).doc(doc).delete()
}

export function EditDocument(collection, doc, data) {
  firestore.collection(collection).doc(doc).set(data)
}

export { storage };
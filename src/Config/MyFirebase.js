import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA8l5uQDV6dmoGHHykqL6mW18LSMy6YJkc",
  authDomain: "career-584aa.firebaseapp.com",
  databaseURL: "https://career-584aa.firebaseio.com",
  projectId: "career-584aa",
  storageBucket: "career-584aa.appspot.com",
  messagingSenderId: "940279764040",
  appId: "1:940279764040:web:664d7c4b387f4f205bf47d",
  measurementId: "G-Q98M9QCZ8G"
}
firebase.initializeApp(config)
firebase.firestore().settings({
  timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()

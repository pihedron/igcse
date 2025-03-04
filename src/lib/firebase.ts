import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, type UserInfo } from 'firebase/auth'
import { collection, doc, getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { writable } from 'svelte/store'

const firebaseConfig = {
  apiKey: "AIzaSyC-oThgBYoCUNOeov8wfpu8xJFZzzrIhWo",
  authDomain: "igcse-8c169.firebaseapp.com",
  projectId: "igcse-8c169",
  storageBucket: "igcse-8c169.firebasestorage.app",
  messagingSenderId: "382392702076",
  appId: "1:382392702076:web:96d1973042402f1a5ae5f9"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

const store = writable<{
  verified: boolean
  user?: UserInfo
}>({
  verified: false
})

auth.onAuthStateChanged(user => {
  if (user === null) {
    console.log(`Logged out`)
    store.set({
      verified: false,
    })
  } else {
    console.log(`Logged in as ${user.displayName}`)
    store.set({
      verified: true,
      user
    })
  }
})

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  db,
  store,
  storage,
}
import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	doc,
	onSnapshot,
	query,
	where,
	orderBy,
	serverTimestamp,
	getDoc,
	updateDoc,
} from 'firebase/firestore';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAYWo0lmvv6iVdrEzrU5RllNgez8q37BzI',
	authDomain: 'fir-9-demo-9311f.firebaseapp.com',
	projectId: 'fir-9-demo-9311f',
	storageBucket: 'fir-9-demo-9311f.appspot.com',
	messagingSenderId: '1088324688712',
	appId: '1:1088324688712:web:083aa754257abab622717d',
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

// collection ref
const colRef = collection(db, 'books');

// // get collection data
// getDocs(colRef)
// 	.then((snapshot) => {
// 		let books = [];
// 		snapshot.docs.forEach((doc) => {
// 			books.push({
// 				...doc.data(),
// 				id: doc.id,
// 			});
// 		});
// 		console.log(books);
// 	})
// 	.catch((e) => console.log(e.message));

// queries
const q = query(
	colRef,
	// where('author', '==', 'Charles Dickens'),
	orderBy('createdAt')
);

// real time collection data
const unsubCol = onSnapshot(q, (snapshot) => {
	let books = [];
	snapshot.docs.forEach((doc) => {
		books.push({
			...doc.data(),
			id: doc.id,
		});
	});
	console.log(books);
});

// adding documents
const addBookForm = document.querySelector('.add');
addBookForm.addEventListener('submit', (e) => {
	e.preventDefault();
	addDoc(colRef, {
		title: addBookForm.title.value,
		author: addBookForm.author.value,
		createdAt: serverTimestamp(),
	}).then(() => {
		addBookForm.reset();
	});
});

// deleting documents
const deleteBookForm = document.querySelector('.delete');
deleteBookForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const docRef = doc(db, 'books', deleteBookForm.id.value);
	deleteDoc(docRef).then(() => {
		deleteBookForm.reset();
	});
});

// get a single document
const docRef = doc(db, 'books', 'rkzZt0JnkDH2ijVEPyB8');
// getDoc(docRef).then((doc) => {
// 	console.log(doc.data(), doc.id);
// });

const unsubDoc = onSnapshot(docRef, (doc) => {
	console.log(doc.data(), doc.id);
});

// update a document
const updateForm = document.querySelector('.update');
updateForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const docRef = doc(db, 'books', updateForm.id.value);
	updateDoc(docRef, {
		title: 'updated title',
	}).then(() => {
		updateForm.reset();
	});
});

// signing users up
const signupForm = document.querySelector('.signup');
signupForm.addEventListener('submit', (e) => {
	e.preventDefault();
	createUserWithEmailAndPassword(
		auth,
		signupForm.email.value,
		signupForm.password.value
	)
		.then((cred) => {
			console.log('user create:', cred.user);
			signupForm.reset();
		})
		.catch((err) => console.log(err.message));
});

// logout users
const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('click', (e) => {
	e.preventDefault();
	signOut(auth)
		.then(() => {
			// console.log('user logged out');
		})
		.catch((err) => console.log(err.message));
});

// login user
const loginButton = document.querySelector('.login');
loginButton.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log(loginButton.email.value, loginButton.password.value);
	signInWithEmailAndPassword(
		auth,
		loginButton.email.value,
		loginButton.password.value
	)
		.then((cred) => {
			// console.log('user logged in:\n', cred.user);
			loginButton.reset();
		})
		.catch((err) => console.log(err.message));
});

// listening to auth changes
const unsubAuth = onAuthStateChanged(auth, (user) => {
	console.log('user status changed :', user);
});

// unsubscribe from changes
const unsubButton = document.querySelector('.unsub');
unsubButton.addEventListener('click', () => {
	console.log('unsubscribing');
	unsubCol();
	unsubDoc();
	unsubAuth();
});

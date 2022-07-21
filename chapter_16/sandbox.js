const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');
// const recipe = document.querySelector('#recipe');

const addRecipe = (recipe, id) => {

    let time = recipe.created_at.toDate();
    let html = `
        <li data-id=${id}>
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `;

    list.innerHTML += html
};

const deleteRecipe = (id) =>{
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if (recipe.getAttribute('data-id') === id) {
            recipe.remove();
        }
    })
}
// // get documents
// db.collection('recipes').get().then((snapshot)=>{
//     // when we have the data
//     snapshot.docs.forEach(doc => {
//         addRecipe(doc.data(), doc.id);
//     });
// }).catch(err => {console.log(err)});

// Real-time Listners
const unsub = db.collection('recipes').onSnapshot(snapshot => {
    // console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
        // console.log(change);
        const doc = change.doc;
        if (change.type === 'added') {
            addRecipe(doc.data(), doc.id);
        }else if (change.type === 'removed') {
            deleteRecipe(doc.id);
        }
    })
});

// add documents
form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(form.recipe.value);
    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection('recipes').add(recipe).then(() => {
        console.log('recipe added');
        form.reset();
    }).catch(err => {console.log(err)});
});

// deleting documents
list.addEventListener('click', e=> {
    // console.log(e.target);
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id');
        // console.log(id);
        db.collection('recipes').doc(id).delete().then(() => {
            console.log('recipe deleted');
        });
    }
});


// unsub from data base changes 
button.addEventListener('click', () => {
    unsub();
    console.log('unsubscribed from collection changes');
});
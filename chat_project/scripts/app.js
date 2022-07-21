// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');

// check localStorage for a name 
const username = localStorage.username ? localStorage.username : 'anon';
const room = localStorage.room ? localStorage.room : 'general';

// class intances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom(room, username);

// add new chats
newChatForm.addEventListener('submit', e =>{
  e.preventDefault();
  const message = newChatForm.message.value.trim()
  chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err));
});

// update chat rooms
rooms.addEventListener('click', e => {
  // console.log(e.target.id);
  if (e.target.tagName === 'BUTTON') {
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats(chats => chatUI.render(chats));
    chatUI.highlightroom(rooms, e.target.getAttribute('id'));
  }
});

// update username
newNameForm.addEventListener('submit', e =>{
  e.preventDefault();
  // update name via the chatroom class
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  // reset the form
  newNameForm.reset();
  // show then hide the update message
  updateMsg.innerHTML= `Your name was changed to <span class="username">${newName}</span>`;
  setTimeout(() => updateMsg.innerHTML = '', 3000);
})

// get chats and render
chatroom.getChats(data => chatUI.render(data));
chatUI.highlightroom(rooms, room);
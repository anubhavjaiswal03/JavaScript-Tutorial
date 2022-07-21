// render chat templates to the DOM
// clear the list of chats (when the room changes)
class ChatUI{
  constructor(list, rooms){
    this.list = list;
    this.rooms = rooms;
  }
  clear(){
    this.list.innerHTML = '';
  }
  render(data){
    const when=dateFns.distanceInWordsToNow(
      data.created_at.toDate(), {addSuffix: true}
    )
    const html = `
      <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${when}</div>
      </li>
    `;
    this.list.innerHTML += html;

  }
  highlightroom(rooms, room)
  {
    console.log(rooms, room);
    // use filter and return a list
    Array.from(rooms.querySelectorAll('.btn')).forEach((btns) => {
      if (btns.id === room) {
        btns.classList.add('selected-room')
      }else{
        btns.classList.remove('selected-room')
      }
    });
  }
}
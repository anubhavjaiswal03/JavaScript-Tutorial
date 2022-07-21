const clock = document.querySelector('.clock');
const zeroPad = (num, places) => String(num).padStart(places, '0')

const tick = () =>{

    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const html = `    
        <span>${zeroPad(h,2)}</span> :
        <span>${zeroPad(m,2)}</span> :
        <span>${zeroPad(s,2)}</span>
    `;
    clock.innerHTML = html;
}

setInterval(tick, 1000);
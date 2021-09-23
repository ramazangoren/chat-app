const socket = io()

socket.on('message', (message)=>{
   console.log(message);
})

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()

     const message = document.getElementById('input').value;

    socket.emit('sendMessage', message)
})
   


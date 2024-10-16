

const myForm = document.querySelector ('#myform');
const nameInput = document.querySelector ('#name');
const emailInput = document.querySelector ('#email');
const msg = document.querySelector('#msg');
const userList = document.querySelector('#users');
const video = document.querySelector('#video');
const video2 = document.querySelector('#video2');
const audio1 = document.querySelector('#audio1');
const audio2 = document.querySelector('#audio2');





myForm.addEventListener('submit', onSubmit);


function onSubmit(e){
    e.preventDefault();
    video.style.display = 'block';

    audio1.currentTime = 0;
    audio1.play();


       const duration = 3000;

    if(nameInput.value === ''|| emailInput.value ==='' ) {
       msg.classList.add ('error');
        msg.innerHTML = 'Please complete all fields';
        setTimeout(() => {
          msg.remove(),    
        video.style.display = 'none';
    audio1.pause();} , 3000);  
     

    
    } else {
        video.style.display = 'none';
        video2.style.display = 'block';
        audio1.pause();
audio2.currentTime = 0;
audio2.play();
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(innerHTML='WELCOME! ' +  `${nameInput.value} : ${emailInput.value}`));
li.style.background =  'rgba(28, 65, 125, 0.5)';
li.style.padding = '10px';
    userList.appendChild(li);
    nameInput.value ='';
    emailInput.value ='';

    
 
    
    }


}

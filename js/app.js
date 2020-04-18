(function(){
//variables
let email= document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    sendBtn = document.getElementById('sendBtn'),
    resetBtn = document.getElementById('resetBtn');




//event listeners
email.addEventListener('blur',validateField);
subject.addEventListener('blur',validateField);
message.addEventListener('blur',validateField);
window.addEventListener('load',appInit);
resetBtn.addEventListener('click',resetForm);
sendBtn.addEventListener('click',sendEmail);





//functions
function appInit(){
    sendBtn.disabled = true;
}



function validateField(){
    let errors,flag = 1;
    validateFieldLength(this);

    if(this.type === 'email'){
        validateEmail(this);
    }

    

      // Both will return errors, then check if there're any errors
      errors = document.querySelectorAll('.error');

      // Check that the inputs are not empty
      if(email.value !== '' && subject.value !== '' && message.value !== '' ) {
           if(errors.length === 0) {
                // the button should be enabled
                sendBtn.disabled = false;
           }
      }



}


function validateFieldLength(field){
    if(field.value.length !== 0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}


function validateEmail(field){
    let emailText = field.value;
    if(emailText.indexOf('@') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');        
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}



function resetForm(e){
    e.preventDefault();
    document.getElementById('email-form').reset();
}


function sendEmail(e){
    e.preventDefault();
    let loadingGif = document.querySelector('#spinner');
    loadingGif.style.display = 'block';
    let emailGif = document.createElement('img');
    emailGif.src = 'img/mail.gif';
    emailGif.style.display = 'block';

    setTimeout(function(){ 
        loadingGif.style.display = 'none';

        document.getElementById('loaders').appendChild(emailGif);
        //showing gif of email
        setTimeout(function(){ 
            emailGif.remove();
            document.querySelector('#email-form').reset();
        }, 5000);
    }, 3000);
}
})();
console.log("fuck");
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validName=true;
let validEmail=true;
let validPhone=true;
$('#failure').hide();
$('#success').show();
name1.addEventListener('blur',()=>{
    console.log("name is blurred");
    //Validating name
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){1,9}$/;
    let str=name1.value;
    // console.log(str);
    if(regex.test(str)){
        console.log("It matched.")
        name1.classList.remove('is-invalid');
        validName=true;
    }
    else{
        name1.classList.add('is-invalid');
        console.log("It didn't match.");
        validName=false;
    }

})
email.addEventListener('blur',()=>{
    console.log("email is blurred");
    //Validating email
    let regex=/^[a-zA-Z]([_a-zA-Z0-9]+)@([a-zA-Z]+)\.[a-zA-Z]{3,10}$/;
    let str=email.value;
    // console.log(str);
    if(regex.test(str)){
        console.log("It matched.")
        email.classList.remove('is-invalid');
        validEmail=true;
    }
    else{
        email.classList.add('is-invalid');
        console.log("It didn't match.");
        validEmail=false;
    }
})
phone.addEventListener('blur',()=>{
    console.log("phone is blurred");
    //Validating phone
    let regex=/[1-9][0-9]{6,9}$/;
    let str=phone.value;
    // console.log(str);
    if(regex.test(str)){
        console.log("It matched.")
        phone.classList.remove('is-invalid');
        validPhone=true;
    }
    else{
        phone.classList.add('is-invalid');
        console.log("It didn't match.");
        valid=false;
        validPhone=false;
    }
})

let submit = document.getElementById('submit');
let failure = document.getElementById('failure');

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('You clicked on submit');
    if(validName&&validEmail&&validPhone){
    success=document.getElementById('success');
    // failure.classList.remove('show');
    success.classList.add('show');
    $('#failure').hide();
    $('#success').show();
}
    else{
        failure=document.getElementById('failure');
        // success.classList.remove('show');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();

        
    }  
    }

)


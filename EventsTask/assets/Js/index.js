

const nameRes=document.querySelector('#resultName');
const surnameRes=document.querySelector('#resultSurname');
const mailRes=document.querySelector('#resultMail');

const nameDiv=document.querySelector(".nameDiv");
const surnameDiv=document.querySelector(".surnameDiv");
const mailDiv=document.querySelector(".mailDiv");


const btn=document.querySelector('.btn');

function validation(name,surname,mail){
    if ( name.length>0 && surname.length>0 && mail.length>0)  {
        return true;
    }
    else if(name.length>0 && surname.length>0){
        addElement(mailDiv,"Please enter mail!")
    }
    else if(surname.length>0 && mail.length>0){
        addElement(nameDiv,"Please enter name!");
    }
    else if(name.length>0 && mail.length>0 ){
        addElement(surnameDiv,"Please enter surname!")
    }
    else{
        alert("Please fulfill gaps");
    }
}

function addElement(main,additional){
    main.innerHTML +=additional;
}

btn.addEventListener("click",()=>{
    const nameInp=document.querySelector('#name').value;
    const surnameInp=document.querySelector('#surname').value;
    const mailInp=document.querySelector('#mail').value;    


    if (validation(nameInp,surnameInp,mailInp)) {
        addElement(nameRes,nameInp);
        addElement(surnameRes,surnameInp);
        addElement(mailRes,mailInp)
    }
    else{
        
    }
})

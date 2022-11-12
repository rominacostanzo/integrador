//cuadros
const student  = document.getElementById ('student')
const trainee = document.getElementById ('trainee')
const junior = document.getElementById ('junior')
const flyers = document.getElementsByClassName ('card')
//console.log (student)
//console.log (junior.className)



//formulario
const form = document.forms.form 
//console.log (form)

const formName = document.getElementById ('name')
const formLastname = document.getElementById ('lastname')
const formMail = document.getElementById ('mail')
const formAmount = document.getElementById ('amount')
const formCategory = document.getElementById ('category')
const formToPay = document.getElementById ('to-pay')

//Botones

const btnDelete = document.getElementById ('delete')
const btnSend = document.getElementById ('send')

//Modal
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');
const modalParagraph = document.querySelector('.modal-paragraph')
//funciones
//function mostrar (){
//console.log (formName.value)
//}

//btnSend.addEventListener ("click", ()=> {mostrar ()
//})

const studentBorder=document.getElementById (`student-border`)
const traineeBorder=document.getElementById (`trainee-border`)
const juniorBorder=document.getElementById (`junior-border`)

let regExpMail= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
let regExpName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let regExpNumber= /^[0-9]$/;


//funciones mouseOver
function flyersOver (flyers){
    flyers.classList.replace ('border-primary','border-warning');
console.log ('over')

}

//funciones mouseLeave
function flyersLeave (flyers){
    flyers.classList.replace ('border-warning','border-primary');
console.log ('leave')
}

//funcion click
function flyersClick (frame){
    frame.classList.replace ('border-warning', 'border-success');

    for (let item of flyers){
        if (item.id !== frame.id){
            item.classList.replace ('border-success', 'border-primary')
        }
    }

    //sincronizacion entre cuadros e input
    if (frame.id==='student-border'){
        formCategory.value='1';
        formToPay.innerHTML=`Total a pagar:   $${unit (discountStudent())}` 
    } else if (frame.id==='trainee-border'){
        formCategory.value='2';
        formToPay.innerHTML=`Total a pagar:   $${unit (discountTrainee())}` 
    } else if (frame.id==='junior-border'){
        formCategory.value='3';
        formToPay.innerHTML=`Total a pagar:   $${unit (discountJunior())}` 
    }
        
}


function asignarEventos (flyers){
    flyers.addEventListener('mouseover', ()=> flyersOver(flyers));
    flyers.addEventListener('mouseleave', ()=>flyersLeave(flyers));
    flyers.addEventListener('click', ()=>flyersClick (flyers))
}

asignarEventos(studentBorder);
asignarEventos (traineeBorder);
asignarEventos (juniorBorder)



function discountStudent (){
    formToPay.value=200-(80*200/100)
    return formToPay.value
}

function discountTrainee(){
    formToPay.value=200-(50*200/100)
    return formToPay.value
}

function discountJunior (){
    formToPay.value=200-(15*200/100)
    return formToPay.value 
}

function unit (discount){
    let multiply=discount*formAmount.value;
    formToPay.innerHTML=`Total a pagar:   $ ${multiply}.-`
    return multiply
    console.log (multiply)
}


student.addEventListener ('mouseover', flyersOver)
student.addEventListener ('mouseleave', flyersLeave)
student.addEventListener ('click', discountStudent)

trainee.addEventListener ('mouseover', flyersOver(traineeBorder))
trainee.addEventListener ('mouseleave', flyersLeave(traineeBorder))
trainee.addEventListener ('click', discountTrainee)

junior.addEventListener ('mouseover', flyersOver (juniorBorder))
junior.addEventListener ('mouseleave', flyersLeave (juniorBorder))
junior.addEventListener ('click', discountJunior)


formCategory.addEventListener('click', ()=>{
    if (formCategory.value==='1'){
        formToPay.innerHTML=`Total a pagar:   $${unit (discountStudent())}`    
    }
    else if (formCategory.value==='2'){
        formToPay.innerHTML=`Total a pagar:   $${unit (discountTrainee ())}`
    }
    else if (formCategory.value==='3'){
        formToPay.innerHTML=`Total a pagar:   $${unit (discountJunior ())}`
    }
    else{
        formToPay.value=200;
        formToPay.innerHTML=`Total a pagar:   $${unit (formToPay.value)}`
        }
        console.log(formToPay.value)
    })
    
formAmount.addEventListener('click',()=> {
    unit (formToPay.value)
})

    btnSend.addEventListener ('click', ()=>{
        if (formName.value===""){
            alert ("El campo nombre debe estar completo");
        } 
        else if (regExpName.test (formName.value)===false){
            alert ("El campo nombre solo admite letras");
        } 
        else if (formLastname.value===""){
            alert ("El campo apellido debe estar completo");
        }
        else if (regExpName.test (formLastname.value)===false){
            alert ("El campo apellido solo admite letras");
        }
        else if (formMail.value===""){
            alert ("El campo mail debe estar completo");
        }
        else if (regExpMail.test (formMail.value)===false){
            alert ("El correo ingresado no es un formato válido");
        }
        else if (formAmount.value===""){
            alert ("El campo cantidad debe estar completo");
        }
        else if (regExpNumber.test (formAmount.value)===false){
            alert ("El campo ingresado debe ser numérico");
        }
        else if (formAmount.value<= 0){
            alert ("El valor debe ser mayor a 0");
        }
        else {
            console.log (formAmount.value)
            console.log(`El valor de su ticket es $ ${unit (formToPay.value)}.-`)
            modal.classList.add ('modal--show'); 
            modalParagraph.innerHTML= `nombre: ${formName.value} ${formLastname.value} 
            Total ${formAmount.value} tickets por un valor total de ${unit (formToPay.value)}`
        }
    })

    btnDelete.addEventListener('click', ()=>{
        formToPay.value=200;
        formToPay.innerHTML=`Total a pagar:   $`
        formCategory.value=`Elija una opcion`
        formAmount.value= `cantidad`
        formName.value= ``
        formLastname.value= ``
        formMail.value= ``
        } )
    

//ventana modal
        
    //const openModal = document.querySelector('.decision');
    
    


    /*openModal.addEventListener ('click',(e)=>{
        e.preventDefault ();
        
    })*/

    closeModal.addEventListener ('click',(e)=>{
        e.preventDefault ();
        modal.classList.remove ('modal--show'); 
    })

   
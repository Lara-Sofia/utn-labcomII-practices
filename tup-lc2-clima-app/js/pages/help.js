// datos mails
const publicKey = 'Vh_p4CZeJI0yBPx3R'; 
const servicedID = 'default_service';
const templateID = 'template_beky1y9';

// Carteles de status para en mail
const successEmail = '<div class="status exito"><span id="bold">Email</span> enviado exitosamente</div>';
const errorEmail = '<div class="status error">Ingrese un <span id="bold">Email</span> válido</div>';
const errorEmailApi = '<div class="status error">Algo fallo en el envío, por favor intente mas tarde</div>';
const errorInputs = '<div class="status error">Debe completar todos los campos</div>';

// Elementos DOM
const statusEmail = document.getElementById('statusEmail');
const emailValue = document.getElementById('email');
const nameValue = document.getElementById('nombre');
const messaje = document.getElementById('messaje');
const form = document.getElementById('contact-form'); //formulario

emailjs.init(publicKey);

window.onload = function() {
    form.addEventListener('submit', function(event) {
        
        statusEmail.innerHTML = loader;                
        
        if (validarEmail(emailValue.value) && nameValue.value != "" && messaje.value != "") {
            event.preventDefault();
            emailjs.sendForm(servicedID, templateID, this)            
            .then(function() {
                statusEmail.innerHTML = successEmail;
            }, function(error) {
                statusEmail.innerHTML = errorEmailApi;
            });
        }else{
            if (nameValue.value == "" || messaje.value == "") {
                statusEmail.innerHTML = errorInputs;
            }else{
                statusEmail.innerHTML = errorEmail;
            }
        } 
    });}

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);    
    }

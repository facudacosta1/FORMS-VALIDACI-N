//                        SCRIPT DE BOOTSTRAP PARA MOSTRAR MENSAJES DE VALIDACIÓN
//----------------------------------------------------------------------------------------------------------
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  //--------------------------------------------------------------------------------------------------------


  let terminos = document.getElementById('terminos');
  let terminosForm = document.getElementById('terminosForm');
  let feedbackEnModal = document.getElementById('feedbackEnModal');

  
//                                EVENTO CHANGE BTN CHECK DENTRO DEL MODAL 
//---------------------------------------------------------------------------------------------------------
//Objetivo:-Validar al input check "Términos del servicio" (d-none y required)
//         -Add clase d-block al feedback negative del input check
  terminos.addEventListener('change', function () {
    if (terminos.checked) {
      terminosForm.checked = true;
      feedbackEnModal.classList.remove('d-block');
    } else {
      terminosForm.checked = false;
      feedbackEnModal.classList.add('d-block');
    }
  });

  //                                FUNCION CONFIRMAR CONTRASEÑA 
//---------------------------------------------------------------------------------------------------------

  function validateConfirmPassword(inputId) {
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    //Evalúa si las contraseñas son iguales
    if (password1.value !== password2.value) {
      password2.setCustomValidity("Las contraseñas no coinciden"); //mensaje de error si no lo son
    } else {
      password2.setCustomValidity("");
    }
  }

  //                                  ENVENTO CHANGE AL INPUT PASSWORD 2 
  //----------------------------------------------------------------------------------------------------------
  let password2 = document.getElementById('password2');
  password2.addEventListener('change',function(){ //Cuando cambie el valor del password2
    validateConfirmPassword('password2');//Valida igualdad de contraseñas
  })


  //                                  ENVENTO SUBMIT AL FORMULARIO
  //----------------------------------------------------------------------------------------------------------
  document.getElementById('formulario').addEventListener('submit', function(event) {
    validateConfirmPassword('password2'); //Valida igualdad de contraseñas
    
    const password2 = document.getElementById('password2');
    const terminosForm = document.getElementById('terminosForm');

    //Evalua las contraseñas y si el formulario está lleno
    //Si esta incorrecto---
    if (!password2.checkValidity() || !terminosForm.checkValidity()) {
      event.preventDefault(); //--Evita la función de submit
    } else { // si coinciden contraseñas y el formulario esta validado 100%
            // Muestra el mensaje de éxito
            const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
            const appendAlert = (message, type) => {
              const wrapper = document.createElement('div');
              wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                `<div>${message}</div>`,
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
              ].join('');
          
              alertPlaceholder.innerHTML = ''; // Limpia mensajes anteriores
              alertPlaceholder.append(wrapper);
            };
          
            appendAlert('Formulario enviado con éxito', 'success');
            setTimeout(function() { // Recarga la página luego de 1 segundo de enviado
                window.location.reload();
              }, 2000); 
        }    
    }
  );
  
  
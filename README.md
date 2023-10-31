# VALIDACIÓN DE FORMULARIOS

## Objetivo: aprender a validar campos de formularios basado en ejercicio 16.2.1. Actividad del Taller de JAP.
### Temas: 
- Forms
- Validations.
- Atributos: novalidate.
- Status: valid / invaid.
- methods: setCustomValidity() y checkValidity()
- Events: submit, methods: preventDefault() y stopPropagation(), change
- Bootstrap: validation, feedback, modal.
- Modals in forms.
- event.preventDefault() 
- event.stopPropagation()
- setTimeout()
- window.location.reload()

### Ejercicio:
El formulario deberá enviarse solamente si cumple con los criterios definidos:

- Ningún campo puede estar vacío
- El Email debe tener un formato valido
- La contraseña debe tener al menos 6 caracteres
- Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales
Se debe haber marcado el checkbox "Acepto los términos y condiciones del servicio" (en este caso dentro de un modal).

- Deberá darse feedback al usuario cumpliendo con los siguientes criterios:
Solamente se dará feedback al usuario, luego de que se intente ejecutar el submit, momento en el que se deberá mostrar el resultado de la validación para todos los campos.
Luego de ese momento, el feedback deberá funcionar en tiempo real para todos los casos.
Para cada caso, deberá alertarse al menos a través de un aviso que especifique la omisión y del color del borde del campo.
El campo "Repetir contraseña" solo se validará cuando se cumpla que su valor sea igual al del campo "Contraseña" y que el campo "Contraseña" se encuentre validado. Por lo que se mostrará como invalido mientras no se valide "Contraseña", aún cumpliéndose la igualdad.
El checkbox de los terminos y condiciones deberá dar feedback en 3 lugares:
  - El mismo checkbox, dentro del modal
  - El botón que despliega el modal
  - Un texto al lado del mismo botón

 ### REFLEXIÓN DE LA SOLUCIÓN:

El ejercicio puede resolverse mediante diferentes métodos.
BT: Bootstrap.

La clase de BT **"needs-validation"** aplicada al form habilita la función de validación de formularios mediante HTML5 (lo hace mediante las pseudoclases CSS **:invalid** y **:valid** que se aplican a elementos como <input>, <select> y <textarea>). BT lo hace mediante la clase was-validated que se aplica generalmente al <form> y permite controlar cuando se se aplican los estilos (al submit del form).

Las clases **.is-valid** y **.is-invalid** también se utilizan para validación del lado del servidor.

El atributo **novalidate** permite desactivar la validación predeterminada del navegador. Se utiliza para desactivar la validación predeterminada y usar una personalizada (ej con BT).

Las clases **valid-feedback** e **invalid-feedback** se utilizan para mostrar un feedback sobre el campo del formualario. Se aplican a un div debajo del input deseado.

El atributo **required** aplicado a un input del form sirve para requerir que se complete el campo para poder hacer submit al form.

El atributo **minlength** se puede aplicar a un input text para solicitar un mínimo de longitud del texto para hacer submit al form.

El atributo **disabled** desactiva un campo de formulario, impidiendo que el usuario interactúe con él.

El atributo **checked** se aplica a radio o checkbox para mantener seleccionado dicho radio o checkbox.

El **evento change** en JavaScript es un evento que se dispara cuando el valor de un elemento de formulario cambia de estado, como un campo de entrada (<input>), un elemento select, o un campo de casilla de verificación (<input type="checkbox> o <input type="radio>).

La **función setTimeout** en JavaScript se utiliza para programar la ejecución de una función o un fragmento de código después de un retraso específico en milisegundos. 

**window.location.reload()** es una función para recargar la página web actual.

**window.location.href** es una función para redireccionar a otro link. Ej: window.location.href = "https://www.ejemplo.com";

El **método .checkValidity()** comprueba si el elemento tiene restricciones y si las cumple. Si el elemento no cumple sus restricciones, el navegador lanza un evento cancelable invalid (en-US) al momento y luego devuelve false. Ej: var result = selectElt.checkValidity();

El **metodo .setCustomValidity()** define el mensaje de validación (feedback mediante JS) personalizado para el elemento seleccionado con el mensaje.

**preventDefault()** Se utiliza para detener el comportamiento predeterminado de un evento. Por ejemplo, si tienes un enlace (<a>) y deseas evitar que se abra una nueva página cuando se hace clic, puedes usar event.preventDefault() para detener esa acción predeterminada.

**stopPropagation()**: Se utiliza para detener la propagación de un evento a través del DOM (Modelo de Objetos del Documento). Esto significa que si tienes elementos anidados y un evento se dispara en un elemento hijo, puedes usar event.stopPropagation() para evitar que el evento se propague a los elementos padre. Ejemplo: un div con event click y un button dentro con evento click: si tocamos el button se disparan ambos eventos, pero si agregamos event.stopPropagation() al evento del boton impide que se active el evento del contenedor.

## SOLUCION A MODAL DENTRO DE UN FORM

Colocar el boton del modal dentro del label de un input checkbox con display-none y atributo required y mediante JS asociar el input dentro del modal para modificar el atributo **checked** al hacer checked en el modal.




  
 



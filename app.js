const passwordEnPantalla = document.getElementById('text-copy');
const generar = document.getElementById('generar');
const copiar = document.getElementById('copy');
const longitud = document.getElementById('longitud');
const aviso = document.getElementById('aviso');
var copied = new Audio('StylesElement/Copied.mp3')

function GenerarPassword() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+123456789';
  let password = '';
  var ValueLong = longitud.value;

  if (ValueLong < 6) {
    aviso.style.visibility = 'visible';
    for (let i = 0; i < ValueLong; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      password += caracteres.charAt(indice);
    }
    passwordEnPantalla.value = password;
  } else {
    aviso.style.visibility = 'hidden';
    for (let i = 0; i < ValueLong; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      password += caracteres.charAt(indice);
    }
    passwordEnPantalla.value = password;
  }
}

generar.addEventListener("click", GenerarPassword);
copiar.addEventListener("click", ()=> {
  var passwordForCopy = passwordEnPantalla.value;

  navigator.clipboard.writeText(passwordForCopy)
  .then(() => {
    console.log('Contraseña copiada con exito');
    copied.play()
  })
  .catch(err => {
    console.error('Error al copiar la contraseña:', err);
  });

  copiar.style.cursor = 'not-allowed';
  copiar.style.backgroundColor = 'gray';
  copiar.disabled = true;
  setTimeout(() => {
    copiar.disabled = false;
    copiar.style.backgroundColor = 'steelblue';
    copiar.style.cursor = 'pointer';
  }, 2000)
})
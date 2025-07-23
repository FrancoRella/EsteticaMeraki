document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const nombre = document.querySelector('input[name="Nombre"]').value.trim();
    const apellido = document.querySelector('input[name="Apellido"]').value.trim();
    const fechaNacimiento = document.querySelector('input[name="Edad"]').value;

    if (!email || !password) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    //lista de usuarios desde localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Validamos si el usuario ya existe
    const exists = users.some(user => user.email === email);
    if (exists) {
      alert("Este correo ya está registrado.");
      return;
    }

    // Creamos nuevo usuario
    const newUser = { email, password, nombre, apellido, fechaNacimiento };
    users.push(newUser);

    //lista actualizada en localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert("Usuario registrado exitosamente");

    // Redireccion al login
    window.location.href = 'Login.html';
  });
});
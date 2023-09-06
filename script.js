document.addEventListener("DOMContentLoaded", function () {
    
    const personForm = document.getElementById("personForm");
  
    
    personForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      
      const name = document.getElementById("name").value;
      const lastName = document.getElementById("lastName").value;
      const birthDate = document.getElementById("birthdate").value;
  
      // Creamos un objeto con la información del formulario
      const personData = {
        Nombre: name,
        Apellido: lastName,
        'Fecha de Nacimiento': birthDate,
      };
  
      // Convertimos este objeto a JSON
      const jsonData = JSON.stringify(personData);
  
      // Enviamos los datos
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST", // Usamos el método POST para enviar datos
        headers: {
          "Content-Type": "application/json", // Indicamos que estamos enviando datos en formato JSON
        },
        body: jsonData, // Aquí van los datos del formulario en formato JSON
      })
        .then((response) => response.json()) // Obtenemos la respuesta del servidor
        .then((data) => {
          console.log("¡Registro exitoso!", data);
          alert("¡Registro exitoso! Consulta la consola para ver la respuesta.");
        })
        .catch((error) => {
          console.error("Error al enviar datos:", error);
        });
    });
  });
  
// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    name: `${name}`,
    email: `${email}`,
  }),
  
})
.then(function(response){
    return response.json();
})
.then(function (object) {
    const idElement = document.createElement('p');
      const idText = document.createTextNode(`ID: ${object.id}`);
      idElement.appendChild(idText);
      document.body.appendChild(idElement);
  })
  .catch(function (error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
    const errorElement = document.createElement('p');
      const errorText = document.createTextNode(`Error: ${error.message}`);
      errorElement.appendChild(errorText);
      document.body.appendChild(errorElement);
  });
}
;

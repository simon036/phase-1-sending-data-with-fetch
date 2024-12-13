// Add your code here

const submitData = (name, email) => {
    const url = "http://localhost:3000/users";
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const body = JSON.stringify({ 
        name, email 
    });
    const request = fetch(url, {
        method: 'POST',
        headers, 
        body 
    });
    return request
    .then(response => {
    return response.json();
    })
      .then(data => {
        const id = data.id;
        //Appending the new id to the DOM
        const element = document.createElement("div");
        element.textContent = `New user ID: ${id}`;
        document.body.appendChild(element);
      })
      .catch(error => {
        //Appending the error message to the DOM
        const errorMessageElement = document.createElement("div");
        errorMessageElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessageElement);
      });
};
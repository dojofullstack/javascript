

// peticiones HTTP

const API = 'https://dummyjson.com/users';




fetch(API)
.then(res => res.json())
.then(data => {
    console.log(data);

    let totalUsersHTML = '';

    data.users.forEach(element => {
        
        let usuario = `<div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${element['image']}" alt="Card image cap">
          <div class="card-body">
          <h5 class="card-title">${element.firstName}</h5>
          <p class="card-text">${element.email}</p>
          <a href="#" class="btn btn-primary">Price: ${element.university}</a>
        </div>
      </div>`;
    
      totalUsersHTML += usuario;


    });

    document.querySelector('#usuarios').innerHTML = totalUsersHTML;

})
.catch(error => console.log(error));
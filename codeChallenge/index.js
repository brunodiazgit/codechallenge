let btn = document.getElementById("btn");
let namex = document.getElementById("name");
let surename = document.getElementById("surename");
let fecha = document.getElementById("date");

btn.addEventListener("click", function(event){
    event.preventDefault();
    const datos = {
        name: namex.value,
        username: surename.value,
        date: date.value,
      }
    
      const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
        };
    
    
            
            fetch('https://jsonplaceholder.typicode.com/posts', options)
              .then(data => {
                  if (!data.ok) {
                    throw Error(data.status);
                   }
                   return data.json();
                  }).then(data => {
                  console.log(data);
                
                  }).catch(e => {
                  console.log(e);
                  });       

});



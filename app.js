// getinfo();
// async function getinfo(){
        

    

//     try{
//         const message = await fetch('./perros.json');
//         const data = await message.json();
//         console.log(data);

//         const info = data[0];
//         const {author , quote} = info
//         // console.log(author);
//         // console.log(quote);

//         tarjetas.innerHTML = `
//          <div class="Tarjeta">
//                             <div class="Tarjeta-Icons">
//                     <button class="Tarjeta-Button"><img src="./img/edit.svg" alt="">Edit</button>
//                     <button class="Tarjeta-Button"><img src="./img/delete.svg" alt="">Delete</button>
//                 </div>
//                 <div class="Tarjeta-Img">
//                     <img src="./img/perro1.jfif" alt="">
//                 </div>
//                 <div class="Tarjeta-Info">
//                     <h2 class="Tarjeta-Info-Nombre">${info.name}</h2>
//                     <div class="Tarjeta-Info-Contenedor1">
//                         <p class="Tarjeta-Info-Dato">${info.phone}</p>
//                         <p class="Tarjeta-Info-Dato">|</p>
//                         <p class="Tarjeta-Info-Dato">${info.user}</p>
//                     </div>
//                     <p class="Tarjeta-Info-Pais">${info.pais}</p>
//                     <p class="Tarjeta-Info-Texto">${info.text}</p>
//                 </div>
//                         </div>

//         <div class="Tarjeta">
//                             <div class="Tarjeta-Icons">
//                     <button class="Tarjeta-Button"><img src="./img/edit.svg" alt="">Edit</button>
//                     <button class="Tarjeta-Button"><img src="./img/delete.svg" alt="">Delete</button>
//                 </div>
//                 <div class="Tarjeta-Img">
//                     <img src="./img/perro1.jfif" alt="">
//                 </div>
//                 <div class="Tarjeta-Info">
//                     <h2 class="Tarjeta-Info-Nombre">${info.name}</h2>
//                     <div class="Tarjeta-Info-Contenedor1">
//                         <p class="Tarjeta-Info-Dato">${info.phone}</p>
//                         <p class="Tarjeta-Info-Dato">|</p>
//                         <p class="Tarjeta-Info-Dato">${info.user}</p>
//                     </div>
//                     <p class="Tarjeta-Info-Pais">${info.pais}</p>
//                     <p class="Tarjeta-Info-Texto">${info.text}</p>
//                 </div>
//                         </div>
//                     `
        
        
                
//     } catch (error){
//         console.log(error);
//     }

    

// }


document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos(){
    // console.log("Dento de la funcion");

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', './perros.json', true)

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            // console.log(datos);

            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
                // console.log(item);
                res.innerHTML += `
                <div class="Tarjeta">
                            <div class="Tarjeta-Icons">
                    <button class="Tarjeta-Button"><img src="./img/edit.svg" alt="">Edit</button>
                    <button class="Tarjeta-Button"><img src="./img/delete.svg" alt="">Delete</button>
                </div>
                <div class="Tarjeta-Img">
                    <img src="${item.photo}" alt="">
                </div>
                <div class="Tarjeta-Info">
                    <h2 class="Tarjeta-Info-Nombre">${item.name}</h2>
                    <div class="Tarjeta-Info-Contenedor1">
                        <p class="Tarjeta-Info-Dato">${item.phone}</p>
                        <p class="Tarjeta-Info-Dato">|</p>
                        <p class="Tarjeta-Info-Dato">${item.user}</p>
                    </div>
                    <p class="Tarjeta-Info-Pais">${item.pais}</p>
                    <p class="Tarjeta-Info-Texto">${item.text}</p>
                </div>
                
                
                `
            }

        }
    }
}
import { feedButton, petButton, removeButton, adventureButton, createModal } from '../main.js'
import { dinos } from '../Data/dinosaurs.js'
const buildCards = () => {
    $("#kennelCards").html("");
    dinos.forEach((dino) => {
      if (dino.health > 30) {
        $("#kennelCards").append(`
         <div class="dinosaur" id="card${dino.id}">
         <h2>${dino.name}</h2>
         <img src=${dino.imageUrl} alt="pet image"/>
         <p>OWNER: ${dino.owner}</p>
         <p>AGE: ${dino.age}</p>
         <p>ID: ${dino.id}</p>
         <div class="progress">
         <div class="progress-bar bg-success" role="progressbar" style="width: ${dino.health}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Health: ${dino.health}
         </div>
         </div>
         <button type="button" class="btn btn-primary" id="adventure${dino.id}">Adventure!</button>
         <button type="button" class="btn btn-success" id="feed${dino.id}">Feed!</button>
         <button type="button" class="btn btn-danger" id="remove${dino.id}">Remove!</button>
         <button type="button" class="btn btn-warning" id="pet${dino.id}">Pet!</button>
         <button type="button" class="btn btn-info" data-toggle="modal" data-target="#info${dino.id}">Info!</button>
         <footer>TYPE: ${dino.type}</footer>
         </div>`);
        feedButton(dino.id);
        adventureButton(dino.id);
        removeButton(dino.id);
        petButton(dino.id);
        createModal(dino.id);
      }
    });
    $("#hospitalCards").html("");
    dinos.forEach((dino) => {
      if (dino.health < 30 && dino.health > 0) {
        $("#hospitalCards").append(`
         <div class="dinosaur" id="card${dino.id}">
         <h2>${dino.name}</h2>
         <img src=${dino.imageUrl} alt="pet image"/>
         <p>OWNER: ${dino.owner}</p>
         <p>AGE: ${dino.age}</p>
         <p>ID: ${dino.id}</p>
         <div class="progress">
         <div class="progress-bar bg-success" role="progressbar" style="width: ${dino.health}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Health: ${dino.health}
         </div>
         </div>
         <button type="button" class="btn btn-primary" id="adventure${dino.id}">Adventure!</button>
         <button type="button" class="btn btn-success" id="feed${dino.id}">Feed!</button>
         <button type="button" class="btn btn-danger" id="remove${dino.id}">Remove!</button>
         <button type="button" class="btn btn-warning" id="pet${dino.id}">Pet!</button>
         <button type="button" class="btn btn-info" data-toggle="modal" data-target="#info${dino.id}">Info!</button>
         <footer>TYPE: ${dino.type}</footer>
         </div>`);
         feedButton(dino.id);
         adventureButton(dino.id);
         removeButton(dino.id);
         petButton(dino.id);
         createModal(dino.id);
      }
    });
    $("#graveCards").html("");
    dinos.forEach((dino) => {
      if (dino.health <= 0) {
        $("#graveCards").append(`
         <div class="dinosaur" id="card${dino.id}">
         <h2>${dino.name}</h2>
         <img src=${dino.imageUrl} alt="pet image"/>
         <p>OWNER: ${dino.owner}</p>
         <p>AGE: ${dino.age}</p>
         <p>ID: ${dino.id}</p>
         <div class="progress">
         <div class="progress-bar bg-success" role="progressbar" style="width: ${dino.health}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Health: ${dino.health}
         </div>
         </div>
         <button type="button" class="btn btn-primary" id="adventure${dino.id}" disabled>Adventure!</button>
         <button type="button" class="btn btn-success" id="feed${dino.id}" disabled>Feed!</button>
         <button type="button" class="btn btn-danger" id="remove${dino.id}">Remove!</button>
         <button type="button" class="btn btn-warning" id="pet${dino.id}" disabled>Pet!</button>
         <button type="button" class="btn btn-info" data-toggle="modal" data-target="#info${dino.id}">Info!</button>
         <footer>TYPE: ${dino.type}</footer>
         </div>`);
         removeButton(dino.id);
         createModal(dino.id);
        
      }
    });
  };
export { buildCards }
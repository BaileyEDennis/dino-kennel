import { dinos } from './Data/dinosaurs.js'
import { adventures } from './Data/adventures.js'
import { buildForm } from './Helpers/addform.js'
import { buildCards } from './Helpers/BuildCards.js'
import {getFormData} from './Helpers/addform.js'




// DINO ADVENTURES!
const dinoAdventure = () => {
  let randomAdventure = adventures[Math.floor(Math.random() * adventures.length)];
  return randomAdventure;  
}


// DINO BUTTON EVENTS
const feedButton = (id) => {
  $(`#feed${id}`).on("click", () => {
    let mydino = dinos.find((c) => c.id === id);
    mydino.health += 10;
    buildCards();
  });
}
const petButton = (id) => {
  $(`#pet${id}`).on("click", () => {
    let mydino = dinos.find((c) => c.id === id);
    mydino.health += 1;
    buildCards();
  });
}
const removeButton = (id) => {
  $(`#remove${id}`).on("click", () => {
    $(`#card${id}`).remove();
  });
}
const adventureButton = (id) => {
  $(`#adventure${id}`).on("click", () => {
    let mydino = dinos.find((c) => c.id === id);
    let adv = dinoAdventure();
    mydino.health -= adv.healthHit;    
    mydino.adventures.push(adv).title;
    buildCards();
});
};

const createModal = (id) => {
  let mydino = dinos.find((c) => c.id === id);
  $("#kennel").append(`
    <div class="modal fade" id="info${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${mydino.name}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" id="quest${id}">
        </div>
      </div>
    </div>
  </div>
    `);
  mydino.adventures.forEach((adv) => {
    $(`#quest${id}`).append(`
          <tr>
          <th class="date" scope="row">${Date()}</th>
          <th class="activity" scope="row">${adv.title}</th>
         </tr>`);
  });
};

// INIT FUNCTION
const init = () => {
  buildForm();
  buildCards();
  document
    .getElementById("submitButton")
    .addEventListener("click", getFormData);
};
init();

export { feedButton, petButton, removeButton, adventureButton, createModal }
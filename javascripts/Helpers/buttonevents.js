import { dinos } from "../Data/dinosaurs.js";
import { buildCards } from "./BuildCards.js";
import { adventures } from "../Data/adventures.js";

const feedButton = (id) => {
  $(`#feed${id}`).on("click", () => {
    let mydino = dinos.find((c) => c.id === id);
    mydino.health += 10;
    buildCards();
  });
};
const petButton = (id) => {
  $(`#pet${id}`).on("click", () => {
    let mydino = dinos.find((c) => c.id === id);
    mydino.health += 1;
    buildCards();
  });
};
const removeButton = (id) => {
  $(`#remove${id}`).on("click", () => {
    let mydino = dinos.find((c) => c.id === id);
    $(`#card${id}`).remove();
    dinos.splice(mydino, 1);
  });
};
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
        <img src=${mydino.imageUrl} alt="pet image"/>
          <h5 class="modal-title" id="exampleModalLabel">${mydino.name}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" id="quest${id}">
          <div class="row">
            <div class="col-sm-9">
              <td>Time: </td>
            </div>
            <div class="row">
              <div class="col-sm-9">
                <td>Activity: </td>
              </div>
            </div>  
        </div>
      </div>
    </div>
  </div>
    `);
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  mydino.adventures.forEach((adv) => {
    $(`#quest${id}`).append(`
      <div class="row">
        <div class="col-sm-9">
          <td>${hours}:${minutes}:${seconds}</td>
        </div>
      <div class="row">
        <div class="col-sm-9">
          <td>${adv.title}</td>
        </div>
        </div>  
      </div>`);
  });
};

const dinoAdventure = () => {
  let randomAdventure =
    adventures[Math.floor(Math.random() * adventures.length)];
  return randomAdventure;
};

export { feedButton, petButton, removeButton, adventureButton, createModal };

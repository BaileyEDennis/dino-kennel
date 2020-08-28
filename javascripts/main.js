import { dinos } from './Data/dinosaurs.js'
import { adventures } from './Data/adventures.js'


// FORM
const buildForm = () => {
  let domString = "";
  domString += `<form>`;
  domString += `<div class="form-group">`;
  domString += `<label for="exampleInputEmail1">Name</label>`;
  domString += `<input type="text" class="form-control" id="newDinoName" aria-describedby="emailHelp" placeholder="Enter name">`;
  domString += `</div>`;
  domString += `<div class="form-group">`;
  domString += `<label for="exampleInputPassword1">Age</label>`;
  domString += `<input type="text" class="form-control" id="newDinoAge" placeholder="Enter age">`;
  domString += `</div>`;
  domString += `<div class="form-group">`;
  domString += `<label for="exampleInputEmail1">Owner</label>`;
  domString += `<input type="text" class="form-control" id="newDinoOwner" aria-describedby="emailHelp" placeholder="Enter owner">`;
  domString += `</div>`;
  domString += `</form>`;
  domString += `<div class="form-group">`;
  domString += `<label for="exampleInputEmail1">Type</label>`;
  domString += `<input type="text" class="form-control" id="newDinoType" aria-describedby="emailHelp" placeholder="Enter type">`;
  domString += `</div>`;
  domString += `<div class="form-group">`;
  domString += `<label for="exampleInputEmail1">Image</label>`;
  domString += `<input type="text" class="form-control" id="newDinoPic" aria-describedby="emailHelp" placeholder="Enter image url">`;
  domString += `</div>`;
  domString += `<button type="submit" class="btn btn-primary" id="submitButton">Submit</button>`;
  printToDom("formHere", domString);
};

// BUILDING THE CARDS
const buildCards = () => {
  $("#kennelCards").html("");
  dinos.forEach((dino) => {
    if (dino.health > 30) {
      $("#kennelCards").append(`
       <div class="dinosaur">
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
      cardButtons(dino.id);
      createModal(dino.id);
    }
  });
  $("#hospitalCards").html("");
  dinos.forEach((dino) => {
    if (dino.health < 30 && dino.health > 0) {
      $("#hospitalCards").append(`
       <div class="dinosaur">
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
      cardButtons(dino.id);
      createModal(dino.id);
    }
  });
  $("#graveCards").html("");
  dinos.forEach((dino) => {
    if (dino.health <= 0) {
      $("#graveCards").append(`
       <div class="dinosaur">
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
      cardButtons(dino.id);
      createModal(dino.id);
    }
  });
};
// PRINT TO DOM FUNCTION
const printToDom = (divID, textToPrint) => {
  const selectedDiv = document.getElementById(divID);
  selectedDiv.innerHTML = textToPrint;
};
// GET DATA FROM FORM FUNCTION
const getFormData = () => {
  const id = `dino${dinos.length + 1}`;
  const name = $("#newDinoName").val();
  const type = $("#newDinoType").val();
  const age = $("#newDinoAge").val();
  const owner = $("#newDinoOwner").val();
  const adventures = [];
  const health = Math.floor(Math.random() * 100);
  const imageUrl = $("#newDinoPic").val();
  dinos.push({
    id: id,
    name: name,
    type: type,
    age: age,
    owner: owner,
    adventures: adventures,
    health: health,
    imageUrl: imageUrl,
  });
  buildCards(dinos);
  $("#newDinoName").val("");
  $("#newDinoType").val("");
  $("#newDinoAge").val("");
  $("#newDinoOwner").val("");
  $("#newDinoPic").val("");
};

// DINO ADVENTURES!
const dinoAdventure = () => {
  let randomAdventure = adventures[Math.floor(Math.random() * adventures.length)];
  return randomAdventure;  
}


// DINO BUTTON EVENTS
const cardButtons = (id) => {
  $(`#feed${id}`).on("click", () => {
    let mydino = dinos.find((c) => c.id === id);
    mydino.health += 10;
    buildCards();
  });
  $(`#pet${id}`).on("click", () => {
    let mydino = dinos.find((c) => c.id === id);
    mydino.health += 1;
    buildCards();
  });
  $(`#remove${id}`).on("click", () => {
    let mydino = dinos.find((c) => c.id === id);
    dinos.splice(dinos, 1);
    $(`remove${id}`).remove();
    buildCards();
  });
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
        <div class="modal-body" id="advInfo">
        </div>
      </div>
    </div>
  </div>
    `);
  mydino.adventures.forEach((adv) => {
    $('#advInfo').append(` <tr>
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

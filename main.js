// TODO: Figure out how to target ID"s Created by DOM loop.
const dinos = [
  {
    id: "dino1",
    name: "Rex",
    type: "T Rex",
    age: 100,
    owner: "Jacob",
    adventures: [],
    health: 92,
    imageUrl:
      "https://www.fieldandstream.com/resizer/8xkluKAxQZsEHJKj6qwyU0mLhTo=/760x448/filters:focal(458x270:459x271)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/TQFN3CD5DAEM4DL2ACD42ZJ5E4.png",
  },
  {
    id: "dino2",
    name: "Steve",
    type: "Velociraptor",
    age: 1,
    owner: "Jacob",
    adventures: [],
    health: 1,
    imageUrl: "https://i.ebayimg.com/images/g/61UAAOSweNpdmtI2/s-l640.png",
  },
  {
    id: "dino3",
    name: "Susan",
    type: "stegosaurus",
    age: 55,
    owner: "Jacob",
    adventures: [],
    health: 0,
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-320-80.jpg",
  },
  {
    id: "dino4",
    name: "Barry",
    type: "Brontosaurus",
    age: 100,
    owner: "Abbey",
    adventures: [],
    health: 100,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdwStkbEdq9w4OQQz2HzAa__CRqPXodxIcgw&usqp=CAU",
  },
  {
    id: "dino5",
    name: "Steph",
    type: "Spinosaurus",
    age: 100,
    owner: "Dr. T",
    adventures: [],
    health: 75,
    imageUrl:
      "https://cdn1.bigcommerce.com/n-yp39j5/ujq6o/products/1060/images/2390/Papo_Spinosaurus_2019_DansDinosaurs__69805.1552618774.1280.1280.jpg?c=2",
  },
  {
    id: "dino6",
    name: "Tim",
    type: "Talarurus",
    age: 100,
    owner: "Dr. T",
    adventures: [],
    health: 55,
    imageUrl:
      "https://vignette.wikia.nocookie.net/dinosaurs/images/2/2b/TalarurusInfobox.png/revision/latest/scale-to-width-down/340?cb=20150512165226",
  },
  {
    id: "dino7",
    name: "Tracy",
    type: "Triceratops",
    age: 100,
    owner: "Abbey",
    adventures: [],
    health: 0,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81Wsvp2M7iL._AC_SX425_.jpg",
  },
  {
    id: "dino8",
    name: "Percy",
    type: "Pterodactyl",
    age: 10,
    owner: "Jacob",
    adventures: [],
    health: 10,
    imageUrl: "https://images.dinosaurpictures.org/3_pterodactyl_63be.jpg",
  },
  {
    id: "dino9",
    name: "Betty",
    type: "brontosaurus",
    age: 22,
    owner: "Dr. T",
    adventures: [],
    health: 22,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOdrC7hlvBawFQ7g8vgwHcfQphX5WfeN2bth0dvc4M2oxNGdSD",
  },
];
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
      // CREATE A FUNCTION THAT RENDERS MODAL TO DOM
      // GIVE THAT MODAL ID = info${dino.id}
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
      // CREATE A FUNCTION THAT RENDERS MODAL TO DOM
      // GIVE THAT MODAL ID = info${dino.id}
      createModal(dino.id);
    }
  });
  $("#graveCards").html("");
  dinos.forEach((dino) => {
    if (dino.health === 0) {
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
      // CREATE A FUNCTION THAT RENDERS MODAL TO DOM
      // GIVE THAT MODAL ID = info${dino.id}
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
};

const createModal = (id) => {
  $("#kennel").append(`
    <div class="modal fade" id="info${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    `);
  let mydino = dinos.find((c) => c.id === id);
  mydino.adventures.forEach((adv) => {});
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

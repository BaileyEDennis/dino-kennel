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
  let domString = "";
  let domString2 = "";
  let domString3 = "";

  for (let i = 0; i < dinos.length; i++) {
    if (dinos[i].health > 30) {
      domString += `<div class="dinosaur">`;
      domString += `<h2>${dinos[i].name}</h2>`;
      domString += `<img src=${dinos[i].imageUrl} alt="pet image"/>`;
      domString += `<p>OWNER: ${dinos[i].owner}</p>`;
      domString += `<p>AGE: ${dinos[i].age}</p>`;
      domString += `<p>ID: ${dinos[i].id}</p>`;
      domString += `<div class="progress">`;
      domString += `<div class="progress-bar bg-success" role="progressbar" style="width: ${dinos[i].health}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Health: ${dinos[i].health}`;
      domString += `</div>`;
      domString += `</div>`;
      domString += `<button type="button" class="btn btn-primary">Adventure!</button>`;
      domString += `<button type="button" class="btn btn-success">Feed!</button>`;
      domString += `<button type="button" class="btn btn-danger">Remove!</button>`;
      domString += `<button type="button" class="btn btn-warning">Pet!</button>`;
      domString += `<button type="button" class="btn btn-info">Info!</button>`;
      domString += `<footer>TYPE: ${dinos[i].type}</footer>`;
      domString += `</div>`;
      printToDom("kennelCards", domString);
    } else if (dinos[i].health > 0 && dinos[i].health < 30) {
      domString2 += `<div class="dinosaur">`;
      domString2 += `<h2>${dinos[i].name}</h2>`;
      domString2 += `<img src=${dinos[i].imageUrl} alt="pet image"/>`;
      domString2 += `<p>OWNER: ${dinos[i].owner}</p>`;
      domString2 += `<p>AGE: ${dinos[i].age}</p>`;
      domString2 += `<p>ID: ${dinos[i].id}</p>`;
      domString2 += `<div class="progress">`;
      domString2 += `<div class="progress-bar bg-warning" role="progressbar" style="width: ${dinos[i].health}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Health: ${dinos[i].health}`;
      domString2 += `</div>`;
      domString2 += `</div>`;
      domString2 += `<button type="button" class="btn btn-primary">Adventure!</button>`;
      domString2 += `<button type="button" class="btn btn-success">Feed!</button>`;
      domString2 += `<button type="button" class="btn btn-danger">Remove!</button>`;
      domString2 += `<button type="button" class="btn btn-warning">Pet!</button>`;
      domString2 += `<button type="button" class="btn btn-info">Info!</button>`;
      domString2 += `<footer>TYPE: ${dinos[i].type}</footer>`;
      domString2 += `</div>`;
      printToDom("hospitalCards", domString2);
    } else {
      domString3 += `<div class="dinosaur">`;
      domString3 += `<h2>${dinos[i].name}</h2>`;
      domString3 += `<img src=${dinos[i].imageUrl} alt="pet image"/>`;
      domString3 += `<p>OWNER: ${dinos[i].owner}</p>`;
      domString3 += `<p>AGE: ${dinos[i].age}</p>`;
      domString3 += `<p>ID: ${dinos[i].id}</p>`;
      domString3 += `<div>`;
      domString3 += `<span>&#9760;</span>`;
      domString3 += `</div>`;
      domString3 += `<button type="button" class="btn btn-outline-primary">Adventure!</button>`;
      domString3 += `<button type="button" class="btn btn-outline-success">Feed!</button>`;
      domString3 += `<button type="button" class="btn btn-danger">Remove!</button>`;
      domString3 += `<button type="button" class="btn btn-outline-warning">Pet!</button>`;
      domString3 += `<button type="button" class="btn btn-info">Info!</button>`;
      domString3 += `<footer>TYPE: ${dinos[i].type}</footer>`;
      domString3 += `</div>`;
      printToDom("graveCards", domString3);
    }
  }
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

// INIT FUNCTION
const init = () => {
  buildForm();
  buildCards();
  document
    .getElementById("submitButton")
    .addEventListener("click", getFormData);
};

init();

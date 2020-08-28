import { dinos } from '../Data/dinosaurs.js'
import { buildCards } from './BuildCards.js'
// PRINT TO DOM FUNCTION
const printToDom = (divID, textToPrint) => {
  const selectedDiv = document.getElementById(divID);
  selectedDiv.innerHTML = textToPrint;
};

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

export { buildForm, getFormData}
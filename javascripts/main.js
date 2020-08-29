import { adventures } from './Data/adventures.js'
import { buildForm } from './Helpers/addform.js'
import { buildCards } from './Helpers/BuildCards.js'
import { getFormData } from './Helpers/addform.js'



const init = () => {
  buildForm();
  buildCards();
  document
    .getElementById("submitButton")
    .addEventListener("click", getFormData);
};
init();


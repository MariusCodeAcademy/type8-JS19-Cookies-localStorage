/* 1
<button id="btn1">Click me</button>
    <h2>0</h2>
    padaryti kad spaudzian mygtuka didinam 0 vienetu
*/
const btnEl = document.getElementById('btn1');
const h2El = btnEl.nextElementSibling;
let total = localStorage.getItem('total') === null ? 0 : localStorage.getItem('total');
// is storage

h2El.innerText = total;
btnEl.onclick = () => {
  h2El.textContent = ++total;
  // i storage
  localStorage.setItem('total', total);
};

/* 2
<form>
  <input type="text" id="name" placeholder="Enter name" />
</form>

ivedus varda ir issiuntus forma su enter(automatiskai vysksta)
pridedam ta varda i vardu sarasa, kaip saraso el

*/
const formEl = document.forms[0];
const ulEl = document.querySelector('.names');

formEl.onsubmit = function (e) {
  e.preventDefault();
  const inpEl = formEl.elements.name;
  //paimti reiksme
  let inputVal = inpEl.value.trim();
  console.log('inputVal ===', typeof inputVal);
  addLi(inputVal);
  // inputVal = ''; // neveikia nes isvalom reiksme o ne el
  inpEl.value = '';
};

const namesArr = localStorage.getItem('names') === null ? [] : localStorage.getItem('names').split(',');

namesArr.forEach((name) => makeLi(name));

function makeLi(stringName) {
  // create li
  const liEl = document.createElement('li');
  // add text
  liEl.textContent = stringName;
  // place el
  ulEl.append(liEl);
  // add to array
}

function addLi(stringName) {
  // create li
  const liEl = document.createElement('li');
  // add text
  liEl.textContent = stringName;
  // place el
  ulEl.append(liEl);
  // add to array
  namesArr.push(stringName);
  saveToStorage();
}

function saveToStorage() {
  const stringFromArr = namesArr.join(',');
  localStorage.setItem('names', stringFromArr);
}

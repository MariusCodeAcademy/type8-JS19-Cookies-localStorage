/* 1
<button id="btn1">Click me</button>
    <h2>0</h2>
    padaryti kad spaudzian mygtuka didinam 0 vienetu
*/
const btnEl = document.getElementById('btn1');
const h2El = btnEl.nextElementSibling;
let total = 0;
btnEl.onclick = () => {
  h2El.textContent = ++total;
};

/* 2
<form>
  <input type="text" id="name" placeholder="Enter name" />
</form>

ivedus varda ir issiuntus forma su enter(automatiskai vysksta)
pridedam ta varda i vardu sarasa, kaip saraso el

*/

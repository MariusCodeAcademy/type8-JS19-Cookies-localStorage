console.log('cookies');

const future = new Date('2022-03-25');
const now = Date.now();
const days = 4;
const cookieTime = now + days * 24 * 60 * 60 * 1000;
const cookieTimeDateFormat = new Date(cookieTime);
console.log('cookieTimeDateFormat ===', cookieTimeDateFormat);
// nustatyti cookie slapuka
// document.cookie = 'userName=James;';
document.cookie = 'showAlert=true; expires=' + cookieTimeDateFormat.toUTCString();

// visi cookie string formatu
const cook = document.cookie;
console.log('cook ===', cook);
const showAlertString = cook.split('=')[1];
const showAlert = showAlertString == 'true' ? true : false;
console.log('showAlert ===', showAlert);

function showADD() {
  if (showAlert) {
    alert('Pirkike nes pigu');
    document.cookie = 'showAlert=false; expires=' + future.toUTCString();
  } else {
  }
}
showADD();

'use strict';
console.log('date');

const now = new Date();
// const data = new Date(2022, 03, 15);
const data2 = new Date('1980-03-15');

const utcNow = now.toUTCString();
console.log('utcNow ===', utcNow);
console.log('now ===', now);
console.log('data2 ===', data2);

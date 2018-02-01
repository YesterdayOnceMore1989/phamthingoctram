const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
var data = {
  hoten:"Nguyen Van Teo",
  email:"teo@khoapham.vn"
};
var token = jwt.sign(data, 'DUNG_CHO_AI_BIET_NHA');
console.log(token);
var decode = jwt.verify(token, 'DUNG_CHO_AI_BIET_NHA');
console.log('decode',decode);

// var message = "I am user number 3";
//
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message} `);
// console.log(`hash: ${hash} `);
//
// var data = {
//   id:4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// }
//
// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();
// if(resultHash === token.hash){
//   console.log('Data was not change');
// }else{
//   console.log('Data was change.Do not trust');
// }

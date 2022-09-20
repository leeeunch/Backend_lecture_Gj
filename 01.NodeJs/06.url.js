const url = require('url');

const urlSample = 'https://github.com/leeeunch?tab=stars';
//const parseObject = url.parse(urlSample); //url 문자열을 url 객체로 변환
const parseObject = url.parse('https://github.com/leeeunch?tab=stars');

console.log(parseObject);
console.clear();
console.log(parseObject.href);
console.log(parseObject.query);
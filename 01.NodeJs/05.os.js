const os = require('os');

const cpus = os.cpus();
console.log(os.cpus());
console.log(cpus.length);

console.log(Math.round(os.totalmem()/Math.pow(2,30), 4)+'GB', os.freemem()); //시스템의 총 메모리를 GB단위로 반환 //총 사용 가능한 메모리 리턴
console.log(Math.round);
//process 객체는 프로세스의 정보를 제공 및 제어 가능한 객체
//process 객체는 전역 객체
console.log('process.env:',process.env);    //컴퓨터 환경 정보
console.clear();
console.log(process.env.COMPUTERNAME);

console.log('process.version:',process.version);    //node.js version
console.log('process.arch:', process.arch);         //프로세서 아키텍쳐 나타냄
console.log('process.platform:',process.platform);  //플랫폼을 나타냄
console.log('process.argv:',process.argv);          //프로그램에 매개변수를 전달할 때 사용하는 속성

console.log(aa())
process.exit(42);         //프로그램 종료

console.log('프로세스'); // unreachable //실행안됨

//Hoisting
//프로그램 실행시 우선 실행됨
function aa() {         
    let a = 2;
    return '종료';      
    let b = 3;  //return 뒤에 있어 사용되지 않음 //unreachable
}
console.log(aa())
var a = 5;
console.log('시작');
var args = process.argv;
for(var i=0;i<args.length;i++){
  console.log(`${i} : ${args[i]}`);
}
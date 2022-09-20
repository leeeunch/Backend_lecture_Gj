process.on('exit', code => {        //프로세스가 종료될 때 발생
    console.log('프로그램 종료');
    console.log('exit code:', code);
});

process.on('uncaughtException', error => {      //예외가 일어날 때 발생
    console.log('예외 발생');
    console.log('예외 명:', error.name);
    console.log('예외 내용:', error.message);
});

//예외 발생
error.error.error();
process.exit(-1);
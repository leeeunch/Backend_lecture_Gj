//비동기적으로 읽기 - 권장 사항
const fs = require('fs');

fs.readFile('01.Nodejs/07.File/tmp/textfile.txt', 'utf8', (err, data) => {
    //나중에 실제 서비스해주는 상황 (production)에서는 에러 처리 반드시 할 것
    if (err)
        console.log(err);
    else
        console.log('파일에서 읽은 데이터:',data); 

    //파일의 에러는 잘 발생하지 않으므로 error부분 처리 생략
    //console.log('파일에서 읽은 데이터:', data);
});

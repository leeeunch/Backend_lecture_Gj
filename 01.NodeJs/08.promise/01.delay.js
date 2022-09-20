//Promise
function delayP(ms) {
    return new Promise((resolve, reject) => { //resolve : 성공했을 때 실행되는 함수 //reject : 실패했을 때 실행되는 함수
        try {
        setTimeout(() => {
            resolve('성공');        //resolve : 성공했을 때 실행되는 callback 함수
        }, ms);
    } catch(e) {
        reject('실패')              //reject : 실패했을 깨 실행되는 callback 함수
    }
    })
}

//Consumer
delayP(1000)
    .then((val) => {
        console.log(val);
    });
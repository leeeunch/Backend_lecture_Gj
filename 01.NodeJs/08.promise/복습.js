
    //비동기적 작업을 처리하기 위함
function job1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('통과1');
        }, 2000);
        
    });
};
function job2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('통과2');
        }, 2000);
        
    });
};

//nested 방식
// job1().then(function(data) {
//         console.log('data1', data);
//         job2().then(function(data){
//             console.log('data2', data)
//         })
// });

//chaining 방식
job1().then(function(data) {
    console.log('data1', data);
    return job2();
}).then(function(data) {
    console.log('data2', data);
})
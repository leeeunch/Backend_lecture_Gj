class UserStorage {
    loginUser(id, password, onSucess, onError) {
        setTimeout(() => {
            console.log('setime out');
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSucess(id);
            } else {
                onError(new Error('not found'));
            }
        },2000);
    }
    getRoles(user, onSucess, onError) {
        setTimeout(() => {
            if (user == 'elice') {
                onSucess({name: 'elie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
    // onSucess(id, obj) {
    //     if (typeof(obj) == undefined) {
    //         return `${id}님 로그인에 성공하셨습니다.\n환영합니다!`;
    //     } else {
    //         return `name : ${obj.name}\nrole : ${obj.role}`;
    //     }

    // }
}

let onSucess = function (id) {
    return '왜이러지'
        //return `name : ${obj.name}\nrole : ${obj.role}`;
    }

let eunBee = new UserStorage()
console.log(eunBee.loginUser('ellie','dream', onSucess, onSucess));
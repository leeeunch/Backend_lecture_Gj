class UserStorage {
    loginUser(id, password, onSucess, onError) {
        setTimeout(() => {
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
}

const UserStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
UserStorage.loginUser(
    id,
    password,
    user => {
        UserStorage.getRoles(
            user,
            userWrithRole => {
                alert(`Hello ${user.name}, you have a ${user.role} role`);
            },
            error => {
                console.log(error);
            }
        )
    },
    error => {
        console.log(error);
    }
);
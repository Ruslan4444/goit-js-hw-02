// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';
// console.log(user);
// user['mood'] = 'happy';
// console.dir(JSON.stringify(user));

// user.hobby = 'skydiving';
// console.log(user);

// user['hobby'] = 'skydiving';
// console.table(user);

// user.premium = false;
// console.table(user);

// user['premium'] = false;
// console.table(user);

// for (const key in user) {
//     console.log(`${key}: ${user[key]}`);
// }

// const userKeys = Object.keys(user);
// for (const key of userKeys) {
//     console.log(`${key}: ${user[key]}`);
// }

// Задача номер 2
// let sum = 0;
// const salaries = {
//     // John: 100,
//     // Ann: 160,
//     // Pete: 130,
// };

// const salariesValues = Object.values(salaries);
// console.log(salariesValues);

// for (const salary of salariesValues) {
//     sum += salary;
// };
// console.log(sum);

// Задача номер 3
// const stones = [
//     { name: 'Изумруд', price: 1300, quantity: 4 },
//     { name: 'Бриллиант', price: 2700, quantity: 3 },
//     { name: 'Сапфир', price: 400, quantity: 7 },
//     { name: 'Щебень', price: 200, quantity: 2 },
// ];

// const calcTotalPrice = (stones, stoneName) => {
//     for (const stone of stones) {
//         if (stone.name !== stoneName) continue;

//         console.table(stone);
//         return stone.price * stone.quantity;
//     }
//     return 0;
// };

// console.log(calcTotalPrice(stones, 'Изумруд'));
// console.log(calcTotalPrice(stones, 'Бриллиант'));
// console.log(calcTotalPrice(stones, 'Сапфир'));
// console.log(calcTotalPrice(stones, 'Щебень'));
// console.log(calcTotalPrice(stones, 'Галька'));

// Задача номер 4
// const calculator = {
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mult() {
//         return this.a * this.b;
//     },

// };
// console.table(calculator);
// calculator.read(15, 20);

// console.table(calculator);
// const sum = calculator.sum();
// console.log(sum);

// const mult = calculator.mult();
// console.log(mult);

// Задача номер 5
let id = 0;
const getId = () => {
    return String(id++).padStart(6, '0');
}

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    balance: 0,

    transactions: [],
    createTransaction(amount, type) {
        return {
            id: getId(),
            type,
            amount,
        }
    },
    
    deposit(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            console.log('Bad amount');
            return;
        }
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount;

    },
    withdraw(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            console.log('Bad amount');
            return;
        }
        if (amount > this.balance) {
            console.log('Снятие такой суммы не возможно, недостаточно средств');
            return;
        }

        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
        this.balance -= amount;

    },
    getBalance() {
        return this.balance;
    },
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (id !== transaction.id) continue;
            return transaction;
        }
        return null;
    },
    getTransactionTotal(type) {
        let sum = 0;
        for (const transaction of this.transactions) {
            if (type !== transaction.type) continue;
            
            sum += transaction.amount;
        }
        return sum;


    },
};

console.log(account.getBalance());
account.deposit(1000);
console.log(account.getBalance());
account.withdraw(1800);
console.log(account.getBalance());

account.withdraw(200);
account.withdraw(300);
console.log(account.getBalance());
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.table(account.transactions);

const transactionId = account.transactions[0].id;
console.table(account.getTransactionDetails(transactionId));


// Задача номер 6
// const menu = {
//     width: 200,
//     heigth: 300,
//     title: 'My menu',
// };

// console.table(menu);
// const multiplyNumeric = obj => {
//     const keys = Object.keys(obj);

//     for (const key of keys) {
//         if (typeof obj[key] !== 'number') continue;

//         obj[key] *= 2;
//     }
// };
// multiplyNumeric(menu);
// console.table(menu);

// Задача номер 7
// const ladder = {
//     step: 0,
//     showStep() {
//         console.log(this.step);
//     },
//     up(amount = 1) {
//         if (amount < 1) return;
//         this.step += amount;
//     },
//     down(amount = 1) {
//         if (amount < 1) return;
//         if (this.step === 0) return;
        
        
//         this.step -= amount;
//     },
// };
// ladder.showStep();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.showStep();
// ladder.down();
// ladder.down();
// ladder.down();
// ladder.down();
// ladder.down();
// ladder.down();
// ladder.showStep();
// ladder.up(2);
// ladder.showStep();
// ladder.down(5);
// ladder.showStep();
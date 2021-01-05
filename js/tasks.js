// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];
// console.log(friends);
// console.table(friends);

// console.log(friends[0]);
// console.log(friends[2]);

// const nameToFind = 'Poly';

// for (const friend of friends) {
//     console.log(friend.name);
//     console.log(friend.online); 
//     console.log(friend);
//     if (friend.name === 'Poly') {
//         console.log('Нашли Poly!!!');
//         break;
//     }
// }
// const findFriendByName = function (allFriends, name) {
//     for (const friend of allFriends) {
//         console.log(friend);
        
//         if (friend.name === name) {
//             return 'Нашли!!!'
//         }
//     }
//     return 'Не нашли!!!'
// }
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));


// const getAllNames = function (allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         console.log(friend);
//         names.push(friend.name)
//     }
//     return names;
// }
// console.log(getAllNames(friends));

// const getOnlineFriends = function (allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         console.log(friend);

//         if (friend.online) {
//             names.push(friend.name)
//         }
//     }
//     return names;
// }
// console.log(getOnlineFriends(friends));

const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        product.quantity = 1;
        console.log(product);

        this.items.push(product);

    },
    remove(productName) {
        console.log(productName);

        for (let i = 0; i < this.items.length; i += 1) {
            const item = this.items[i];

            if (productName === item.name) {
                console.log('Нашли, удаляем!!!');
                console.log('Индекс для удаления: ', i);

                this.items.splice(i, 1);
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        let total = 0;

        for (const item of this.items) {
            total += item.price * item.quantity;
        }
        
        return total;
    },
    increaseQuantity(productName) {
        for (const item of this.items) {
            if (item.name === productName) {
                console.log(item);
                item.quantity += 1;
            }
        }
    },
     decreaseQuantity(productName) {
        for (const item of this.items) {
            if (item.name === productName) {
                console.log(item);
                if (item.quantity - 1 === 0) {
                    this.remove(productName);
                    return;
                }
                item.quantity -= 1;
            }
        }
    },

}


cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 60 });

console.table(cart.getItems());
// console.table(cart.getItems());

// cart.remove('apple');
// console.table(cart.getItems());

cart.increaseQuantity('apple');
cart.increaseQuantity('apple');
console.table(cart.getItems());

cart.decreaseQuantity('apple');
cart.decreaseQuantity('apple');
cart.decreaseQuantity('apple');

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());
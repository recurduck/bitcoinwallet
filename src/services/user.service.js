import { saveToStorage, loadFromStorage } from "./storage.service";

export const userService = {
    getUser,
    signUp,
    addMove,
}

const USERS = [
    // {
    //     "name": "Ochao Hyde",
    //     "coin": 100,
    //     "moves": []
    // },
];

function getUser() {
    let users = loadFromStorage('users')
    // if (users && users.length != 0) {
        // saveToStorage('users', USERS)
        return users[0]
    // } else {
        // return users.find(user => user._id === id)
    // }
}

function signUp(name) {
    USERS.unshift({
        "_id": _createId(),
        "name": name,
        "coin": 100,
        "moves": []
    })
    saveToStorage('users', USERS)
    return USERS[0]
}

function addMove(contact, amount) {
    let users = loadFromStorage('users')
    if(amount > 0 && users[0].coin - amount >= 0) {
        users[0].coin -= amount
        let newMove = {
            toId: contact._id,
            to: contact.name,
            at: Date.now(),
            amount,
        }
        users[0].moves.push(newMove)
        saveToStorage('users', users)
        return newMove
    }
}

function _createId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(11);
}
import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'
import { contactService } from './contact.service.js'

const STORAGE_KEY = 'usersDB'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    get,
    query,
    save,
    getEmptyUser,
    loginSignUp,
    logout,
    getLoggedinUser,
    transferBitcoin
}

async function loginSignUp(username) {
    try {
        const users = await storageService.query(STORAGE_KEY)
        const user = users.find(user => user.username === username)
        if (user) return _setLoggedinUser(user)

        const newUser = await storageService.post(STORAGE_KEY, getEmptyUser(username))
        return _setLoggedinUser(newUser)

    } catch (err) {
        console.log('err', err)
    }
}

async function logout() {
    return sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN)
}

function get(userId) {
    return storageService.get(STORAGE_KEY, userId)
}

async function query() {
    return await storageService.query(STORAGE_KEY)
}

function save(user) {
    if (user._id) {
        return storageService.put(STORAGE_KEY, user)
    } else {
        return storageService.post(STORAGE_KEY, user)
    }
}

function getEmptyUser(username = '', balance = 100, transactions = []) {
    return {
        _id: '',
        username,
        balance,
        transactions
    }
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

function _setLoggedinUser({ _id, username, balance, transactions }) {
    const userToSave = {
        _id,
        username,
        balance,
        transactions
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(userToSave))
    return userToSave
}

async function addToContactBalance(transaction) {
    const contact = await contactService.get(transaction.toId)
    console.log("contact", contact)
    transaction.from = getLoggedinUser().username
    contact.transactions.unshift(transaction)
    contactService.save(contact)
}

function transferBitcoin(transaction) {
    try {
        const user = getLoggedinUser()
        if (user.balance < transaction.amount && transaction.fee) throw new Error("Insufficient balance")
        user.balance -= transaction.amount && transaction.fee
        user.transactions.unshift(transaction)
        addToContactBalance(transaction)
        _setLoggedinUser(user)
        save(user)
    } catch (err) {
        throw err
    }
}

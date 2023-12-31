import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const PAGE_SIZE = 5
const STORAGE_KEY = 'contactDB'

var gFilterBy = { txt: '', minCoins: 0 }
var gSortBy = { name: 1 }
var gPageIdx

_createContacts()


export const contactService = {
    query,
    get,
    remove,
    save,
    getEmptyContact,
    getNextContactId,
    getFilterBy,
    setFilterBy,
}

async function query() {
    return await storageService.query(STORAGE_KEY)
    // .then(contacts => {
    //     if (gFilterBy.txt) {
    //         const regex = new RegExp(gFilterBy.txt, 'i')
    //         contacts = contacts.filter(contact => regex.test(contact.vendor))
    //     }
    //     if (gFilterBy.minCoins) {
    //         contacts = contacts.filter(contact => contact.maxSpeed >= gFilterBy.minCoins)
    //     }
    //     if (gPageIdx !== undefined) {
    //         const startIdx = gPageIdx * PAGE_SIZE
    //         contacts = contacts.slice(startIdx, startIdx + PAGE_SIZE)
    //     }
    //     if (gSortBy.maxSpeed !== undefined) {
    //         contacts.sort((c1, c2) => (c1.maxSpeed - c2.maxSpeed) * gSortBy.maxSpeed)
    //     } else if (gSortBy.vendor !== undefined) {
    //         contacts.sort((c1, c2) => c1.vendor.localeCompare(c2.vendor) * gSortBy.vendor)
    //     }

    //     return contacts
    // })
}

function sort(arr) {
    return arr.sort((a, b) => {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1;
        }
        if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1;
        }

        return 0;
    })
}

function get(contactId) {
    return storageService.get(STORAGE_KEY, contactId)
}

function remove(contactId) {
    return storageService.remove(STORAGE_KEY, contactId)
}

function save(contact) {
    if (contact._id) {
        return storageService.put(STORAGE_KEY, contact)
    } else {
        return storageService.post(STORAGE_KEY, contact)
    }
}

function getEmptyContact(name = '', email = '', phone = '') {
    return {
        _id: '',
        name,
        email,
        phone,
        transactions: []
    }
}

function getFilterBy() {
    return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
    if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
    if (filterBy.minCoins !== undefined) gFilterBy.minCoins = filterBy.minCoins
    return gFilterBy
}

function getNextContactId(contactId) {
    return storageService.query(STORAGE_KEY)
        .then(contacts => {
            var idx = contacts.findIndex(contact => contact._id === contactId)
            if (idx === contacts.length - 1) idx = -1
            return contacts[idx + 1]._id
        })
}

function _createContacts() {
    let contacts = utilService.loadFromStorage(STORAGE_KEY)
    if (!contacts || !contacts.length) {
        const contacts = [
            {
                "_id": "5a56640269f443a5d64b32ca",
                "name": "Ochoa Hyde",
                "email": "ochoahyde@renovize.com",
                "phone": "+1 (968) 593-3824",
                "transactions": []
            },
            {
                "_id": "5a5664025f6ae9aa24a99fde",
                "name": "Hallie Mclean",
                "email": "halliemclean@renovize.com",
                "phone": "+1 (948) 464-2888",
                "transactions": []
            },
            {
                "_id": "5a56640252d6acddd183d319",
                "name": "Parsons Norris",
                "email": "parsonsnorris@renovize.com",
                "phone": "+1 (958) 502-3495",
                "transactions": []
            },
            {
                "_id": "5a566402ed1cf349f0b47b4d",
                "name": "Rachel Lowe",
                "email": "rachellowe@renovize.com",
                "phone": "+1 (911) 475-2312",
                "transactions": []
            },
            {
                "_id": "5a566402abce24c6bfe4699d",
                "name": "Dominique Soto",
                "email": "dominiquesoto@renovize.com",
                "phone": "+1 (807) 551-3258",
                "transactions": []
            },
            {
                "_id": "5a566402a6499c1d4da9220a",
                "name": "Shana Pope",
                "email": "shanapope@renovize.com",
                "phone": "+1 (970) 527-3082",
                "transactions": []
            },
            {
                "_id": "5a566402f90ae30e97f990db",
                "name": "Faulkner Flores",
                "email": "faulknerflores@renovize.com",
                "phone": "+1 (952) 501-2678",
                "transactions": []
            },
            {
                "_id": "5a5664027bae84ef280ffbdf",
                "name": "Holder Bean",
                "email": "holderbean@renovize.com",
                "phone": "+1 (989) 503-2663",
                "transactions": []
            },
            {
                "_id": "5a566402e3b846c5f6aec652",
                "name": "Rosanne Shelton",
                "email": "rosanneshelton@renovize.com",
                "phone": "+1 (968) 454-3851",
                "transactions": []
            },
            {
                "_id": "5a56640272c7dcdf59c3d411",
                "name": "Pamela Nolan",
                "email": "pamelanolan@renovize.com",
                "phone": "+1 (986) 545-2166",
                "transactions": []
            },
            {
                "_id": "5a5664029a8dd82a6178b15f",
                "name": "Roy Cantu",
                "email": "roycantu@renovize.com",
                "phone": "+1 (929) 571-2295",
                "transactions": []
            },
            {
                "_id": "5a5664028c096d08eeb13a8a",
                "name": "Ollie Christian",
                "email": "olliechristian@renovize.com",
                "phone": "+1 (977) 419-3550",
                "transactions": []
            },
            {
                "_id": "5a5664026c53582bb9ebe9d1",
                "name": "Nguyen Walls",
                "email": "nguyenwalls@renovize.com",
                "phone": "+1 (963) 471-3181",
                "transactions": []
            },
            {
                "_id": "5a56640298ab77236845b82b",
        
                "name": "Glenna Santana",
                "email": "glennasantana@renovize.com",
                "phone": "+1 (860) 467-2376",
                "transactions": []
            },
            {
                "_id": "5a56640208fba3e8ecb97305",
                "name": "Malone Clark",
                "email": "maloneclark@renovize.com",
                "phone": "+1 (818) 565-2557",
                "transactions": []
            },
            {
                "_id": "5a566402abb3146207bc4ec5",
                "name": "Floyd Rutledge",
                "email": "floydrutledge@renovize.com",
                "phone": "+1 (807) 597-3629",
                "transactions": []
            },
            {
                "_id": "5a56640298500fead8cb1ee5",
                "name": "Grace James",
                "email": "gracejames@renovize.com",
                "phone": "+1 (959) 525-2529",
                "transactions": []
            },
            {
                "_id": "5a56640243427b8f8445231e",
                "name": "Tanner Gates",
                "email": "tannergates@renovize.com",
                "phone": "+1 (978) 591-2291",
                "transactions": []
            },
            {
                "_id": "5a5664025c3abdad6f5e098c",
                "name": "Lilly Conner",
                "email": "lillyconner@renovize.com",
                "phone": "+1 (842) 587-3812"
            }
        ];
        utilService.saveToStorage(STORAGE_KEY, contacts)
    }
}

function _createContact(name, email, phone) {
    const contact = getEmptyContact(name, email, phone)
    contact._id = utilService.makeId()
    return contact
}

// function getContactCountBySpeedMap() {
//     return storageService.query(STORAGE_KEY)
//         .then(contacts => {
//             const contactCountBySpeedMap = contacts.reduce((map, contact) => {
//                 if (contact.maxSpeed < 120) map.slow++
//                 else if (contact.maxSpeed < 200) map.normal++
//                 else map.fast++
//                 return map
//             }, { slow: 0, normal: 0, fast: 0 })
//             return contactCountBySpeedMap
//         })
// }
import { createStore } from 'vuex'
import car from './modules/contact.js'
import user from './modules/user.js'
const storeOptions = {
    strict: true,
    modules: {
        car,
        user
    }
}
const store = createStore(storeOptions)
export default store
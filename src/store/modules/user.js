import { userService } from '@/services/user.service.js'

export default {
    state() {
        return {
            user: null,
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        }
    },
    actions: {
        async loadUser({ commit }, { userId }) {
            const user = await userService.get(userId)
            commit({ type: 'setUser', user })
        }
    },
    asygetters: {
        getUser: (state) => async (userId) => {
            const users = await userService.query();
            console.log(state.users.find(user => user._id === userId));
            return state.users.find(user => user._id === userId);
        }
    }
}
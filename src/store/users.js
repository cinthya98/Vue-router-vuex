'use strict';

export default {
    namespaced: true,
    state: {
        username: '',
        usernames: '',
        newUsers: '',
    },
    actions: {
        async GET_USERNAME({ commit }, pk) {
            const res = await fetch(`http://localhost:3000/username/${pk}`);
            const { username } = await res.json();

            commit('SET_USERNAME', username);
        },
        async GET_ALL_USERNAMES({ commit }) {
            const res = await fetch(`http://localhost:3000/usernames`);
            const { usernames } = await res.json();

            commit('SET_ALL_USERNAMES', usernames);
        },
    },
    mutations: {
        SET_USERNAME(state, username) {
            state.username = username;
        },
        SET_ALL_USERNAMES(all, usernames) {
            all.usernames = usernames;
        },
    },
    getters: {
        username: state => state.username,
        usernames: state => state.usernames,
    },
};

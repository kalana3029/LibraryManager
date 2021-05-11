export default {

    /**
     * login.
     * 
     * @param {string} email
     * @param {string} password
     * @returns {unresolved}
     */
     login(email,password) {
        return axios.post('/login', {
            email: email,
            password: password
        });
    },
}
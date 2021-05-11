export default {
    /**
     * 
     * @returns {window.axios}
     */
    getAll() {
        return axios('/ajax/admin/categories');
    },

}
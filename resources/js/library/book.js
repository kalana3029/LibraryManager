export default {
    /**
     * 
     * @returns {window.axios}
     */
    getAll(queryString = null) {
        return axios(`/ajax/admin/books${queryString}`);
    },
    
    /**
     * Return a book.
     * 
     * @param {Number} id
     * @returns {window.axios}
     */
     get(id) {
        return axios(`/ajax/admin/books/${id}`);
    },
    
    /**
     * Create a book.
     * 
     * @param {Object} book
     * @returns {unresolved}
     */
    create(book) {
        return axios.post('/ajax/admin/books', {
            book: book,
        });
    },
    
    /**
     * Update a books.
     * 
     * @param {Object} book
     * @returns {unresolved}
     */
    update(book) {
        return axios.patch(`/ajax/admin/books/${book.id}`, {
            book: book,
        });
    },
    
    /**
     * Delete a books.
     * 
     * @param {Number} id
     * @returns {unresolved}
     */
    delete(id) {
        return axios.delete(`/ajax/admin/books/${id}`);
    },
}
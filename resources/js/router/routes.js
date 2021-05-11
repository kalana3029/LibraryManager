const routes = [
    {
        path: '/',
        component: () => import('../components/Dashboard.vue'),
        name: 'login',
        meta: { title : 'Login',layout: 'login' }
    },
    {
        path: '/admin',
        component: () => import('../components/Dashboard.vue'),
        name: 'dashboard',
        meta: { title : 'Dashboard',layout: 'admin' }
    },
    {
        path: '/admin/books',
        component: () => import('../components/book/Index.vue'),
        name: 'admin.books',
        meta: { title : 'Books',layout: 'admin' }
    },
    {
        path: '/admin/books/add',
        component: () => import('../components/book/Add.vue'),
        name: 'admin.books.add',
        meta: { title : 'Add a Book',layout: 'admin' }
    },
    {
        path: '/admin/books/:id',
        component: () => import('../components/book/Edit.vue'),
        name: 'admin.books.edit',
        meta: { title : 'Edit Book',layout: 'admin' }
    }
];

export default routes;
<template>
    <div>
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <div id="logo" class="p-2 text-white">
                Library Manager
            </div>
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                    Sign out
                </li>
            </ul>
        </nav>
        <div class="container-fluid">
            <div class="row">
                <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                    <div class="sidebar-sticky">
                        <ul class="nav d-flex flex-column p-3 mt-3">
                            <li class="nav-item active">
                                <router-link :to="{ name: 'dashboard' }" class="nav-link">Dashboard</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ name: 'admin.books' }" class="nav-link">Books</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main
                    role="main"
                    class="main col-md-9 ml-sm-auto col-lg-10 p-5"
                >
                <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: { },
    name: "admin-layout",
};
</script>

<style scoped>
/*
 * Sidebar
 */
.main {
  margin-left: 15%;
}
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.sidebar-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 48px; /* Height of navbar */
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #143457;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}
</style>
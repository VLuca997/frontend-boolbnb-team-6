<script>
    export default {
        name: "HeaderComponent",
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-white">
        <div class="container-fluid">
            <a class="navbar-brand p-0" href="http://localhost:5173">
            <div class="d-flex align-items-center">
                <h2 class="px-3 bg_logo shadoww" >
                Bool BNB
                </h2>
            </div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link class="nav-link link-hover fs-5" :to="{name: 'home'}"> Home </router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link link-hover fs-5" :to="{name: 'search'}"> Ricarca avanzata </router-link>
                </li>
            </ul>
            <a href="http://127.0.0.1:8000" class="btn btn-outline-warning m-1">
                Accedi
            </a>
            <a href="http://127.0.0.1:8000/register" class="btn btn-outline-success m-1">
                Registrati
            </a>
            </div>
        </div>
        </nav>
    </div>
</template>

<style lang="scss" >
.img-header {
  max-width: 70px;
}
.link-hover:hover {
  text-decoration: underline;
}
.nav-item:hover {
  a {
    text-decoration: none;
    color: #F6AE2D;
  }
}

.bg_logo{
    background-color: #F6AE2D;
    color: white;
    border: 1px solid #FFCA2C;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 10px;
    margin-left: 5px;
    
}

</style>
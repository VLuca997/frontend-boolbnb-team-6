<script>
// my-component.js
export default {
  data() {
    return 
  },
}
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-white">
  <div class="container-fluid">
    <a class="navbar-brand p-0" href="#">
      <div class="d-flex align-items-center">
        <img src="src/assets/img/logo-header.svg" alt="" class="img-header">
        <h2 class="px-3">
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
          <a class="nav-link link-hover" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-hover" href="#">Ricerca</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-hover" href="#">Dashboard</a>
        </li>
      </ul>
      <a href="#" class="btn btn-outline-warning">
        Accedi
      </a>
      <a href="#" class="btn btn-outline-success ms-3">
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
    color: orangered;
  }
}
</style>
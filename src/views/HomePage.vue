<template>

    <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="@/assets/Wear it up logo.svg" alt="Logo" width="65" height="60" class="d-inline-block align-text-top">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active mx-4" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-4" href="#">Features</a>
        </li>
        <li class="nav-item mx-4">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item mx-4">
          <a class="nav-link" href="#">About us</a>
        </li>
        <li class="nav-item mx-4">
          <a @click="$router.push('/')" class="nav-link" href="#">Log out</a>
        </li>
      </ul>
    </div>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-light" type="submit">Search</button>
      <a href="#">
        <img class="mx-4" src="@/assets/cart.svg" alt="cart">
      </a>
    </form> 
  </div>

</nav>

  
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>

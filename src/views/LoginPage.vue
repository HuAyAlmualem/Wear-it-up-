<template>

  <div>
  <img class="image z-2 min-vw-100 min-vh-100" src="@/assets/bg-clothes.svg" alt="">
  <div class="row d-flex justify-content-center align-items-center">
    <div class="z-3 d-flex justify-content-center align-items-center min-vh-100">
      <form class="col-5">
        <h1 class="d-flex justify-content-center mb-5">Log in</h1>
        <label class="w-100">Username</label>
        <input type="text" placeholder="Enter Your Username Here" class="form-control w-100 mb-2 rounded">
        <label class="w-100">Password</label>
        <input type="password" placeholder="Enter Your Password Here" class="form-control w-100 mb-2 rounded" required>
        <a href="">Forget Password?</a>
        <button @click="$router.push('HomePage')" class="btn btn-warning w-100 mb-3 mt-5 text-white fs-5">Log in</button>
        <button class="btn btn-warning w-100 text-white fs-5">Rigester</button>

      </form>

    </div>

  </div>
  </div>
  
</template>

<script>
export default {
  
}
</script>

<style scoped>
.image{
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
}

@media (max-width: 480px) {
  ::placeholder {
    font-size: 0.8rem;
  }
  form {
    width: 60%;
  }
  .image{
  width: 103%;
  height: 117%;
  position: absolute;
  object-fit: cover;
}
}


</style>

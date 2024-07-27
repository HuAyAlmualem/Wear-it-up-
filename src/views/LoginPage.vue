<template>

  <div>
  <img class="image z-2 min-vw-100 min-vh-100" src="@/assets/bg-clothes.jpeg" alt="">
  <div class="row d-flex justify-content-center align-items-center">
    <div class="z-3 col-5 d-flex justify-content-center align-items-center min-vh-100">
      <form>
        <h1 class="d-flex justify-content-center mb-5">Log in</h1>
        <label class="w-100">Username</label>
        <input type="text" class="w-100 mb-2 rounded">
        <label class="w-100">Password</label>
        <input type="password" class="w-100 mb-2 rounded">
        <a href="">Forget Password?</a>
        <button @click="$router.push('HomePage')" class="btn btn-warning w-100 mb-3 mt-5 text-white">Log in</button>
        <button class="btn btn-warning w-100 text-white">Rigester</button>

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

</style>

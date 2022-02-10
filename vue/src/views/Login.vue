<template>
  <div class="h-screen bg-slate-200 flex flex-col space-y-10 justify-center items-center">
    <!-- Layout  -->
    <div class="bg-gray-200 w-96 shadow-xl rounded p-5">
      <img src="https://www.dmmmsu.edu.ph/wp-content/uploads/2019/06/DMMMSU-Logo-Final.png" alt="dmmmsu_logo" class="h-20 w-20">
      <form class="space-y-5 mt-5">
        <input type="text" class="w-full h-12 rounded px-3 hover:drop-shadow-lg focus:outline-none appearance-none" placeholder="Enter username"/>
        <input type="password" class="w-full h-12 rounded px-3 hover:drop-shadow-lg focus:outline-none appearance-none" placeholder="Enter password"/>
        <div class="relative inline-flex">
          <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
          <select class="rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:drop-shadow-lg focus:outline-none appearance-none">
            <option>Choose Account Type</option>
            <option>Voter</option>
            <option>Admin</option>
          </select>
        </div>
        <button class="text-center text-white w-1/3 bg-blue-700 rounded-full h-10 hover:drop-shadow-lg focus:outline-none appearance-none">Login</button>
        <div class="">
          <p>Checking Elections? <a href="#!" class="font-medium text-black hover:text-blue-500">Click here</a> to go on Campaign Page</p>
        </div>
      </form>
    </div>

    <!-- Footer -->
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style scoped>

</style>

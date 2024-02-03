<template>
     <div class="flex space-x-4">
        <div>
          <NuxtLink to="/login" class="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition block">Login</NuxtLink>
          <!-- <li><NuxtLink  to="/login">Login</NuxtLink></li>  -->
          <!-- <li><NuxtLink  to="/signup">SignUp</NuxtLink></li>  -->
        </div>
        <div>
          <NuxtLink class="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition block" to="/register">Sign Up</NuxtLink>
        </div>
      </div>
</template>
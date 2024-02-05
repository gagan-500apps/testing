<template>
    <div>
      <header>
        <nav>
          <ul class="navbar">
            <li><NuxtLink  to="/login">login</NuxtLink></li> 
            <li><NuxtLink  to="/register">register</NuxtLink></li> 
            <li><NuxtLink  to="/taskThree">tasktree</NuxtLink></li> 
            <li><NuxtLink  to="/taskFour">taskfour</NuxtLink></li> 
            <li><NuxtLink  to="/logout">Logout</NuxtLink></li>

          </ul>
        </nav>
      </header>
      <slot />
    </div> 
  </template>


  <script setup>  </script>


  <style scoped>
  /* Center the navbar items */
  .navbar {
    list-style: none;
    padding: 3%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px; /* Set a fixed height for the navbar */
    background-color: #0c3478; /* Set a background color for the navbar */
    color: #ebe9e9;
  }

  /* Style for each list item in the navbar */
  .navbar li {
    margin: 0 25px; /* Adjust the spacing between the list items */
  }

  /* Optional: Add some styling for the links */
  #home-link,
  #about-link {
    text-decoration: none;
    color: #fffbfb; /* Set the text color */
    padding: 8px 12px; /* Add some padding to the links */
    border-radius: 4px; /* Add rounded corners */
    font-weight: bold; /* Make the letters bold */
  }

  #home-link:hover,
  #about-link:hover {
    background-color: #007BFF; /* Change the background color on hover */
    color: #fff; /* Change the text color on hover */
  }
  </style>

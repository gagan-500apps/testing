<template>
    <div>
      <h1 class="heading">{{ ustore.name }},</h1>
      
    </div>
  </template>
 
  <script setup>
  import ustore from '@/stores'
  import { ref } from 'vue';
 
  definePageMeta({
   layout: "navbar"
 })
 
  //  import {route } from 'vue-router'
  const name = ref(ustore.name);
  console.log(name);
 
 
  </script>
  
  
  <style scoped>
  *{
   height: 100vh;
  }
  .heading {
    color:#3bd142 ;
    font-family: 'Arial', sans-serif;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .sub-heading {
    color: #3498db;
    font-family: 'Helvetica', sans-serif;
    font-size: 18px;
  }
  </style>
  
  
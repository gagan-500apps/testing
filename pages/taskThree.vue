<template>
    <div>
     <div class="d">task3</div> 
      <button class="b" @click="openAddModal">Add</button>
  
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.phoneNumber }}</td>
            <td>
              <button @click="openEditModal(index)">Edit</button>
              <button @click="deleteItem(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div v-if="showAddModal" class="modal">
        <div class="modal-content">
          <h2>Add Item</h2>
          <label>
            Name:
            <input v-model="newItem.name" required />
          </label>
          <label>
            Phone Number:
            <input v-model="newItem.phoneNumber" required />
          </label>
          <label>
            Gender:
            <select v-model="newItem.gender" required>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <button @click="saveNewItem">Save</button>
          <button @click="closeAddModal">Cancel</button>
        </div>
      </div>
  
      <div v-if="showEditModal" class="modal">
        <div class="modal-content">
          <h2>Edit Item</h2>
          <label>
            Name:
            <input v-model="editedItem.name" required />
          </label>
          <label>
            Phone Number:
            <input v-model="editedItem.phoneNumber" required />
          </label>
          <label v-if="!hideGenderInEdit">
            Gender:
            <select v-model="editedItem.gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <button @click="saveEditedItem">Save</button>
          <button @click="closeEditModal">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const newItem = ref({
    name: '',
    phoneNumber: '',
    gender: 'male',
  });
  
  const editedItem = ref({
    name: '',
    phoneNumber: '',
    gender: 'male',
  });
  
  const items = ref([]);
  const localStorageKey = 'todoItems';
  
  const showAddModal = ref(false);
  const showEditModal = ref(false);
  let editedItemIndex = null;
  
  const hideGenderInEdit = ref(false);
  
  const openAddModal = () => {
    newItem.value = { name: '', phoneNumber: '', gender: 'male' };
    showAddModal.value = true;
  };
  
  const closeAddModal = () => {
    showAddModal.value = false;
  };
  
  const openEditModal = (index) => {
    editedItemIndex = index;
    editedItem.value = { ...items.value[index] };
    hideGenderInEdit.value = false; 
    showEditModal.value = true;
  };
  
  const closeEditModal = () => {
    showEditModal.value = false;
  };
  
  const saveNewItem = () => {
    items.value.push({ ...newItem.value });
    closeAddModal();
    saveItemsToLocalStorage();
  };
  
  const saveEditedItem = () => {
    items.value[editedItemIndex] = { ...editedItem.value };
    closeEditModal();
    saveItemsToLocalStorage();
  };
  
  const deleteItem = (index) => {
    items.value.splice(index, 1);
    saveItemsToLocalStorage();
  };
  
  const saveItemsToLocalStorage = () => {
    localStorage.setItem(localStorageKey, JSON.stringify(items.value));
  };
  </script>
  
  <style scoped>

.b{
    color: white;
    background-color: rgb(39, 138, 39);
    border: rgb(13, 13, 13) solid 1px;
    padding-right: 30px;
    padding-left: 30px;

}
  .d{
    margin-top: 10%;
    /* color: red; */
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  .modal {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background: #fff;
    padding: 20px;
    width: 300px;
    margin: 100px auto;
  }
  </style>
    
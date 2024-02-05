
  <template>
     <div class="d">TASK4</div>
     <div>
        
      <!--  <div class="search-bar">
      <input v-model="searchQuery" type="text" placeholder="Search Contacts" @input="searchContacts" />
    </div> -->

      <button  @click="openForm" class="add-contact-btn">Add Contact</button>
      <!-- <button class="b" @click="openAddModal">Add</button> -->
      <div v-if="isFormOpen" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeForm">&times;</span>
  
          <form @submit.prevent="saveContact">
            <label for="name">Name:</label>
            <input v-model="name" type="text" required />
  
            <label for="phone">Phone Number:</label>
            <input v-model="phone" type="text" required />
  
            <label for="country">Country:</label>
            <select v-model="country" required>
                <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
             
            </select>
  
            <button type="submit">Save Contact</button>
          </form>
        </div>
      </div>
  
      <!-- <div v-for="contact in savedContacts" :key="contact.id" class="contact-box">
        <div class="square-box">
          <span class="close-box" @click="confirmRemove(contact.id)">&times;</span>
          <p>Name: {{ contact.name }}</p>
          <p>Phone Number: {{ contact.phone }}</p>
          <p>Country: {{ contact.country }}</p>
        </div>
      </div> -->
  
      <div v-for="contact in filteredContacts" :key="contact.id" class="contact-box">
      <div class="square-box">
        <span class="close-box" @click="confirmRemove(contact.id)">&times;</span>
        <p>Name: {{ contact.name }}</p>
        <p>Phone Number: {{ contact.phone }}</p>
        <p>Country: {{ contact.country }}</p>
      </div>
    </div>


      <div v-if="confirmBox.isOpen" class="confirmation-box">
        <div class="confirmation-content">
          <p>Are you sure you want to delete this contact?</p>
          <button @click="removeConfirmed">Yes</button>
          <button @click="cancelRemove">No</button>
        </div>
      </div>
    </div>
  </template>



<script setup>

import { ref, computed } from 'vue';

const isFormOpen = ref(false);
const confirmBox = ref({ isOpen: false, contactId: null });
const name = ref('');
const phone = ref('');
const country = ref('');
const savedContacts = ref([]);
const searchQuery = ref('');

const openForm = () => {
  isFormOpen.value = true;
};

const closeForm = () => {
  resetForm();
};

const saveContact = () => {
  const newContact = {
    id: Date.now(),
    name: name.value,
    phone: phone.value,
    country: country.value,
  };

  savedContacts.value.push(newContact);
  resetForm();
};

const resetForm = () => {
  isFormOpen.value = false;
  name.value = '';
  phone.value = '';
  country.value = '';
};

const confirmRemove = (id) => {
  confirmBox.value.isOpen = true;
  confirmBox.value.contactId = id;
};

const removeConfirmed = () => {
  const idToRemove = confirmBox.value.contactId;
  savedContacts.value = savedContacts.value.filter((contact) => contact.id !== idToRemove);
  confirmBox.value.isOpen = false;
  confirmBox.value.contactId = null;
};

const cancelRemove = () => {
  confirmBox.value.isOpen = false;
  confirmBox.value.contactId = null;
};

const filteredContacts = computed(() => {
  return savedContacts.value.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

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
  }

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
    margin-top: 10%;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    /* background-color: #fefefe; */
    padding: 20px;
    border: 1px solid #888;
  }
  
  .close {
  color: #aaa;
  float: right; 
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .contact-container {
  margin-top: 40px;
  position: relative;
}
  .add-contact-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  margin-top: 10%;
  margin-right: 20%;
  color: white;
    background-color: rgb(39, 138, 39);
    border: rgb(13, 13, 13) solid 1px;
    padding-right: 30px;
    padding-left: 30px;
}

.contact-box {
   z-index: 1;
  position: relative;
}

.square-box {
  border: 1px solid #ddd;
  padding: 10px;
  width: 150px; 
  height: 150px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
  
  .close-box {
  position: absolute;
  top: 5px;
  right: 5px; 
  /* color: #aaa; */
  font-size: 20px;
  cursor: pointer;
}
  
  .close-box:hover,
  .close-box:focus {
    color: black;
  }

  .confirmation-box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.confirmation-content {
  /* background-color: #fefefe; */
  padding: 20px;
  border: 1px solid #888;
  text-align: center;
}

.confirmation-content button {
  margin: 0 10px;
}

.search-bar {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
}

.add-contact-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
}
  </style>
  
  
  
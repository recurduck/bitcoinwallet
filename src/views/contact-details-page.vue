<template>
  <div class="contact-details flex column align-center">
    <div class="controler flex space-between">
      <button @click="goBack">Back</button>
      <button @click="onEdit">Edit</button>
    </div>
    <img :src="getAvatar(contact._id)" />
    <h1>{{ contact.name }}</h1>
    <h2>{{ contact.phone }}</h2>
    <p>{{ contact.email }}</p>
    <transfer-fund v-if="contact" :contact="contact" />
    <div class="user-moves">
      <h3 class="flex align-center">
        <img src="@/assets/recycle.svg" alt="moves" />Moves History
      </h3>
      <move-list :title="contact._id" :moves="getUser.moves"/>
    </div>
  </div>
</template>
<script>
import router from "../router/index";
import TransferFund from "../cmps/transfer-fund.vue"
import { contactService } from "../services/contact.service";
import MoveList from '../cmps/move-list.vue';
export default {
  data() {
    return {
      contact: null,
    };
  },
  computed: {
    getUser() {
      console.log("getting from store:", this.$store.state.user);
      let loggedInUser = this.$store.state.user
      if (!loggedInUser) router.push({ path: `/signup` });
      else return loggedInUser
    },
  },
  methods: {
    getAvatar(name) {
      return `https://avatars.dicebear.com/api/adventurer/${name}.svg?b=%23f4f4f4`;
    },
    goBack() {
      router.push({ path: "/contact" });
    },
    onEdit() {
      router.push({ path: `/contact/edit/${this.contact._id}` });
    },
  },
  created() {
    let id = this.$route.params.id;
    this.contact = contactService.getById(id);
  },
  components: {
    TransferFund,
    MoveList,
  }
};
</script>

<template>
  <ul class="contact-list">
    <router-link v-for="contact in contacts" :key="contact._id" :to="`/contact/${contact._id}`">
      <contact-preview :contact="contact" />
    </router-link>
  </ul>
</template>
<script>
import router from "../router/index";
import ContactPreview from './contact-preview.vue'
export default {
  props: {
    contacts: {
      type: Array,
    },
  },
  methods: {
    selectContact(contactId) {
      router.push({ path: `` });
    },
  },
  components: {
    ContactPreview,
  },  
};
</script>

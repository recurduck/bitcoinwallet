<template>
  <div class="contact-app">
    <ContactFilter :handleChange="handleChange" />
    <ContactList :contacts="contacts" />
    <router-link class="contact-add flex align-center justify-center" to="/contact/edit/new/?add=true">+</router-link>
  </div>
</template>
<script>
import { contactService } from '../services/contact.service'
import ContactFilter from '../cmps/contact-filter.vue'
import ContactList from '../cmps/contact-list.vue'
export default ({
  data() {
    return {
      filterBy: null,
      contacts: null,
    }
  },
  methods: {
    handleChange(ev) {
      this.filterBy = ev.target.value
      this.contacts = contactService.query(this.filterBy)
    },
  },
  created() {
    this.contacts = contactService.query()
  },
  components: {
    ContactFilter,
    ContactList,
  }
})
</script>

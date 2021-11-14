<template>
  <div class="contact-edit flex column align-center">
    <div class="controler flex space-between">
      <button @click="goBack">Back</button>
      <button v-if="!isAddMode" @click="onDelete">Delete</button>
    </div>
    <img :src="getAvatar(contact)" />
    <form class="flex column align-center" @submit="onSave">
      <input class="inp" type="text" name="name" placeholder="name" :value="contact.name" @input="handleChange"/>
      <input class="inp" type="text" name="phone" placeholder="phone" :value="contact.phone" @input="handleChange"/>
      <input class="inp" type="text" name="email" placeholder="email" :value="contact.email" @input="handleChange"/>
      <button class="btn-submit" type="submit">Save</button>
    </form>
  </div>
</template>
<script>
import router from "../router/index";
import { contactService } from "../services/contact.service";
export default {
  data() {
    return {
      contact: null,
      isAddMode: null,
    };
  },
  methods: {
    getAvatar(name) {
      return `https://avatars.dicebear.com/api/adventurer/${name._id}.svg?b=%23f4f4f4`;
    },
    goBack() {
      router.push({
        path: `/contact${!this.isAddMode ? `/${this.contact._id}` : ""}`,
      });
    },
    onDelete() {
      contactService.remove(this.contact._id)
      router.push({path: '/contact'})
    },
    onSave() {
      contactService.save(this.contact)
      this.goBack()
    },
    handleChange(ev) {
      this.contact[ev.target.name] = ev.target.value
    }
  },
  created() {
    let id = this.$route.params.id;
    this.isAddMode = this.$route.query.add;
    this.contact = (id && !this.isAddMode) ? contactService.getById(id) : {
      name: '',
      phone: '',
      email: ''
    }
    console.log(this.isAddMode, this.contact)
  },
};
</script>

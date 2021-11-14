<template>
  <li class="flex align-center contact-preview">
      <img :src="getAvatar(contact._id)" />
      <div class="contact-preview-details flex column space-around">
        <span>{{ contact.name }}</span>
        <span>{{ contact.phone }}</span>
      </div>
  </li>
</template>
<script>
export default {
  props: {
    contact: {
      type: Object,
    },
  },
  methods: {
    getAvatar(name) {
      return `https://avatars.dicebear.com/api/adventurer/${name}.svg?b=%23f4f4f4`;
    }
  },
};
</script>

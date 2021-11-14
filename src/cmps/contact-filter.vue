<template>
  <input class="contact-filter" placeholder="Search" type="text" name="filter" @input="handleChange"/>
</template>
<script>
export default {
  props: {
    handleChange: {
      type: Function,
    },
  },
};
</script>

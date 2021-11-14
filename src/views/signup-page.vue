<template>
  <div class="signup flex column align-center">
    <img src="@/assets/bitcoin.svg" alt="BTC" />
    <h1>Sign up to get free 100 coins</h1>
    <form class="flex column align-center" @submit.prevent="onSignup">
      <input
        placeholder="Please enter your name"
        class="inp"
        type="text"
        name="name"
        v-model="name"
      />
      <button class="btn-signup" type="submit">Sign up</button>
    </form>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  data() {
    return {
      name: null,
    };
  },
  methods: {
    onSignup() {
      if (this.name.length >= 3) {
        let userName = this.name
        this.$store.dispatch({ type: "login", userName });
        router.push({
          path: `/`,
        });
      }
    },
  },
};
</script>

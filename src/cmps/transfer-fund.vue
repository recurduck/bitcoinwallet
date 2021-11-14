<template>
  <form class="flex transfer" @submit.prevent="onTransfer">
    <input
      class="inp inp-transfer"
      type="number"
      name="amount"
      placeholder="Please Enter Amount..."
      v-model="amount"
    />
    <button class="btn-transfer" type="submit">Transfer</button>
  </form>
</template>
<script>
import { userService } from "../services/user.service";
export default {
  props: {
    contact: {
      type: Object,
    },
  },
  data() {
    return {
      amount: null,
    };
  },
  methods: {
    onTransfer() {
      let move = userService.addMove(this.contact, this.amount);
      this.$store.dispatch({ type: "onAddMove", move });
      this.amount = null;
    },
    // handleChange(ev) {
    //   this.amount = +ev.target.value;
    // },
  },
};
</script>

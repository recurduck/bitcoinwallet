<template>
  <div class="home" v-if="getUser">
    <div class="logged-user flex space-between">
      <h1>Hi, {{ getUser.name }}!</h1>
      <img src="@/assets/logout.svg" @click="onSignout"/>
    </div>
    <div class="user-stats flex space-between">
      <div class="curr-balance">
        <h3>CURRENT BALANCE</h3>
        <p>
          BIT: <span>{{ formatToCurrency(getUser.coin, "BTC") }}</span>
        </p>
        <p>
          USD: <span>{{ formatToCurrency((1 / rate) * getUser.coin) }}</span>
        </p>
      </div>
      <div>
        <h3>CURRENT BTC USD <span>live</span></h3>
        <h2>{{ formatToCurrency(1 / rate) }}</h2>
      </div>
    </div>
    <chart
      v-if="marketPriceData"
      :title="marketPriceData.name"
      :data="marketPriceData.values"
      :description="marketPriceData.description"
      :height="300"
      yUnit="$"
      color="rgba(235, 162, 51, 1)"
    />
    <div class="user-moves">
      <h3 class="flex align-center">
        <img src="@/assets/recycle.svg" alt="moves" />Last 5 Moves
      </h3>
      <move-list :moves="getUser.moves" />
    </div>
  </div>
</template>

<script>
import router from "../router/index";
import { bitcoinService } from "../services/bitcoin.service.js";
import Chart from "../cmps/chart.vue";
import MoveList from "../cmps/move-list.vue";

export default {
  data() {
    return {
      rate: null,
      user: null,
      marketPriceData: null,
    };
  },
  computed: {
    getUser() {
      let loggedInUser = this.$store.state.user;
      if (!loggedInUser) router.push({ path: `/signup` });
      else return loggedInUser;
    },
  },
  methods: {
    async getRate(coin) {
      this.rate = await bitcoinService.getRate(coin);
      setTimeout(() => {
        this.getRate(1);
      }, 30000);
    },
    async getMarcketPrice(month = 1) {
      this.marketPriceData = await bitcoinService.getMarcketPrice(month);
    },
    formatToCurrency(num, curr = "USD") {
      return num.toLocaleString("en-US", {
        style: "currency",
        currency: curr,
      });
    },
    onSignout() {
        this.$store.dispatch({ type: "logout" });
    }
  },
  async created() {
    this.getRate(1);
    this.getMarcketPrice();
  },
  components: {
    Chart,
    MoveList,
  },
};
</script>

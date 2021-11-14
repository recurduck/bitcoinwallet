<template>
  <div class="chart-page flex column align-center">
    <chart
      v-if="marketPriceData"
      :title="marketPriceData.name"
      :description="marketPriceData.description"
      :data="marketPriceData.values"
      :height="300"
      yUnit="$"
      color="rgba(235, 162, 51, 1)"
    />
    <chart
      v-if="tradeVolumeData"
      :title="tradeVolumeData.name"
      :description="tradeVolumeData.description"
      :data="tradeVolumeData.values"
      :height="300"
      yUnit="$"
      color="rgba(33, 140, 255, 1)"
    />
    <chart
      v-if="avgBlockSizeData"
      :title="avgBlockSizeData.name"
      :description="avgBlockSizeData.description"
      :data="avgBlockSizeData.values"
      :height="300"
      color="rgba(255, 255, 255, 1)"
    />
    <chart
      v-if="walletUsersData"
      :title="walletUsersData.name"
      :description="walletUsersData.description"
      :data="walletUsersData.values"
      :height="300"
      color="rgba(255, 150, 0, 1)"
      :hidePoints="true"
    />
  </div>
</template>
<script>
import { bitcoinService } from "../services/bitcoin.service.js";
import Chart from "../cmps/chart.vue";

export default {
  data() {
    return {
      marketPriceData: null,
      tradeVolumeData: null,
      avgBlockSizeData: null,
      walletUsersData: null,
    };
  },
  methods: {
    async getMarcketPrice(month = 1) {
      this.marketPriceData = await bitcoinService.getMarcketPrice(month);
    },
    async getTradeVolume(month = 1) {
      this.tradeVolumeData = await bitcoinService.getTradeVolume(month);
    },
    async getAvgBlockSize(month = 1) {
      this.avgBlockSizeData = await bitcoinService.getAvgBlockSize(month);
    },
    async getWalletUsers(month = 144) {
      this.walletUsersData = await bitcoinService.getWalletUsers(month);
    },
  },
  created() {
    this.getMarcketPrice();
    this.getTradeVolume();
    this.getAvgBlockSize();
    this.getWalletUsers();
  },
  components: {
    Chart,
  },
};
</script>

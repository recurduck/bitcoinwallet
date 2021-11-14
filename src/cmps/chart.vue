<script>
import { Line } from "vue-chartjs";
export default {
  props: ["title", "data", "description", "color","yUnit", "xUnit","hidePoints"],
  extends: Line,
  mounted() {
    // this.renderChart(this.data, this.options);
    // console.log(this.title, this.data, this.description, this.color, this.yUnit, this.hidePoints);
    let yUnit = this.yUnit
    this.renderChart(
      {
        labels: this.data.map((el) => {
          let label = new Date(el.x * 1000);
          return `${label.toDateString().slice(4, 10)}`;
        }),
        datasets: [
          {
            label: this.title,
            data: this.data.map((el) => el.y),
            backgroundColor: this.color.replace(/[\d]\)/,'0.1)'),
            hoverBackgroundColor: this.data.map((el, idx, data) => {
              if (idx === 0 || el.y >= data[idx - 1].y) return "#5ead3a";
              else return "#da0000";
            }),
            fill: true,
            pointBackgroundColor: this.data.map((el, idx, data) => {
              if (idx === 0 || el.y >= data[idx - 1].y) return "#5ead3a";
              else return "#da0000";
            }),
            pointHitRadius: 5,
            pointRadius: (this.hidePoints)?1:4,
            pointBorderColor: "transparent",
            hoverBorderColor: "#ffffff",
            borderWidth: 1,
            borderColor: this.color,
            borderCapStyle: "round",
            borderDash: [],
          },
        ],
      },
      {
        title: {
            display: true,
            text: [this.title, this.description],
            fontSize: 18,
        },
        tooltips: {
          // backgroundColor: '#17BF62',
        },
        subtitle: {
          display: true,
          text: this.description
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
                callback: function (value, index, values) {
                  if(value/1000000000 >= 1) value = value/1000000000+'b'
                  else if(value/1000000 >= 1) value = value/1000000+'m'
                  else if(value/1000 >= 1) value = value/1000+'k'  
                  if(!yUnit) return value
                  return `${yUnit}${value}`;
                },
              },
              gridLines: {
                display: true,
                borderDash: [3, 3],
                lineWidth: 0.5,
                color: "#95959585",
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: true,
                borderDash: [3, 3],
                lineWidth: 0.5,
                color: "#95959585",
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    );
  },
};
</script>
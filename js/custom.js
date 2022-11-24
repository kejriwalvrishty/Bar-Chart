function updateChart() {
  async function fetchData() {
    const url = "http://localhost/BarChart/js/jsonData.json";
    const response = await fetch(url);
    const dataPoints = await response.json();
    console.log(dataPoints);
    return dataPoints;
  }

  fetchData().then((dataPoints) => {
    const axis = dataPoints.some_var.map(function (index) {
      return index.axis;
    });

    const point = dataPoints.some_var.map(function (index) {
      return index.point;
    });

    console.log(axis);
    console.log(point);

    myChart.config.data.labels = axis;
    myChart.config.data.datasets[0].data = point;
    myChart.update();
  });
}

// config
const config = {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: "Chart lines",
        data: [],
        backgroundColor: [
          "rgba(255, 26, 104, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(0, 0, 0, 0.2)",
        ],
        borderColor: [
          "rgba(255, 26, 104, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(0, 0, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("canvas"), config);

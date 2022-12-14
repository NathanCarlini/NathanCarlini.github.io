let M = {};
let C = {};
C.init = function () {
  for (let i = 0; i < indexes.length; i++) {
    // console.log('le tableau parcouru renvoie la cause : ' + indexes[i]);
    // console.log('la cause sélectionnée est : ' + selectedCause);
    if (selectedCause == indexes[i]) {
      indexCause = indexes.indexOf(indexes[i]);
    }
  }

  function selectionData(data) {
    for (let i = 0; i < data.length; i++) {
      // console.log("longueur data : " + data.length);
      // console.log("boucle numéro : " + i);
      let elementValues = Object.values(data[i]);

      let year = elementValues[0];
      let yearStr = year.toString();
      let country = elementValues[1];
      let cause = elementValues[indexCause + 2];

      let toRender = [yearStr, cause, country];
      option.series[0].data.push(toRender);
      // console.log(toRender);
      // console.log(option.series[0].data);
      // renderData(toRender)
    }
  }

  renderData = function (toRender) {
    option.series[0].data.push(toRender);
    // console.log(option.series[0].data);
  };
  // Initialize the echarts instance based on the prepared dom
  var myChart = echarts.init(document.getElementById("streamchart"));

  // Specify the configuration items and data for the chart
  var option;

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
        lineStyle: {
          color: "rgba(255,255,255,0.2)",
          width: 1,
          type: "solid",
        },
      },
    },
    legend: {
      data: [
        "African Region",
        "Eastern Mediterranean Region",
        "European Region",
        "Region of the Americas",
        "South-East Asia Region",
        "Western Pacific Region",
      ],
    },
    singleAxis: {
      top: 50,
      bottom: 50,
      axisTick: {},
      axisLabel: {},
      type: "time",
      axisPointer: {
        animation: true,
        label: {
          show: true,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          opacity: 0.2,
        },
      },
    },
    series: [
      {
        type: "themeRiver",
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowColor: "rgba( 255,  255,  255, 0.8)",
          },
        },
        data: [],
      },
    ],
  };
  console.log(option.series[0].data);
  // option.series[0].data.push(toRender)

  option && myChart.setOption(option);
};
let load = async function () {
  fetch(
    "https://raw.githubusercontent.com/NathanCarlini/countries/main/worldRegionsWB.json"
  )
    .then((result) => result.json())
    .then((data) => {
      // console.log(data);
      selectionData(data);
    });
  C.init();
};
load();

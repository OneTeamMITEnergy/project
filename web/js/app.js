window.onload = function () {
  d3.csv('/data/line.csv', function (error, data) {
    data.forEach(function (d) {
      d.year = +d.year;
      d.variableA = +d.variableA;
      d.variableB = +d.variableB;
      d.variableC = +d.variableC;
      d.variableD = +d.variableD;
    });

    var chart = makeLineChart(data, 'year', {
      'Fluid A': {column: 'variableA'},
      'Fluid B': {column: 'variableB'},
      'Fluid C': {column: 'variableC'},
      'Fluid D': {column: 'variableD'}
    }, {xAxis: 'Time', yAxis: 'Efficiency'});
    chart.bind("#fluidVSTime");
    chart.render();
    chart.bind("#fluidVSTime2");
    chart.render();
    chart.bind("#fluidVSTime3");
    chart.render();
    chart.bind("#fluidVSTime4");
    chart.render();
    chart.bind("#fluidVSTime5");
    chart.render();
    chart.bind("#fluidVSTime6");
    chart.render();
  });
};
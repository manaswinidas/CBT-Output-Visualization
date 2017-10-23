const $ = require('jquery');
const Chartist = require('chartist');

$.getJSON("fio_json.json", (data) => {
  const jobs = data.jobs;
  jobs.forEach(job => renderJob(job));
});

function renderJob(job) {
  const writeChart = $('<div class="write-chart ct-chart ct-minor-seventh"></div>');
  $('.chart-block').append(writeChart);
  const clat = job.write.clat.percentile;
  new Chartist.Bar(writeChart[0], {
    labels: Object.keys(clat),
    series: [
      {
        "name": "write",
        "data": Object.values(clat)
      },
    ]
  },{
    width: 1000,
    height: 500,

  });

}

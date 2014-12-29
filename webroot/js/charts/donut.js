$(function () {

	var data = [
		{label: "CakePHP", data: 3, color: "#F90"},
		{label: "Laravel", data: 1, color: "#777"}
	];
//	var series = 3;
//	for( var i = 0; i<series; i++)
//	{
//		data[i] = { label: "Series "+(i+1), data: Math.floor(Math.random()*100)+1 }
//	}

	$.plot($("#donut-chart"), data,
	{
		colors: ["#F90", "#222", "#777", "#AAA"],
	        series: {
	            pie: {
	                innerRadius: 0.5,
	                show: true
	            }
	        }
	});

});
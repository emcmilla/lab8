function initMap() {
	// add your code here
	L.mapquest.key = '5hwAHaAAIHmMJ0aHjADur9S9R7PTjfxE';

	var map = L.mapquest.map('map',{
		center: [32.878, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});
	L.marker([32.878, -117.236]).addTo(map);
}
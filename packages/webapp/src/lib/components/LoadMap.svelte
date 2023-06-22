<script>
	import 'leaflet/dist/leaflet.css';
	import { onMount } from 'svelte';
	export let props;

	let mapInstance;
	let MapContainer;

	onMount(async () => {
		L = (await import('leaflet')).default;
		setSize();
		createMap();
	});

	function createMap() {
		if (props.coordinates.lat && props.coordinates.lon) {
			var mapOptions = {
				center: [props.coordinates.lat, props.coordinates.lon],
				zoom: 17,
				scrollWheelZoom: true
			};

			mapInstance = L.map(MapContainer, mapOptions);
			mapInstance.addLayer(L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png'));

			L.marker([props.coordinates.lat, props.coordinates.lon]).addTo(mapInstance);
			mapInstance.invalidateSize();
		} else {
			MapContainer.append('Location not available');
		}
	}

	function setSize() {
		if (props.size == 'full') {
			MapContainer.classList.add('h-[80vh]');
			MapContainer.classList.add('w-[80vw]');
		} else if (props.size == 'lg') {
			MapContainer.classList.add('h-[70vh]');
			MapContainer.classList.add('w-full');
		} else if (props.size == 'md') {
			MapContainer.classList.add('h-[50vh]');
			MapContainer.classList.add('w-full');
		} else if (props.size == 'sm') {
			MapContainer.classList.add('h-[10vh]');
			MapContainer.classList.add('w-full');
		} else {
			MapContainer.classList.add('h-full');
			MapContainer.classList.add('w-full');
		}
	}
</script>

<div
	bind:this="{MapContainer}"
	class="relative transform overflow-hidden bg-white px-4 pb-1 pt-1 text-center shadow-xl transition-all"
></div>

<template>
	<div>
		<div id="map2"></div>
	</div>
</template>

<style scoped>
#map2 {
	border: 6px solid hwb(214 94% 3% / 0.9);
	border-radius: 22px;
	/* width:1024px; */
	width: 100%;
	height: 180px;
}

@media (min-width: 550px) and (max-width : 1023px) {
	#map2 {
		height: 300px;

	}
}

@media (min-width: 350px) and (max-width : 549px) {
	#map2 {
		height: 230px;

	}
}
</style>

<script>
export default {
	name: "KakaoMap_Parking",
	data() {
		return {
			map: null,

		}
	},
	setup() { },
	created() { },
	mounted() {
		if (window.kakao && window.kakao.maps) {
			this.loadMap();
		} else {
			this.loadScript();
		}
	},
	unmounted() { },
	methods: {
		loadScript() {
			const script = document.createElement('script');
			script.src =
				"//dapi.kakao.com/v2/maps/sdk.js?appkey=db58bcbb3c6d0c3a00db7cbdfe9e9627&autoload=false";
			script.onload = () => window.kakao.maps.load(this.loadMap);
			document.head.appendChild(script);
		},
		loadMap() {
			const container = document.getElementById("map2");
			const options = {
				center: new window.kakao.maps.LatLng(37.6562753, 127.0609311),
				level: 3
			};
			this.map = new window.kakao.maps.Map(container, options);
			this.loadMaker();
		},

		loadMaker() {
			const markerPosition = new window.kakao.maps.LatLng(
				37.6562753,
				127.0609311
			);
			const marker = new window.kakao.maps.Marker({
				position: markerPosition,
			});

			marker.setMap(this.map);
		}
	}
};
</script>
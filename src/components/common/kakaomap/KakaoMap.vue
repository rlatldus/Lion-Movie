<template>
	<div>

		<h2 class="location">
			<span class="material-icons">group_work</span>
			About us
		</h2>
		<div id="map"></div>
	</div>
</template>

<style scoped>
h2 {
	display: flex;
	color: rgb(215, 224, 232);
}

span {
	font-size: 120%;
	margin-right: 5px;


}

.location {
	margin-bottom: 30px;
}

#map {
	border: 6px solid hwb(214 94% 3% / 0.9);
	border-radius: 22px;
	/* width:1024px; */
	width: 100%;
	height: 450px;
}

@media (min-width: 550px) and (max-width : 1023px) {
	#map {
		height: 300px;

	}
}

@media (min-width: 350px) and (max-width : 549px) {
	#map {
		height: 230px;

	}
}
</style>

<script>
export default {
	name: "KakaoMap",
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
			// "//dapi.kakao.com/v2/maps/sdk.js?appkey=e4a67d3a82cdb3ba43c8126a1c2a3661&autoload=false";
			script.onload = () => window.kakao.maps.load(this.loadMap);
			document.head.appendChild(script);
		},
		loadMap() {
			const container = document.getElementById("map");
			const options = {
				center: new window.kakao.maps.LatLng(37.657475, 127.061729),
				level: 3
			};
			this.map = new window.kakao.maps.Map(container, options);
			this.loadMaker();
		},

		loadMaker() {
			const markerPosition = new window.kakao.maps.LatLng(
				37.657475,
				127.061729
			);
			const marker = new window.kakao.maps.Marker({
				position: markerPosition,
			});

			marker.setMap(this.map);
		}
	}
};
</script>
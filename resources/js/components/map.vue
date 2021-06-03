<template>
    <div class="map">

        <yandex-map
            :coords="coordsFirst"
            :zoom="10"
            @click="onClick"
            @contextmenu="onRightClick"
        >
            <ymap-marker
                :coords="coordsFirst"
                marker-id="1"

            />
            <ymap-marker
                :coords="coordsSecond"
                marker-id="2"

            />
        </yandex-map>
    </div>
</template>

<script>
import { yandexMap, ymapMarker, loadYmap} from 'vue-yandex-maps'

export default {
    name: 'ymap',
    components: { yandexMap, ymapMarker },
    data: () => ({
        coordsFirst:[
             54.82896654088406,
             39.831893822753904,
        ],
        coordsSecond: [
            59.908113, 30.298819
        ],
        distance: 0
    }),
    methods: {
        onClick(e) {
            this.coordsFirst = e.get('coords');
            console.log(e.get('coords'))
            this.setDistance()
        },
        onRightClick(e) {
            this.coordsSecond = e.get('coords');
            console.log(e.get('coords'))
            this.setDistance()
        },
        async setDistance() {


            this.distance = ymaps.coordSystem.geo.distance(this.coordsFirst, this.coordsSecond)
            this.$emit('distance', Math.floor(this.distance))
        }
    },
   async mounted() {
       const settings = { lang: 'en_US' };
       await loadYmap(settings);

    }
    // other options
}

</script>

<style scoped>
.map{

    width: 400px;
    height: 300px;
}
</style>

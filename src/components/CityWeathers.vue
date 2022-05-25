<template>
    <template>
        <div class="card">
            <div class="card-body">
                <div v-bind:key="index" v-for="(item, index) in data">
                    <h3 class="my-0 text-primary" style="font-size: 15px;"><strong>{{index}}</strong></h3>
                </div>
            </div>
        </div>
    </template>
</template>

<script>
    import moment from 'moment'
    import _ from 'lodash';
    export default {
        name: "city-weathers-component",
        props: ['weathers'],
        data() {
            return {
                data: [],
            }
        },
        methods: {
            // eslint-disable-next-line no-unused-vars
            groupday(value, index, array){
                let byday={};
                let d = new Date(value.time);
                d = Math.floor(d.getTime()/(1000*60*60*24));
                byday[d]=byday[d]||[];
                byday[d].push(value);
                return byday
            }
        },
        mounted() {
            let w = JSON.parse(this.weathers)
            this.data = _.groupBy(w, function(result){
                return moment(result.time*1000, 'L')
            });
            console.log('data22',this.data)
        }
    }
</script>

<style scoped>

</style>

<template>
  <div>
      <h2>{{cityname}}--城市界面</h2>
       <div id="main" style="width: 7.5rem; height: 9rem"></div>
  </div>
</template>

<script>
export default {
    props:['cityname'],
    mounted(){
        this.$myChart.cityMap('main',this.cityname,[])
    }
}
</script>

<style>

</style>
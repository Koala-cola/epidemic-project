<template>
  <div>
      疫情列表数据
  </div>
</template>

<script>
import api from '../../../api/index'
export default {
    created(){
        api.getAllData()
        .then(res=>{
            console.log('--全球----',res.data);
        })
    }
}
</script>

<style>

</style>
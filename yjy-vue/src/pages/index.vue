<template lang="html">
  <div id="index">
      <div class="index_hd" v-cloak>
          
          <span :class="{on:nowPlace==77}" @click="place(77)">佛山</span>
          <em>|</em>
          <span :class="{on:nowPlace==75}" @click="place(75)">广州</span>
    

      </div>
      <div class="index_banner" v-cloak>
         
      </div>

     
   
    </div>
</template>

<script>

export default {
  name:'Index',
  data(){
      return{
      }
  }
}
</script>

<style lang="css" >
@import url("../assets/css/device");
@import url("../assets/css/common.css");
@import url("../assets/css/index2.css"); 


</style>



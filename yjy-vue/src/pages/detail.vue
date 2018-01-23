<template>
    <div>{{id}}</div>
    
</template>
<script>
export default {
  name:"Detail",
  data(){
    return{
      id:'1'
    }
  },
  created: function() {
    this.id = this.$route.query.id;
    
  }
}
</script>

<template>
<div>
  <div v-for="(item, index) in list" :key="index" >{{item.name}}</div>
  <button @click="addList">ann</button>
  <router-view></router-view>
</div>
  
</template>
<script>
export default {
  data(){
    return{
      list : [
    {
        id: 1,
        name: 'test1',
    },
    {
        id: 2,
        name: 'test2',
    },
    {
        id: 3,
        name: 'test3',
    },
]
    }
  },
  methods:{
    addList(){
    this.$router.push('test/childnew')
    }
  }
}
</script>

<template>
  <div>
    html
    <!-- <html-panel :url.sync="url1"></html-panel> -->
    <!-- <html-panel :url.sync="url2"></html-panel> -->
  </div>
</template>
<style scoped>
  div{color:red}
</style>
<script>
import HtmlPanel from '@/components/HtmlPanel.vue'
  export default{
    data () {
      return {
        url1: '',
        url2: ''
      }
    },
    components:{
      HtmlPanel
    },
    mounted () {
      this.url1 = 'https://iconsole.cmi.chinamobile.com/'
      // this.url2 = 'https://juejin.im/timeline'
    },
    methods: {
    }
  }
</script>
<template>
  <div class="zk-file-cloud"  v-if="asyncflag">
 
  </div>
</template>

<script>
  import { THEME_GETVALUE_GET } from '@/service/api/apiUrl'
  export default {
    name: 'zk-file-cloud',
    props: {
      widget: {}
    },
    data () {
      return {
        viewModel: '',
        asyncflag: false
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      async  init () {
        this.asyncflag = true
        const parameter = {
          dataId: this.widget && this.widget.dataId,
          defaultId: '5b406cddfef00000a0000001'
        }
        this.viewModel = await this.$api.get(THEME_GETVALUE_GET, parameter)
        // console.info('zk-file-cloud数据',this.viewModel)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import './style.scss';
</style>


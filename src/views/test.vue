<template>
    <div>
        <el-button type="text" @click="click">点击打开 Dialog</el-button>
        <zk-test ref="web_safecolors"></zk-test>
        <x-popup></x-popup>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                colorModel: true
            }
        },
        mounted () {
            this.init()
        },
        methods: {
            async init () {
                this.colorModel = true
            },
            click () {
                this.colorModel = true
                this.$refs.web_safecolors.$emit('child', this.safeWebcolorsVisible)
                console.info('点击')
            }
        }
    }
</script>

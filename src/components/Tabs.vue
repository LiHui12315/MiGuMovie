<template>
  <ul class="migu-tabs">
      <li>

      </li>
  </ul>
</template>

<script>
export default {
    name: 'MiguTabs',
    props: {
        value: {
            type: Number,
            default: 0
        },
        tabs: {
            type: Array,
            default (){
                return [
                    'a',
                    'b'
                ]
            }
        }
    },
    data () {
        return {
            myValue: this.value
        }
    },
    watch: {
        myValue (newVal) {
            this.$emit('input' ,newVal)
        }
    }
}
</script>

<style >

</style>
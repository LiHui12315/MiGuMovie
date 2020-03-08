<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  // created () {
  //   axios
  //     .post (
  //       'http://localhost:8080/lovev/miguMovie/data/seeFilmData.jsp',
  //       {
  //         nodeId: 70022794,
  //         pagesize: 3,
  //         pageidx: 1
  //       },
  //       {
  //         transformRequest (data) {
  //           let arr = []
  //           for (let key in data) {
  //             arr.push(`${key}=${data[key]}`)
  //           }
  //           return arr.join('&')
  //         }
  //       }
  //     )
  //     .then(response => {
  //       console.log(response)
  //     })
  // }
}
</script>
<style lang="scss">
#app{
  font-size: 16px;
}
</style>

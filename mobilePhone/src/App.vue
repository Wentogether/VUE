<template>
  <div id="app">
     <div class="headertop">
      <p class="title">详情</p>
    </div>
      <div class="footertop">
    <h2 class="title">底部</h2>
  </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0px;
}
.footertop {
  position: fixed;
  bottom: 0px;
  height: 60px; /*高度可以不写，可以通过内部元素撑开，但是需要考虑是否会与自适应部分发生重合*/
  width: 100%;
  left: 0px;
  text-align: center;
  background: gray;
}
.title{
  margin-top: 10px;
}
.headertop {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 44px; /*高度可以不写，可以通过内部元素撑开，但是需要考虑是否会与自适应部分发生重合*/
  width: 100%; /*宽度是必要，如果没有宽度就无法撑出div*/
  text-align: center;
  background: gray;
}
</style>

<template>
 <div class="home">

<div class="middle_outer">
  <div class="middle_inner">
<h2>一多选题（至少选择两项）</h2>
<h3>1.Xcode开发工具支持以下几种开发语言</h3>
  <el-checkbox-group v-model="checkList" class="1">
    <el-checkbox label="A.swift语言"></el-checkbox><br>
    <el-checkbox label="B.object-c语言"></el-checkbox><br>
    <el-checkbox label="C.java语言"></el-checkbox><br>
    <el-checkbox label="D.C++语言"></el-checkbox><br>
    <el-checkbox label="点击选中选项" disabled></el-checkbox>
  </el-checkbox-group>
<h3>2.Xcode开发工具支持以下几种开发语言</h3>
  <el-checkbox-group v-model="checkList2" class="2">
    <el-checkbox label="A.swift语言"></el-checkbox><br>
    <el-checkbox label="B.object-c语言"></el-checkbox><br>
    <el-checkbox label="C.java语言"></el-checkbox><br>
    <el-checkbox label="D.C++语言"></el-checkbox>
  </el-checkbox-group>
    <el-button-group>
  <router-link to="/mine"> <el-button type="primary" class="btn-block">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button> </router-link>
</el-button-group>
    <!-- 组件 -->
    <mine :text="component1Text" v-on:data1="emit"></mine>
 </div>
  </div>
   </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      a: '',
      checkList: ['点击选中选项'],
      checkList2: []
    }
  },
  //  常用的生命周期方法
  // created()/mounted(): 发送ajax请求, 启动定时器等异步任务
  // beforeDestory(): 做收尾工作, 如: 清除定时器
  mounted () {
    // 在生命周期中把该方法释放给原生
    window.OCcallJSClick = this.OCcallJSClick
  },
  computed: {
    areas: function () {
      console.log('调用computed')
      let areas = 0
      areas = this.length * this.width
      return areas
    }
  },
  methods: {
    OCcallJSClick (a) {
      alert('传递到vue成功')

      document.getElementById('returnValue').value = JSON.stringify(a)
    },
    OCwxPayBlock: function () {
      window.webkit.messageHandlers.OCtoJSClick.postMessage(null)
    },
    clickVUE: function (a) {
      a = {order_no: '201511120981234', channel: 'wx', amount: 1, subject: '粉色外套'}
      // 传给app数据
      const u = navigator.userAgent
      // android终端
      const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
      // IOS终端
      const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      if (isiOS) {
        alert('传递到iOS app成功')
        window.webkit.messageHandlers.JScallOCClick.postMessage(a)
      } else if (isAndroid) {
        window.java_obj.JScallOCClick()
        // window.android.JScallOCClick()
        alert('传递到android app成功')
      }
      // 如何弹出json数据 JSON.stringify(data)
      document.getElementById('returnValue').value = JSON.stringify(a)
    },
    emit (data1) {
      alert(data1)
      console.log('data1', data1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
   list-style-type: none;
   padding: 0;
}

li {
   display: inline-block;
   margin: 0 10px;
}
.btn1 {

   border: 0;
   outline: none;

}
.disabled {
  outline: none;
  background-color: #ddd;
  border-color: #ddd;
  color:#57a3f3;
}
.btn-block {
   position: fixed;
   bottom: 10px;
   right: 0px;
}
.middle_outer {
  position: absolute;
  top: 45px;
  bottom: 60px; /*footer部分的高度*/
  left: 10px;
  right: 10px;
  overflow: hidden; /*外层div不滚动，而是内层div滚动，实现自适应*/
  height: auto !important;
}
.middle_inner {
  left: 10px;
  right: 10px;
  height: 100%;
  overflow-y: auto;  /*当内容超出后，就会出现滚动条*/
}
</style>

<template>
 <div class="home">

  <el-button-group>
  <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
  <router-link to="/mine"> <el-button type="primary" >下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button> </router-link>
</el-button-group>
 </div>
</template>

<script>
export default {
  name: 'home',

  data () {
    return {
      a: ''
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

</style>

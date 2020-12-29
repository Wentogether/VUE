<template>
  <div class="hello">
    <h1>{{ msg +' '+ msg2 }}</h1>
    长度：<input v-model="length" type="text" name="rectangle"><br>
    宽度：<input v-model="width" type="text" name="rectangle"> <br>
    面积：<input v-model="areas" type="text" name="rectangle"> <br>
    和为：<input v-model="num" name="rectangle">
    <ul class="one">
      <li v-for="str in Index" :key="str.id"> {{str.title}}</li>
      <li v-for="str in Index" :key="str.id"> {{str.age}}</li>
    </ul>
    <el-button  class="btn1" @click="countDown" :class="{disabled: !this.canclick}">{{content}}</el-button >
    <el-button  class="btn2" @click="addC" >求和</el-button >
    <el-button  class="btn2" @click="add" >+</el-button >
    <el-button  class="btn3" @click="sud" >-</el-button ><br>
    <i class="el-icon-arrow-left" @click="$router.go(-1)"></i>
    性别：<input type="radio" name="sex">男
    <input type="radio" name="sex">女
    <span>提示:{{length}}</span><br>
    <textarea id ="returnValue" type="value" rows="5" cols="40">
    </textarea><br>
    <el-button type="primary" id="one" v-on:click="OCwxPayBlock">OC调用JS方法</el-button>
    <el-button type="primary" id="two" v-on:click="clickVUE">JS调用OC方法</el-button>
    <br>
    <a v-bind:href="hrefurl" target="_blank"> <img :src="imgurl" alt=""> </a>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data () {
    return {

      hrefurl: 'https://www.baidu.com',
      imgurl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg',
      msg: 'Welcome to Your Vue.js',
      msg2: 'App',
      length: '',
      width: '',
      num: '',
      totalTime: 10,
      content: '发送验证码',
      canClick: true,
      Index: [
        {
          title: '1',
          age: 121
        },
        {
          title: '2',
          age: 122
        }
      ]
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

    countDown () {
      if (!this.canClick) {
        return
      }
      this.canClick = false
      // this.content = this.totalTime + 's后重新发送'
      let clock = window.setInterval(() => {
        this.totalTime--
        this.content = this.totalTime + 's重新发送'
        if (this.totalTime < 1) {
          window.clearInterval(clock)
          this.content = '发送验证码'
          this.totalTime = 10
          this.canClick = true
        }
      }, 1000)
    },
    addC: function () {
      this.num = parseInt(this.length) + parseInt(this.width)
    },
    add: function () {
      console.log('add start')
      this.Index[0].age++
    },
    sud: function () {
      console.log('add start')
      if (this.Index[1].age > 111) {
        this.Index[1].age--
      } else {
        alert('最小了')
      }
    },
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

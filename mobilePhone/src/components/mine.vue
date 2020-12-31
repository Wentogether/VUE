<template>
<div class="mine">
<i class="el-icon-arrow-left" @click="emitMethod"></i>
<div class="middle_outer">
  <div class="middle_inner">
  <h1>{{ msg +' '+ msg2 }}</h1>

  <el-input placeholder="请输入内容" v-model="input1" class="inputx">
    <template slot="prepend">Http://</template>
  </el-input><br>
  <el-input placeholder="请输入内容" v-model="input2" class="inputx">
    <template slot="append">.com</template>
  </el-input>
    <ul class="one">
      <li v-for="str in Index" :key="str.id"> {{str.title}}</li>
      <li v-for="str in Index" :key="str.id"> {{str.age}}</li>
    </ul>
    <el-button  class="btn1" @click="countDown" :class="{disabled: !this.canclick}">{{content}}</el-button >
    <el-button  class="btn2" @click="addC" >求和</el-button >
    <el-button  class="btn2" @click="add" >+</el-button >
    <el-button  class="btn3" @click="sud" >-</el-button ><br>
    性别：<el-radio v-model="radio" label="1">男</el-radio>
         <el-radio v-model="radio" label="2">女</el-radio>
    <span>提示:{{length}}</span><br>
    <textarea id ="returnValue" type="value" rows="5" cols="40">
    </textarea><br>
    <el-button type="primary" id="one" v-on:click="OCwxPayBlock">OC调用JS方法</el-button>
    <el-button type="primary" id="two" v-on:click="clickVUE">JS调用OC方法</el-button>
    <br>
     <br>
    <a v-bind:href="hrefurl" target="_blank"> <img :src="imgurl" alt="" class="img"> </a>

  </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'mine',

  data () {
    return {
      radio: '1',
      hrefurl: 'https://www.baidu.com',
      imgurl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg',
      msg: 'Welcome to Your Vue.js',
      msg2: 'App',
      input1: '',
      input2: '',
      input3: '',
      select: '',
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
    },
    emitMethod () {
      this.$emit('data1', '嘿嘿嘿')
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- position: absolute   relative -->

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

.img {
   width: 100px;
   height: 100px;
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
.el-icon-arrow-left {
   position: fixed;
   margin-top: 5px;
}
</style>

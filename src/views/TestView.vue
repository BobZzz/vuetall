<template>
  <div>
    <div
      v-for="(item, index) in list"
      :key="index"
    >{{item.name}}</div>
    <button @click="addList">ann</button>
    <router-view></router-view>
  </div>

</template>
<script>

export default {
  data () {
    return {
      list: [
        {
          id: 1,
          name: 'test1',
        },
        {
          id: 2,
          name: 'test2',
        },
        {
          id: 3,
          name: 'test3',
        },
      ],
      path: "ws://172.28.104.52:8088/smart-building/websocket/377999779927433216",
      socket: ""
    }
  },
  created () {
    // this.initWebSocket()
  },
  mounted () {
    this.init()

  },
  methods: {
    addList () {
      this.$router.push('test/childnew')
    },

    //     initWebSocket(){ //初始化weosocket 
    // 　　　　　　　
    // 　　　　　　　　const wsuri = 'ws://172.28.104.52:8088/smart-building/websocket/377999779927433216';//ws地址
    // 　　　　　　　　this.websock = new WebSocket(wsuri); 
    // 　　　　　　　　this.websocket.onopen = this.websocketonopen;

    // 　　　　　　　　this.websocket.onerror = this.websocketonerror;

    // 　　　　　　　　this.websock.onmessage = this.websocketonmessage; 
    // 　　　　　　　　this.websock.onclose = this.websocketclose;
    // 　　　　   }, 

    // 　　　　　　websocketonopen() {
    // 　　　　　　　　console.log("WebSocket连接成功");
    // 　　　　　　},
    // 　　　　　　websocketonerror(e) { //错误
    //  　　　　　　 console.log("WebSocket连接发生错误");
    // 　　　　　　},
    // 　　　　　　websocketonmessage(e){ //数据接收 
    // 　　　　　　　　const redata = JSON.parse(e.data);
    // 　　　　　　　　　//注意：长连接我们是后台直接1秒推送一条数据， 
    //           //但是点击某个列表时，会发送给后台一个标识，后台根据此标识返回相对应的数据，
    //       //这个时候数据就只能从一个出口出，所以让后台加了一个键，例如键为1时，是每隔1秒推送的数据，为2时是发送标识后再推送的数据，以作区分
    // 　　　　　　　　console.log(redata.value); 
    // 　　　　　　}, 

    // 　　　　　　websocketsend(agentData){//数据发送 
    // 　　　　　　　　this.websock.send(agentData); 
    // 　　　　　　}, 

    // 　　　　　 websocketclose(e){ //关闭 
    // 　　　　　　　　console.log("connection closed (" + e.code + ")"); 
    // 　　　　　}
    init: function () {
      if (typeof (WebSocket) === "undefined") {
        alert("您的浏览器不支持socket")
      } else {
        // 实例化socket
        this.socket = new WebSocket(this.path)
        // 监听socket连接
        this.socket.onopen = this.open
        // 监听socket错误信息
        this.socket.onerror = this.error
        // 监听socket消息
        this.socket.onmessage = this.getMessage
      }
    },
    open: function (data) {
      console.log(data);

      console.log("socket连接成功")
    },
    error: function () {
      console.log("连接错误")
    },
    getMessage: function (msg) {
      debugger
      console.log(msg.data)
    },
    send: function () {
      this.socket.send(params)
    },
    close: function () {
      console.log("socket已经关闭")
    }
  },
  destroyed () {
    // 销毁监听
    this.socket.onclose = this.close
  }
}

</script>

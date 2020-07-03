<template>
    <div id="app">
    </div>
</template>

<script type="text/javascript">
    export default {
        name: "app",
        data() {
            return {
                websocket: null
            }
        },
        created() {
            this.initWebSocket();
        },
        destroyed() {
            this.websocket.close();  //离开路由之后断开websocket连接
        },
        methods: {
            initWebSocket() {  //初始化websocket
                const wsurl = "ws://121.40.165.18:8800";
                this.websocket = new WebSocket(wsurl);
                this.websocket.onmessage = this.websocketonmessage;
                this.websocket.onopen = this.websocketonopen;
                this.websocket.onerror = this.websocketonerror;
                this.websocket.onclose = this.websocketonclose;
            },

            websocketonopen() { //连接建立之后执行send方法发送数据
                let actions = {test: 123456};
            },

            websocketonerror() {  //连接建立失败后重连
                this.initWebSocket();
            },

            websocketonmessage(e) { //数据接收
                const redata= JSON.parse(e.data)
                console.log(e.data)
            },

            websocketonclose(e) { //关闭连接
                console.log("断开连接", e)
            }
        },
    }
</script>

<style scoped>
</style>
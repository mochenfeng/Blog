<template>
    <div id="app">
        <div class="bg-img">
            <div class="content">
                <header>Login</header>
                <form action="#">
                    <div class="field">
                        <span>
                            <font-awesome-icon icon="user" /></span>
                        <input type="text" required placeholder="请输入用户名" v-model="loginForm.username">
                    </div>
                    <div class="field space">
                        <span>
                            <font-awesome-icon icon="lock" /></span>
                        <input type="password" ref="input" v-model="loginForm.password" class="password" required
                            placeholder="请输入密码" autocomplete="off">
                        <span class="show" @click="retranslation">{{SHOW}}</span>
                    </div>
                    <div class="pass">
                        <a href="#">Forgot Password</a>
                    </div>
                    <div class="field ">
                        <!-- <input type="submit" value="LOGIN"> -->
                        <input type="submit" @click="login" value="LOGIN">
                    </div>
                    <div class="signup">Dont't have account?
                        <a href="#">Signup Now</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<!-- <script src="https://kit.fontawesome.com/a076d05399.js"></script> -->
<script type="text/javascript">
    export default {
        name: "app",
        data() {
            return {
                loginForm: {
                    username: '',
                    password: '',
                },
                SHOW: "SHOW"
            }
        },
        methods: {
            retranslation() {
                if (this.$refs.input.type === "password") {
                    this.$refs.input.type = "text"
                    this.SHOW = "HIDE"
                } else {
                    this.$refs.input.type = "password"
                    this.SHOW = "SHOW"
                }
            },
            login() {
                if (this.loginForm.username == 'admin' && this.loginForm.password == 123456) {
                    this.$router.push('/index')
                } else {
                    this.$alert('用户名或密码错误', '错误提醒', {
                        confirmButtonText: '确定',
                    });
                }
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .bg-img {
        background: url('../assets/7.jpg') no-repeat;
        background-size: cover;
        height: 100vh;
        background-position: center;
    }

    .bg-img:after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
    }

    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 999;
        width: 370px;
        /* text-align: center; */
        padding: 60px 32px;
        background: rgba(255, 255, 255, 0.04);
        box-shadow: -1px 4px 28px rgba(0, 0, 0, 0.75);
    }

    .content header {
        color: white;
        font-size: 30px;
        font-weight: 600;
        margin: 0 0 35px 0;
        font-family: 'Montserrat', sans-serif;
    }

    .field {
        position: relative;
        height: 45px;
        width: 100%;
        display: flex;
        background: rgb(255, 255, 255, 0.94);
    }

    .field span {
        color: #222;
        width: 40px;
        line-height: 45px;
    }

    .field input {
        height: 100%;
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
        color: #222;
        font-size: 16px;
        font-family: 'Poppins'sans-serif;
    }

    .show {
        position: absolute;
        right: 13px;
        font-size: 13px;
        font-weight: 700;
        color: #222;
        cursor: pointer;
        display: none;
        font-family: 'Montserrat', sans-serif;
    }

    .password:valid~.show {
        display: block;
    }

    .space {
        margin-top: 16px;
    }

    .pass {
        text-align: left;
        margin: 10px 0;
    }

    .pass a {
        color: white;
        font-family: 'Poppins'sans-serif;
        text-decoration: none;
    }

    .pass:hover a {
        text-decoration: underline;
    }

    input[type="submit"] {
        background: #3498db;
        border: 1px solid #2691d9;
        color: white;
        font-size: 18px;
        letter-spacing: 1px;
        font-weight: 600;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
    }

    input[type="submit"]:hover {
        background: #2691d9;
    }

    .login {
        color: white;
        margin: 20px 0;
        font-family: 'Poppins'sans-serif;
    }

    .signup {
        padding: 10px;
        margin: 15px;
        color: white;
        font-size: 15px;
        font-family: 'Poppins'sans-serif;
    }

    .signup a {
        color: #3498db;
        text-decoration: none;
    }

    .signup a:hover {
        text-decoration: underline;
    }
</style>
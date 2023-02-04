<template>
    <div class="auth">
        <div class="title-info">
            <img src="" alt="">
            <div class="title">图书管理系统 后台</div>
        </div>
        
        <div class="form">
            <a-tabs>
                <a-tab-pane key="1" tab="登录">
                    <div class="item">
                        <a-input placeholder="账户" />
                    </div>
                    <div class="item">
                        <a-input placeholder="密码" />
                    </div>
                    <div class="item">
                        <a href="">忘记密码</a>
                    </div>
                    <div class="item">
                        <a-button type="primary">
                            登录
                        </a-button>
                    </div>
                </a-tab-pane>
                <a-tab-pane key="2" tab="注册">
                    register
                </a-tab-pane>
            </a-tabs>
        </div>
    </div>
</template>

<script src="./index.js">




</script>


<style lang="scss" scoped>
    @import './index.scss';

</style>
<template>
    <div id="app">
        <drawer :show="drawerShow" :pos="pos" :tran="tran" @change-show="changeDrawerShow" @on-hide="onHide" @on-show="onShow">
            <div slot="drawer">
                1111侧边栏内容

            </div>
            <view-box ref="viewBox">
                <x-header :left-options="{showBack: false}">
                    <button @click="drawerToggle">=</button>
                </x-header>
                <div class="view">
                    <router-view :webUrl="webUrl"></router-view>
                </div>
                <tabbar icon-class="vux-center" slot="bottom">
                    <tabbar-item link="/">
                        <img slot="icon">
                        <span slot="label">首页</span>
                    </tabbar-item>
                    <tabbar-item link="">
                        <img slot="icon" >
                        <span slot="label">客服</span>
                    </tabbar-item>
                    <tabbar-item link="/message">
                        <img slot="icon" >
                        <span slot="label">留言</span>
                    </tabbar-item>
                    <tabbar-item >
                        <img slot="icon" >
                        <span slot="label">菜单</span>
                    </tabbar-item>
                </tabbar>
            </view-box>
        </drawer>
    </div>
</template>

<script>
   import { ViewBox, XHeader, Tabbar, TabbarItem } from 'vux'
    import Drawer from '@/components/Drawer/drawer.vue'
    export default {
        data(){
           return {
                webUrl: "",
                pos: 'right',   //侧边栏从那边划入
                tran: 'push',   //{string}    默认：overlay    展示方式，push(推开内容区域)或者 overlay(在内容上显示)    
                drawerShow: false,
            }
        },
        methods: {
            drawerToggle() {
                this.drawerShow = !this.drawerShow
            },
            onHide() {
                console.log('hide');
            },
            changeDrawerShow(state) {
                this.drawerShow = state;
                console.log('drawer was changed from components');
            },
            onShow() {
                console.log('show');
            }
        },
        watch: {
            '$route' (to, from) {
                this.drawerShow = false;   //路由跳转、关闭侧边栏
            }
        },
         components: {
            ViewBox,
            Drawer,
            XHeader,
            Tabbar,
            TabbarItem
        }
    }
</script>

<style>
    html {
        height: 100%;
    }
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        overflow-x: hidden;
    }
    #app {
        color: #2c3e50;
        width: 100%;
        height: 100%;
        font-family: Source Sans Pro, Helvetica, "microsoft yahei", sans-serif;
    }
</style>
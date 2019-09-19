<template>

<div>
    
    <group>
      <cell title="title" ></cell>
        <x-input title="账号" v-model="account"></x-input>
    </group>
    <group>
        <x-input title="密码" v-model="passwd" type='password'></x-input>
    </group>
     <group>
      
       <x-switch title='保持登入' v-model="keep"></x-switch>
    </group>
    <group>
      <x-button type='primary' link='./index'>登入</x-button>
      <x-button type='default' @click.native="alert"  >注册</x-button>
    </group>
  </div>
</template>
<script>
import { Group, Cell, XSwitch,Actionsheet,XButton,XInput  } from 'vux'
export default {
  data(){
    return{
      keep: true,
      acount:"",
      passwd:""
    }
  },
    components: {
      Group,
      Cell,
      XSwitch,
      Actionsheet,
      XButton,
      XInput
    },
    methods:{
      alert :function(){
        this.$vux.alert.show({
        title: 'Vux is Cool',
        content: 'Do you agree?',
        onShow () {
          console.log('Plugin: I\'m showing')
        },
        onHide () {
          console.log('Plugin: I\'m hiding')
        }
      })
      }
    }
}
</script>
<style>
  .form-btn{
    margin-left: 0px;
  }
</style>


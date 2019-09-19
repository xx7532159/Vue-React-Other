<template>
<div>
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
  </mt-header>

<mt-swipe :auto="4000" style="height:150px">
  <mt-swipe-item style="background-color:blue">1</mt-swipe-item>
  <mt-swipe-item style="background-color:red" >2</mt-swipe-item>
  <mt-swipe-item style="background-color:green">3</mt-swipe-item>
</mt-swipe>

  <mt-tab-container v-model="active" style="height:150px">
  <mt-tab-container-item id="tab-container1" style="height:150px">
    <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container2" style="height:150px">
    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container3" style="height:150px">
    <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
  </mt-tab-container-item>
</mt-tab-container>

</div>
</template>
<script>
export default {
    methods: {

}
}
</script>
<script >

</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>{{ $t("message.title") }}</h2>
    <h2>{{ $t("placeholder.enter") }}</h2>
    <h2>{{ $t("brands.nike") }}</h2>
    <h2>{{ $t("brands.adi") }}</h2>
    <h2>{{ $t("brands.nb") }}</h2>
    <button class='btn btn-primary' @click="change" >zh</button>
    <button class='btn btn-warning' @click="change" >en</button>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url:'"http://192.168.101.172:8017/ao/loginInit"'
    }
  },
  created(){
    //fetch
    fetch("http://192.168.101.172:8017/ao/loginInit", {
        method : 'post',
        headers : {
          'Content-type' : 'application/json'
        }
    })
    .then(reslut =>{
      console.log(reslut)
      return reslut.json()
    })
    .then(data =>{
      console.log(data)
    })
    
    
  },
  methods:{
    change(){
        this.$i18n.locale == 'zh' ? this.$i18n.locale ='en':this.$i18n.locale = 'zh'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

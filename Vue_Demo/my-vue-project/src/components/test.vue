<template>
    <div>
        <ul>
           <!--<li><a 
              href="http://www.baidu.com">{{ baidu }}</a></li>
            <li><a 
              href="http://www.youku.com">{{ youku }}</a></li>
            <li> <a 
              href="http://www.iqiyi.com">{{ iqiyi }}</a></li>
            -->
            <template v-for ="item in sites ">
               <li :key="item.id"> <a :href="baidu"> {{ item.id }} </a></li>
            </template>
        </ul>
    </div>
</template>
<script>
export default {
    name:"test",
    data () {
        return{
            baidu:"http://www.baidu.com",
            youku:"http://www.youku.com",
            iqiyi:"http://www.iqiyi.com",
            sites:[
               {id:'baidu'}, 
               {id:'youku'},
               {id:'iqiyi'},
            ]
        }
    },
    created () {
        this.init()
    },
    methods : {
        init(){
            console.log("init");
        }
    }
}
</script>

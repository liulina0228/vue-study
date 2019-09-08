import HelloWorld from '@/components/HelloWorld.vue';
<template>
  <div id="app">
    <hello-world 
    @foo=onFoo
    ref='hw' msg="wo shi ni father">123</hello-world>
    <hello-world>
		我来了
		<template v-slot:content>lala</template>
		<template v-slot:footer='slotProps'>{{slotProps.foo}}-----{{slotProps.bar}}</template>	
    </hello-world>
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue"
export default {
  name: "app",
  components: {
    HelloWorld
  },
    provide(){
    return {
      'bla': 'foo'
    }
  },
  mounted () {
    console.log(this.$refs.hw.msg);
    this.$refs.hw.title = "我是被修改的title";
    // 
    console.log(this.$children[0].title);
  },
  methods: {
    onFoo(msg){
      console.log(msg);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

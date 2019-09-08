<template>
  <div class="hello">
    <h1 @click="$emit('foo', 'abc')">{{ msg }}</h1>
    <h2>{{title}}</h2>
    <h2>{{bla}}</h2>
    <button @click="sendMessage">
      给兄弟发消息
    </button>
    <!-- 匿名插槽 -->
    <slot></slot>
    <!-- 具名插槽 -->
    <slot name="content"></slot>
    <!-- 作用域插槽 -->
    <slot name="footer" foo="bla" bar="bar"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // 和props是一样的
  inject: ['bla'],
  data () {
    return {
      title: '',
      bar: 'bar',
    }
  },
  mounted () {
    this.$parent.$on('foo', () => console.log('给兄弟打招呼'))
    // this.$root.$on('foo', () => console.log('给兄弟打招呼'))
  },
  methods: {
    sendMessage(){
      this.$parent.$emit('foo');
      // this.$root.$emit('foo'); $bus
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

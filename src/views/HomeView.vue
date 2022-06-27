<template>
  <div class="home">
    <Cont>
      <template #header>
        <div>这是头部</div>
      </template>
      <template #body>
        <div>这是内容</div>
      </template>
      <template #footer="{ txt }">
        <div>{{ txt }}</div>
      </template>
    </Cont>
    <br />
    <div class="box">
      <input type="text" :placeholder="text" @focus="focusFn" @blur="blurFn" />
      <p :class="!text ? 'pos' : ''">{{ con }}</p>
    </div>
    <br />
    <div>
      <p :key="el.id" v-for="el in arr1">{{ el.title }}</p>
      <button @click="x == 1 ? 1 : x--">上一页</button>
      <span>{{ x }}</span>
      <button @click="x++">下一页</button>
    </div>
  </div>
</template>
<script>
import Cont from "../components/cont.vue";
import inter from "../api/request";
export default {
  name: "HomeView",
  data() {
    return {
      text: "hello World",
      con: "",
      arr: [
        { id: 1, title: "疫情已经稳定" },
        { id: 2, title: "这一周马上过去" },
        { id: 3, title: "新的任务马上派发" },
        { id: 4, title: "继续迎难而上" },
        { id: 5, title: "马上结束烦恼的生活" },
      ],
      arr1: [],
      x: 1,
      num: 2,
    };
  },
  components: { Cont },
  methods: {
    async fn() {
      let { data } = await inter.get("/con");
    },
    focusFn() {
      this.con = this.text;
      this.text = "";
    },
    blurFn() {
      this.text = this.con;
      this.con = "";
    },
  },
  created() {
    this.fn();
  },
  watch: {
    x: {
      handler() {
        //(当前页数-首页)*数据条数   当前页数*数据条数
        let newArr = this.arr.slice((this.x - 1) * this.num, this.x * this.num);
        this.arr1 = newArr;
      },
      immediate: true,
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  position: relative;
  p {
    width: 100%;
    height: 100%;
    margin: 0;
    position: absolute;
    left: 5px;
    top: 0;
    //元素可以点透，直接作用于下一层元素
    pointer-events: none;
  }
  .pos {
    top: -23px;
    left: 0;
    transition: 1.5s;
  }
}
</style>
<template>
  <div>
    <div>
      <h1>{{siteName}}</h1>
    </div>
    <div>
      <p>👋你好，我是 <a href="https://twitter.com/coolXiao" target="_blank"
          rel="noreferrer noopener">1900</a>。
          <br />
          一个生活在四川的湖南小伙子，我喜欢：</p>
      <ul>
        <li>玩</li>
        <li>还是玩</li>
        <li>玩博客、玩Docker、玩笔记软件</li>
      </ul>
      <p>想看更多来自我的分享，你可以订阅我的博客👉<a href="https://www.kele.me" target="_blank" rel="noreferrer noopener">只是玩玩</a>。</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["siteName"],
  data () {
    return {
      message: 'Try change me!'
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    }
  }
};
</script>

<style>
/* .div {
    display:flex;
    align-items: center;
    justify-content: space-between;
    a {
      color:inherit;
      border-bottom: none;
    }
  } */
</style>

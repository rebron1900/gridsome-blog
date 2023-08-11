<template>
  <div class="post-list">
    <!-- <h2>{{year}}</h2> -->
    <PostItem :post="post" />
  </div>
</template>

<script>
import PostItem from './PostItem';

export default {
  props: ["post"],
  components: {
    PostItem
  },
  computed: {
    // postsByYear() {
    //   const posts = this.$page.allGhostPost.edges;
    //   return posts.filter((post) => {
    //     return post.node.created_at.includes(this.year);
    //   })
    // }
  }
};
</script>

<style>
/* h1 {
  font-size:2em;
  margin:0;
}

.post-list {
  margin-top:20px;
} */
</style>

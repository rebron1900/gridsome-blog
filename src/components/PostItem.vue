<template>
  <div class="row mb-3">
    <div class="row"><h3 class="mb-1"><g-link :to="post.path">{{ post.title }}</g-link></h3></div>
    <div class="two columns left lit">
      <p class="bottom">{{ date }}</p>
    </div>
    <div class="ten columns left">
      <span class="time-to-read"><i>{{ post.reading_time }} min read</i></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    date() {
      return this.post.created_at.substring(0, this.post.created_at.length - 4);
    }
  }
};
</script>

<style >
/* .date {
  margin-right: 10px;
  min-width: 60px;
  display: inline-block;
}

.time-to-read {
  margin-left: 10px;
  color: gray;
  font-size: .8em;
} */
</style>

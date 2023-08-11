<template>
  <Layout>
    <!-- <Hero />
    <section class="posts">
      <PostList v-for="year in years" :key="year" :year="year" />
    </section>
    <Pager :info="$page.allGhostPost.pageInfo" :showLinks="false" /> -->
  </Layout>
</template>

<script>
import PostList from "@/components/PostList";
import Hero from "@/components/Hero";
import { Pager } from 'gridsome';

export default {
  components: {
    PostList,
    Hero,
    Pager
  },
  metaInfo: {
    bodyAttrs: {
      theme: ['darkmode']
    },
  },
  computed: {
    years() {
      const years = {};
      const posts = this.$page.allGhostPost.edges;
      posts.map((post) => {
        if(!post.node.created_at){
          post.node.created_at="Jan 1 1900";
        }
        const year = post.node.created_at.split(" ")[2];
        years[year] = "";
      });
      return Object.keys(years).sort((a, b) => {
        return b - a;
      });
    }
  }
};
</script>

<page-query>
query($page: Int=1) {
  metadata {
    siteName
    siteDescription
  }  
  allGhostPost(perPage: 10, page: $page) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        reading_time
        excerpt
        created_at (format: "MMM D YYYY")
        slug
      }
    }

  }
}
</page-query>

<style>
</style>
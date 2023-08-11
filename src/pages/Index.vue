<template>
  <Layout>
    <Hero />
    <section class="posts">
      <PostList v-for="edge in $page.allGhostPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
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
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }  
  allGhostPost{
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
        path: slug
      }
    }

  }
}

</page-query>

<style>
</style>
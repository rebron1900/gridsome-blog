<template>
  <header class="header">
    <g-link to="/"><h1>👨‍💻 {{siteName}}</h1></g-link>
    <ClientOnly>
      <ThemeToggle />
    </ClientOnly>
  </header>

  


</template>

<script>
export default {
  props: ["siteName"],
  components: {
    ThemeToggle: () => import('@/components/ThemeToggle')
  }
};
</script>

<style>
  /* .header {
    display:flex;
    align-items: center;
    justify-content: space-between;
    a {
      color:inherit;
      border-bottom: none;
    }
  } */
</style>

<template>
  <nav
    class="flex flex-row items-center w-full font-bold text-center uppercase border-b border-solid border-current"
  >
    <RouterLink class="w-full p-4" to="/">Home</RouterLink>
    <RouterLink
      class="w-full p-4 border-x border-current border-solid"
      to="/about"
      >About</RouterLink
    >
    <RouterLink class="w-full p-4" to="/projects">Projects</RouterLink>
  </nav>
</template>

<style scoped>
  a:not(.router-link-active):hover {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: #eee;
  }

  .router-link-active {
    text-decoration: underline;
    transition: .25s ease-in all;
    text-underline-offset: 4px;
  }

  .router-link-active:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: #ccc;
  }

</style>

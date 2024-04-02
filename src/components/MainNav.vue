<template>
  <nav
    class="flex flex-row items-center fixed 	z-50 w-full font-bold text-center uppercase border-b border-solid border-current">
    <RouterLink class="w-full p-4 transition-all hover:backdrop-blur backdrop-blur-sm" to="/">Home</RouterLink>
    <RouterLink
      class="w-full p-4 transition-all hover:backdrop-blur backdrop-blur-sm border-x border-current border-solid"
      to="/about">About
    </RouterLink>
    <RouterLink class="w-full transition-all p-4 hover:backdrop-blur backdrop-blur-sm " to="/projects">Projects
    </RouterLink>
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

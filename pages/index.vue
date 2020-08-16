<template>
  <div class="bg-purple w-full h-full">
    <div class="container">
      <div>
        <h1 class="text-2xl text-white">VR Sandbox</h1>
        <h2 class="text-white">by Radical Application Development</h2>

        <div class="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4 my-10">
          <NuxtLink
            to="/welcome"
            class="bg-gray-100 text-purple font-semibold rounded px-4 py-2 shadow-2xl"
          >Welcome Page</NuxtLink>
          <NuxtLink
            to="/grey"
            class="bg-gray-100 text-purple font-semibold rounded px-4 py-2"
          >Grey Meditation</NuxtLink>
          <NuxtLink
            to="/shapes"
            class="bg-gray-100 text-purple font-semibold rounded px-4 py-2"
          >Just some shapes</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

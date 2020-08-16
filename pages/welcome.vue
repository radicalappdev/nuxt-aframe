<template>
  <!-- <div> -->
  <!-- <h1>Model Test Page</h1>
    <p>This is a page where I can try loading 3D models using NUXT.</p>
  <NuxtLink to="/">Home page</NuxtLink>-->

  <a-scene>
    <a-assets>
      <!-- Loading from the assets folder: This is not working yet -->
      <!-- <a-asset-item id="panda-obj" src="~/assets/Panda.obj"></a-asset-item> -->
      <!-- <a-asset-item id="panda-mtl" src="~/assets/Panda.mtl"></a-asset-item> -->

      <!-- Loading from the static folder. Anything in this directory is served outside of webpack -->
      <!-- <a-asset-item id="panda-obj" src="/Panda.obj"></a-asset-item> -->
      <!-- <a-asset-item id="panda-mtl" src="/Panda.mtl"></a-asset-item> -->

      <a-asset-item id="welcome" src="/1Story_Mat.gltf"></a-asset-item>
      <a-asset-item id="houseobj" src="/2Story_Mat.obj"></a-asset-item>
      <a-asset-item id="housemat" src="/2Story_Mat.mtl"></a-asset-item>
    </a-assets>

    <a-entity gltf-model="#welcome" position="2 0.5 -3"></a-entity>

    <a-entity obj-model="obj: #houseobj; mtl: #housemat" position="-1 0.5 -3"></a-entity>

    <!-- <a-entity light="type: directional; color: #FFF; intensity: 0.6" position="-0.5 1 1"></a-entity> -->
    <a-sky color="#ECECEC"></a-sky>
  </a-scene>
  <!-- </div> -->
</template>
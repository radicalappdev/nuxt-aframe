<template>
  <div class="sandbox">
    <!-- <a-scene fog="type: linear; color: #9ba8b8; far: 30; near: 1"> -->
    <div style="height: 5rem;" class="bg-black flex flex-row">
      <div class="text-purple text-2xl flex-1 m-4">Project Graveyard</div>
      <a
        id="myEnterVRButton"
        class="float-right bg-pink text-white font-semibold rounded px-4 py-2 m-4"
        href="#"
      >Enter VR</a>
    </div>
    <a-scene
      style="height: calc( 100vh - 5rem); "
      embedded
      vr-mode-ui="enterVRButton: #myEnterVRButton;"
    >
      <!-- fog="type: linear; color: #9ba8b8; far: 35; near: 1" -->
      <a-assets>
        <audio id="grey" src="audio/Gray_noise.mp3"></audio>
        <!-- <audio id="ambient" src="../assets/Ambient001.mp3"></audio> -->
        <a-asset-item id="column" src="/Column.obj"></a-asset-item>
        <a-asset-item id="columnBroken1" src="/Column_Broken.obj"></a-asset-item>
        <a-asset-item id="columnBroken2" src="/Column_Broken2.obj"></a-asset-item>
      </a-assets>

      <!-- <a-sound position="0 -1 -1" src="#grey" autoplay="true" loop="true" on="true"></a-sound> -->

      <a-entity
        obj-model="obj: #column"
        material="color: #54505A; emissive: #54505A; emissiveIntensity: 0.8; "
        position="-6 0 -10"
        rotation="0 30 0"
      ></a-entity>

      <a-entity
        obj-model="obj: #column"
        material="color: #54505A; emissive: #54505A; emissiveIntensity: 0.8; "
        position="-2 0 -10"
        rotation="0 30 0"
      ></a-entity>

      <a-entity v-for="item in projects" :key="item.title">
        <gravestone v-bind:item="item" scale="0.5 0.5 0.5" />
      </a-entity>

      <a-entity
        obj-model="obj: #columnBroken2"
        material="color: #54505A; emissive: #54505A; emissiveIntensity: 0.8; "
        position="2 0 -10"
        rotation="0 30 0"
      ></a-entity>

      <!-- <a-box
        position="0 -0.25 0"
        rotation="0 0 0"
        width="200"
        height="0.5"
        depth="200"
        color="#162229"
      ></a-box>-->

      <!-- <a-sky color="#9ba8b8"></a-sky> -->

      <a-entity
        environment="
        ground: spikes;
        groundYScale: 25;
        groundTexture: none;
        grid: none;        
        groundColor: #0c0c0c; 
        groundColor2: #8c1eff;

        skyType: gradient;
        skyColor: #0f107f;
        horizonColor: #8c1eff
        "
      ></a-entity>
    </a-scene>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      projects: [
        {
          title: "Project Graveyard",
          date: "2020 - ????",
          position: "-2 0 -2",
        },
      ],
    };
  },
  components: {},
};
</script>

<style>
</style>
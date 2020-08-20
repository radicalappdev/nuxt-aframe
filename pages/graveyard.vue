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
      <a-assets>
        <audio id="grey" src="audio/Gray_noise.mp3"></audio>
        <a-asset-item id="gateway" src="/models/graveyard/Entrance2.obj"></a-asset-item>
        <a-asset-item id="wall1" src="/models/graveyard/Floor_Modular.obj"></a-asset-item>
        <a-asset-item id="building" src="/models/graveyard/HouseWithFlatRoof.obj"></a-asset-item>

        <a-asset-item id="column" src="/models/graveyard/Column.obj"></a-asset-item>
        <a-asset-item id="columnBroken1" src="/models/graveyard/Column_Broken.obj"></a-asset-item>
        <a-asset-item id="columnBroken2" src="/models/graveyard/Column_Broken2.obj"></a-asset-item>

        <a-asset-item id="gravestone1" src="/models/graveyard/Gravestone.obj"></a-asset-item>
      </a-assets>

      <a-entity
        environment="
        ground: flat;
        groundYScale: 25;
        groundTexture: none;
        grid: none;        
        groundColor: #0c0c0c; 
        groundColor2: #8c1eff;

        fog: 0.85;
        skyType: gradient;
        skyColor: #0f107f;
        horizonColor: #8c1eff;
        "
      ></a-entity>

      <entrance />
      <columns />

      <a-entity
        obj-model="obj: #building"
        material="color: #54505A; emissive: #54505A; emissiveIntensity: 0.8; "
        position="-0 0 -50"
        rotation="0 0 0"
        scale="4 4 4"
      ></a-entity>

      <a-entity v-for="item in projects" :key="item.title">
        <gravestone v-bind:item="item" scale="0.5 0.5 0.5" />
      </a-entity>

      <a-entity movement-controls="fly: false; enabled: true;" position="0 0 0">
        <a-entity camera position="0 0 0" look-controls="pointerLockEnabled: true"></a-entity>
        <a-entity id="leftHand" hand-controls="hand: left; handModelStyle: lowPoly; color: #ffcccc"></a-entity>
        <a-entity
          id="rightHand"
          hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"
        ></a-entity>
      </a-entity>
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
          position: "-2 0 -4",
        },
        {
          title: "Massively Unqualified: \nDevelopment",
          date: "2016 - 2017",
          position: "-8 0 -16",
        },
        {
          title: "VR Hermits",
          date: "2017 - 2018",
          position: "-10 0 -16",
        },
      ],
    };
  },
  components: {},
};
</script>

<style>
</style>
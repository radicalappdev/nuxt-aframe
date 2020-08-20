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
      <!-- Scene Background -->

      <!-- <a-sound
        position="0 -1 -1"
        src="https://aphid.fireside.fm/d/1437767933/66b7bbdb-462f-4d68-986f-02ffcce09723/e66c6e93-b333-41a9-8669-cb04c95a3a73.mp3"
        autoplay="true"
        loop="true"
        on="true"
      ></a-sound>-->

      <a-entity>
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
      </a-entity>

      <!-- Gravestones / Projects -->
      <a-entity v-for="item in projectList" :key="item.title">
        <gravestone v-bind:item="item" scale="0.4 0.4 0.4" />
      </a-entity>

      <!-- Player -->
      <a-entity movement-controls="fly: false; enabled: true;" position="0 0 0">
        <a-entity camera position="0 1.6 0" look-controls="pointerLockEnabled: true"></a-entity>
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
    return {};
  },
  computed: {
    projectList() {
      var lineItems = Object.values(this.$store.state.projects.projectData);
      console.log(lineItems);
      return lineItems;
    },
  },
};
</script>

<style>
</style>
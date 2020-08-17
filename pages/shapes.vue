<template>
  <div class="sandbox">
    <div style="height: 5rem;" class="bg-black flex flex-row">
      <div class="text-purple text-2xl flex-1 m-4">Shapes</div>
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
      <!-- Style the button with images or whatever. -->
      <!-- <a-assets>
        <audio id="ambient" src="/audio/Ambient001.mp3" preload="auto"></audio>
      </a-assets>-->

      <a-sound position="0 -1 -1" src="#ambient" autoplay="true" loop="true" on="true"></a-sound>

      <!-- <a-entity animation="property: rotation; to: 360 0 0; loop: true; easing: linear; dur: 10000"> -->
      <a-entity animation="property: rotation; to: 0 360 0; loop: true; easing: linear; dur: 10000">
        <a-entity rotation="45 0 0" position="-20 10 -20">
          <a-dodecahedron
            radius="5"
            material="color: #ff2975; emissive: #ff2975; emissiveIntensity: 0.8; "
            animation="property: rotation; to: 0 0 -360; loop: true; easing: linear; dur: 5000"
          ></a-dodecahedron>
        </a-entity>

        <a-entity rotation="45 0 0" position="20 10 -20">
          <a-tetrahedron
            radius="5"
            material="color: #ff901f; emissive: #ff901f; emissiveIntensity: 0.8; "
            animation="property: rotation; to: 360 0 0 ; loop: true; easing: linear; dur: 5000"
          ></a-tetrahedron>
        </a-entity>

        <a-entity rotation="45 0 0" position="-20 10 20">
          <a-icosahedron
            radius="5"
            material="color: #ffd319; emissive: #ffd319; emissiveIntensity: 0.8; "
            animation="property: rotation; to: 0 360 0 ; loop: true; easing: linear; dur: 5000"
          ></a-icosahedron>
        </a-entity>

        <a-entity rotation="45 0 0" position="20 10 20">
          <a-octahedron
            radius="5"
            material="color: #f222ff; emissive: #f222ff; emissiveIntensity: 0.8; "
            animation="property: rotation; to: 0 0 360 ; loop: true; easing: linear;  dur: 5000"
          ></a-octahedron>
        </a-entity>
      </a-entity>
      <!-- </a-entity> -->

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
      <!-- <a-sky color="#8c1eff"></a-sky> -->
    </a-scene>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="css" scoped>
/* a-scene {
  height: 300px;
  width: 600px;
} */
</style>
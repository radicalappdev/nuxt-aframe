<template>
  <div class="sandbox">
    <a-scene vr-mode-ui="enterVRButton: #myEnterVRButton;">
  <!-- Style the button with images or whatever. -->
  <a id="myEnterVRButton" href="#">Enter VR</a>
      <a-assets>
        <audio id="ambient" src="/audio/Ambient001.mp3" preload="auto"></audio>
      </a-assets>

      <a-sound position="0 -1 -1" src="#ambient" autoplay="true" loop="true" on="true"></a-sound>

      <a-dodecahedron
        position="-20 10 -20"
        radius="5"
        material="color: #ff2975; emissive: #ff2975; emissiveIntensity: 0.8; "
        animation="property: rotation; to: 0 0 -360; loop: true; easing: easeInOutElastic; dur: 5000"
      ></a-dodecahedron>

      <a-tetrahedron
        position="20 10 -20"
        radius="5"
        material="color: #ff901f; emissive: #ff901f; emissiveIntensity: 0.8; "
        animation="property: rotation; to: 360 0 0 ; loop: true; easing: easeInOutSine; dur: 5000"
      ></a-tetrahedron>

      <a-icosahedron
        position="-20 10 20"
        radius="5"
        material="color: #ffd319; emissive: #ffd319; emissiveIntensity: 0.8; "
        animation="property: rotation; to: 0 360 0 ; loop: true; easing: easeInOutQuad; dur: 5000"
      ></a-icosahedron>

      <a-octahedron
        position="20 10 20"
        radius="5"
        material="color: #f222ff; emissive: #f222ff; emissiveIntensity: 0.8; "
        animation="property: rotation; to: 0 0 360 ; loop: true; easing: easeInOutCirc;  dur: 5000"
      ></a-octahedron>

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

<style>
</style>
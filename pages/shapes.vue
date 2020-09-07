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
      <a-assets>
        <audio id="ambient" src="/audio/Ambient001.mp3" preload="auto"></audio>
      </a-assets>

      <!-- <a-sound position="0 -1 -5" src="#ambient" autoplay="true" positional="false" loop="true"></a-sound> -->

      <a-entity id="rig" movement-controls="fly: false; enabled: true;">
        <a-entity id="camera" camera position="0 1.6 0" look-controls="pointerLockEnabled: true"></a-entity>
        <a-entity id="leftHand" hand-controls="hand: left; handModelStyle: lowPoly; color: #ffcccc"></a-entity>
        <a-entity
          id="rightHand"
          hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"
        ></a-entity>
        <a-entity sound="src: #ambient; autoplay: true;"></a-entity>
      </a-entity>

      <a-entity animation="property: rotation; to: 0 360 0; loop: true; easing: linear; dur: 10000">
        <a-entity rotation="45 0 0" position="-20 10 -20">
          <a-dodecahedron
            radius="5"
            material="color: #ff2975; emissive: #ff2975; emissiveIntensity: 0.8; "
            animation="property: rotation; to: 0 0 -360; loop: true; easing: linear; dur: 5000"
          ></a-dodecahedron>
        </a-entity>

        <a-entity rotation="45 0 0" position="0 10 -25">
          <a-box
            depth="5"
            height="5"
            width="5"
            material="color: #1e20ff; emissive: #1e20ff; emissiveIntensity: 0.8; "
            animation="property: rotation; to: 0 360 0 ; loop: true; easing: linear; dur: 5000"
          ></a-box>
        </a-entity>

        <a-entity rotation="45 0 0" position="20 10 -20">
          <a-tetrahedron
            radius="5"
            material="color: #ff901f; emissive: #ff901f; emissiveIntensity: 0.8; "
            animation="property: rotation; to: 360 0 0 ; loop: true; easing: linear; dur: 5000"
          ></a-tetrahedron>
        </a-entity>

        <a-entity rotation="-45 0 0" position="25 10 0">
          <a-torus
            radius="4"
            material="color: #ff1e20; emissive: #ff1e20; emissiveIntensity: 0.8; "
            animation="property: rotation; to: 0 -360 0 ; loop: true; easing: linear; dur: 5000"
          ></a-torus>
        </a-entity>

        <a-entity rotation="45 0 0" position="-20 10 20">
          <a-icosahedron
            radius="5"
            material="color: #ffd319; emissive: #ffd319; emissiveIntensity: 0.8; "
            animation="property: rotation; to: 0 360 0 ; loop: true; easing: linear; dur: 5000"
          ></a-icosahedron>
        </a-entity>

        <a-entity rotation="45 0 0" position="0 10 25">
          <a-sphere
            radius="4"
            segments-height="4"
            segments-width="12"
            material="color: #20ff1e; emissive: #20ff1e; emissiveIntensity: 0.8; "
            animation="property: rotation; to: 0 360 0 ; loop: true; easing: linear; dur: 5000"
          ></a-sphere>
        </a-entity>

        <a-entity rotation="45 0 0" position="20 10 20">
          <a-octahedron
            radius="5"
            material="color: #f222ff; emissive: #f222ff; emissiveIntensity: 0.8; "
            animation="property: rotation; to: 0 0 360 ; loop: true; easing: linear;  dur: 5000"
          ></a-octahedron>
        </a-entity>

        <a-entity rotation="-45 0 0" position="-25 10 0">
          <a-cylinder
            radius="2"
            height="5"
            material="color: #1efffd; emissive: #1efffd; emissiveIntensity: 0.8; "
            animation="property: rotation; to: 0 0 360 ; loop: true; easing: linear; dur: 5000"
          ></a-cylinder>
        </a-entity>
      </a-entity>

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
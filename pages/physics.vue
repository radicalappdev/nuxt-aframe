<template>
  <div>
    <div style="height: 5rem;" class="bg-black flex flex-row">
      <div class="text-purple text-2xl flex-1 m-4">Welcome</div>
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
      physics
    >
      <a-assets></a-assets>

      <!-- <a-box color="#EF2D5E" position="0 3 -5" rotation="0 30 0" dynamic-body></a-box> -->

      <a-box
        color="#3C3743"
        position="0 -1 -5"
        height="20"
        width="20"
        depth="0.2"
        rotation="-90 0 0"
        static-body
      ></a-box>

      <a-camera>
        <!-- <a-entity oculus-touch-controls oculus-go-controls laser-controls sphere-collider></a-entity> -->
        <!-- <a-entity id="leftHand" hand-tracking-controls="hand: left;"></a-entity> -->
        <!-- <a-entity id="rightHand" hand-tracking-controls="hand: right;"></a-entity> -->
      </a-camera>

      <a-entity
        id="boxGeometry"
        position="0 2.0 -1"
        rotation="45 45 0"
        geometry="primitive: box; height: 0.6; width: 0.6; depth: 0.6"
        material="color: #ff4b5c"
        size-change
        scale="0.5 0.5 0.5"
      ></a-entity>
      <a-entity
        id="torusGeometry"
        position="0 2.0 -1"
        rotation="45 45 0"
        geometry="primitive: torus; radius: 0.4; radius-tubular: 0.06"
        material="color: #d2e603"
        size-change
        visible="false"
        scale="0.5 0.5 0.5"
      ></a-entity>
      <a-entity
        id="sphereGeometry"
        position="0 2.0 -1"
        rotation="45 45 0"
        geometry="primitive: sphere; radius: 0.6;"
        material="color: #fcdab7"
        size-change
        visible="false"
        scale="0.5 0.5 0.5"
      ></a-entity>
      <a-entity id="menu" menu position="0 1.5 -0.5" rotation="-45 0 0" event-manager>
        <a-entity slider position="0 0.10 0"></a-entity>
        <a-entity id="sphereButton" button="label: sphere" position="-0.15 0 0"></a-entity>
        <a-entity id="boxButton" button="label: box" position="0 0 0"></a-entity>
        <a-entity id="torusButton" button="label: torus" position="0.15 0 0"></a-entity>
        <a-entity
          id="darkModeButton"
          button="label: Dark Mode; width: 0.20; toggable: true"
          position="0 -0.10 0"
        ></a-entity>
      </a-entity>
      <a-entity hand-tracking-controls="hand: left"></a-entity>
      <a-entity hand-tracking-controls="hand: right"></a-entity>

      <a-camera>
        <a-cursor></a-cursor>
      </a-camera>
    </a-scene>
  </div>
</template>


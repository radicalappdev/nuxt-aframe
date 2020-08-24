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
    >
      <a-assets></a-assets>

      <a-entity
        environment="
        seed: 42;
        fog: 0.4;
        flatShading: true;

        skyType: gradient;
        skyColor: #0c0c0c;
        horizonColor: #1e20ff;
        
        ground: noise;
        groundYScale: 75;
        groundTexture: none;
        grid: 1x1;        
        groundColor: #ff2975; 
        groundColor2: #ff901f;
        "
      ></a-entity>

      <!-- Player -->
      <a-entity id="rig" movement-controls="fly: true; enabled: true;">
        <a-entity id="camera" camera position="0 8 0" look-controls="pointerLockEnabled: true"></a-entity>
        <a-entity id="leftHand" hand-controls="hand: left; handModelStyle: lowPoly; color: #ffcccc"></a-entity>
        <a-entity
          id="rightHand"
          hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"
        ></a-entity>
      </a-entity>
    </a-scene>
  </div>
</template>
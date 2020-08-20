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
        text="value: Welcome to nowhere; align: center;"
        scale="10 10 10"
        position="0 5 -10"
      ></a-entity>

      <a-entity
        text="value: Don't let reality hit you on the way out; align: center;"
        scale="5 5 5"
        position="0 4 -10"
      ></a-entity>

      <!-- <a-entity
        obj-model="obj: #houseobj"
        material="color: #ff2975; emissive: #ff2975; emissiveIntensity: 0.8; "
        position="0 0.5 -10"
        rotation="0 30 0"
      ></a-entity>
      <a-entity obj-model="obj: #houseobj; mtl: #housemat" position="0 0.5 -10" rotation="0 30 0"></a-entity>-->

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
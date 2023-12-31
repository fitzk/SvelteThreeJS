<script lang="ts">
  import * as THREE from "three";
  import { onMount } from "svelte";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

  function addCelestialObject(
    destination: THREE.Group | THREE.Scene,
    color: number,
    radius: number,
    spread: number,
  ) {
    const geometry = new THREE.SphereGeometry(radius, 64, 64);
    const material = new THREE.MeshStandardMaterial({ color });
    const celestialBody = new THREE.Mesh(geometry, material);
    destination.add(celestialBody);
    const [x, y, z] = Array(3)
      .fill(0)
      .map(() => THREE.MathUtils.randFloatSpread(spread));

    celestialBody.position.set(x, y, z);
    celestialBody.receiveShadow = true;
  }

  // window is only available on mount due to ssr
  onMount(() => {
    // colors
    const white = 0xffffff;
    const sun = 0xe6dcb2;
    // colors - planets
    const blue = 0x00ffff;
    const red = 0x0ff0000;
    const green = 0x40e0d0;

    // setup renderer, camera, and scene
    const canvas = document.getElementById("mainCanvas") ?? undefined;

    const renderer = new THREE.WebGLRenderer({
      canvas,
    });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      1,
      100,
    );
    camera.position.setZ(20);

    const geometry = new THREE.SphereGeometry(3, 60, 60);

    const material = new THREE.MeshBasicMaterial({
      color: 0xe6dcb2,
    });

    const sphere = new THREE.Mesh(geometry, material);
    sphere.receiveShadow = true;
    sphere.castShadow = true;
    sphere.position.y = 4;
    scene.add(sphere);

    const ambientLight = new THREE.AmbientLight(white);
    scene.add(ambientLight);

    const controls = new OrbitControls(camera, renderer.domElement);

    const planets = new THREE.Group();
    scene.add(planets);

    // stars
    Array(300)
      .fill(0)
      .forEach(() => addCelestialObject(scene, sun, 0.25, 400));

    // blue planets
    Array(4)
      .fill(0)
      .forEach(() => addCelestialObject(planets, blue, 0.25, 50));
    // red planets
    Array(3)
      .fill(0)
      .forEach(() => addCelestialObject(planets, red, 0.25, 50));
    // green planets
    Array(2)
      .fill(0)
      .forEach(() => addCelestialObject(planets, green, 0.5, 50));

    function animate() {
      requestAnimationFrame(animate);
      planets.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  });
</script>

<canvas id="mainCanvas" />

<style>
  #mainCanvas {
    position: fixed;
  }
</style>

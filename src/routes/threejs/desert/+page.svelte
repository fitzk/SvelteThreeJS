<script lang="ts">
  import * as THREE from "three";
  import { onMount } from "svelte";
  import * as colors from "$lib/colors";
  import sandy from "$lib/assets/textures/sandy.jpg";

  onMount(async () => {
    const guiLib = (await import("lil-gui")).default;
    const { OrbitControls } = await import(
      "three/examples/jsm/controls/OrbitControls"
    );

    const gui = new guiLib({
      container: document.getElementById("desertGUI") ?? undefined,
      autoPlace: false,
    });

    const height = window.innerHeight;
    const width = window.innerWidth;

    const scene = new THREE.Scene();

    // axis helper
    const axisHelper = new THREE.AxesHelper(4);
    scene.add(axisHelper);

    const ground = new THREE.Group();
    scene.add(ground);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(sandy);
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshBasicMaterial({
        map: texture,
      }),
    );

    ground.add(plane);

    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 64, 64),
      new THREE.MeshBasicMaterial({ color: colors.white }),
    );
    scene.add(sun);
    sun.position.y = 5;

    gui.add(sun.position, "y").min(-5).max(5).step(0.01);
    gui.add(sun.position, "x").min(-5).max(5).step(0.01);
    gui.add(sun.position, "z").min(-5).max(5).step(0.01);

    // camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 100);
    camera.position.z = 4; // move camera in front of cube by moving camera along z access
    camera.position.y = -4;
    scene.add(camera);

    // renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById("desert") ?? undefined,
    });

    renderer.setSize(width, height);

    const controls = new OrbitControls(camera, renderer.domElement);

    function animate() {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    }

    animate();
  });
</script>

<div id="desertGUI" />
<canvas id="desert" />

references & inspiration 1. https://threejs.org/examples 2.
https://threejs-journey.com

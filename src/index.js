import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';
import { Easing, Tween, update } from 'es6-tween';

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(2, 2, 2);
camera.lookAt(0, 0, 0);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0xffffff });
const cube = new Mesh(geometry, material);
scene.add(cube);
const tweenRot = new Tween(cube.rotation)
  .to({ x: 3, y: 3, z: 3 }, 3000)
  .easing(Easing.Quadratic.InOut)
  .start();

const animate = () => {
  requestAnimationFrame(animate);
  update();
  renderer.render(scene, camera);
};

animate();

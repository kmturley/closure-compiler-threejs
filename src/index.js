/**
 * @fileoverview Entry point for the app.
 */
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three/src/Three';
import {GUI} from 'dat.gui/src/dat/index';
import { Easing, Tween, update } from 'es6-tween/src/index';

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(2, 2, 2);
camera.lookAt(0, 0, 0);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var params = {
  color: 0xffffff,
  duration: 3000,
  size: 1,
  x: 3,
  y: 3,
  z: 3
};

const geometry = new BoxGeometry(params.size, params.size, params.size);
const material = new MeshBasicMaterial({ color:params.color });
const cube = new Mesh(geometry, material);
scene.add(cube);
const tweenRot = new Tween(cube.rotation)
  .to({ x: params.x, y: params.y, z: params.z }, params.duration)
  .easing(Easing.Quadratic.InOut)
  .start();

var gui = new GUI();
gui.add(params, 'x');
gui.add(params, 'y');
gui.add(params, 'z');

const animate = () => {
  requestAnimationFrame(animate);
  update();
  renderer.render(scene, camera);
};

animate();

export {};

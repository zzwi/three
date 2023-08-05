/*
 * @Description: 这是游戏页面（组件）
 * @Date: 2023-08-04 10:47:30
 * @Author: zhangyu
 * @LastEditors: zhangyu
 * @LastEditTime: 2023-08-04 17:24:39
 */
import * as THREE from 'three';
// 创建Scene
export const scene = new THREE.Scene()
export const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
)

// Our three renderer
let renderer: THREE.WebGLRenderer;

/// Can be viewed here
async function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

// Can be viewed here
const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Can be viewed here

const waterGeometry = new THREE.PlaneGeometry(10000, 10000);

// const water = new THREE.Water(
//     waterGeometry,
//     {
//         textureWidth: 512,
//         textureHeight: 512,
//         waterNormals: new THREE.TextureLoader().load('static/normals/waternormals.jpeg', function (texture) {
//             texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
//         }),
//         sunDirection: new THREE.Vector3(),
//         sunColor: 0xffffff,
//         waterColor: 0x001e0f,
//         distortionScale: 3.7,
//         fog: scene.fog !== undefined
//     }
// );

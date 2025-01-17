import './style.css'
import * as THREE from 'three'
import {
	addBoilerPlateMesh,
	addStandardMesh,
	addBackground,
	addGlass,
} from './addMeshes'

import { addLight } from './addLights'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({ antialias: true })
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100
)
let tick = 0
camera.position.set(0, 0, 5)
// let mesh
const meshes = {}
const controls = new OrbitControls(camera, renderer.domElement)

init()
function init() {
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	//meshes
	meshes.default = addBoilerPlateMesh()
	meshes.standard = addStandardMesh()
	meshes.background = addBackground()
	meshes.glass = addGlass()

	//lights
	meshes.defaultLight = addLight()

	//scene operations
	// scene.add(meshes.default)
	scene.add(meshes.standard)
	scene.add(meshes.defaultLight)
	scene.add(meshes.background)
	scene.add(meshes.glass)

	resize()
	animate()
}

function resize() {
	window.addEventListener('resize', () => {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
	})
}

function animate() {
	requestAnimationFrame(animate)
	// mesh.position.x += 0.01
	// meshes.default.position.x += 0.01
	// meshes.default.position.y += 0.01
	meshes.default.rotation.x += 0.01
	meshes.default.rotation.z += 0.01

	meshes.standard.rotation.x += 0.01
	meshes.standard.rotation.z += 0.01

	meshes.glass.rotation.x += 0.01
	meshes.glass.rotation.z -= 0.01
	tick += 0.1
	meshes.glass.material.displacementMap.offset.x = Math.sin(tick * 0.01)
	meshes.glass.material.displacementMap.offset.y = Math.sin(tick * 0.01)
	// meshes.default.scale.x += 0.01

	renderer.render(scene, camera)
}

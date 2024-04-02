import * as THREE from 'three'

export function addLight() {
	const light = new THREE.DirectionalLight(0xffffff, 1)
	light.position.set(1, 1, 1)
	return light
}

export function addAmbient() {
	const light = new THREE.AmbientLight(0xffffff, 0.3)
	return light
}

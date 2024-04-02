import * as THREE from 'three'

const tLoader = new THREE.TextureLoader()
export function addBoilerPlateMesh() {
	const box = new THREE.BoxGeometry(1, 1, 1)
	const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
	const boxMesh = new THREE.Mesh(box, boxMaterial)
	boxMesh.position.set(2, 0, 0)
	return boxMesh
}

export function addStandardMesh() {
	const box = new THREE.BoxGeometry(1, 1, 1)
	const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
	const boxMesh = new THREE.Mesh(box, boxMaterial)
	boxMesh.position.set(-2, 0, 0)
	return boxMesh
}

export function addBackground() {
	const color = tLoader.load('/bg.jpg')
	const geometry = new THREE.PlaneGeometry(3, 3)
	const material = new THREE.MeshBasicMaterial({ map: color })
	const backgroundMesh = new THREE.Mesh(geometry, material)
	backgroundMesh.position.set(0, 0, -1)
}

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
	const boxMaterial = new THREE.MeshStandardMaterial({
		color: 0x00ff00,
		metalness: 0.1,
		roughness: 0.0,
	})
	const boxMesh = new THREE.Mesh(box, boxMaterial)
	boxMesh.position.set(2, 0, 0)
	return boxMesh
}

export function addBackground() {
	const color = tLoader.load('/bg.jpg')
	const hm = tLoader.load('/bg.jpg')
	const geometry = new THREE.PlaneGeometry(5, 3)
	const material = new THREE.MeshBasicMaterial({
		map: color,
	})
	const backgroundMesh = new THREE.Mesh(geometry, material)
	backgroundMesh.position.set(0, 0, -1)
	return backgroundMesh
}

export function addGlass() {
	const color = tLoader.load('/color.jpg')
	const displace = tLoader.load('/displace.png')
	const roughness = tLoader.load('/rougness.jpg')
	const normal = tLoader.load('/normal.jpg')
	const geometry = new THREE.TorusKnotGeometry(0.6, 0.01, 100, 100, 2, 3)
	const material = new THREE.MeshPhysicalMaterial({
		// map: color,
		normalMap: normal,
		roughnessMap: roughness,
		displacementMap: displace,
		displacementScale: 0.3,
		transmission: 1.0,
		ior: 2.33,
		metalness: 0.1,
		roughness: 0.0,
		thickness: 1,
	})
	console.log(material)
	material.displacementMap.offset.set(0, 0)
	// material.map.offset.set(0, 0)

	const glass = new THREE.Mesh(geometry, material)
	return glass
}

export function bigBackground() {
	const displace = tLoader.load('/displace.png')
	const geometry = new THREE.SphereGeometry(10, 64, 32)
	const material = new THREE.MeshPhongMaterial({
		color: 0xff0000,
		wireframe: true,
		side: THREE.DoubleSide,
		displacementMap: displace,
		displacementScale: 20,
	})
	const mesh = new THREE.Mesh(geometry, material)
	return mesh
}
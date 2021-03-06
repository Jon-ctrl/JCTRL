import React from "react";
import * as THREE from 'three';

class Firmware extends React.Component {
    componentDidMount() {
        //Loading
        const textureLoader = new THREE.TextureLoader()

        const normalTexture = textureLoader.load('src/map.png')

        //Canvas
        const canvas = document.querySelector('canvas.webgl');
        //Scene
        const scene = new THREE.Scene();
        //Object
        const geometry = new THREE.SphereBufferGeometry(.5,64,64)
        //Materials
        const material = new THREE.MeshStandardMaterial();
        material.metalness = 0.1
        material.roughness = 0.5
        material.normalMap = normalTexture;
        material.color = new THREE.Color(0x292929)
        //Mesh
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere)
        //Lights
        const pointLight = new THREE.PointLight(0xffffff, 0.1)
        pointLight.position.x = 2
        pointLight.position.y = 3
        pointLight.position.z = 4
        scene.add(pointLight)

        const pointLight2 = new THREE.PointLight(0xff0000, 2)
        pointLight2.position.set(1,1,1)
        pointLight2.intensity = 1
        scene.add(pointLight2)



        /**
         * Sizes
         */
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        window.addEventListener('resize', () => {
            //Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            //Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            //Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.decivePixelRatio, 2))
        })

        /**
         * Camera
         */
            //Base camera
        const camera = new THREE.PerspectiveCamera(75,sizes.width / sizes.height, 0.1, 100)
        camera.position.x = 0
        camera.position.y = 0
        camera.position.z = 2
        scene.add(camera)

        //Controls
        // const controls = new OrbitControls(camera, canvas)
        // controls.enableDamping = true

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        /**
         * Animate
         */
        const clock = new THREE.Clock()

        const tick = () => {
            const elapsedTime = clock.getElapsedTime()

            //Update objects
            sphere.rotation.y = .5 * elapsedTime

            //Update Orbital Controls
            // controls.update()

            // Render
            renderer.render(scene, camera)

            //Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()
    }
    render(){
        return(
            <div>
                <canvas className="webgl">
                </canvas>
                <div className="center">
                    This is the firmware page!
                </div>
            </div>
        )
    }

}

export default Firmware
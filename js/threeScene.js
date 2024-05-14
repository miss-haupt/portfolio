import * as THREE from 'three';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RenderPass } from 'three/examples/jsm/Addons.js';
import { UnrealBloomPass } from 'three/examples/jsm/Addons.js';
import { EffectComposer } from 'three/examples/jsm/Addons.js';
import WebGL from 'three/addons/capabilities/WebGL.js';

import bgSpiral from '../assets/images/test.png';

class ThreeScene {
    constructor() {
        // add some vars
    }

    init() {
        // THREE.js Experiment
        const Mathutils = {
            normalize: function($value, $min, $max) {
                return ($value - $min) / ($max - $min);
            },
            interpolate: function($normValue, $min, $max) {
                return $min + ($max - $min) * $normValue;
            },
            map: function($value, $min1, $max1, $min2, $max2) {
                if ($value < $min1) {
                    $value = $min1;
                }
                if ($value > $max1) {
                    $value = $max1;
                }
                let res = this.interpolate(this.normalize($value, $min1, $max1), $min2, $max2);
                return res;
            }
        };

        const params = {
            exposure: 0.9,
            bloomStrength: .2,
            bloomThreshold: 0,
            bloomRadius: 0
        };

        const scene = new THREE.Scene();    
        const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.001, 200 );

        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('.playground'),
            antialias: true,
            shadowMapEnabled: true,
            shadowMapType: THREE.PCFSoftShadowMap
        });
        renderer.setSize( window.innerWidth, window.innerHeight );

        scene.fog = new THREE.Fog(0xcccccc,10,250);

        //Create a perspective camera
        let cameraRotationProxyX = 3.14159;
        let cameraRotationProxyY = 0;
        camera.rotation.y = cameraRotationProxyX;
        camera.rotation.z = cameraRotationProxyY;

        var c = new THREE.Group();
        c.position.z = 400;
        c.add(camera);
        scene.add(c);

        //set up render pass
        const renderScene = new RenderPass( scene, camera );
        const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
        bloomPass.renderToScreen = true;
        bloomPass.threshold = params.bloomThreshold;
        bloomPass.strength = params.bloomStrength;
        bloomPass.radius = params.bloomRadius;

        const composer = new EffectComposer( renderer );
        composer.setSize( window.innerWidth, window.innerHeight );
        composer.addPass( renderScene );
        composer.addPass( bloomPass );

        //Array of points
        const points = [
            [10, 89, 0],
            [50, 88, 10],
            [76, 139, 20],
            [126, 141, 12],
            [150, 112, 8],
            [157, 73, 0],
            [180, 44, 5],
            [207, 35, 10],
            [232, 36, 12],
            [270, 44, 20],
            [300, 73, 12],
            [350, 89, 8]
        ];

        let p1, p2, p3;

        //Convert the array of points into vertices
        for (let i = 0; i < points.length; i++) {
            let x = points[i][0];
            let y = points[i][2];
            let z = points[i][1];
            points[i] = new THREE.Vector3(x, y, z);
        }
        //Create a path from the points
        const path = new THREE.CatmullRomCurve3(points);
        path.tension = .5;

        //Create a new geometry with a different radius
        let geometry = new THREE.TubeGeometry( path, 300, 4, 32, false );

        let texture = new THREE.TextureLoader().load( bgSpiral , function ( texture ) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.offset.set( 0, 0 );
            texture.repeat.set( 15, 2 );
        } );

        const material = new THREE.MeshBasicMaterial({
        side: THREE.BackSide,
        map: texture
        });

        //Create a mesh
        const tube = new THREE.Mesh( geometry, material );
        tube.receiveShadows = true;
        //Push the mesh into the scene
        scene.add( tube );

        //Create a new geometry with a different radius
        // let geometry = new THREE.TubeGeometry( path, 150, 3.4, 32, false );
        const geo = new THREE.EdgesGeometry( geometry );

        const mat = new THREE.LineBasicMaterial( {
            linewidth: 2,
            opacity: .2,
            transparent: 1
        });

        const wireframe = new THREE.LineSegments( geo, mat );
        scene.add( wireframe );

        //Create a point light in our scene
        var light = new THREE.PointLight(0xffffff, .35, 4,0);
        light.castShadow = true;
        scene.add(light);

        function updateCameraPercentage(percentage) {
            p1 = path.getPointAt(percentage%1);
            p2 = path.getPointAt((percentage + 0.03)%3);
            p3 = path.getPointAt((percentage + 0.05)% 1);
        
            c.position.set(p1.x,p1.y,p1.z);
            c.lookAt(p2);
            light.position.set(p2.x, p2.y, p2.z);
        }
    
        var cameraTargetPercentage = 0;
        var currentCameraPercentage = 0;
    
        gsap.registerPlugin(ScrollTrigger);
        gsap.defaults({
            ease: 'none',
        });
        var tubePerc = {
            percent: 0
        }  

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom 100%",
                scrub: 5,
                markers: {color: "white"}
            }
        })

        tl.to(tubePerc, {
            percent:.95,
            ease: 'none',
            duration: 10,
            onUpdate: function() {
            cameraTargetPercentage = tubePerc.percent;
            }
        });

        function render(){
            currentCameraPercentage = cameraTargetPercentage;        
            camera.rotation.y += (cameraRotationProxyX - camera.rotation.y) / 15;
            camera.rotation.x += (cameraRotationProxyY - camera.rotation.x) / 15;
            updateCameraPercentage(currentCameraPercentage);  
            // Render the scene
            composer.render();
            requestAnimationFrame(render);
        }

        document.addEventListener("mousemove", (e) => {
            cameraRotationProxyX = Mathutils.map(e.clientX, 0, window.innerWidth, 3.24, 3.04);
            cameraRotationProxyY = Mathutils.map(e.clientY, 0, window.innerHeight, -.1, .1);
        });

        window.addEventListener( 'resize', function () {
  
            var width = window.innerWidth;
            var height = window.innerHeight;
            
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            
            renderer.setSize( width, height );
            composer.setSize( width, height );
            
          }, false );

        if ( WebGL.isWebGLAvailable() ) {
            // Initiate function
            render();  
            requestAnimationFrame(render);  
        } else {    
            const warning = WebGL.getWebGLErrorMessage();
            document.getElementById( 'container' ).classList.add('container--warning');  
            document.getElementById( 'container' ).innerHTML = `${warning}<br><button class="container__close" type="button">Close</button>`;   
        }
    }
}

export default ThreeScene;
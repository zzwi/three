vertexShader: /* glsl */`
				uniform mat4 textureMatrix;
				uniform float time;
                uniform float speed;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

                vec4 getNoise(vec2 uv) {
                    float offset;
                    if (speed == 0.0){
                        offset = time / 10.0;
                    }
                    else {
                        offset = speed;
                    }
                    vec2 uv3 = uv / vec2(50.0, 50.0) - vec2(speed / 1000.0, offset);
                    vec2 uv0 = vec2(0, 0);
                    vec2 uv1 = vec2(0, 0);
                    vec2 uv2 = vec2(0, 0);
                    vec4 noise = texture2D(normalSampler, uv0) +
                    texture2D(normalSampler, uv1) +
                    texture2D(normalSampler, uv2) +
                    texture2D(normalSampler, uv3);
                    return noise * 0.5 - 1.0;
                }

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,

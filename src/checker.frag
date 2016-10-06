precision mediump float;

uniform vec2 resolution;
uniform float time;

void main() {
  float checkerSize = 32.0;
  vec2 uv = gl_FragCoord.xy
            + vec2(gl_FragCoord.y*0.002 * cos(gl_FragCoord.x*0.1 + 4.0 * time), gl_FragCoord.x*0.0025 * cos(gl_FragCoord.y*0.12 + 7.0 * time))
            + vec2(2.0 * cos(gl_FragCoord.y*0.3 + 5.0 * time), 3.0 * cos(gl_FragCoord.x*0.22 + 5.0 * time))
            + vec2(3.0 * cos(gl_FragCoord.x*gl_FragCoord.y*0.00023 + 2.1 * time), 3.0 * cos(gl_FragCoord.x*gl_FragCoord.y*0.00022 + 1.1 * time));
  vec2 point = (uv.xy + vec2(-10.0 * time, 10.0 * time)) / checkerSize;
  if (mod(floor(point.x) + floor(point.y), 2.0) < 1.0) {
    gl_FragColor = vec4(0.27, 0.27, 0.27, 1.0);
  } else {
    gl_FragColor = vec4(0.26, 0.26, 0.26, 1.0);
  }
}

precision mediump float;

uniform vec2 resolution;
uniform float time;

void main() {
  float checkerSize = 32.0;
  vec2 uv = gl_FragCoord.xy + vec2(gl_FragCoord.y*0.005 * cos(gl_FragCoord.x*0.1 + 4.0 * time), gl_FragCoord.x*0.005 * cos(gl_FragCoord.y*0.15 + 7.0 * time));
  vec2 point = (uv.xy + vec2(-10.0 * time, 10.0 * time)) / checkerSize;
  if (mod(floor(point.x) + floor(point.y), 2.0) < 1.0) {
    gl_FragColor = vec4(0.28, 0.28, 0.28, 1.0);
  } else {
    gl_FragColor = vec4(0.25, 0.25, 0.25, 1.0);
  }
}

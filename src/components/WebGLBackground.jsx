import { useEffect, useRef } from 'react';
import { webglPresets } from '../config/experienceTuning';

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(info || 'Failed to compile shader');
  }

  return shader;
}

export default function WebGLBackground({ preset = 'neon-mesh' }) {
  const canvasRef = useRef(null);
  const config = webglPresets[preset] || webglPresets['neon-mesh'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true });
    if (!gl) return undefined;

    const vsSource = `
      attribute vec2 a_position;
      attribute float a_size;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying float v_size;
      void main() {
        vec2 offset = u_mouse * (a_size * 0.28);
        vec2 pos = a_position + offset;
        vec2 zeroToOne = pos / u_resolution;
        vec2 clip = zeroToOne * 2.0 - 1.0;
        gl_Position = vec4(clip * vec2(1.0, -1.0), 0.0, 1.0);
        gl_PointSize = a_size;
        v_size = a_size;
      }
    `;

    const fsSource = `
      precision mediump float;
      varying float v_size;
      uniform float u_time;
      void main() {
        vec2 uv = gl_PointCoord * 2.0 - 1.0;
        float d = length(uv);
        float alpha = smoothstep(1.0, 0.18, d);
        float pulse = 0.55 + 0.45 * sin(u_time * 0.0018 + v_size * 0.35);
        vec3 c1 = vec3(0.24, 0.88, 0.86);
        vec3 c2 = vec3(0.98, 0.70, 0.38);
        vec3 color = mix(c1, c2, uv.y * 0.5 + 0.5);
        gl_FragColor = vec4(color * pulse, alpha * 0.75);
      }
    `;

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const posLoc = gl.getAttribLocation(program, 'a_position');
    const sizeLoc = gl.getAttribLocation(program, 'a_size');
    const resolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    const mouseLoc = gl.getUniformLocation(program, 'u_mouse');
    const timeLoc = gl.getUniformLocation(program, 'u_time');

    const PARTICLE_COUNT = config.particleCount;
    const positions = new Float32Array(PARTICLE_COUNT * 2);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const velocities = new Float32Array(PARTICLE_COUNT * 2);

    const positionBuffer = gl.createBuffer();
    const sizeBuffer = gl.createBuffer();

    const meshProgram = gl.createProgram();
    const meshVertexShader = compileShader(gl, gl.VERTEX_SHADER, `
      attribute vec2 a_position;
      uniform vec2 u_resolution;
      void main() {
        vec2 zeroToOne = a_position / u_resolution;
        vec2 clip = zeroToOne * 2.0 - 1.0;
        gl_Position = vec4(clip * vec2(1.0, -1.0), 0.0, 1.0);
      }
    `);
    const meshFragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, `
      precision mediump float;
      uniform float u_mix;
      void main() {
        vec3 c1 = vec3(0.2, 0.95, 0.86);
        vec3 c2 = vec3(0.88, 0.72, 1.0);
        vec3 color = mix(c1, c2, u_mix);
        gl_FragColor = vec4(color, 0.17);
      }
    `);
    gl.attachShader(meshProgram, meshVertexShader);
    gl.attachShader(meshProgram, meshFragmentShader);
    gl.linkProgram(meshProgram);

    const meshPosLoc = gl.getAttribLocation(meshProgram, 'a_position');
    const meshResolutionLoc = gl.getUniformLocation(meshProgram, 'u_resolution');
    const meshMixLoc = gl.getUniformLocation(meshProgram, 'u_mix');
    const meshBuffer = gl.createBuffer();

    let width = 0;
    let height = 0;
    let mouseX = 0;
    let mouseY = 0;
    let rafId = 0;

    const meshCols = 18;
    const meshRows = 10;
    const meshSegments = (meshCols - 1) * meshRows + (meshRows - 1) * meshCols;
    const meshVertices = new Float32Array(meshSegments * 4);

    const updateMesh = (time) => {
      if (!config.meshLines) return;

      let offset = 0;
      const marginX = width * 0.08;
      const marginY = height * 0.14;
      const w = width - marginX * 2;
      const h = height - marginY * 2;

      const pointAt = (xIndex, yIndex) => {
        const x = marginX + (xIndex / (meshCols - 1)) * w;
        const yBase = marginY + (yIndex / (meshRows - 1)) * h;
        const wave = Math.sin(time * 0.001 + xIndex * 0.45 + yIndex * 0.38) * 10;
        return [x, yBase + wave];
      };

      for (let y = 0; y < meshRows; y += 1) {
        for (let x = 0; x < meshCols - 1; x += 1) {
          const [x1, y1] = pointAt(x, y);
          const [x2, y2] = pointAt(x + 1, y);
          meshVertices[offset++] = x1;
          meshVertices[offset++] = y1;
          meshVertices[offset++] = x2;
          meshVertices[offset++] = y2;
        }
      }

      for (let y = 0; y < meshRows - 1; y += 1) {
        for (let x = 0; x < meshCols; x += 1) {
          const [x1, y1] = pointAt(x, y);
          const [x2, y2] = pointAt(x, y + 1);
          meshVertices[offset++] = x1;
          meshVertices[offset++] = y1;
          meshVertices[offset++] = x2;
          meshVertices[offset++] = y2;
        }
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(window.innerWidth * dpr));
      height = Math.max(1, Math.floor(window.innerHeight * dpr));

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${Math.floor(width / dpr)}px`;
      canvas.style.height = `${Math.floor(height / dpr)}px`;

      gl.viewport(0, 0, width, height);

      for (let i = 0; i < PARTICLE_COUNT; i += 1) {
        const p = i * 2;
        positions[p] = Math.random() * width;
        positions[p + 1] = Math.random() * height;
        sizes[i] = config.pointSizeRange[0] + Math.random() * (config.pointSizeRange[1] - config.pointSizeRange[0]);
        velocities[p] = (Math.random() - 0.5) * config.speed;
        velocities[p + 1] = (Math.random() - 0.5) * config.speed;
      }
    };

    const onMouse = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const render = (time) => {
      for (let i = 0; i < PARTICLE_COUNT; i += 1) {
        const p = i * 2;

        if (config.flowField) {
          const angle = Math.sin(positions[p] * 0.002 + time * 0.0004) + Math.cos(positions[p + 1] * 0.002 - time * 0.0003);
          positions[p] += Math.cos(angle) * config.speed;
          positions[p + 1] += Math.sin(angle) * config.speed;
        } else {
          positions[p] += velocities[p];
          positions[p + 1] += velocities[p + 1];
        }

        if (positions[p] < -10) positions[p] = width + 10;
        if (positions[p] > width + 10) positions[p] = -10;
        if (positions[p + 1] < -10) positions[p + 1] = height + 10;
        if (positions[p + 1] > height + 10) positions[p + 1] = -10;
      }

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

      gl.uniform2f(resolutionLoc, width, height);
      gl.uniform2f(mouseLoc, mouseX * config.mouseInfluence, mouseY * config.mouseInfluence);
      gl.uniform1f(timeLoc, time);

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.DYNAMIC_DRAW);
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(sizeLoc);
      gl.vertexAttribPointer(sizeLoc, 1, gl.FLOAT, false, 0, 0);

      gl.drawArrays(gl.POINTS, 0, PARTICLE_COUNT);

      if (config.meshLines) {
        updateMesh(time);

        gl.useProgram(meshProgram);
        gl.uniform2f(meshResolutionLoc, width, height);
        gl.uniform1f(meshMixLoc, 0.5 + 0.5 * Math.sin(time * 0.0005));

        gl.bindBuffer(gl.ARRAY_BUFFER, meshBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, meshVertices, gl.DYNAMIC_DRAW);
        gl.enableVertexAttribArray(meshPosLoc);
        gl.vertexAttribPointer(meshPosLoc, 2, gl.FLOAT, false, 0, 0);

        gl.drawArrays(gl.LINES, 0, meshVertices.length / 2);
        gl.useProgram(program);
      }

      rafId = window.requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouse);
    rafId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);

      gl.deleteBuffer(positionBuffer);
      gl.deleteBuffer(sizeBuffer);
      gl.deleteBuffer(meshBuffer);
      gl.deleteProgram(program);
      gl.deleteProgram(meshProgram);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteShader(meshVertexShader);
      gl.deleteShader(meshFragmentShader);
    };
  }, [config]);

  return <canvas ref={canvasRef} className="webgl-canvas-layer" aria-hidden="true" />;
}

/**
 * Created by zr02718 on 2017/12/15.
 */

;(function () {
  var winWidth = window.innerWidth
  var winHeight = window.innerHeight
  var canvas = document.getElementById('canvas')
  canvas.width = winWidth
  canvas.height = winHeight

  var vsShaderSource = ``
  var fsShaderSource = ``

  // 全局变量
  var gl, program, vs, fs

  gl = canvas.getContext('webgl')
  gl.clearColor(0.0, 0.0, 0.0, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)

  program = gl.createProgram()
  vs = gl.createShader(gl.VERTEX_SHADER)
  fs = gl.createShader(gl.FRAGMENT_SHADER)

  gl.shaderSource(vs, vsShaderSource)
  gl.shaderSource(fs, fsShaderSource)
  gl.compileShader(vs)
  gl.compileShader(fs)
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)

  gl.linkProgram(program)
  gl.useProgram(program)


})()
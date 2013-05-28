function initBuffers() {
    
    
    
    
}

function webGLStart() {
    var canvas = document.getElementById("test1");
    initGL(canvas);
    initShaders();
    initBuffers();

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

    drawScene();
}

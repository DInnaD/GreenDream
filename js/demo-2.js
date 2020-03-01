(function() {

    var width, height, largeHeader, largeHeader_2, canvas, canvas_2, ctx, ctx_2,  circles, circles_2, target, target_2, animateHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};        
        target_2 = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px'; 
        
        largeHeader_2 = document.getElementById('large-header-2');
        largeHeader_2.style.height = height+'px'; 

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
        
        canvas_2 = document.getElementById('demo-canvas-2');
        canvas_2.width = width;
        canvas_2.height = height;
        ctx_2 = canvas_2.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        
        
        circles_2 = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles_2.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
        
        largeHeader_2.style.height = height+'px';        
        canvas_2.width = width;
        canvas_2.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            ctx_2.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
            
            for(var i in circles_2) {
                circles_2[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
            console.log(_this);
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx_2.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx_2.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
            ctx_2.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
            ctx.fill();
            ctx_2.fill();
        };
    }

})();

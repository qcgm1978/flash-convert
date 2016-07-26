(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 500,
	fps: 10,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.animalstxt = function() {
	this.spriteSheet = ss["RECOVER_export_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["RECOVER_export_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bird = function() {
	this.spriteSheet = ss["RECOVER_export_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.canmovetxt = function() {
	this.spriteSheet = ss["RECOVER_export_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.duck = function() {
	this.spriteSheet = ss["RECOVER_export_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.horse = function() {
	this.spriteSheet = ss["RECOVER_export_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["RECOVER_export_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.tree = function() {
	this.spriteSheet = ss["RECOVER_export_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.动物们动起来 = function() {
	this.spriteSheet = ss["RECOVER_export_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.canmovetxt();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,631,181);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.animalstxt();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,571,211);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bird();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,149,142);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tree();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1047,783);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.horse();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,424,380);


(lib.logosymbol = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.618,0.619);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120.6,120);


(lib.duck_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.duck();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,149,107);


(lib.birdtrace = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logosymbol("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,60.3,60);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.3,-60,120.6,120);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(315.5,90.5,1,1,0,0,0,315.5,90.5);

	this.instance_1 = new lib.动物们动起来();
	this.instance_1.setTransform(78.9,157.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,631,249.6);


(lib.logo_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{rotate:36});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.movieClip_5.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//console.log("Mouse clicked");
			// End your custom code
			this.gotoAndPlay('rotate')
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// Layer 1
	this.movieClip_5 = new lib.Symbol9();
	this.movieClip_5.setTransform(64.3,-194);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_5).to({_off:true},1).wait(19).to({_off:false,x:-10.3,y:-105.3},0).to({x:-26.7,y:10},16).to({skewY:180,x:-19.7},10).to({skewY:0,x:-26.7},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,-254,120.6,120);


(lib.bg_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{loop:95});

	// timeline functions:
	this.frame_139 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(139).call(this.frame_139).wait(1));

	// ani-duck
	this.instance = new lib.duck_1();
	this.instance.setTransform(259,189,1,1,0,0,0,74.5,53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({scaleX:0.47,scaleY:0.47,x:96.5,y:65.6},19).to({x:27.5,y:55.6},16).to({skewY:180},1).to({x:149.5,y:86.6},17).to({skewY:0},1).to({x:27,y:57.6},25).wait(1));

	// bg
	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(-415.5,-359.5,0.567,0.816);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-415.5,-359.5,749,602);


// stage content:



(lib.RECOVER_export = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// bird.ai
	this.instance = new lib.birdtrace();
	this.instance.setTransform(691.5,205.9,1,1,0,0,0,74.5,71);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(121));

	// main-logo
	this.J_logo = new lib.logo_1();
	this.J_logo.setTransform(125,-63,1,1,0,0,0,52.3,-112);

	this.timeline.addTween(cjs.Tween.get(this.J_logo).wait(140));

	// bird
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(606.2,58.1,0.276,0.398,0,0,0,74.5,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.28,scaleY:0.41,y:59.7},0).wait(1).to({scaleX:0.29,scaleY:0.42,x:606.3,y:61.4},0).wait(1).to({scaleX:0.3,scaleY:0.44,x:606.5,y:63.1},0).wait(1).to({scaleX:0.31,scaleY:0.45,x:606.7,y:64.8},0).wait(1).to({scaleX:0.32,scaleY:0.46,x:607.1,y:66.4},0).wait(1).to({scaleX:0.33,scaleY:0.47,x:607.5,y:68.1},0).wait(1).to({scaleX:0.34,scaleY:0.49,x:608,y:69.8},0).wait(1).to({scaleX:0.35,scaleY:0.5,x:608.5,y:71.5},0).wait(1).to({scaleX:0.35,scaleY:0.51,x:609.2,y:73.2},0).wait(1).to({scaleX:0.36,scaleY:0.52,x:609.9,y:74.8},0).wait(1).to({scaleX:0.37,scaleY:0.53,x:610.7,y:76.5},0).wait(1).to({scaleX:0.38,scaleY:0.55,x:611.6,y:78.2},0).wait(1).to({scaleX:0.39,scaleY:0.56,x:612.5,y:79.9},0).wait(1).to({scaleX:0.4,scaleY:0.57,x:613.6,y:81.6},0).wait(1).to({scaleX:0.41,scaleY:0.58,x:614.7,y:83.2},0).wait(1).to({scaleX:0.41,scaleY:0.6,x:615.8,y:84.9},0).wait(1).to({scaleX:0.42,scaleY:0.61,x:617.1,y:86.5},0).wait(1).to({scaleX:0.43,scaleY:0.62,x:618.4,y:88.2},0).wait(1).to({scaleX:0.44,scaleY:0.63,x:619.8,y:89.9},0).wait(1).to({scaleX:0.45,scaleY:0.65,x:621.3,y:91.9},0).wait(1).to({scaleX:0.46,scaleY:0.66,x:622.9,y:93.9},0).wait(1).to({scaleX:0.47,scaleY:0.67,x:624.5,y:95.9},0).wait(1).to({scaleX:0.47,scaleY:0.68,x:626.2,y:97.9},0).wait(1).to({scaleX:0.48,scaleY:0.7,x:627.9,y:99.9},0).wait(1).to({scaleX:0.49,scaleY:0.71,x:626.3,y:101.9},0).wait(1).to({scaleX:0.5,scaleY:0.72,x:612.5,y:103.9},0).wait(1).to({scaleX:0.51,scaleY:0.73,x:598.2,y:105.9},0).wait(1).to({scaleX:0.52,scaleY:0.75,x:583.3,y:107.9},0).wait(1).to({scaleX:0.53,scaleY:0.76,x:567.9,y:109.9},0).wait(1).to({scaleX:0.53,scaleY:0.77,x:552,y:111.9},0).wait(1).to({scaleX:0.54,scaleY:0.78,x:535.5,y:113.8},0).wait(1).to({scaleX:0.55,scaleY:0.79,x:518.5,y:115.9},0).wait(1).to({scaleX:0.56,scaleY:0.81,x:500.9,y:117.8},0).wait(1).to({scaleX:0.57,scaleY:0.82,x:498.5,y:119.8},0).wait(1).to({y:119.1},0).wait(1).to({y:118.3},0).wait(1).to({y:117.5},0).wait(1).to({y:116.7},0).wait(1).to({y:116},0).wait(1).to({y:115.2},0).wait(1).to({y:114.4},0).wait(1).to({y:113.6},0).wait(1).to({y:112.8},0).wait(1).to({y:112.1},0).wait(1).to({y:111.3},0).wait(1).to({y:110.5},0).wait(1).to({y:109.7},0).wait(1).to({y:109},0).wait(1).to({y:108.2},0).wait(1).to({y:107.4},0).wait(1).to({y:106.6},0).wait(1).to({y:105.8},0).wait(1).to({y:105.1},0).wait(1).to({y:104.3},0).wait(1).to({y:103.5},0).wait(1).to({y:102.7},0).wait(1).to({y:102},0).wait(1).to({y:101.2},0).wait(1).to({y:100.4},0).wait(1).to({y:99.6},0).wait(1).to({y:98.8},0).wait(1).to({y:98.1},0).wait(1).to({y:97.3},0).wait(1).to({y:96.5},0).wait(1).to({y:95.7},0).wait(1).to({y:95},0).wait(1).to({y:94.2},0).wait(1).to({y:93.4},0).wait(1).to({y:92.6},0).wait(1).to({y:91.8},0).wait(1).to({y:91.1},0).wait(1).to({y:90.3},0).wait(1).to({y:89.5},0).wait(1).to({y:88.7},0).wait(1).to({y:88},0).wait(1).to({y:87.2},0).wait(1).to({y:86.4},0).wait(1).to({y:85.6},0).wait(1).to({y:84.8},0).wait(61));

	// left-txt
	this.instance_2 = new lib.animalstxt();
	this.instance_2.setTransform(-337.8,14.9,0.588,0.848);

	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(-169.8,104.4,0.588,0.848,0,0,0,285.6,105.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},34).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).wait(1).to({regX:285.5,regY:105.5,scaleX:0.59,x:-157,y:104.3},0).wait(1).to({scaleX:0.59,x:-144.2},0).wait(1).to({scaleX:0.59,x:-131.3},0).wait(1).to({scaleX:0.58,x:-118.5},0).wait(1).to({x:-105.6},0).wait(1).to({scaleX:0.58,x:-92.8},0).wait(1).to({scaleX:0.58,x:-79.9},0).wait(1).to({scaleX:0.58,x:-67.1},0).wait(1).to({scaleX:0.58,x:-54.2},0).wait(1).to({scaleX:0.58,x:-41.4},0).wait(1).to({scaleX:0.58,x:-28.6},0).wait(1).to({scaleX:0.58,x:-15.7},0).wait(1).to({scaleX:0.58,x:-2.9},0).wait(1).to({scaleX:0.57,x:10},0).wait(1).to({scaleX:0.57,x:22.8},0).wait(1).to({scaleX:0.57,x:35.7},0).wait(1).to({scaleX:0.57,x:48.5},0).wait(1).to({scaleX:0.57,x:61.4},0).wait(1).to({scaleX:0.57,x:74.2},0).wait(1).to({scaleX:0.57,x:87},0).wait(1).to({scaleX:0.57,x:99.9},0).wait(1).to({scaleX:0.57,x:112.7},0).wait(1).to({scaleX:0.57,x:125.5},0).wait(1).to({scaleX:0.56,x:138.4},0).wait(1).to({scaleX:0.56,x:151.2},0).wait(1).to({scaleX:0.56,x:164},0).wait(1).to({scaleX:0.56,x:176.9},0).wait(1).to({scaleX:0.56,x:183.6,y:105},0).wait(1).to({scaleX:0.56,x:190.2,y:105.8},0).wait(1).to({x:197,y:106.5},0).wait(1).to({scaleX:0.56,x:203.6,y:107.3},0).wait(1).to({scaleX:0.56,x:210.3,y:108},0).wait(1).to({scaleX:0.56,x:217,y:108.7},0).wait(1).to({scaleX:0.56,x:223.7,y:109.5},0).wait(1).to({scaleX:0.56,x:230.4,y:110.2},0).wait(1).to({scaleX:0.55,x:237.1,y:110.9},0).wait(1).to({scaleX:0.55,x:243.8,y:111.7},0).wait(1).to({scaleX:0.55,x:250.5,y:112.4},0).wait(1).to({scaleX:0.55,x:257.2,y:113.2},0).wait(1).to({scaleX:0.55,x:263.9,y:113.9},0).wait(1).to({scaleX:0.55,x:270.6,y:114.6},0).wait(1).to({scaleX:0.55,x:277.3,y:115.4},0).wait(1).to({scaleX:0.55,x:284,y:116.1},0).wait(1).to({scaleX:0.55,x:290.7,y:116.8},0).wait(62));

	// right-txt
	this.instance_4 = new lib.canmovetxt();
	this.instance_4.setTransform(604.4,-1.2,0.588,0.848);

	this.instance_5 = new lib.Symbol6();
	this.instance_5.setTransform(790.1,104.6,0.588,0.848,0,0,0,315.6,124.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},34).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).wait(1).to({regX:315.5,regY:124.8,scaleX:0.57,x:772.3,y:104.7},0).wait(1).to({scaleX:0.56,x:754.5},0).wait(1).to({scaleX:0.54,x:736.8},0).wait(1).to({scaleX:0.53,x:719.1},0).wait(1).to({scaleX:0.51,x:701.4},0).wait(1).to({scaleX:0.5,x:683.7},0).wait(1).to({scaleX:0.48,x:666},0).wait(1).to({scaleX:0.46,x:648.3},0).wait(1).to({scaleX:0.45,x:630.5},0).wait(1).to({scaleX:0.43,x:612.8},0).wait(1).to({scaleX:0.42,x:595.1},0).wait(1).to({scaleX:0.4,x:577.4},0).wait(1).to({scaleX:0.39,x:559.7},0).wait(1).to({scaleX:0.37,x:542},0).wait(1).to({scaleX:0.36,x:524.2},0).wait(1).to({scaleX:0.34,x:506.5},0).wait(1).to({scaleX:0.32,x:488.8},0).wait(1).to({scaleX:0.31,x:471.1},0).wait(1).to({x:470,y:108.7},0).wait(1).to({x:469,y:112.7},0).wait(1).to({x:468,y:116.7},0).wait(1).to({x:467,y:120.8},0).wait(1).to({x:465.9,y:124.8},0).wait(1).to({x:464.9,y:128.8},0).wait(1).to({x:463.9,y:132.8},0).wait(1).to({x:462.9,y:136.8},0).wait(1).to({x:461.8,y:140.8},0).wait(1).to({x:460.8,y:144.8},0).wait(1).to({x:459.8,y:148.9},0).wait(1).to({x:458.8,y:152.9},0).wait(1).to({x:457.8,y:156.9},0).wait(1).to({x:456.7,y:160.9},0).wait(1).to({x:455.7,y:164.9},0).wait(1).to({x:454.7,y:168.9},0).wait(1).to({x:453.7,y:173},0).wait(1).to({x:452.6,y:177},0).wait(1).to({x:451.6,y:181},0).wait(1).to({x:450.6,y:185},0).wait(1).to({x:449.6,y:189},0).wait(1).to({x:448.5,y:193},0).wait(1).to({x:447.5,y:197},0).wait(1).to({x:446.5,y:201.1},0).wait(1).to({x:445.5,y:205.1},0).wait(1).to({x:444.4,y:209.1},0).wait(1).to({x:443.4,y:213.1},0).wait(61));

	// horse
	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(-177.5,321.2,0.311,0.448,0,0,0,212,190.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regY:190,scaleX:0.34,scaleY:0.49,x:-176.1,y:330.7},0).wait(1).to({scaleX:0.37,scaleY:0.54,x:-171.9,y:340.3},0).wait(1).to({scaleX:0.4,scaleY:0.58,x:-164.9,y:349.9},0).wait(1).to({scaleX:0.43,scaleY:0.63,x:-155,y:359.5},0).wait(1).to({scaleX:0.47,scaleY:0.67,x:-142.3,y:369.1},0).wait(1).to({scaleX:0.5,scaleY:0.71,x:-126.9,y:378.6},0).wait(1).to({scaleX:0.53,scaleY:0.76,x:-108.6,y:388.2},0).wait(1).to({scaleX:0.56,scaleY:0.8,x:-87.5,y:397.8},0).wait(1).to({scaleX:0.59,scaleY:0.85,x:-63.5,y:407.4},0).wait(1).to({scaleX:0.58,x:-36.8,y:417},0).wait(1).to({scaleX:0.56,x:-7.3,y:426.6},0).wait(1).to({scaleX:0.55,x:25.1,y:436.2},0).wait(1).to({scaleX:0.54,x:60.3,y:445.8},0).wait(1).to({scaleX:0.53,x:98.3,y:342.1},0).wait(1).to({x:139.1},0).wait(1).to({x:182.6},0).wait(1).to({x:229.1},0).wait(1).to({x:278.3},0).wait(1).to({x:330.4},0).wait(1).to({x:385.3},0).wait(1).to({x:371.9},0).wait(1).to({x:346},0).wait(1).to({x:340},0).wait(1).to({x:333.7},0).wait(1).to({x:327.2},0).wait(1).to({x:320.4},0).wait(1).to({x:313.4},0).wait(1).to({x:306},0).wait(1).to({x:298.5},0).wait(1).to({x:290.6},0).wait(1).to({x:282.5},0).wait(1).to({x:274.1},0).wait(1).to({x:265.5},0).wait(1).to({x:264.3},0).wait(106));

	// tree
	this.movieClip_4 = new lib.Symbol2();
	this.movieClip_4.setTransform(79.6,829.2,0.588,0.848,0,0,0,523.6,391.5);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_4).wait(1).to({regX:523.5,y:829.1},0).wait(4).to({x:79.2},0).wait(1).to({x:78.8},0).wait(1).to({x:78.3},0).wait(28).to({y:801.2},0).wait(1).to({y:773.1},0).wait(1).to({y:745.1},0).wait(1).to({y:717.1},0).wait(1).to({y:689},0).wait(1).to({y:661},0).wait(1).to({y:633},0).wait(1).to({y:605},0).wait(1).to({y:576.9},0).wait(1).to({y:548.9},0).wait(1).to({y:520.9},0).wait(1).to({y:492.8},0).wait(1).to({y:464.8},0).wait(1).to({y:436.8},0).wait(1).to({y:408.8},0).wait(1).to({y:380.8},0).wait(1).to({y:352.7},0).wait(1).to({y:324.7},0).wait(9).to({x:78.8},0).wait(1).to({x:79.2},0).wait(1).to({x:79.6},0).wait(11).to({x:79.5},0).wait(1).to({x:79.3},0).wait(1).to({x:79.1},0).wait(1).to({x:78.9},0).wait(1).to({x:78.8},0).wait(1).to({x:78.6},0).wait(1).to({x:78.5},0).wait(1).to({x:78.4},0).wait(6).to({x:78.5},0).wait(1).to({x:78.6},0).wait(1).to({x:78.8},0).wait(1).to({x:78.9},0).wait(1).to({x:79.1},0).wait(1).to({x:79.3},0).wait(1).to({x:79.5},0).wait(1).to({x:79.6},0).wait(46));

	// main-bg
	this.instance_7 = new lib.bg_1();
	this.instance_7.setTransform(300,250.1,1,1,0,0,0,-115.5,-109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.9,45,1313.5,1366);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
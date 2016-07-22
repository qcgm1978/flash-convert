(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.beijing = function() {
	this.spriteSheet = ss["export_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.horse = function() {
	this.spriteSheet = ss["export_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.tree = function() {
	this.spriteSheet = ss["export_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



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


// stage content:
(lib._export = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// horse
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-286.9,380.2,0.528,0.528,0,0,0,212,190.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:190,scaleX:0.58,scaleY:0.58,x:-268.8,y:391.5},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:-214.5,y:402.8},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:-123.8,y:414.1},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:3,y:425.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:166.1,y:436.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:365.3,y:448.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:600.9,y:459.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:573.9,y:470.7},0).wait(1).to({scaleX:1,scaleY:1,y:482},0).wait(1).to({y:493.3},0).wait(1).to({x:662.3,y:504.6},0).wait(1).to({y:516},0).wait(1).to({x:573.9,y:527.3},0).wait(1).to({y:469.7},0).wait(6));

	// tree
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(409.9,1391.5,1,1,0,0,0,523.5,391.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.94,scaleY:0.94,x:380.2,y:1370.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:350.6,y:1350},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:320.9,y:1329.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:291.2,y:1308.5},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:261.5,y:1287.7},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:231.9,y:1267},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:202.2,y:1246.3},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:172.5,y:1225.5},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:142.9,y:1204.8},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:160.6,y:1116.9},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:178.3,y:1028.9},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:196,y:941},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:213.8,y:853.1},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:231.5,y:765.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:249.2,y:677.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:266.9,y:589.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:284.6,y:501.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:302.3,y:413.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:320.1,y:325.6},0).wait(1));

	// bg
	this.instance_2 = new lib.beijing();
	this.instance_2.setTransform(0,0,0.967,1.253);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(113.1,384,1423,1783);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
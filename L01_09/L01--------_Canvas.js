(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 560,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/comsoundWordBack.mp3", id:"comsoundWordBack"},
		{src:"sounds/comsoundRight.mp3", id:"comsoundRight"},
		{src:"sounds/Sound09.mp3", id:"Sound09"},
		{src:"sounds/Sound10.mp3", id:"Sound10"},
		{src:"sounds/Sound11.mp3", id:"Sound11"},
		{src:"sounds/Sound12.mp3", id:"Sound12"},
		{src:"sounds/Sound01.mp3", id:"Sound01"},
		{src:"sounds/Sound02.mp3", id:"Sound02"},
		{src:"sounds/Sound03.mp3", id:"Sound03"},
		{src:"sounds/Sound04.mp3", id:"Sound04"},
		{src:"sounds/Sound05.mp3", id:"Sound05"},
		{src:"sounds/Sound06.mp3", id:"Sound06"},
		{src:"sounds/Sound07.mp3", id:"Sound07"},
		{src:"sounds/Sound08.mp3", id:"Sound08"},
		{src:"sounds/comsoundSuccess.mp3", id:"comsoundSuccess"}
	]
};



// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["L01__Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._10 = function() {
	this.spriteSheet = ss["L01__Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._11 = function() {
	this.spriteSheet = ss["L01__Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._12 = function() {
	this.spriteSheet = ss["L01__Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["L01__Canvas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["L01__Canvas_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["L01__Canvas_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["L01__Canvas_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["L01__Canvas_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
	this.spriteSheet = ss["L01__Canvas_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.spriteSheet = ss["L01__Canvas_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._9 = function() {
	this.spriteSheet = ss["L01__Canvas_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.箭头副本2 = function() {
	this.spriteSheet = ss["L01__Canvas_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.箭头副本7 = function() {
	this.spriteSheet = ss["L01__Canvas_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.箭头副本8 = function() {
	this.spriteSheet = ss["L01__Canvas_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.按2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(1,1,1).p("AgPgvQAKAEAGAIQAAAAABABQAOAPAAATQAAAUgOAQQgBAAAAABQgGAHgKAE");
	this.shape.setTransform(16.5,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(1,1,1).p("AgYhAQAJACAJAFQAGAFAGAGQATAUAAAaQAAAbgTAUQgGAGgGAFQgJAFgJACAgYgvQAKAEAIAHQAAABABAAQAMAQAAATQAAAUgMAPQgBABAAAAQgIAIgKAD");
	this.shape_1.setTransform(17.4,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},4).wait(4));

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AgXAtIAAhYIBVhFIAADggAg9ArIAAhWIAZAAIAABWg");
	this.shape_2.setTransform(6.3,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.6,22.6);


(lib.元件1副本 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArFH3IAAvhQAAhxBlgBIUNgKIAZCFIhJBIIBGByIhHCDIBBBwIhJCZIBABIIg9COIBACtIgtB1IzqAKIgCAAQhjAAAAhwg");
	this.shape.setTransform(78.6,71,1,1,0,0,0,-8.8,0.1);

	// 图层 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#669900").ss(2,1,1).p("AAApkIAATJ");
	this.shape_1.setTransform(9.9,70.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#669900").ss(2,1,1).p("ANyqbQAEAAAFgBI7SAAQhBAAAAA/IAAS7QAAA/BBAAIbVAAQghgBAAg+IAsh2Ig/itIA8iOIg/hJIBIiZIhAhwIBHiDIhHhyIBKhHIgji4QgCAAgCgCg");
	this.shape_2.setTransform(66.9,70.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3EB85").s().p("AtXKcQhBABAAhAIAAy6QAAg+BBgBIbSAAIgJABQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAjC4IhKBHIBHBzIhHCCIBABxIhICYIA/BJIg8COIA/CsIgsB2QAAA/AhAAg");
	this.shape_3.setTransform(66.9,70.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.2,3,186.3,135.8);


(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsGH3IAAvhQAAhxBlgBIVvgKIgZCFIBKBIIhHByIBHCDIhABwIBICZIg/BIIA8COIg/CtIAsB0I2SALIgCAAQhjAAAAhwg");
	this.shape.setTransform(79.1,71,1,1,0,0,0,-15.4,0.1);

	// 图层 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#669900").ss(2,1,1).p("AAApkIAATJ");
	this.shape_1.setTransform(9.9,70.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#669900").ss(2,1,1).p("AOyqbQgFgBgIAAI9BAAQhAAAAAA/IAAS7QAAA/BAAAIdBAAQAiAAAAg/Igsh2IA/itIg8iOIA/hJIhIiZIBAhwIhHiDIBHhyIhKhHIAji4QACAAACgB");
	this.shape_2.setTransform(73.8,70.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3EB85").s().p("AucKcQhAABAAhAIAAy6QAAg+BAgBIdBAAIANABIAAACIgEAAIgjC4IBKBHIhHBzIBHCCIhABxIBICYIg/BJIA8COIg/CsIAsB2QAABAgigBg");
	this.shape_3.setTransform(73.8,70.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.2,3,200,135.8);


(lib.按钮1副本 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("Ag2hvIBtBvIhtBvg");
	this.shape.setTransform(-3.2,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6666").s().p("AhoBwIBthwIhthuIAAhlIDRDTIAAAAIjRDUg");
	this.shape_1.setTransform(1.8,5.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.8,-16.1,21.2,42.5);


(lib.按钮1 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("Ag2hvIBtBvIhtBvg");
	this.shape.setTransform(-3.2,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,102,0.502)").s().p("AhoBwIBthwIhthuIAAhlIDRDTIAAAAIjRDUg");
	this.shape_1.setTransform(1.8,5.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.8,-16.1,21.2,42.5);


(lib.masksdf = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AinHYIAAuvIFPAAIAAOvg");
	this.shape.setTransform(9.3,66.6,0.554,1.297);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#669900").ss(2,1,1).p("ABbqdIi1AAABbKeIi1AA");
	this.shape_1.setTransform(9.3,67);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3EB85").s().p("AhaKjIAAgKIAA07IC1AAIAAU7Ii1AAIC1AAIAAAKgABbKZg");
	this.shape_2.setTransform(9.3,67.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-1,20.3,136.1);


(lib.jiantou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// 图层 1
	this.instance = new lib.箭头副本8();

	this.instance_1 = new lib.箭头副本7();

	this.instance_2 = new lib.箭头副本2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,31);


(lib.喇叭 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 1
	this.instance = new lib.按2("single",0);
	this.instance.setTransform(12.7,11.9,1,1,0,0,0,10.2,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"independent"},0).wait(1));

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3EB85").s().p("AhbBcQgmgmAAg2QAAg1AmgnQAnglA0gBQA1ABAmAlQAnAnAAA1QAAA2gnAmQgmAng1gBQg0ABgngng");
	this.shape.setTransform(13.5,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,51,0,0)").s().p("AisCvIAAldIFZAAIAAFdg");
	this.shape_1.setTransform(11.8,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-5.4,34.8,35.2);


(lib.单词卡副本 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// 按钮
	this.zhedang = new lib.masksdf();
	this.zhedang.setTransform(27.8,71,1,1,0,0,0,9.2,67);

	this.soundBtn = new lib.喇叭();
	this.soundBtn.setTransform(99.1,63.8,1.763,1.763,0,0,0,16.9,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.soundBtn},{t:this.zhedang}]}).wait(12));

	// 文字
	this.text = new cjs.Text("cave", "32px 'Arial'", "#663300");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 154;
	this.text.setTransform(89.1,85.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"skate"},0).wait(1).to({text:"lake"},0).wait(1).to({text:"plane"},0).wait(1).to({text:"rainy"},0).wait(1).to({text:"tail"},0).wait(1).to({text:"train"},0).wait(1).to({text:"sail"},0).wait(1).to({text:"day"},0).wait(1).to({text:"play"},0).wait(1).to({text:"way"},0).wait(1).to({text:"bay"},0).wait(1));

	// 卡
	this.instance = new lib.元件1副本("synched",0);
	this.instance.setTransform(91.3,82.5,1,1,0,0,180,91.2,82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.3,3,196.4,136.1);


(lib.单词卡 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// 图层 4
	this.instance = new lib._1();
	this.instance.setTransform(1.5,14.1,0.687,0.687);

	this.instance_1 = new lib._2();
	this.instance_1.setTransform(18,-1.5,0.582,0.582);

	this.instance_2 = new lib._3();
	this.instance_2.setTransform(4.9,20.6,0.545,0.545);

	this.instance_3 = new lib._4();
	this.instance_3.setTransform(12.1,36,0.539,0.539);

	this.instance_4 = new lib._5();
	this.instance_4.setTransform(17.3,13,0.51,0.51);

	this.instance_5 = new lib._6();
	this.instance_5.setTransform(2.1,20.8,0.707,0.707);

	this.instance_6 = new lib._7();
	this.instance_6.setTransform(6.3,53.7,0.396,0.396);

	this.instance_7 = new lib._8();
	this.instance_7.setTransform(13,-0.8,0.65,0.65);

	this.instance_8 = new lib._9();
	this.instance_8.setTransform(4.2,22.7,0.513,0.513);

	this.instance_9 = new lib._10();
	this.instance_9.setTransform(1.3,8,0.634,0.634);

	this.instance_10 = new lib._11();
	this.instance_10.setTransform(9.9,0.9,0.589,0.589);

	this.instance_11 = new lib._12();
	this.instance_11.setTransform(6.8,21.6,0.441,0.441);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

	// 图层 2
	this.zhedang = new lib.masksdf();
	this.zhedang.setTransform(160.2,71,1,1,0,0,0,9.2,67);

	this.timeline.addTween(cjs.Tween.get(this.zhedang).wait(12));

	// 卡
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#669900").ss(2,1,1).p("AAdhBQAVAAAOAOQAPAPAAAVQAAASgPATQgPATgTALQgUALgKACQgagLgNgLQgNgKgNgPQgNgPAAgSQAAgVAPgPQAPgOAUAAQARAAALAXQANgXAQAAg");
	this.shape.setTransform(-16.4,71.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnArQgNgKgNgPQgNgPAAgSQAAgVAPgPQAPgOAUABQARAAALAWQANgWAQAAQAVgBAOAOQAPAPAAAVQAAASgPAUQgPASgTALQgUAMgKABQgagLgNgLg");
	this.shape_1.setTransform(-16.4,71.7);

	this.instance_12 = new lib.元件1("synched",0);
	this.instance_12.setTransform(83,82.5,1,1,0,0,0,91.2,82.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.shape_1},{t:this.shape}]}).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.4,3,206.3,136.1);


(lib.PageButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AioEYIAAovIFRAAIAAIvg");
	this.shape.setTransform(-2.3,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// 图层 1
	this.instance = new lib.按钮1();
	this.instance.setTransform(-1.6,-4.7,0.919,0.919);
	this.instance.shadow = new cjs.Shadow("#000000",0,0,3);

	this.instance_1 = new lib.按钮1副本();
	this.instance_1.setTransform(2,-4.7,1.103,1.103);
	this.instance_1.shadow = new cjs.Shadow("#990000",0,0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,-29.8,34,56.1);


(lib.元件1_1 = function() {
	this.initialize();

	// 图层 1
	this.item41 = new lib.单词卡副本();
	this.item41.setTransform(439.2,506.9,0.773,0.773,0,0,0,91.2,82.5);

	this.item40 = new lib.单词卡();
	this.item40.setTransform(96.3,506.9,0.773,0.773,0,0,0,91.2,82.5);

	this.item11 = new lib.单词卡副本();
	this.item11.setTransform(436.5,171.7,0.773,0.773,0,0,0,91.2,82.5);

	this.item30 = new lib.单词卡();
	this.item30.setTransform(25.8,331.3,0.773,0.773);

	this.item31 = new lib.单词卡副本();
	this.item31.setTransform(441.3,395.1,0.773,0.773,0,0,0,91.2,82.5);

	this.item20 = new lib.单词卡();
	this.item20.setTransform(96.3,283.4,0.773,0.773,0,0,0,91.2,82.5);

	this.item01 = new lib.单词卡副本();
	this.item01.setTransform(436.5,59.9,0.773,0.773,0,0,0,91.2,82.5);

	this.item10 = new lib.单词卡();
	this.item10.setTransform(96.3,171.7,0.773,0.773,0,0,0,91.2,82.5);

	this.item21 = new lib.单词卡副本();
	this.item21.setTransform(439.2,283.4,0.773,0.773,0,0,0,91.2,82.5);

	this.item00 = new lib.单词卡();
	this.item00.setTransform(96.3,59.9,0.773,0.773,0,0,0,91.2,82.5);

	this.addChild(this.item00,this.item21,this.item10,this.item01,this.item20,this.item31,this.item30,this.item11,this.item40,this.item41);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-1.5,532.8,552.1);


(lib.hjjhj = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AinHYIAAuvIFPAAIAAOvg");
	this.shape.setTransform(3,-1.2,0.554,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#669900").ss(1.6,1,1).p("ABboDIi1AAABbIEIi1AA");
	this.shape_1.setTransform(3,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3EB85").s().p("AhaIIIAAgIIAAwHIC1AAIAAQHIi1AAIC1AAIAAAIgABbIAg");
	this.shape_2.setTransform(3,-0.5);

	// 图层 1
	this.item1 = new lib.单词卡副本();
	this.item1.setTransform(54.7,8.2,0.773,0.773,0,0,0,91.2,82.5);

	this.item0 = new lib.单词卡();
	this.item0.setTransform(-48.3,8.2,0.773,0.773,0,0,0,91.2,82.5);

	this.addChild(this.item0,this.item1,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-145.4,-53.5,291,105.5);


(lib.comeffectCardEffect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.card = new lib.hjjhj();
	this.card.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.card).to({scaleX:1.07,scaleY:1.07},6).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.4,-53.7,291,105.3);


// stage content:



(lib.L01_Canvas = function() {
	this.initialize();

	// 图层 3
	this.prevBtn = new lib.jiantou();
	this.prevBtn.setTransform(53.7,275.5,1,1,0,0,180,13,15.5);

	this.nextBtn = new lib.jiantou();
	this.nextBtn.setTransform(907.5,275.5,1,1,0,0,0,13,15.5);

	// 图层 2
	this.boxGroup = new lib.元件1_1();
	this.boxGroup.setTransform(481.2,280.4,1,1,0,0,0,265.6,275.2);

	this.addChild(this.boxGroup,this.nextBtn,this.prevBtn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(520.7,283.6,879.8,552.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
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
		{src:"sounds/GuaGua.mp3", id:"GuaGua"}
	]
};



// symbols:



(lib._01_01 = function() {
	this.spriteSheet = ss["L2_01_vocabulary_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._01_03 = function() {
	this.spriteSheet = ss["L2_01_vocabulary_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._01_05 = function() {
	this.spriteSheet = ss["L2_01_vocabulary_Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._01_08 = function() {
	this.spriteSheet = ss["L2_01_vocabulary_Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._23 = function() {
	this.spriteSheet = ss["L2_01_vocabulary_Canvas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._24 = function() {
	this.spriteSheet = ss["L2_01_vocabulary_Canvas_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.X1AU21_01 = function() {
	this.spriteSheet = ss["L2_01_vocabulary_Canvas_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.X1AU21_04 = function() {
	this.spriteSheet = ss["L2_01_vocabulary_Canvas_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.X1AU25_03 = function() {
	this.spriteSheet = ss["L2_01_vocabulary_Canvas_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.位图1 = function() {
	this.spriteSheet = ss["L2_01_vocabulary_Canvas_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.位图2 = function() {
	this.spriteSheet = ss["L2_01_vocabulary_Canvas_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.颜料 = function() {
	this.spriteSheet = ss["L2_01_vocabulary_Canvas_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.青蛙 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7D955").s().p("AgbhaIA3AAIAAAjIgSAIIARASIgBAfIgOAJIAMASQgFA+gIAAQgMAAgai1g");
	this.shape.setTransform(32.2,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83AA42").s().p("AgFAYIAMgJIgDAbgAgHghIAQgIIgBAZg");
	this.shape_1.setTransform(34.1,25.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#83AA42").s().p("AgGAPIAMAJIgKASIgCgbgAgHgpIAQAIIgQARIAAgZg");
	this.shape_2.setTransform(-33.4,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A7D955").s().p("AgXAdIAMgSIgOgJIgBgfIASgSIgSgIIgBgjIA3AAQgaC1gMAAQgIAAgFg+g");
	this.shape_3.setTransform(-31.5,26.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#83AA42").s().p("Ag9AKQgDgEAAgFQAAgEADgEQAFgDAFgBQAFABAEADQAEAEAAAEQAAAFgEAEQgEADgFAAQgFAAgFgDgAAqAHQgDgDAAgEQAAgFADgEQAEgDAGgBQAFABAEADQAEAEAAAFQAAAEgEADQgEAFgFAAQgGAAgEgFg");
	this.shape_4.setTransform(0.3,-8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6666").s().p("AgrASQgSgIgBgKQABgJASgIQASgIAZAAQAZAAATAIQASAIAAAJQAAAKgSAIQgTAIgZAAQgZAAgSgIg");
	this.shape_5.setTransform(28.2,-13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4F1A00").s().p("AA5AxQgUgVAAgcQAAgbAUgVQAUgUAdAAQAdAAAUAUQAVAVAAAbQAAAcgVAVQgUAUgdAAQgdAAgUgUgAibAxQgUgVAAgcQAAgbAUgVQAVgUAdAAQAcAAAVAUQAUAVAAAbQAAAcgUAVQgVAUgcAAQgdAAgVgUg");
	this.shape_6.setTransform(-0.7,-27.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#669933").ss(2,1,1).p("ACmCEQg3AAgngnQgngnAAg2QAAg1AngnQAngnA3AAQA3AAAmAnQAoAnAAA1QAAA2goAnQgmAng3AAgAkFBcQglglAAg1QAAgzAlgmQAmglA1AAQA1AAAmAlQAmAmAAAzQAAA1gmAlQgmAmg1AAQg1AAgmgmg");
	this.shape_7.setTransform(-0.3,-29);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFFEC").s().p("ABIBdQgngnAAg2QAAg1AngnQAngnA3AAQA3AAAmAnQAoAnAAA1QAAA2goAnQgmAng3AAQg3AAgngngAkFBcQglglAAg1QAAgzAlgmQAmglA1AAQA1AAAmAlQAmAmAAAzQAAA1gmAlQgmAmg1AAQg1AAgmgmg");
	this.shape_8.setTransform(-0.3,-29);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6666").s().p("AgrASQgSgIAAgKQAAgJASgIQASgIAZAAQAZAAATAIQASAIABAJQgBAKgSAIQgTAIgZAAQgZAAgSgIg");
	this.shape_9.setTransform(-27.4,-13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4F1A00").s().p("AmQgWQGQA0GRg0QjUAtjHAAQjIAAi+gtg");
	this.shape_10.setTransform(0.3,3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFFEC").s().p("AkQAzQgagXgUgaQFJktE0ErQgUAYgYAXQhsBiiiAEIgKAAQiZAAhyhig");
	this.shape_11.setTransform(0.7,23.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A7D955").s().p("AlcDuIAlg3Ig4AFQgHgVgDgWIgHAAQggAAgWgWQgXgWAAggQAAgfAXgXQAWgUAgAAIALABQAWhuBVhOQBnhgCNgIIAXDNIAPjNQCbAEBsBmQBQBNAXBsIADAAIALABQAZADASAQQAXAXAAAfQAAAggXAWQgUAUgaACIgIAAQgDAXgGAVIhBgFIArA/QgMAZgQAWQk0kqlJEtQgWgcgPgfgAGTBIQmQA2mRg2QF8BdGlhdg");
	this.shape_12.setTransform(0.1,-5.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#83AA42").s().p("AEzDRIBBAFQgJAfgNAbgAlzDWIA4gFIglA3QgMgYgHgagAgakPIAdAAIAJAAIgNDNg");
	this.shape_13.setTransform(0.4,-8.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.196)").s().p("AknA2Qh7gXAAgfQAAgeB7gXQB7gXCsAAQCtAAB7AXQB7AXAAAeQAAAfh7AXQh7AXitAAQisAAh7gXg");
	this.shape_14.setTransform(0.3,34.5);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.1,-43.2,92.4,85.5);


(lib.透明按钮 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.004)").s().p("AsSEYIAAovIYlAAIAAIvg");
	this.shape.setTransform(78.8,28.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BAE2DF").s().p("AsFDfIAAm9IYLAAIAAG9g");
	this.shape_1.setTransform(80,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.5,56.1);


(lib.图片10 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,0,0,0.949)").s().p("AhDAFIhRBQIAAjsIDsAAIhXBXICUCSIhGBGg");
	this.shape.setTransform(279.7,196.3);

	this.instance = new lib._01_05();
	this.instance.setTransform(149.9,44.5,0.829,0.829);

	this.instance_1 = new lib._01_05();
	this.instance_1.setTransform(-93.6,-11.5,1.322,1.322);

	this.addChild(this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93.6,-11.5,391.2,282.9);


(lib.图片9 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,0,0,0.949)").s().p("AiUBSICUiSIhXhXIDsAAIAADsIhRhQIiSCTg");
	this.shape.setTransform(-32,221.3);

	this.instance = new lib._01_05();
	this.instance.setTransform(149.9,44.5,0.829,0.829);

	this.instance_1 = new lib._01_05();
	this.instance_1.setTransform(-93.6,-11.5,1.322,1.322);

	this.addChild(this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93.6,-11.5,391.2,282.9);


(lib.图片8 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._01_05();
	this.instance.setTransform(30.7,-42.4,1.4,1.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(30.7,-42.4,249.3,299.7);


(lib.图片7副本 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._01_03();
	this.instance.setTransform(55.9,-25.4,1.352,1.352);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(55.9,-25.4,255.5,289.3);


(lib.图片6副本 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._01_08();
	this.instance.setTransform(346.4,-15.7,1.271,1.271,0,0,180);

	this.instance_1 = new lib._01_08();
	this.instance_1.setTransform(-15,-15.7,1.271,1.271);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15,-15.7,361.4,268.2);


(lib.图片5副本 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._01_08();
	this.instance.setTransform(52.7,-20,1.308,1.308);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(52.7,-20,185.7,275.9);


(lib.图片4副本 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._01_01();
	this.instance.setTransform(99.7,11.8);

	this.instance_1 = new lib._01_01();
	this.instance_1.setTransform(363.2,12.3,1,1,0,0,180);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["L2_01_vocabulary_Canvas_atlas_"],11), null, new cjs.Matrix2D(1,0,0,1,-1125.7,-119.5)).s().p("AgDSrMgABglVIAJAAMAAAAlVg");
	this.shape.setTransform(0.5,119.5);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,363.2,239);


(lib.图片3副本 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._01_01();
	this.instance.setTransform(82.9,-19.5,1.127,1.127);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(82.9,-19.5,189.4,241.3);


(lib.图片2副本 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAWIAAgrIAzAAIAAArg");
	this.shape.setTransform(183.5,63.2);

	this.instance = new lib.X1AU25_03();
	this.instance.setTransform(56.8,-3.2,0.501,0.501);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(56.8,-3.2,211.4,214.9);


(lib.图片1副本 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.X1AU21_01();
	this.instance.setTransform(50.5,10.1,0.489,0.489);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(50.5,10.1,228,219.2);


(lib.按2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFCC").ss(1,1,1).p("AAQgvQgKAFgHAIQgOAPAAATQAAAUAOAQQAHAIAKAE");
	this.shape.setTransform(10.7,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFCC").ss(1,1,1).p("AAZgvQgKAEgJAIQgMAQAAATQAAAUAMAPQAJAJAKADAAZhAQgSAEgMAOQgTAUAAAaQAAAbATAUQAMAOASAE");
	this.shape_1.setTransform(9.8,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},3).wait(3));

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("Ag9hwIBVBEIAABZIhVBEgAAlAsIAAhYIAZAAIAABYg");
	this.shape_2.setTransform(17.3,18.9,1,1,0,0,0,-4.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7DB515").s().p("AgZCpQg8AAgpgqQgqgqAAg6IAAg0QAAg8AqgpQApgqA8AAIA0AAQA6AAAqAqQAqApAAA8IAAA0QAAA6gqAqQgqAqg6AAg");
	this.shape_3.setTransform(18.3,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,1,1).p("ACJiJQAtAuAAA/IAAA4QAABAgtAtQgtAthAAAIg4AAQg/AAgtgtQgtgtAAhAIAAg4QAAg/AtguQAtgsA/AAIA4AAQBAAAAtAsg");
	this.shape_4.setTransform(18.3,18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcC2Qg/AAgtgtQgtgtAAhAIAAg4QAAg/AtguQAtgsA/AAIA4AAQBAAAAtAsQAtAuAAA/IAAA4QAABAgtAtQgtAthAAAg");
	this.shape_5.setTransform(18.3,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,38.5,38.5);


(lib.sds副本 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AE6AAQAACChcBbQhcBdiCAAQiBAAhchdQhchbAAiCQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBg");
	this.shape.setTransform(38.7,34.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9900").ss(1,1,1).p("AFaAAQAACPhmBlQhlBmiPAAQiOAAhlhmQhlhlAAiPQAAiOBlhmQBlhlCOAAQCPAABlBlQBmBmAACOg");
	this.shape_1.setTransform(38.7,34.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD528").s().p("AjzD0QhmhlABiPQgBiOBmhmQBlhlCOAAQCPAABlBlQBlBmAACOQAACPhlBlQhlBmiPAAQiOAAhlhmgAk5AAQAACCBcBbQBcBdCBAAQCCAABchdQBchbAAiCQAAiBhchcQhchciCAAQiBAAhcBcQhcBcAACBIAAAAgAjdDdQhchbAAiCQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBbQhcBdiCAAQiBAAhchdgAE6AAIAAAAg");
	this.shape_2.setTransform(38.7,34.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.1,-1,71.2,71.3);


(lib.sds = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AE6AAQAACChcBbQhcBdiCAAQiBAAhchdQhchbAAiCQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBg");
	this.shape.setTransform(38.7,34.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9900").ss(1,1,1).p("AFaAAQAACPhmBlQhlBmiPAAQiOAAhlhmQhlhlAAiPQAAiOBlhmQBlhlCOAAQCPAABlBlQBmBmAACOg");
	this.shape_1.setTransform(38.7,34.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD528").s().p("AjzD0QhmhlABiPQgBiOBmhmQBlhlCOAAQCPAABlBlQBlBmAACOQAACPhlBlQhlBmiPAAQiOAAhlhmgAk5AAQAACCBcBbQBcBdCBAAQCCAABchdQBchbAAiCQAAiBhchcQhchciCAAQiBAAhcBcQhcBcAACBIAAAAgAjdDdQhchbAAiCQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBbQhcBdiCAAQiBAAhchdgAE6AAIAAAAg");
	this.shape_2.setTransform(38.7,34.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.1,-1,71.2,71.3);


(lib.answeropen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.text = new cjs.Text("answers", "bold 12px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 15;
	this.text.setTransform(2.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// 图层 1
	this.instance = new lib.位图1();

	this.instance_1 = new lib.位图2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,23);


(lib.answercloss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.text = new cjs.Text("reply", "bold 15px 'Arial'", "#948666");
	this.text.lineHeight = 18;
	this.text.setTransform(10,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// 图层 1
	this.instance = new lib._23();

	this.instance_1 = new lib._24();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,88,23.5);


(lib.元件7 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFD528").ss(1,1,1).p("AEjAAQAAB4hWBVQhVBWh4AAQh3AAhWhWQhVhVAAh4QAAh3BVhWQBWhVB3AAQB4AABVBVQBWBWAAB3g");
	this.shape.setTransform(29.1,29.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjNDNQhUhVgBh4QABh3BUhWQBWhUB3gBQB4ABBVBUQBWBWAAB3QAAB4hWBVQhVBWh4AAQh3AAhWhWg");
	this.shape_1.setTransform(29.1,29.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,60.2,60.2);


(lib.元件6 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArDK3QjGAAgBjHIAAvfQABjHDGAAIWGAAQDIAAAADHIAAPfQAADHjIAAg");
	this.shape.setTransform(90.7,69.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,181.4,139.1);


(lib.元件5 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AFaAAQAACPhmBlQhlBmiPAAQiOAAhmhmQhlhlAAiPQAAiOBlhmQBmhlCOAAQCPAABlBlQBmBmAACOg");
	this.shape.setTransform(34.6,34.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD528").s().p("Aj0D0QhkhlgBiPQABiOBkhmQBmhlCOAAQCPAABlBlQBmBmAACOQAACPhmBlQhlBmiPAAQiOAAhmhmg");
	this.shape_1.setTransform(34.6,34.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,71.2,71.3);


(lib.元件4 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AwTiEIAABEQAADGDIAAIaXAAQBsAAAyg6QAqgyAAhaIAAhE");
	this.shape.setTransform(104.5,187.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD528").s().p("AtLCGQjIAAAAjHIAAhDMAgnAAAIAABDQAABbgqAxQgyA7hsAAg");
	this.shape_1.setTransform(104.5,187.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(1,1,1).p("AQUCHIAAhGQAAg5gQgmQgohoiQAAI6XAAQjIAAAADHIAABG");
	this.shape_2.setTransform(104.5,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD528").s().p("AwTCHIAAhHQAAjGDIAAIaXAAQCQABAoBmQAQAnAAA4IAABHg");
	this.shape_3.setTransform(104.5,13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF9900").ss(1,1,1).p("AQUMDIAA4FAwTsCIAAYF");
	this.shape_4.setTransform(104.5,100.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD528").s().p("AwTMDIAA4FMAgnAAAIAAYFg");
	this.shape_5.setTransform(104.5,100.7);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,211,202.9);


(lib.文本遮罩 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,238,170,0)").s().p("ApPCTIAAklISfAAIAAElg");
	this.shape.setTransform(59.2,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9900").ss(1,1,1).p("AJQCTIyfAAIAAklISfAAg");
	this.shape_1.setTransform(59.2,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFEEAA").s().p("ApPCTIAAklISfAAIAAElg");
	this.shape_2.setTransform(59.2,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.5,29.4);


(lib.图片12 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,0,0,0.949)").s().p("AhDAEIhRBRIAAjsIDsAAIhXBXICUCSIhGBGg");
	this.shape.setTransform(280.4,256.1);

	this.instance = new lib.X1AU21_04();
	this.instance.setTransform(122.5,19.1,0.495,0.495);

	this.instance_1 = new lib.X1AU21_01();
	this.instance_1.setTransform(-120.5,19.1,0.495,0.495);

	this.addChild(this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120.5,19.1,437,252.3);


(lib.图片11 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,0,0,0.949)").s().p("AiUBSICUiSIhXhXIDsAAIAADsIhRhQIiSCTg");
	this.shape.setTransform(-51.1,258.6);

	this.instance = new lib.X1AU21_04();
	this.instance.setTransform(122.5,19.1,0.495,0.495);

	this.instance_1 = new lib.X1AU21_01();
	this.instance_1.setTransform(-120.5,19.1,0.495,0.495);

	this.addChild(this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120.5,19.1,437,254.8);


(lib.Bug = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 1
	this.instance = new lib.青蛙("synched",0);
	this.instance.setTransform(73,116.2,1,1,0,0,0,0,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:0,y:40,mode:"independent"},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.9,32.9,92.4,85.5);


(lib.青蛙动画 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.青蛙("synched",0);
	this.instance.setTransform(0,40,1,1,0,0,0,0,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.08,scaleY:0.85},3).wait(1).to({scaleX:0.95,scaleY:1.09},0).to({y:-39.2,alpha:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.2,-43.2,92.4,85.5);


(lib.anwerall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop()*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 1
	this.instance = new lib.answeropen();
	this.instance.setTransform(42.8,12,1,1,0,0,0,42.8,12);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.answeropen(), 3);

	this.instance_1 = new lib.answercloss();
	this.instance_1.setTransform(70,65,1,1,0,0,0,70,65);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.answercloss(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,23);


(lib.喇叭 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9hwIBVBFIAABYIhVBDgAAlArIAAhWIAZAAIAABWg");
	this.shape.setTransform(16,17.6,1,1,0,0,0,-4.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#88C417").s().p("AgaCpQg6AAgqgpQgqgrAAg7IAAg0QAAg7AqgqQAqgpA6AAIA0AAQA7AAArApQApAqAAA7IAAA0QAAA7gpArQgrApg7AAg");
	this.shape_1.setTransform(17,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("AAci1QBAAAAtAsQAtAuAAA/IAAA4QAABAgtAtQgtAthAAAIg4AAQg/AAgtgtQgtgtAAhAIAAg4QAAg/AtguQAtgsA/AAg");
	this.shape_2.setTransform(17,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcC2Qg/AAgtgsQgtguAAg/IAAg5QAAg/AtguQAtgsA/AAIA5AAQA/AAAuAsQAsAuAAA/IAAA5QAAA/gsAuQguAsg/AAg");
	this.shape_3.setTransform(17,17);

	this.instance = new lib.按2();
	this.instance.setTransform(16.9,16.9,1,1,0,0,0,18.2,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-2.3,38.5,38.5);


(lib.元件8 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.元件6();
	this.instance.setTransform(90.7,69.5,1,1,0,0,0,90.7,69.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,181.4,139.1);


(lib.Timu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// 图层 6
	this.txtMask = new lib.文本遮罩();
	this.txtMask.setTransform(91.2,157.1,0.9,0.9,0,0,0,59.1,14.7);

	this.timeline.addTween(cjs.Tween.get(this.txtMask).wait(12));

	// 图和文字
	this.text = new cjs.Text("hair ", "50px 'Arial'", "#330000");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.lineWidth = 285;
	this.text.setTransform(92.1,138,0.476,0.476);

	this.instance = new lib.图片1副本("synched",0);
	this.instance.setTransform(104.7,85,0.489,0.489,0,0,0,165.8,119.5);

	this.instance_1 = new lib.图片2副本("synched",0);
	this.instance_1.setTransform(106.5,81.2,0.481,0.481,0,0,0,165.6,100.8);

	this.instance_2 = new lib.图片3副本("synched",0);
	this.instance_2.setTransform(112.4,108.9,0.485,0.485,0,0,0,190.8,156);

	this.instance_3 = new lib.图片4副本("synched",0);
	this.instance_3.setTransform(65.6,120.7,0.48,0.48,0,0,0,157.8,200.9);

	this.instance_4 = new lib.图片5副本("synched",0);
	this.instance_4.setTransform(106.4,113.9,0.445,0.445,0,0,0,154.7,191.2);

	this.instance_5 = new lib.图片6副本("synched",0);
	this.instance_5.setTransform(104.5,111.2,0.387,0.387,0,0,0,174.8,185.1);

	this.soundBtn = new lib.透明按钮();
	this.soundBtn.setTransform(153.9,145.3,0.179,0.48);

	this.instance_6 = new lib.图片7副本("synched",0);
	this.instance_6.setTransform(104.9,113.3,0.401,0.401,0,0,0,160.1,186.7);

	this.instance_7 = new lib.图片8("synched",0);
	this.instance_7.setTransform(98.5,115.3,0.444,0.444,0,0,0,160.1,186.7);

	this.instance_8 = new lib.图片9("synched",0);
	this.instance_8.setTransform(125.8,100.4,0.355,0.355,0,0,0,174.7,185);

	this.instance_9 = new lib.图片10("synched",0);
	this.instance_9.setTransform(124,102.3,0.367,0.367,0,0,0,174.8,185.1);

	this.instance_10 = new lib.图片12("synched",0);
	this.instance_10.setTransform(126.6,99,0.321,0.321,0,0,0,174.8,185);

	this.instance_11 = new lib.图片11("synched",0);
	this.instance_11.setTransform(125.1,102.1,0.333,0.333,0,0,0,174.8,185);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:92.1,y:138,text:"hair "}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:93,y:135.9,text:"face "}}]},1).to({state:[{t:this.instance_2},{t:this.text,p:{x:91.5,y:134.1,text:"eye"}}]},1).to({state:[{t:this.instance_3},{t:this.text,p:{x:88.6,y:134.1,text:"eyes"}}]},1).to({state:[{t:this.instance_4},{t:this.text,p:{x:88.2,y:135.2,text:"ear"}}]},1).to({state:[{t:this.instance_5},{t:this.text,p:{x:89.5,y:135.9,text:"ears"}}]},1).to({state:[{t:this.instance_6},{t:this.text,p:{x:88.5,y:136.8,text:"nose"}},{t:this.soundBtn}]},1).to({state:[{t:this.instance_7},{t:this.text,p:{x:88.5,y:138.7,text:"mouth"}}]},1).to({state:[{t:this.instance_8},{t:this.text,p:{x:88.5,y:135.4,text:" big"}}]},1).to({state:[{t:this.instance_9},{t:this.text,p:{x:89.2,y:137.3,text:" small"}}]},1).to({state:[{t:this.instance_10},{t:this.text,p:{x:92.6,y:135,text:"short"}}]},1).to({state:[{t:this.instance_11},{t:this.text,p:{x:90.3,y:137.3,text:"long"}}]},1).wait(1));

	// 图层 5
	this.soundBtn_1 = new lib.喇叭();
	this.soundBtn_1.setTransform(160.8,151.3,0.689,0.689,0,0,180,16.9,17);
	this.soundBtn_1.shadow = new cjs.Shadow("rgba(102,102,102,1)",0,0,3);

	this.timeline.addTween(cjs.Tween.get(this.soundBtn_1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.3,31.5,155.5,138.9);


(lib.ann副本 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.text = new cjs.Text("Go", "32px 'Arial'", "#663300");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.setTransform(25,5.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:NaN},0).wait(2).to({color:NaN},0).wait(1));

	// 图层 1
	this.instance = new lib.sds();
	this.instance.setTransform(23.7,26.9,0.776,0.776,0,0,0,34.6,34.6);
	this.instance.shadow = new cjs.Shadow("rgba(102,102,102,0.6)",0,0,3);

	this.instance_1 = new lib.sds副本();
	this.instance_1.setTransform(23.7,26.9,0.776,0.776,0,0,0,34.6,34.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(102,102,102,0.6)",0,0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,62,62);


(lib.ann = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.text = new cjs.Text("Go", "32px 'Arial'", "#663300");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.setTransform(25,5.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:NaN},0).wait(2).to({color:NaN},0).wait(1));

	// 图层 1
	this.instance = new lib.青蛙动画("single",0);
	this.instance.setTransform(27.1,-8.2,0.499,0.499,0,0,0,0,-0.5);

	this.instance_1 = new lib.sds();
	this.instance_1.setTransform(23.7,26.9,0.776,0.776,0,0,0,34.6,34.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(102,102,102,0.6)",0,0,3);

	this.instance_2 = new lib.sds副本();
	this.instance_2.setTransform(23.7,26.9,0.776,0.776,0,0,0,34.6,34.6);
	this.instance_2.shadow = new cjs.Shadow("rgba(102,102,102,0.6)",0,0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{mode:"single",startPosition:0}}]}).to({state:[{t:this.instance_2},{t:this.instance,p:{mode:"single",startPosition:0}}]},1).to({state:[{t:this.instance_2},{t:this.instance,p:{mode:"independent",startPosition:undefined}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-30.1,62,89.7);


(lib.按钮状态 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 1
	this.instance = new lib.ann();
	this.instance.setTransform(26.8,54.6,0.9,0.9,0,0,0,26.8,26.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.ann(), 3);

	this.instance_1 = new lib.ann副本();
	this.instance_1.setTransform(26.8,54.6,0.9,0.9,0,0,0,26.8,26.9);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.ann副本(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,3.2,57.7,82.1);


(lib.元件9 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.青蛙("synched",0);
	this.instance.setTransform(43.5,62,0.47,0.47,0,0,0,0,39.9);
	this.instance.filters = [new cjs.ColorFilter(0.02, 0.02, 0.02, 1, 226.38, 226.38, 226.38, 0)];
	this.instance.cache(-48,-45,96,90);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEEAA").s().p("ApPCTIAAklISfAAIAAElg");
	this.shape.setTransform(116.4,189.6);

	this.instance_1 = new lib.元件7();
	this.instance_1.setTransform(43,41.8,0.901,0.901,0,0,0,29.1,29.1);
	this.instance_1.shadow = new cjs.Shadow("rgba(102,102,102,0.6)",0,0,3);

	this.instance_2 = new lib.元件8();
	this.instance_2.setTransform(133.7,105.6,0.901,0.901,0,0,0,90.7,69.6);
	this.instance_2.shadow = new cjs.Shadow("rgba(102,102,102,0.6)",0,0,3);

	this.instance_3 = new lib.元件5();
	this.instance_3.setTransform(43,42.2,0.901,0.901,0,0,0,34.6,34.6);
	this.instance_3.shadow = new cjs.Shadow("rgba(102,102,102,0.6)",0,0,3);

	this.instance_4 = new lib.元件4();
	this.instance_4.setTransform(133.5,118.2,0.886,0.886,0,0,0,104.5,96.5);
	this.instance_4.shadow = new cjs.Shadow("rgba(51,51,51,0.6)",0,0,4);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.3,8.5,223.2,208.8);


(lib.所有题板 = function() {
	this.initialize();

	// 图层 1
	this.box12 = new lib.元件9();
	this.box12.setTransform(731.5,405.9,0.864,0.864,0,0,0,119,110.8);

	this.box09 = new lib.元件9();
	this.box09.setTransform(54.6,405.9,0.864,0.864,0,0,0,118.8,110.8);

	this.box10 = new lib.元件9();
	this.box10.setTransform(279.2,405.9,0.864,0.864,0,0,0,119,110.8);

	this.box11 = new lib.元件9();
	this.box11.setTransform(505.5,405.9,0.864,0.864,0,0,0,118.9,110.8);

	this.box08 = new lib.元件9();
	this.box08.setTransform(731.5,227.6,0.864,0.864,0,0,0,119,110.8);

	this.box04 = new lib.元件9();
	this.box04.setTransform(731.5,49.3,0.864,0.864,0,0,0,119,110.8);

	this.box01 = new lib.元件9();
	this.box01.setTransform(54.6,49.3,0.864,0.864,0,0,0,118.8,110.8);

	this.box02 = new lib.元件9();
	this.box02.setTransform(279.2,49.3,0.864,0.864,0,0,0,119,110.8);

	this.box03 = new lib.元件9();
	this.box03.setTransform(505.5,49.3,0.864,0.864,0,0,0,118.9,110.8);

	this.box05 = new lib.元件9();
	this.box05.setTransform(54.6,227.6,0.864,0.864,0,0,0,118.8,110.8);

	this.box06 = new lib.元件9();
	this.box06.setTransform(279.2,227.6,0.864,0.864,0,0,0,119,110.8);

	this.box07 = new lib.元件9();
	this.box07.setTransform(505.5,227.6,0.864,0.864,0,0,0,118.9,110.8);

	this.addChild(this.box07,this.box06,this.box05,this.box03,this.box02,this.box01,this.box04,this.box08,this.box11,this.box10,this.box09,this.box12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.3,-39.3,871,537.5);


// stage content:



(lib.L2_01_vocabulary_Canvas = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAOIgxAAIApgZIgQgwIAoAgIAmgdIgSAtIAqAZIgzAAIgNAug");
	this.shape.setTransform(58.2,92.2,1.585,1.585,0,0,0,-0.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F04D3F").s().p("Ag9CwQgYgDgWgNQgtgdgFg6QgGg6Akg0QAOgUAQgPQAcgZAkgMQA3gSAtAbQAtAcAGA6QAGA5gkA2IgNAOQgLAKgOAIIAAABQgPAJgTAGQg4ASgsgcIgIgFIgJgIIAJAIIANALQAtAcA3gTIAUgHIAOgIIAEgBQAzgiATg2QAWg/ggg2Qghg2hDgIQhCgJhUA1IglgvQBgg3BgANQBiAOAgBRQAgBRgjBJQgkBKhPAaQgeAKgaAAQgVAAgUgFg");
	this.shape_1.setTransform(60.4,89.2);

	this.text = new cjs.Text("Look and say.", "24px 'Arial Rounded MT Bold'", "#333333");
	this.text.lineHeight = 26;
	this.text.setTransform(84.8,75.3);

	// 图层 3
	this.answerBtn = new lib.anwerall();
	this.answerBtn.setTransform(395.4,88.8,1,1,0,0,0,44,11.5);

	this.startBtn = new lib.按钮状态();
	this.startBtn.setTransform(956.9,606.9,0.99,0.99,0,0,0,26.8,41.3);

	// 题板
	this.instance = new lib.Timu();
	this.instance.setTransform(1232.3,272.2,1,1,0,0,0,122.9,120.1);

	this.boxGroup = new lib.所有题板();
	this.boxGroup.setTransform(459.3,379.3,0.99,0.99,0,0,0,367.6,225.5);

	this.addChild(this.boxGroup,this.instance,this.startBtn,this.answerBtn,this.text,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(555.4,455.1,1245.8,579.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
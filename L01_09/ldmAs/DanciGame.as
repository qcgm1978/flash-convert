package ldmAs
{
	import flash.display.InteractiveObject;
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.media.Sound;
	import flash.media.SoundChannel;
	import flash.utils.getDefinitionByName;
	import com.greensock.TweenLite;
	import com.greensock.easing.Back;
	import com.greensock.easing.Linear;
	import com.effect.CardEffect;
	import flash.geom.Point;
	import flash.filters.GlowFilter;
	import flash.filters.BitmapFilterQuality;

	/**
	 * ...
	 * @author 厉得明
	 */
	public class DanciGame extends Sprite
	{
		private var currentPage:int = 1;
		private var pageNum:int = 5;//每页的数量
		private var maxPage:int;
		private var pageIndex:int;
		private var tempPageIndex:int;
		private var myPrevBtn:InteractiveObject;
		private var myNextBtn:InteractiveObject;
		private var mySoundChannel:SoundChannel;
		private var currentSoundBtn:MovieClip;
		private var list:Array;
		private var curItem:MovieClip;
		private var frameArr:Array;
		private var effect:MovieClip;
		private var filter:GlowFilter;


		public function DanciGame()
		{
			frameArr=new Array();
			init();
		}
		private function init():void
		{
			initFrameArr();
			myPrevBtn = this["prevBtn"] as InteractiveObject;
			myNextBtn = this["nextBtn"] as InteractiveObject;
			var myBoxGroup:MovieClip = this["boxGroup"] as MovieClip;
			myBoxGroup.mouseEnabled = false;
			pageNum = myBoxGroup.numChildren / 2;//每页个数
			var myBox:MovieClip = myBoxGroup.getChildAt(0) as MovieClip;
			maxPage = Math.ceil(myBox.totalFrames / pageNum);//页数
			
			effect=new CardEffect();
			addChild(effect);
			effect.visible=false;
			effect.gotoAndStop(1);
			
			filter= new GlowFilter(0xFFD528);
            filter.blurX = 2;
            filter.blurY = 2;
            filter.strength = 255;
            filter.quality = BitmapFilterQuality.MEDIUM;
            filter.knockout = false;

			list = [];
			var i:int;
			var it0:MovieClip,it1:MovieClip;
			var startFrame:int;
			startFrame = (currentPage - 1) * pageNum + 1;
			for (i= 0; i < pageNum; i++)
			{
				it0 = myBoxGroup["item" + i + "0"];
				it1 = myBoxGroup["item" + i + "1"];
				it0["zhedang"].mouseEnabled=false;
				it1["zhedang"].mouseEnabled=false;
				it0.oldx = it0.x;
				it0.oldy = it0.y;
				it1.oldx = it1.x;
				it1.oldy = it1.y;
				list.push([it0,it1]);
			}

			initItems();
			(myPrevBtn as MovieClip).gotoAndStop(3);
			(myPrevBtn as MovieClip).buttonMode=true;
			(myNextBtn as MovieClip).buttonMode=true;
			
			myBoxGroup.addEventListener(MouseEvent.CLICK, panelClickHandler);
			myPrevBtn.addEventListener(MouseEvent.CLICK, prevPageHandler);
			myNextBtn.addEventListener(MouseEvent.CLICK, nextPageHandler);
		}
		private function initFrameArr():void
		{
			var myBoxGroup:MovieClip = this["boxGroup"] as MovieClip;
			var myBox:MovieClip = myBoxGroup.getChildAt(0) as MovieClip;
			var num:int = myBox.totalFrames;
			var i:int;
			for (i= 1; i <= num; i++)
			{
				frameArr.push(i);
			}
		}
		private function initItems():void
		{
			var startFrame:int;
			startFrame = (currentPage - 1) * pageNum;
			var arr1:Array = frameArr.slice(startFrame,startFrame + pageNum);
			var arr2:Array = arr1.slice();
			arr1 = randomArr5(arr1);
			arr2 = randomArr5(arr2);
			var i:int;
			for (i= 0; i < pageNum; i++)
			{
				list[i][0]["zhedang"].visible=false;
				list[i][1]["zhedang"].visible=false;
				list[i][0].gotoAndStop(arr1[i]);
				list[i][1].gotoAndStop(arr2[i]);
				list[i][0].x = list[i][0].oldx;
				list[i][0].y = list[i][0].oldy;
				list[i][1].x = list[i][1].oldx;
				list[i][1].y = list[i][1].oldy;
			}
		}
		private function randomArr5(arr:Array):Array
		{
			var outputArr:Array = arr.slice();
			outputArr.sort(function():int{return Math.random()>.5?1:-1});
			return outputArr;
		}
		private function panelClickHandler(e:MouseEvent):void
		{
			var tname:String = e.target.name;
			tname = tname.substr(0,2);
			if (tname=="it")
			{
				if (curItem)
				{
					curItem.filters=[];
					var num:String = e.target.name.substr(-1,1);
					if (curItem!=e.target && curItem.currentFrame==e.target.currentFrame)
					{
						if (num=="1")
						{
							TweenLite.to(e.target, 0.3, {x:curItem.x+103,y:curItem.y,ease:Linear.easeOut,onComplete:onComplete, onCompleteParams:[e.target,curItem]});
						}
						else
						{
							TweenLite.to(curItem, 0.3, {x:e.target.x+103,y:e.target.y,ease:Linear.easeOut,onComplete:onComplete, onCompleteParams:[curItem,e.target]});
						}
					}
				}
				curItem = e.target as MovieClip;
				curItem.filters=[filter];
			}
			else if (tname=="so")
			{
				var myClickSoundBtn:MovieClip = e.target as MovieClip;
				var frameId:int = (myClickSoundBtn.parent as MovieClip).currentFrame;
				currentSoundBtn = myClickSoundBtn;
				soundBtnClickHandler(frameId);
			}
		}
		private function onComplete(item:MovieClip,item2:MovieClip):void
		{
			currentSoundBtn = item["soundBtn"];
			soundBtnClickHandler(item.currentFrame);
			item["zhedang"].visible=true;
			item2["zhedang"].visible=true;
			effect.visible=true;
			var pt:Point=new Point(item2.x,item2.y);
			pt=item2.parent.localToGlobal(pt);
			pt=this.globalToLocal(pt);
			effect.x=pt.x+119;
			effect.y=pt.y+55.85;
			effect.card.item0.gotoAndStop(item.currentFrame);
			effect.card.item1.gotoAndStop(item.currentFrame);
			effect.gotoAndPlay(1);
			effect.addFrameScript(effect.totalFrames - 1, onFrameEnd);
			curItem.filters=[];
		}
		private function onFrameEnd():void 
        {
             effect.visible=false;
			 effect.gotoAndStop(1);
        }

		private function prevPageHandler(evt:MouseEvent):void
		{
			stopSound();
			(myNextBtn  as MovieClip).gotoAndStop(1);
			
			if (currentPage <= 1)
			{
				(myPrevBtn as MovieClip).gotoAndStop(3);
				currentPage=1;				
			}
			else if(currentPage==2)
			{
				currentPage--;
				(myPrevBtn as MovieClip).gotoAndStop(3);
				initItems();
			}
			else
			{
				currentPage--;				
				initItems();
			}
			
			/*
			var frameId:int = pageIndex * (currentPage-2)+1;
			var myBoxGroup:MovieClip = this["boxGroup"] as MovieClip;
			for (var i:int = 0; i < myBoxGroup.numChildren; i++) {
			var myBox:MovieClip = myBoxGroup.getChildAt(i) as MovieClip;
			myBox.gotoAndStop(frameId + i);
			var myTxtMask:MovieClip = myBox.getChildByName("txtMask") as MovieClip;
			myTxtMask.gotoAndStop(1);
			if(currentPage == maxPage&&i>=tempPageIndex)myBox.visible = true;
			}*/

		}
		private function nextPageHandler(evt:MouseEvent):void
		{
			stopSound();
			(myPrevBtn as MovieClip).gotoAndStop(1);			
			if (currentPage>=maxPage)
			{
				currentPage=maxPage;
				(myNextBtn  as MovieClip).gotoAndStop(3);
			}			
			else if(currentPage==maxPage-1)
			{
				currentPage++;
				(myNextBtn  as MovieClip).gotoAndStop(3);
				initItems();
			}
			else
			{
				currentPage++;
				initItems();
			}
			/*var myBoxGroup:MovieClip = this["boxGroup"] as MovieClip;
			for (var i:int = 0; i < myBoxGroup.numChildren; i++) {
			var myBox:MovieClip = myBoxGroup.getChildAt(i) as MovieClip;
			myBox.gotoAndStop(frameId + i);
			var myTxtMask:MovieClip = myBox.getChildByName("txtMask") as MovieClip;
			myTxtMask.gotoAndStop(1);
			if (currentPage==maxPage&&i >= tempPageIndex) myBox.visible = false;
			}*/

		}
		private function soundBtnClickHandler(frameId:int):void
		{
			stopSound();
			
			var soundId:String = frameId < 10?String("Sound0" + frameId):String("Sound" + frameId);
			var SoundClass:Class = getDefinitionByName(soundId) as Class;
			var mySound:Sound = new SoundClass() as Sound;
			
			currentSoundBtn.gotoAndStop(2);
			mySoundChannel = mySound.play();
			mySoundChannel.addEventListener(Event.SOUND_COMPLETE, soundCompleteHandler);
		}
		private function txtMaskClickHandler(evt:MouseEvent):void
		{
			var myClickTxtmask:MovieClip = evt.target as MovieClip;
			if (myClickTxtmask.currentFrame == 1)
			{
				myClickTxtmask.gotoAndStop(2);
			}
			else
			{
				myClickTxtmask.gotoAndStop(1);
			}
		}
		private function stopSound():void
		{
			if (currentSoundBtn)
			{
				currentSoundBtn.gotoAndStop(1);
			}
			if (mySoundChannel)
			{
				mySoundChannel.stop();
				mySoundChannel.removeEventListener(Event.SOUND_COMPLETE, soundCompleteHandler);
			}
		}
		private function soundCompleteHandler(evt:Event):void
		{
			currentSoundBtn.gotoAndStop(1);
			mySoundChannel.removeEventListener(Event.SOUND_COMPLETE, soundCompleteHandler);
		}
	}

}
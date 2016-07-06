//created by Heitara
var folderURI = fl.browseForFolderURL('Select folder where all images should be exported as *.PNG');

var doc = fl.getDocumentDOM();
var newDoc = fl.createDocument();
//fl.outputPanel.trace("Init");

if (doc && newDoc) {
	fl.outputPanel.trace("Start");
	var library = doc.library;
	var allLibItems = library.items;
	var item;
	var c = 0;
	var selectedItemOnStage;
	var selectionArray;
	
	var itemName;
	
	function loopItems() {
		for (var i = 0; i < allLibItems.length; ++i) {
			item = allLibItems[i]; //only images will be processed
			if (item.itemType == "bitmap") //|| item.itemType == "graphic")
			{
				// attach image
				newDoc.addItem({
					x: 0.0,
					y: 0.0
				}, item);

				//postition all items on (0,0)
				var image = newDoc.getTimeline().layers[0].frames[0].elements[0];
				if (image) {

					var hpx = image.hPixels;
					var vpx = image.vPixels;

					newDoc.width = hpx;
					newDoc.height = vpx;
					// we need to reposition the image, otherwise it will be centered
					image.x = 0;

					image.y = 0;
				}

				itemName = item.name.split('.')[0];
				//export as png
				newDoc.exportPNG(folderURI + "/" + itemName + ".png", true, true);
				//select all
				newDoc.selectAll();
				//remove selection
				newDoc.deleteSelection();
				//deselect everything
				newDoc.selectNone();
				//output.trace("[END]");

			}
			if (item.itemType == "folder"){
				console.log('folder');
			}

		}
	}
	loopItems();
}

//close the new document withut saving it
fl.closeDocument(newDoc, false);
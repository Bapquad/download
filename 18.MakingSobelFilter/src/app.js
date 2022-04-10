import {Carem, Tick, UnTick} from '@bapquad/carem'

// Create new a asset manager
let aMgr;

function view() 
{
	// Create new layer
	let layer = new Carem.Layer("drawing");

	// Set the layer background
	layer.SetBackground(200, 225, 255, 100); 

	// Create new image symbol
	let myImage = new Carem.SymbolImage(aMgr.GetAsset("tree.jpg"), layer);
	myImage.SetOrgin(50, 50);
	myImage.SetPosition(320/2, 480/2);
	myImage.SetFilter(function(px) {
		px = Carem.Filter.GrayScale(px);
		let vertical = Carem.Filter.ConvoluteFloat32(px, [-1,-2,-1, 0, 0, 0, 1, 2, 1]);
		let horizontal = Carem.Filter.ConvoluteFloat32(px, [-1,0,1, -2,0,2, -1,0,1]);
		let id = Carem.Filter.CreateImageData(vertical.width, vertical.height);
		for (var i=0; i<id.data.length; i+=4) {
			var v = Math.abs(vertical.data[i]);
			id.data[i] = v;
			var h = Math.abs(horizontal.data[i]);
			id.data[i+1] = h
			id.data[i+2] = (v+h)/4;
			id.data[i+3] = 255;
		}
		return id;
	});
	
	// Render the layer
	layer.Swap();
}

function loading() 
{
	if(aMgr.IsComplete()) 
	{
		UnTick(tickID);
		view();
	}
	else 
	{
		tickID = Tick(loading);
	}
}

function init() 
{
	aMgr = new Carem.AssetManager("jpg|gif|png");
	aMgr.QueueFile("tree.jpg");
	aMgr.QueueDownloadAll();
	return loading();
} 

let tickID = init();
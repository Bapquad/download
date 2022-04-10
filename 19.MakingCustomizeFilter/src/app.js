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
	myImage.SetFilter(Carem.Filter.Convolute, [-1,-1,-1, 0, 0, 0, 1, 1, 1], true);
	
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
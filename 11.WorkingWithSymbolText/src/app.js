import {Carem, Tick, UnTick} from '@bapquad/carem'

let aMgr;

function view() 
{
	// Create new layer
	let layer = new Carem.Layer("drawing");

	// Set the layer background
	layer.SetBackground(200, 225, 255, 100); 
	
	// Create new text symbol
	let myText = new Carem.SymbolText(layer);
	myText.SetFont("vastshadow.woff2");
	myText.SetSize(48);
	myText.SetBackground([{r:0, g:0, b:0, a:1, stop:0}]);
	myText.SetAlign("center");
	myText.AddText("Hello", 320/2, 480/2);
	
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
		return Tick(loading);
	}
}

function init() 
{
	aMgr = new Carem.AssetManager("jpg", "mp3", "woff2");
	aMgr.QueueFile("vastshadow.woff2");
	aMgr.QueueDownloadAll();
	return loading();
} 

let tickID = init();
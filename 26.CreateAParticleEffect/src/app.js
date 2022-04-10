import {Carem, Tick, UnTick} from '@bapquad/carem'
import Bubble from './bubble'

let aMgr;
let scene;

function gaming() 
{
	scene.Swap();
	return Tick(gaming);
}

function start() 
{
	UnTick(tickID);
	scene = new Carem.Layer("drawing");
	scene.SetBackground(0, 0, 255, 100);
	let bubble = new Bubble(aMgr.GetAsset("bubble.png"), 30, scene);
	return Tick(gaming);
}

function loading() 
{
	if(aMgr.IsComplete()) 
	{
		return start();
	}
	return Tick(loading);
}

function init() 
{
	aMgr = new Carem.AssetManager("png");
	aMgr.QueueFile("bubble.png"); 
	aMgr.QueueDownloadAll(); 
	return loading();
}

let tickID = init();
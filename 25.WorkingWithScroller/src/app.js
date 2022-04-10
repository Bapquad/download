import {Carem, Tick, UnTick} from '@bapquad/carem'
import Earth from './earth'

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
	scene.SetBackground(184, 239, 255, 100);
	let earth = new Earth(aMgr.GetAsset("earth.png"), scene);
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
	aMgr.QueueFile("earth.png"); 
	aMgr.QueueDownloadAll(); 
	return loading();
}

let tickID = init();
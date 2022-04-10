import {Carem, Tick, UnTick} from '@bapquad/carem'
import Fish from './fish'

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
	let fish = new Fish(aMgr.GetAsset("fish.png"), scene);
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
	aMgr.QueueFile("fish.png"); 
	aMgr.QueueDownloadAll(); 
	return loading();
}

let tickID = init();
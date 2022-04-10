import {Carem, Tick, UnTick} from '@bapquad/carem'
import Tree from './tree'

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
	let tree = new Tree(aMgr.GetAsset("tree.png"), scene);
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
	aMgr.QueueFile("tree.png"); 
	aMgr.QueueDownloadAll(); 
	return loading();
}

let tickID = init();
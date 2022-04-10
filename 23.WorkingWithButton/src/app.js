import {Carem, Tick, UnTick} from '@bapquad/carem'
import StartGameButton from './startgame'
import HowToPlayButton from './howtoplay'
import SettingsButton from './settings'

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
	let startGame = new StartGameButton(aMgr.GetAsset("buttons.png"), scene);
	let howToPlay = new HowToPlayButton(aMgr.GetAsset("buttons.png"), scene);
	let settings = new SettingsButton(aMgr.GetAsset("buttons.png"), scene);
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
	aMgr.QueueFile("buttons.png"); 
	aMgr.QueueDownloadAll(); 
	return loading();
}

let tickID = init();
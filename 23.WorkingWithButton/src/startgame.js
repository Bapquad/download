import {Carem} from '@bapquad/carem'

export default class StartGameButton 
{
	constructor(asset, scene) 
	{
		let btn = new Carem.Button(asset, 0, 0, 180, 30, scene);
		btn.SetImagePositionY(-0);
		btn.SetOrgin(90, 15);
		btn.SetPosition(320/2, 480/2-50);
		btn.onMouseUp(()=>this.mouseRelease());
	}
	
	mouseRelease() 
	{
		console.log("Start the game");
	}
}
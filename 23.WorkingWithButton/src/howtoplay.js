import {Carem} from '@bapquad/carem'

export default class HowToPlayButton 
{
	constructor(asset, scene) 
	{
		let btn = new Carem.Button(asset, 0, 30, 180, 30, scene);
		btn.SetImagePositionY(-30);
		btn.SetOrgin(90, 15);
		btn.SetPosition(320/2, 480/2);
		btn.onMouseDown(()=>this.mouseDown());
	}
	
	mouseDown() 
	{
		console.log("How to play");
	}
}
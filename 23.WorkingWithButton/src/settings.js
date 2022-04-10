import {Carem} from '@bapquad/carem'

export default class SettingsButton 
{
	constructor(asset, scene) 
	{
		let btn = new Carem.Button(asset, 0, 60, 180, 30, scene);
		btn.SetImagePositionY(-60);
		btn.SetOrgin(90, 15);
		btn.SetPosition(320/2, 480/2+50);
		btn.onMouseMove(()=>this.mouseMove());
	}
	
	mouseMove() 
	{
		console.log("Mouse moving");
	}
}
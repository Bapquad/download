import {Carem} from '@bapquad/carem'

export default class Fish 
{
	constructor(asset, scene) 
	{
		let fish = new Carem.StaticSprite(asset, 0, 0, 201, 120, scene);
		fish.SetOrgin(100, 50);
		fish.SetScale(0.5, 0.5);
		fish.SetPosition(320/2, 0);
		fish.HorizontalFlip();
		fish.SetGravity(2.0);
		fish.EnableGravity();
	}
}
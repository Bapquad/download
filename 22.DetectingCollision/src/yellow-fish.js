import {Carem, CAREM_LIMIT_BOTTOM} from '@bapquad/carem'

export default class YellowFish 
{
	constructor(asset, scene) 
	{
		let fish = new Carem.StaticSprite(asset, 0, 0, 180, 115, scene);
		fish.SetCollisionBound(0, 0, 90, 58); 
		fish.SetOrgin(180/2, 115/2);
		fish.SetScale(0.5, 0.5);
		fish.SetPosition(320/2, 480/2);
		fish.HorizontalFlip();
		this.source = fish;
	}
}
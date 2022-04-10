import {Carem} from '@bapquad/carem'

export default class Fish 
{
	constructor(asset, scene) 
	{
		this.actions = [0, 1];
		let fish = new Carem.AnimeSprite(asset, 198, 114, scene);
		fish.SetOrgin(198/2, 114/2);
		fish.SetScale(0.5, 0.5);
		fish.SetPosition(320/2, 480/2);
		fish.SetAction(this.actions[1]);
	}
}
import {Carem, CAREM_FLIP_HORIZONTAL} from '@bapquad/carem'

export default class Earth 
{
	constructor(asset, scene) 
	{
		let earth = new Carem.Scroller(asset, scene);
		earth.SetVelocity(0.25);
		earth.SetOrgin(320/2, 180);
		earth.SetPosition(320/2, 480);
		earth.SetFlip(CAREM_FLIP_HORIZONTAL);
	}
}
import {Carem} from '@bapquad/carem'

export default class Bubble 
{
	constructor(asset, density, scene) 
	{
		let bubble = new Carem.Particle(asset, density, scene);
		bubble.SetAlphaBase(0.5);
		bubble.SetScaleBase(0.7);
		bubble.SetLifeTime(10000, 50);
		bubble.SetPositionRandom(0, 320, 480, 500);
		bubble.SetAngularSpeed(0);
		bubble.SetWorldLimit(-10, -10, 360, 480);
		bubble.SetEmittion(true);
		bubble.GenParticle();
	}
}
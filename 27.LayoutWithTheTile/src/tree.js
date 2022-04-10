import {Carem} from '@bapquad/carem'

export default class Tree
{
	constructor(asset, scene) 
	{
		let tree = new Carem.Tile(scene);
		tree.SetOrgin(0, 128);
		tree.SetScale(0.5, 0.5);
		tree.AddCell(asset, 0, 0);
		tree.AddCell(asset, 320, 0);
		tree.AddCell(asset, 640, 0);
		tree.SetPosition(320, 480);
		tree.SetLinearVelocityX(-1.0);
	}
}
import {Carem} from '@bapquad/carem'

// Create new layer
let layer = new Carem.Layer("drawing");

// Set the layer background
layer.SetBackground(200, 225, 255, 100); 

// Create new rounded rectangle symbol
let myRound = new Carem.SymbolRoundRect(layer);
myRound.SetRadius(10);
myRound.SetSize(100, 50);
myRound.SetStrokeColor([{r:0, g:0, b:0, a:100, stop: 0}]);
myRound.SetOrgin(50, 25);
myRound.SetPosition(320/2, 480/2);

// Render the layer
layer.Swap();
import {Carem} from '@bapquad/carem'

// Create new layer
let layer = new Carem.Layer("drawing");

// Set the layer background
layer.SetBackground(200, 225, 255, 100);

// Create new a circle symbol
let myCircle = new Carem.SymbolCircle(layer);
myCircle.SetDistance(100);
myCircle.SetStrokeColor([{r:0, g:0, b:0, a:1, stop:0}]);
myCircle.SetOrgin(50, 50);
myCircle.SetPosition(320/2, 480/2);

// Swap your drawing
layer.Swap();
import {Carem} from '@bapquad/carem'

// Create new layer
let layer = new Carem.Layer("drawing");

// Set the layer background
layer.SetBackground(200, 225, 255, 100); 

// Create new rectangle symbol
let myRect = new Carem.SymbolRect(layer);
myRect.SetSize(100, 50);
myRect.SetStrokeColor([{r:0, g:0, b:0, a:100, stop: 0}]);
myRect.SetOrgin(50, 25);
myRect.SetPosition(320/2, 480/2);

// Render the layer
layer.Swap();
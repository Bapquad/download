import {Carem} from '@bapquad/carem'

// Create new layer
let layer = new Carem.Layer("drawing");

// Set the layer background
layer.SetBackground(200, 225, 255, 100); 

// Create new polygon symbol
let myPolygon = new Carem.SymbolPolygon(layer);
myPolygon.SetSide(6);
myPolygon.SetSize(100, 100);
myPolygon.SetStrokeColor([{r:0, g:0, b:0, a:100, stop: 0}]);
myPolygon.SetOrgin(50, 50);
myPolygon.SetPosition(320/2, 480/2);

// Render the layer
layer.Swap();
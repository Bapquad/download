import {Carem} from '@bapquad/carem'

// Create new layer
let layer = new Carem.Layer("drawing");

// Set the layer background
layer.SetBackground(200, 225, 255, 100); 

// Create new shape symbol
let myShape = new Carem.SymbolShape(layer);
myShape.StartPoint(5, 5);
myShape.AddPoint(100, 20, 20, 50, 100, 50);
myShape.AddPoint(30, 30, 100, -10, 20, -10);
myShape.SetStrokeColor([{r:0, g:0, b:0, a:1, stop:0}]);
myShape.SetOrgin(50, 20);
myShape.SetPosition(320/2, 480/2);

// Render the layer
layer.Swap();
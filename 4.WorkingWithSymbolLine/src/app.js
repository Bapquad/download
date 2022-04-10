import {Carem} from '@bapquad/carem'

// Create new layer
let layer = new Carem.Layer("drawing");

// Set the layer background
layer.SetBackground(200, 225, 255, 100); 

// Create new line symbol
let myLine = new Carem.SymbolLine(layer);
myLine.SetStartPoint(0, 0);
myLine.SetEndPoint(0, 100);
myLine.SetStrokeColor([{r:0, g:0, b:0, a:1, stop:0}]);
myLine.SetOrgin(0, 50);
myLine.SetPosition(320/2, 480/2);

// Render the layer
layer.Swap();
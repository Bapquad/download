import {Carem} from '@bapquad/carem'

// Create new layer
let layer = new Carem.Layer("drawing");

// Set the layer background
layer.SetBackground(200, 225, 255, 100); 

// Create new oval symbol
let myOval = new Carem.SymbolOval(layer);
myOval.SetSize(80, 100);
myOval.SetStrokeColor([{r:0, g:0, b:0, a:1, stop:0}]);
myOval.SetOrgin(40, 50);
myOval.SetPosition(320/2, 480/2);

// Render the layer
layer.Swap();
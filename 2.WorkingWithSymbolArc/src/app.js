import {Carem} from '@bapquad/carem'

// Create new layer
let layer = new Carem.Layer("drawing");

// Set the layer background
layer.SetBackground(200, 225, 255, 100);

// Create new symbol arc
let myArc = new Carem.SymbolArc(layer);
myArc.SetStrokeColor([{r:0, g:0, b:0, a:1, stop:0}]);
myArc.SetSize(100, 100);
myArc.SetSlice(0, 90);
myArc.SetOrgin(50, 50);
myArc.SetPosition(320/2, 480/2);

// Swap your drawing
layer.Swap();
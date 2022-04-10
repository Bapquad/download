import {Carem} from '@bapquad/carem'

// Create new layer
let layer = new Carem.Layer("drawing");

// Set the layer background
layer.SetBackground(0, 0, 255, 100);

let text = new Carem.SymbolText();
text.AddText("Hello World", 320/2, 480/2);
text.SetBackground([{r:255, g:255, b:255, a:1, stop:0}]);
text.SetSize(48);
text.SetAlign("center");
text.SetFont("Times New Roman");
layer.Add(text);

// Swap your drawing
layer.Swap();
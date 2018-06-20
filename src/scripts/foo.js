/* var sideEffectNode = document.createElement("div");
sideEffectNode.textContent = "dd";
document.body.appendChild(sideEffectNode);

// Remove the most recently-added <div> so that when the code runs again and
// adds a new <div>, we don't end up with duplicate divs.
if (module.hot) {
  module.hot.dispose(function() {
    sideEffectNode.parentNode.removeChild(sideEffectNode);
  });
} */
let foo = {cosa: '1'}

export default foo;
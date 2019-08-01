import { h, diff, patch } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';


// sets up the initial state of the app
function app (initModel, update, view, node) {
    let model = initModel;
    let currentView = view(dispatch, model);
    let rootNode = createElement(currentView);
    node.appendChild(rootNode);

    // updates the view based on DOM interaction
    function dispatch(msg) {
        model = update(msg, model);
        const updatedView = view(dispatch, model);
        const patches = diff(currentView, updatedView);
        rootNode = patch(rootNode, patches);
        currentView = updatedView;
    }
}

export default app;
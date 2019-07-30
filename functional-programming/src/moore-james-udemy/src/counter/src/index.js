import h from 'hyperscript';
import hh from 'hyperscript-helpers';

const { div, button } = hh(h);

const initModel = 0;

function view(dispatch, model) {
        return div([
            div({ className: 'mv2' },`Count: ${model}`),
            button({ className: 'pv1 ph2 mr2',
                onclick: () => dispatch(msgs.add) },'+'),
            button({ className: 'pv1 ps2',
                onclick: () => dispatch(msgs.subtract) }, '-'),
        ]);
}

const msgs = {
    add: 'ADD',
    subtract: 'SUBTRACT'
}

function update(msg, model) {
    switch (msg) {
        case msgs.add:
            return model + 1;
        case msgs.subtract:
            return model - 1;
        default:
            return model;
    }
}

// impure code below

function app(initModel, update, view, node){
    let model = initModel;
    let currentView = view(dispatch, model);
    node.appendChild(currentView);

    // handles update sequence on app interaction
    function dispatch(msg){
        model = update(msg, model);
        const updatedView = view(dispatch, model);
        node.replaceChild(updatedView, currentView);
        currentView = updatedView;
    }
}


const rootNode = document.getElementById('app');

app(initModel, update, view, rootNode);

// rootNode.appendChild(view(update('plus', initModel)));
let fields = [];

let currentShape = "cross";

function fillshape(id) {
    if (currentShape == 'cross') {
        currentShape = 'circle'
    } else {

        currentShape = 'cross'

    }

    fields[id] = currentShape;
}
let dragImage = null;

const DRAG_IMG_WIDTH = 16;

exports.DRAG_IMG_WIDTH = DRAG_IMG_WIDTH;

exports.getDragImage = function () {
    if (!dragImage) {
        dragImage = new Image();
        dragImage.src = require('url?mimetype=image/png!./bubbles.png');
    }

    return dragImage;
};
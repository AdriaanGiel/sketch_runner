"use strict";
class Bug extends GameObject {
    constructor(game, x, y) {
        super(game, x, y);
    }
}
customElements.define('bug-object', Bug);

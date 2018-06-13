"use strict";
class Cat extends GameObject {
    constructor(game, x, y) {
        super(game, x, y);
    }
}
customElements.define('cat-object', Cat);

// InputComponent.js

class InputComponent {
    constructor() {
        this.keys = {}; // Object to store the state of each key (pressed or not)
        this.mouse = { x: 0, y: 0 }; // Object to store the mouse position
        this.mouseDown = false; // Flag to track if the mouse button is currently down
    }

    // Method to update the state of a key
    updateKey(key, isPressed) {
        this.keys[key] = isPressed;
    }

    // Method to update the mouse position
    updateMousePosition(x, y) {
        this.mouse.x = x;
        this.mouse.y = y;
    }

    // Method to update the state of the mouse button
    updateMouseDown(isDown) {
        this.mouseDown = isDown;
    }
}

export default InputComponent;

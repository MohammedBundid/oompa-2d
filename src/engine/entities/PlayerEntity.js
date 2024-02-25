// PlayerEntity.js
import VectorComponent from "../components/VectorComponent";
import SpriteComponent from "../components/SpriteComponent";
import InputComponent from "../components/InputComponent";


class PlayerEntity {
    constructor({ x, y, sprite, speed }) {
        this.vector = new VectorComponent({ x, y, velocityX: 0, velocityY: 0 });
        this.sprite = new SpriteComponent({ x, y, sprite, speed });
        this.input = new InputComponent();
    }
}

export default PlayerEntity;
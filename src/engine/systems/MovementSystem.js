// MovementSystem.js
class MovementSystem {
    update(entity) {
        if (entity.vector) {
            entity.vector.x += entity.vector.velocityX; // Update the x position based on velocity
            entity.vector.y += entity.vector.velocityY; // Update the y position based on velocity
        }
    }
}

export default MovementSystem;
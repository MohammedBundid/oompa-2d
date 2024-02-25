// RenderSystem.js
class RenderSystem {
    constructor(ctx) {
        this.ctx = ctx;
    }

    render(entity) {
        if (entity.vector) {
            this.ctx.fillStyle = 'red'; // Set the fill color
            this.ctx.fillRect(entity.vector.x, entity.vector.y, 50, 50); // Render a simple rectangle
        }
    }
}

export default RenderSystem;
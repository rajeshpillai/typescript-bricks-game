// The game is composed of actors
class Entity {
  // A position
  x: number = 0
  y: number = 0
  px: number = 0
  py: number = 0

  // Dimensions
  width: number = 0
  height: number = 0

  // A velocity: speed with direction
  xVelocity: number = 0;
  yVelocity: number = 0;

  // On each update, we apply the velocity to the current position.
  // This makes the entity move.
  // Entities are expected to override this method
  update() {
    this.px = this.x;  // prev values
    this.py = this.y;

    this.x += this.xVelocity;
    this.y += this.yVelocity;
  }

  draw() {

  }

  // The actor  knows how to draw itself.
  // All actors of our game will be white rectangles.

  // Basic bounding box collison detection.
  // Returns 'true' if the actor intersect with another one
  intersect(other) {
    if (other == undefined) return false;
    return this.y + this.height > other.y &&
      this.y < other.y + other.height &&
      this.x + this.width > other.x &&
      this.x < other.x + other.width;
  }
}

export default Entity;

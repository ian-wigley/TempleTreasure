import { Vector2 } from "./vector2.js";
export class RectangleExtensions {
    static GetIntersectionDepth(rectA, rectB) {
        var halfWidthA = rectA.Width / 2.0;
        var halfHeightA = rectA.Height / 2.0;
        var halfWidthB = rectB.Width / 2.0;
        var halfHeightB = rectB.Height / 2.0;
        var centerA = new Vector2(rectA.Left + halfWidthA, rectA.Top + halfHeightA);
        var centerB = new Vector2(rectB.Left + halfWidthB, rectB.Top + halfHeightB);
        var distanceX = centerA.X - centerB.X;
        var distanceY = centerA.Y - centerB.Y;
        var minDistanceX = halfWidthA + halfWidthB;
        var minDistanceY = halfHeightA + halfHeightB;
        if (Math.abs(distanceX) >= minDistanceX || Math.abs(distanceY) >= minDistanceY)
            return Vector2.Zero;
        var depthX = distanceX > 0 ? minDistanceX - distanceX : -minDistanceX - distanceX;
        var depthY = distanceY > 0 ? minDistanceY - distanceY : -minDistanceY - distanceY;
        return new Vector2(depthX, depthY);
    }
    static GetBottomCenter(rect) {
        return new Vector2(rect.X + rect.Width / 2.0, rect.Bottom);
    }
}
//# sourceMappingURL=rectangleextensions.js.map
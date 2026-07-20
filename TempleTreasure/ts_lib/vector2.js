export class Vector2 {
    static Zero = new Vector2(0, 0);
    m_x;
    m_y;
    constructor(x, y) {
        this.m_x = x;
        this.m_y = y;
    }
    get X() {
        return this.m_x;
    }
    set X(value) {
        this.m_x = value;
    }
    get Y() {
        return this.m_y;
    }
    set Y(value) {
        this.m_y = value;
    }
    get Zero() {
        return new Vector2(0, 0);
    }
    LengthSquared() {
        return (this.m_x * this.m_x) + (this.m_y * this.m_y);
    }
}
//# sourceMappingURL=vector2.js.map
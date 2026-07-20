export class Quaternion {
    x;
    y;
    z;
    w;
    get X() {
        return this.x;
    }
    set X(value) {
        this.x = value;
    }
    get Y() {
        return this.y;
    }
    set Y(value) {
        this.y = value;
    }
    get Z() {
        return this.z;
    }
    set Z(value) {
        this.z = value;
    }
    get W() {
        return this.w;
    }
    set W(value) {
        this.w = value;
    }
    constructor(x, y, z, w) {
        this.X = x;
        this.Y = y;
        this.Z = z;
        this.W = w;
    }
    LengthSquared() {
        return (this.X * this.X + this.Y * this.Y + this.Z * this.Z + this.W * this.W);
    }
    Length() {
        return Math.sqrt(this.X * this.X + this.Y * this.Y + this.Z * this.Z + this.W * this.W);
    }
    Normalize() {
        var num = 1 / Math.sqrt(this.X * this.X + this.Y * this.Y + this.Z * this.Z + this.W * this.W);
        this.X *= num;
        this.Y *= num;
        this.Z *= num;
        this.W *= num;
    }
    Conjugate() {
        this.X = -this.X;
        this.Y = -this.Y;
        this.Z = -this.Z;
    }
    static Inverse(quaternion) {
        var num = 1 / (quaternion.X * quaternion.X + quaternion.Y * quaternion.Y + quaternion.Z * quaternion.Z + quaternion.W * quaternion.W);
        var quaternion1;
        quaternion1.X = -quaternion.X * num;
        quaternion1.Y = -quaternion.Y * num;
        quaternion1.Z = -quaternion.Z * num;
        quaternion1.W = quaternion.W * num;
        return quaternion1;
    }
    static CreateFromAxisAngle(axis, angle, result) {
        var num1 = angle * 0.5;
        var num2 = Math.sin(num1);
        var num3 = Math.cos(num1);
        result.X = axis.X * num2;
        result.Y = axis.Y * num2;
        result.Z = axis.Z * num2;
        result.W = num3;
    }
    static CreateFromYawPitchRoll(yaw, pitch, roll) {
        var num1 = roll * 0.5;
        var num2 = Math.sin(num1);
        var num3 = Math.cos(num1);
        var num4 = pitch * 0.5;
        var num5 = Math.sin(num4);
        var num6 = Math.cos(num4);
        var num7 = yaw * 0.5;
        var num8 = Math.sin(num7);
        var num9 = Math.cos(num7);
        var quaternion;
        quaternion.X = (num9 * num5 * num3 + num8 * num6 * num2);
        quaternion.Y = (num8 * num6 * num3 - num9 * num5 * num2);
        quaternion.Z = (num9 * num6 * num2 - num8 * num5 * num3);
        quaternion.W = (num9 * num6 * num3 + num8 * num5 * num2);
        return quaternion;
    }
    static CreateFromRotationMatrix(matrix) {
        var num1 = matrix.M11 + matrix.M22 + matrix.M33;
        var quaternion = new Quaternion();
        if (num1 > 0.0) {
            var num2 = Math.sqrt(num1 + 1.0);
            quaternion.W = num2 * 0.5;
            var num3 = 0.5 / num2;
            quaternion.X = (matrix.M23 - matrix.M32) * num3;
            quaternion.Y = (matrix.M31 - matrix.M13) * num3;
            quaternion.Z = (matrix.M12 - matrix.M21) * num3;
        }
        else if (matrix.M11 >= matrix.M22 && matrix.M11 >= matrix.M33) {
            var num2 = Math.sqrt(1.0 + matrix.M11 - matrix.M22 - matrix.M33);
            var num3 = 0.5 / num2;
            quaternion.X = 0.5 * num2;
            quaternion.Y = (matrix.M12 + matrix.M21) * num3;
            quaternion.Z = (matrix.M13 + matrix.M31) * num3;
            quaternion.W = (matrix.M23 - matrix.M32) * num3;
        }
        else if (matrix.M22 > matrix.M33) {
            var num2 = Math.sqrt(1.0 + matrix.M22 - matrix.M11 - matrix.M33);
            var num3 = 0.5 / num2;
            quaternion.X = (matrix.M21 + matrix.M12) * num3;
            quaternion.Y = 0.5 * num2;
            quaternion.Z = (matrix.M32 + matrix.M23) * num3;
            quaternion.W = (matrix.M31 - matrix.M13) * num3;
        }
        else {
            var num2 = Math.sqrt(1.0 + matrix.M33 - matrix.M11 - matrix.M22);
            var num3 = 0.5 / num2;
            quaternion.X = (matrix.M31 + matrix.M13) * num3;
            quaternion.Y = (matrix.M32 + matrix.M23) * num3;
            quaternion.Z = 0.5 * num2;
            quaternion.W = (matrix.M12 - matrix.M21) * num3;
        }
        return quaternion;
    }
    static Dot(quaternion1, quaternion2) {
        return (quaternion1.X * quaternion2.X + quaternion1.Y * quaternion2.Y + quaternion1.Z * quaternion2.Z + quaternion1.W * quaternion2.W);
    }
    static Slerp(quaternion1, quaternion2, amount) {
        var num1 = amount;
        var num2 = (quaternion1.X * quaternion2.X + quaternion1.Y * quaternion2.Y + quaternion1.Z * quaternion2.Z + quaternion1.W * quaternion2.W);
        var flag = false;
        if (num2 < 0.0) {
            flag = true;
            num2 = -num2;
        }
        var num3;
        var num4;
        if (num2 > 0.999998986721039) {
            num3 = 1 - num1;
            num4 = flag ? -num1 : num1;
        }
        else {
            var num5 = Math.acos(num2);
            var num6 = (1.0 / Math.sin(num5));
            num3 = Math.sin((1.0 - num1) * num5) * num6;
            num4 = flag ? -Math.sin(num1 * num5) * num6 : Math.sin(num1 * num5) * num6;
        }
        var quaternion;
        quaternion.X = (num3 * quaternion1.X + num4 * quaternion2.X);
        quaternion.Y = (num3 * quaternion1.Y + num4 * quaternion2.Y);
        quaternion.Z = (num3 * quaternion1.Z + num4 * quaternion2.Z);
        quaternion.W = (num3 * quaternion1.W + num4 * quaternion2.W);
        return quaternion;
    }
    static Lerp(quaternion1, quaternion2, amount) {
        var num1 = amount;
        var num2 = 1 - num1;
        var quaternion = new Quaternion();
        if (quaternion1.X * quaternion2.X + quaternion1.Y * quaternion2.Y + quaternion1.Z * quaternion2.Z + quaternion1.W * quaternion2.W >= 0.0) {
            quaternion.X = (num2 * quaternion1.X + num1 * quaternion2.X);
            quaternion.Y = (num2 * quaternion1.Y + num1 * quaternion2.Y);
            quaternion.Z = (num2 * quaternion1.Z + num1 * quaternion2.Z);
            quaternion.W = (num2 * quaternion1.W + num1 * quaternion2.W);
        }
        else {
            quaternion.X = (num2 * quaternion1.X - num1 * quaternion2.X);
            quaternion.Y = (num2 * quaternion1.Y - num1 * quaternion2.Y);
            quaternion.Z = (num2 * quaternion1.Z - num1 * quaternion2.Z);
            quaternion.W = (num2 * quaternion1.W - num1 * quaternion2.W);
        }
        var num3 = 1 / Math.sqrt(quaternion.X * quaternion.X + quaternion.Y * quaternion.Y + quaternion.Z * quaternion.Z + quaternion.W * quaternion.W);
        quaternion.X *= num3;
        quaternion.Y *= num3;
        quaternion.Z *= num3;
        quaternion.W *= num3;
        return quaternion;
    }
    static Concatenate(value1, value2) {
        var x1 = value2.X;
        var y1 = value2.Y;
        var z1 = value2.Z;
        var w1 = value2.W;
        var x2 = value1.X;
        var y2 = value1.Y;
        var z2 = value1.Z;
        var w2 = value1.W;
        var num1 = (y1 * z2 - z1 * y2);
        var num2 = (z1 * x2 - x1 * z2);
        var num3 = (x1 * y2 - y1 * x2);
        var num4 = (x1 * x2 + y1 * y2 + z1 * z2);
        var quaternion;
        quaternion.X = (x1 * w2 + x2 * w1) + num1;
        quaternion.Y = (y1 * w2 + y2 * w1) + num2;
        quaternion.Z = (z1 * w2 + z2 * w1) + num3;
        quaternion.W = w1 * w2 - num4;
        return quaternion;
    }
    static Negate(quaternion) {
        var quaternion1;
        quaternion1.X = -quaternion.X;
        quaternion1.Y = -quaternion.Y;
        quaternion1.Z = -quaternion.Z;
        quaternion1.W = -quaternion.W;
        return quaternion1;
    }
    static Add(quaternion1, quaternion2) {
        var quaternion;
        quaternion.X = quaternion1.X + quaternion2.X;
        quaternion.Y = quaternion1.Y + quaternion2.Y;
        quaternion.Z = quaternion1.Z + quaternion2.Z;
        quaternion.W = quaternion1.W + quaternion2.W;
        return quaternion;
    }
    static Subtract(quaternion1, quaternion2) {
        var quaternion;
        quaternion.X = quaternion1.X - quaternion2.X;
        quaternion.Y = quaternion1.Y - quaternion2.Y;
        quaternion.Z = quaternion1.Z - quaternion2.Z;
        quaternion.W = quaternion1.W - quaternion2.W;
        return quaternion;
    }
    static Multiply(quaternion1, quaternion2) {
        var x1 = quaternion1.X;
        var y1 = quaternion1.Y;
        var z1 = quaternion1.Z;
        var w1 = quaternion1.W;
        var x2 = quaternion2.X;
        var y2 = quaternion2.Y;
        var z2 = quaternion2.Z;
        var w2 = quaternion2.W;
        var num1 = (y1 * z2 - z1 * y2);
        var num2 = (z1 * x2 - x1 * z2);
        var num3 = (x1 * y2 - y1 * x2);
        var num4 = (x1 * x2 + y1 * y2 + z1 * z2);
        var quaternion;
        quaternion.X = (x1 * w2 + x2 * w1) + num1;
        quaternion.Y = (y1 * w2 + y2 * w1) + num2;
        quaternion.Z = (z1 * w2 + z2 * w1) + num3;
        quaternion.W = w1 * w2 - num4;
        return quaternion;
    }
    static Divide(quaternion1, quaternion2) {
        var x = quaternion1.X;
        var y = quaternion1.Y;
        var z = quaternion1.Z;
        var w = quaternion1.W;
        var num1 = 1 / (quaternion2.X * quaternion2.X + quaternion2.Y * quaternion2.Y + quaternion2.Z * quaternion2.Z + quaternion2.W * quaternion2.W);
        var num2 = -quaternion2.X * num1;
        var num3 = -quaternion2.Y * num1;
        var num4 = -quaternion2.Z * num1;
        var num5 = quaternion2.W * num1;
        var num6 = (y * num4 - z * num3);
        var num7 = (z * num2 - x * num4);
        var num8 = (x * num3 - y * num2);
        var num9 = (x * num2 + y * num3 + z * num4);
        var quaternion;
        quaternion.X = (x * num5 + num2 * w) + num6;
        quaternion.Y = (y * num5 + num3 * w) + num7;
        quaternion.Z = (z * num5 + num4 * w) + num8;
        quaternion.W = w * num5 - num9;
        return quaternion;
    }
}
//# sourceMappingURL=quaternion.js.map
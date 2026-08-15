// XNA-TS-VSCode/src/boundingBox.ts
var BoundingBox = class {
  static CornerCount = 8;
  // public Min: Vector3;
  // public Max: Vector3;
  // public GetCorners(): Vector3[] {
  //     return [new Vector3(this.Min.X, this.Max.Y, this.Max.Z),
  //         new Vector3(this.Max.X, this.Max.Y, this.Max.Z),
  //         new Vector3(this.Max.X, this.Min.Y, this.Max.Z),
  //         new Vector3(this.Min.X, this.Min.Y, this.Max.Z),
  //         new Vector3(this.Min.X, this.Max.Y, this.Min.Z),
  //         new Vector3(this.Max.X, this.Max.Y, this.Min.Z),
  //         new Vector3(this.Max.X, this.Min.Y, this.Min.Z),
  //         new Vector3(this.Min.X, this.Min.Y, this.Min.Z)];
  // }
  // public GetCorners(corners: Vector3[]): void {
  //     if (corners == null)
  //         throw new ArgumentNullException(nameof(corners));
  //     if (corners.length < 8)
  //         throw new ArgumentOutOfRangeException(nameof(corners), FrameworkResources.NotEnoughCorners);
  //     corners[0].X = this.Min.X;
  //     corners[0].Y = this.Max.Y;
  //     corners[0].Z = this.Max.Z;
  //     corners[1].X = this.Max.X;
  //     corners[1].Y = this.Max.Y;
  //     corners[1].Z = this.Max.Z;
  //     corners[2].X = this.Max.X;
  //     corners[2].Y = this.Min.Y;
  //     corners[2].Z = this.Max.Z;
  //     corners[3].X = this.Min.X;
  //     corners[3].Y = this.Min.Y;
  //     corners[3].Z = this.Max.Z;
  //     corners[4].X = this.Min.X;
  //     corners[4].Y = this.Max.Y;
  //     corners[4].Z = this.Min.Z;
  //     corners[5].X = this.Max.X;
  //     corners[5].Y = this.Max.Y;
  //     corners[5].Z = this.Min.Z;
  //     corners[6].X = this.Max.X;
  //     corners[6].Y = this.Min.Y;
  //     corners[6].Z = this.Min.Z;
  //     corners[7].X = this.Min.X;
  //     corners[7].Y = this.Min.Y;
  //     corners[7].Z = this.Min.Z;
  // }
  // constructor(min: Vector3, max: Vector3) {
  //     this.Min = min;
  //     this.Max = max;
  // }
  // public Equals(other: BoundingBox): boolean {
  //     if (this.Min == other.Min)
  //         return this.Max == other.Max;
  //     return false;
  // }
  // public Equals(obj: Object): boolean {
  //     var flag: boolean = false;
  //     if (obj instanceof BoundingBox)
  //         flag = this.Equals(<BoundingBox>obj);
  //     return flag;
  // }
  // public GetHashCode(): number {
  //     return this.Min.GetHashCode() + this.Max.GetHashCode();
  // }
  // public ToString(): string {
  //     return string.Format(<IFormatProvider>CultureInfo.CurrentCulture, "{{Min:{0} Max:{1}}}", <Object>this.Min.ToString(),
  //         <Object>this.Max.ToString());
  // }
  // public static CreateMerged(original: BoundingBox, additional: BoundingBox): BoundingBox {
  //     var boundingBox: BoundingBox;
  //     Vector3.Min(original.Min, additional.Min, boundingBox.Min);
  //     Vector3.Max(original.Max, additional.Max, boundingBox.Max);
  //     return boundingBox;
  // }
  // public static CreateMerged(original: BoundingBox, additional: BoundingBox, result: BoundingBox): void {
  //     var result1: Vector3;
  //     Vector3.Min(original.Min, additional.Min, result1);
  //     var result2: Vector3;
  //     Vector3.Max(original.Max, additional.Max, result2);
  //     result.Min = result1;
  //     result.Max = result2;
  // }
  // public static CreateFromSphere(sphere: BoundingSphere): BoundingBox {
  //     var boundingBox: BoundingBox;
  //     boundingBox.Min.X = sphere.Center.X - sphere.Radius;
  //     boundingBox.Min.Y = sphere.Center.Y - sphere.Radius;
  //     boundingBox.Min.Z = sphere.Center.Z - sphere.Radius;
  //     boundingBox.Max.X = sphere.Center.X + sphere.Radius;
  //     boundingBox.Max.Y = sphere.Center.Y + sphere.Radius;
  //     boundingBox.Max.Z = sphere.Center.Z + sphere.Radius;
  //     return boundingBox;
  // }
  // public static CreateFromSphere(sphere: BoundingSphere, result: BoundingBox): void {
  //     result.Min.X = sphere.Center.X - sphere.Radius;
  //     result.Min.Y = sphere.Center.Y - sphere.Radius;
  //     result.Min.Z = sphere.Center.Z - sphere.Radius;
  //     result.Max.X = sphere.Center.X + sphere.Radius;
  //     result.Max.Y = sphere.Center.Y + sphere.Radius;
  //     result.Max.Z = sphere.Center.Z + sphere.Radius;
  // }
  // public static CreateFromPoints(points: IEnumerable<Vector3>): BoundingBox {
  //     if (points == null)
  //         throw new ArgumentNullException();
  //     var flag: boolean = false;
  //     var result1: Vector3 = new Vector3(number.MaxValue);
  //     var result2: Vector3 = new Vector3(number.MinValue);
  //     points.forEach(function (point) {
  //         Vector3.Min(result1, point, result1);
  //         Vector3.Max(result2, point, result2);
  //         flag = true;
  //     });
  //     if (!flag)
  //         throw new ArgumentException(FrameworkResources.BoundingBoxZeroPoints);
  //     return new BoundingBox(result1, result2);
  // }
  // public Intersects(box: BoundingBox): boolean {
  //     return this.Max.X >= box.Min.X &&
  //         this.Min.X <= box.Max.X &&
  //         (this.Max.Y >= box.Min.Y && this.Min.Y <= box.Max.Y) &&
  //         (this.Max.Z >= box.Min.Z && this.Min.Z <= box.Max.Z);
  // }
  // public Intersects(box: BoundingBox, result: boolean): void {
  //     result = false;
  //     if (<number>this.Max.X << number > box.Min.X || <number>this.Min.X > <number>box.Max.X || (<number>this.Max.Y << number > box.Min.Y || <number>this.Min.Y > <number>box.Max.Y) || (<number>this.Max.Z << number > box.Min.Z || <number>this.Min.Z > <number>box.Max.Z))
  //         return
  //     result = true;
  // }
  // public Intersects(frustum: BoundingFrustum): boolean {
  //     if (<BoundingFrustum>null == frustum)
  //         throw new ArgumentNullException(nameof(frustum), FrameworkResources.NullNotAllowed);
  //     return frustum.Intersects(this);
  // }
  // public Intersects(plane: Plane): PlaneIntersectionType {
  //     var vector3_1: Vector3;
  //     vector3_1.X = <number>plane.Normal.X >= 0.0 ? this.Min.X : this.Max.X;
  //     vector3_1.Y = <number>plane.Normal.Y >= 0.0 ? this.Min.Y : this.Max.Y;
  //     vector3_1.Z = <number>plane.Normal.Z >= 0.0 ? this.Min.Z : this.Max.Z;
  //     var vector3_2: Vector3;
  //     vector3_2.X = <number>plane.Normal.X >= 0.0 ? this.Max.X : this.Min.X;
  //     vector3_2.Y = <number>plane.Normal.Y >= 0.0 ? this.Max.Y : this.Min.Y;
  //     vector3_2.Z = <number>plane.Normal.Z >= 0.0 ? this.Max.Z : this.Min.Z;
  //     if (<number>plane.Normal.X * <number>vector3_1.X + <number>plane.Normal.Y * <number>vector3_1.Y + <number>plane.Normal.Z * <number>vector3_1.Z + <number>plane.D > 0.0)
  //         return PlaneIntersectionType.Front;
  //     return <number>plane.Normal.X * <number>vector3_2.X + <number>plane.Normal.Y * <number>vector3_2.Y + <number>plane.Normal.Z * <number>vector3_2.Z + <number>plane.D < 0.0 ? PlaneIntersectionType.Back : PlaneIntersectionType.Intersecting;
  // }
  // public Intersects(plane: Plane, result: PlaneIntersectionType): void {
  //     var vector3_1: Vector3;
  //     vector3_1.X = <number>plane.Normal.X >= 0.0 ? this.Min.X : this.Max.X;
  //     vector3_1.Y = <number>plane.Normal.Y >= 0.0 ? this.Min.Y : this.Max.Y;
  //     vector3_1.Z = <number>plane.Normal.Z >= 0.0 ? this.Min.Z : this.Max.Z;
  //     var vector3_2: Vector3;
  //     vector3_2.X = <number>plane.Normal.X >= 0.0 ? this.Max.X : this.Min.X;
  //     vector3_2.Y = <number>plane.Normal.Y >= 0.0 ? this.Max.Y : this.Min.Y;
  //     vector3_2.Z = <number>plane.Normal.Z >= 0.0 ? this.Max.Z : this.Min.Z;
  //     if (<number>plane.Normal.X * <number>vector3_1.X + <number>plane.Normal.Y * <number>vector3_1.Y + <number>plane.Normal.Z * <number>vector3_1.Z + <number>plane.D > 0.0)
  //         result = PlaneIntersectionType.Front;
  //     else if (<number>plane.Normal.X * <number>vector3_2.X + <number>plane.Normal.Y * <number>vector3_2.Y + <number>plane.Normal.Z * <number>vector3_2.Z + <number>plane.D < 0.0)
  //         result = PlaneIntersectionType.Back;
  //     else result = PlaneIntersectionType.Intersecting;
  // }
  // public Intersects(ray: Ray): number {
  //     var num1: number = 0.0f;
  //     var num2: number = number.MaxValue;
  //     if (<number>Math.Abs(ray.Direction.X) < 9.99999997475243E-07) {
  //         if (<number>ray.Position.X << number > this.Min.X || <number>ray.Position.X > <number>this.Max.X)
  //             return new number();
  //     }
  //     else {
  //         var num3: number = 1f / ray.Direction.X;
  //         var num4: number = (this.Min.X - ray.Position.X) * num3;
  //         var num5: number = (this.Max.X - ray.Position.X) * num3;
  //         if (<number>num4 > <number>num5) {
  //             var num6: number = num4;
  //             num4 = num5;
  //             num5 = num6;
  //         }
  //         num1 = MathHelper.Max(num4, num1);
  //         num2 = MathHelper.Min(num5, num2);
  //         if (<number>num1 > <number>num2)
  //             return new number();
  //     }
  //     if (<number>Math.Abs(ray.Direction.Y) < 9.99999997475243E-07) {
  //         if (<number>ray.Position.Y << number > this.Min.Y || <number>ray.Position.Y > <number>this.Max.Y)
  //             return new number();
  //     }
  //     else {
  //         var num3: number = 1f / ray.Direction.Y;
  //         var num4: number = (this.Min.Y - ray.Position.Y) * num3;
  //         var num5: number = (this.Max.Y - ray.Position.Y) * num3;
  //         if (<number>num4 > <number>num5) {
  //             var num6: number = num4;
  //             num4 = num5;
  //             num5 = num6;
  //         }
  //         num1 = MathHelper.Max(num4, num1);
  //         num2 = MathHelper.Min(num5, num2);
  //         if (<number>num1 > <number>num2)
  //             return new number();
  //     }
  //     if (<number>Math.Abs(ray.Direction.Z) < 9.99999997475243E-07) {
  //         if (<number>ray.Position.Z << number > this.Min.Z || <number>ray.Position.Z > <number>this.Max.Z)
  //             return new number();
  //     }
  //     else {
  //         var num3: number = 1f / ray.Direction.Z;
  //         var num4: number = (this.Min.Z - ray.Position.Z) * num3;
  //         var num5: number = (this.Max.Z - ray.Position.Z) * num3;
  //         if (<number>num4 > <number>num5) {
  //             var num6: number = num4;
  //             num4 = num5;
  //             num5 = num6;
  //         }
  //         num1 = MathHelper.Max(num4, num1);
  //         var num7: number = MathHelper.Min(num5, num2);
  //         if (<number>num1 > <number>num7)
  //             return new number();
  //     }
  //     return new number(num1);
  // }
  // public Intersects(ray: Ray, result: number): void {
  //     result = new number();
  //     var num1: number = 0.0f;
  //     var num2: number = number.MaxValue;
  //     if (<number>Math.Abs(ray.Direction.X) < 9.99999997475243E-07) {
  //         if (<number>ray.Position.X << number > this.Min.X || <number>ray.Position.X > <number>this.Max.X)
  //             return
  //     }
  //     else {
  //         var num3: number = 1f / ray.Direction.X;
  //         var num4: number = (this.Min.X - ray.Position.X) * num3;
  //         var num5: number = (this.Max.X - ray.Position.X) * num3;
  //         if (<number>num4 > <number>num5) {
  //             var num6: number = num4;
  //             num4 = num5;
  //             num5 = num6;
  //         }
  //         num1 = MathHelper.Max(num4, num1);
  //         num2 = MathHelper.Min(num5, num2);
  //         if (<number>num1 > <number>num2)
  //             return
  //     }
  //     if (<number>Math.Abs(ray.Direction.Y) < 9.99999997475243E-07) {
  //         if (<number>ray.Position.Y << number > this.Min.Y || <number>ray.Position.Y > <number>this.Max.Y)
  //             return
  //     }
  //     else {
  //         var num3: number = 1f / ray.Direction.Y;
  //         var num4: number = (this.Min.Y - ray.Position.Y) * num3;
  //         var num5: number = (this.Max.Y - ray.Position.Y) * num3;
  //         if (<number>num4 > <number>num5) {
  //             var num6: number = num4;
  //             num4 = num5;
  //             num5 = num6;
  //         }
  //         num1 = MathHelper.Max(num4, num1);
  //         num2 = MathHelper.Min(num5, num2);
  //         if (<number>num1 > <number>num2)
  //             return
  //     }
  //     if (<number>Math.Abs(ray.Direction.Z) < 9.99999997475243E-07) {
  //         if (<number>ray.Position.Z << number > this.Min.Z || <number>ray.Position.Z > <number>this.Max.Z)
  //             return
  //     }
  //     else {
  //         var num3: number = 1f / ray.Direction.Z;
  //         var num4: number = (this.Min.Z - ray.Position.Z) * num3;
  //         var num5: number = (this.Max.Z - ray.Position.Z) * num3;
  //         if (<number>num4 > <number>num5) {
  //             var num6: number = num4;
  //             num4 = num5;
  //             num5 = num6;
  //         }
  //         num1 = MathHelper.Max(num4, num1);
  //         var num7: number = MathHelper.Min(num5, num2);
  //         if (<number>num1 > <number>num7)
  //             return
  //     }
  //     result = new number(num1);
  // }
  // public Intersects(sphere: BoundingSphere): boolean {
  //     var result1: Vector3;
  //     Vector3.Clamp(sphere.Center, this.Min, this.Max, result1);
  //     var result2: number;
  //     Vector3.DistanceSquared(sphere.Center, result1, result2);
  //     return <number>result2 <= <number>sphere.Radius * <number>sphere.Radius;
  // }
  // public Intersects(sphere: BoundingSphere, result: boolean): void {
  //     var result1: Vector3;
  //     Vector3.Clamp(sphere.Center, this.Min, this.Max, result1);
  //     var result2: number;
  //     Vector3.DistanceSquared(sphere.Center, result1, result2);
  //     result = <number>result2 <= <number>sphere.Radius * <number>sphere.Radius;
  // }
  // public Contains(box: BoundingBox): ContainmentType {
  //     if (<number>this.Max.X << number > box.Min.X || <number>this.Min.X > <number>box.Max.X || (<number>this.Max.Y << number > box.Min.Y || <number>this.Min.Y > <number>box.Max.Y) || (<number>this.Max.Z << number > box.Min.Z || <number>this.Min.Z > <number>box.Max.Z))
  //         return ContainmentType.Disjoint;
  //     return <number>this.Min.X > <number>box.Min.X || <number>box.Max.X > <number>this.Max.X || (<number>this.Min.Y > <number>box.Min.Y || <number>box.Max.Y > <number>this.Max.Y) || (<number>this.Min.Z > <number>box.Min.Z || <number>box.Max.Z > <number>this.Max.Z) ? ContainmentType.Intersects : ContainmentType.Contains;
  // }
  // public Contains(box: BoundingBox, result: ContainmentType): void {
  //     result = ContainmentType.Disjoint;
  //     if (<number>this.Max.X << number > box.Min.X || <number>this.Min.X > <number>box.Max.X || (<number>this.Max.Y << number > box.Min.Y || <number>this.Min.Y > <number>box.Max.Y) || (<number>this.Max.Z << number > box.Min.Z || <number>this.Min.Z > <number>box.Max.Z))
  //         return
  //     result = <number>this.Min.X > <number>box.Min.X || <number>box.Max.X > <number>this.Max.X || (<number>this.Min.Y > <number>box.Min.Y || <number>box.Max.Y > <number>this.Max.Y) || (<number>this.Min.Z > <number>box.Min.Z || <number>box.Max.Z > <number>this.Max.Z) ? ContainmentType.Intersects : ContainmentType.Contains;
  // }
  // public Contains(frustum: BoundingFrustum): ContainmentType {
  //     if (<BoundingFrustum>null == frustum)
  //         throw new ArgumentNullException(nameof(frustum), FrameworkResources.NullNotAllowed);
  //     if (!frustum.Intersects(this))
  //         return ContainmentType.Disjoint;
  //     frustum.cornerArray.forEach(function (corner) {
  //         if (this.Contains(corner) == ContainmentType.Disjoint)
  //             return ContainmentType.Intersects;
  //     });
  //     return ContainmentType.Contains;
  // }
  // public Contains(point: Vector3): ContainmentType {
  //     return <number>this.Min.X > <number>point.X || <number>point.X > <number>this.Max.X || (<number>this.Min.Y > <number>point.Y || <number>point.Y > <number>this.Max.Y) || (<number>this.Min.Z > <number>point.Z || <number>point.Z > <number>this.Max.Z) ? ContainmentType.Disjoint : ContainmentType.Contains;
  // }
  // public Contains(point: Vector3, result: ContainmentType): void {
  //     result = <number>this.Min.X > <number>point.X || <number>point.X > <number>this.Max.X || (<number>this.Min.Y > <number>point.Y || <number>point.Y > <number>this.Max.Y) || (<number>this.Min.Z > <number>point.Z || <number>point.Z > <number>this.Max.Z) ? ContainmentType.Disjoint : ContainmentType.Contains;
  // }
  // public Contains(sphere: BoundingSphere): ContainmentType {
  //     var result1: Vector3;
  //     Vector3.Clamp(sphere.Center, this.Min, this.Max, result1);
  //     var result2: number;
  //     Vector3.DistanceSquared(sphere.Center, result1, result2);
  //     var radius: number = sphere.Radius;
  //     if (<number>result2 > <number>radius * <number>radius)
  //         return ContainmentType.Disjoint;
  //     return <number>this.Min.X + <number>radius > <number>sphere.Center.X || <number>sphere.Center.X > <number>this.Max.X - <number>radius || (<number>this.Max.X - <number>this.Min.X <= <number>radius || <number>this.Min.Y + <number>radius > <number>sphere.Center.Y) || (<number>sphere.Center.Y > <number>this.Max.Y - <number>radius || <number>this.Max.Y - <number>this.Min.Y <= <number>radius || (<number>this.Min.Z + <number>radius > <number>sphere.Center.Z || <number>sphere.Center.Z > <number>this.Max.Z - <number>radius)) || <number>this.Max.X - <number>this.Min.X <= <number>radius ? ContainmentType.Intersects : ContainmentType.Contains;
  // }
  //public Contains(sphere: BoundingSphere, result: ContainmentType): void {
  //    var result1: Vector3;
  //    Vector3.Clamp(sphere.Center, this.Min, this.Max, result1);
  //    var result2: number;
  //    Vector3.DistanceSquared(sphere.Center, result1, result2);
  //    var radius: number = sphere.Radius;
  //    if (<number>result2 > <number>radius * <number>radius)
  //        result = ContainmentType.Disjoint;
  //    else result = <number>this.Min.X + <number>radius > <number>sphere.Center.X || <number>sphere.Center.X > <number>this.Max.X - <number>radius || (<number>this.Max.X - <number>this.Min.X <= <number>radius || <number>this.Min.Y + <number>radius > <number>sphere.Center.Y) || (<number>sphere.Center.Y > <number>this.Max.Y - <number>radius || <number>this.Max.Y - <number>this.Min.Y <= <number>radius || (<number>this.Min.Z + <number>radius > <number>sphere.Center.Z || <number>sphere.Center.Z > <number>this.Max.Z - <number>radius)) || <number>this.Max.X - <number>this.Min.X <= <number>radius ? ContainmentType.Intersects : ContainmentType.Contains;
  //}
  // public SupportMapping(v: Vector3, result: Vector3): void {
  //     result.X = v.X >= 0.0 ? this.Max.X : this.Min.X;
  //     result.Y = v.Y >= 0.0 ? this.Max.Y : this.Min.Y;
  //     result.Z = v.Z >= 0.0 ? this.Max.Z : this.Min.Z;
  // }
  // public OperatorEquals(b: BoundingBox): boolean {
  //     let a = this;
  //     return a.Equals(b);
  // }
  // public OperatorNotEqual(b: BoundingBox): boolean {
  //     let a = this;
  //     if (!(a.Min != b.Min)) {
  //         return a.Max != b.Max;
  //     }
  //     return true;
  // }
};

// XNA-TS-VSCode/src/color.ts
var Color = /* @__PURE__ */ ((Color2) => {
  Color2["AliceBlue"] = "#F0F8FF";
  Color2["AntiqueWhite"] = "#FAEBD7";
  Color2["Aqua"] = "#00FFFF";
  Color2["Aquamarine"] = "#7FFFD4";
  Color2["Azure"] = "#F0FFFF";
  Color2["Beige"] = "#F5F5DC";
  Color2["Bisque"] = "#FFE4C4";
  Color2["Black"] = "#000000";
  Color2["BlanchedAlmond"] = "#FFEBCD";
  Color2["Blue"] = "#0000FF";
  Color2["BlueViolet"] = "#8A2BE2";
  Color2["Brown"] = "#A52A2A";
  Color2["BurlyWood"] = "#DEB887";
  Color2["CadetBlue"] = "#5F9EA0";
  Color2["Chartreuse"] = "#7FFF00";
  Color2["Chocolate"] = "#D2691E";
  Color2["Coral"] = "#FF7F50";
  Color2["CornflowerBlue"] = "#6495ED";
  Color2["Cornsilk"] = "#FFF8DC";
  Color2["Crimson"] = "#DC143C";
  Color2["Cyan"] = "#00FFFE";
  Color2["DarkBlue"] = "#00008B";
  Color2["DarkCyan"] = "#008B8B";
  Color2["DarkGoldenrod"] = "#B8860B";
  Color2["DarkGray"] = "#A9A9A9";
  Color2["DarkGreen"] = "#006400";
  Color2["DarkKhaki"] = "#BDB76B";
  Color2["DarkMagenta"] = "#8B008B";
  Color2["DarkOliveGreen"] = "#556B2F";
  Color2["DarkOrange"] = "#FF8C00";
  Color2["DarkOrchid"] = "#9932CC";
  Color2["DarkRed"] = "#8B0000";
  Color2["DarkSalmon"] = "#E9967A";
  Color2["DarkSeaGreen"] = "#8FBC8F";
  Color2["DarkSlateBlue"] = "#483D8B";
  Color2["DarkSlateGray"] = "#2F4F4F";
  Color2["DarkTurquoise"] = "#00CED1";
  Color2["DarkViolet"] = "#9400D3";
  Color2["DeepPink"] = "#FF1493";
  Color2["DeepSkyBlue"] = "#00BFFF";
  Color2["DimGray"] = "#696969";
  Color2["DodgerBlue"] = "#1E90FF";
  Color2["Firebrick"] = "#B22222";
  Color2["FloralWhite"] = "#FFFAF0";
  Color2["ForestGreen"] = "#228B22";
  Color2["Fuchsia"] = "#FF00FE";
  Color2["Gainsboro"] = "#DCDCDC";
  Color2["GhostWhite"] = "#F8F8FF";
  Color2["Gold"] = "#FFD700";
  Color2["Goldenrod"] = "#DAA520";
  Color2["Gray"] = "#808080";
  Color2["Green"] = "#008000";
  Color2["GreenYellow"] = "#ADFF2F";
  Color2["Honeydew"] = "#F0FFF0";
  Color2["HotPink"] = "#FF69B4";
  Color2["IndianRed"] = "#CD5C5C";
  Color2["Indigo"] = "#4B0082";
  Color2["Ivory"] = "#FFFFF0";
  Color2["Khaki"] = "#F0E68C";
  Color2["Lavender"] = "#E6E6FA";
  Color2["LavenderBlush"] = "#FFF0F5";
  Color2["LawnGreen"] = "#7CFC00";
  Color2["LemonChiffon"] = "#FFFACD";
  Color2["LightBlue"] = "#ADD8E6";
  Color2["LightCoral"] = "#F08080";
  Color2["LightCyan"] = "#E0FFFF";
  Color2["LightGoldenrodYellow"] = "#FAFAD2";
  Color2["LightGreen"] = "#90EE90";
  Color2["LightGray"] = "#D3D3D3";
  Color2["LightPink"] = "#FFB6C1";
  Color2["LightSalmon"] = "#FFA07A";
  Color2["LightSeaGreen"] = "#20B2AA";
  Color2["LightSkyBlue"] = "#87CEFA";
  Color2["LightSlateGray"] = "#778899";
  Color2["LightSteelBlue"] = "#B0C4DE";
  Color2["LightYellow"] = "#FFFFE0";
  Color2["Lime"] = "#00FF00";
  Color2["LimeGreen"] = "#32CD32";
  Color2["Linen"] = "#FAF0E6";
  Color2["Magenta"] = "#FF00FF";
  Color2["Maroon"] = "#800000";
  Color2["MediumAquamarine"] = "#66CDAA";
  Color2["MediumBlue"] = "#0000CD";
  Color2["MediumOrchid"] = "#BA55D3";
  Color2["MediumPurple"] = "#9370DB";
  Color2["MediumSeaGreen"] = "#3CB371";
  Color2["MediumSlateBlue"] = "#7B68EE";
  Color2["MediumSpringGreen"] = "#00FA9A";
  Color2["MediumTurquoise"] = "#48D1CC";
  Color2["MediumVioletRed"] = "#C71585";
  Color2["MidnightBlue"] = "#191970";
  Color2["MintCream"] = "#F5FFFA";
  Color2["MistyRose"] = "#FFE4E1";
  Color2["Moccasin"] = "#FFE4B5";
  Color2["NavajoWhite"] = "#FFDEAD";
  Color2["Navy"] = "#000080";
  Color2["OldLace"] = "#FDF5E6";
  Color2["Olive"] = "#808000";
  Color2["OliveDrab"] = "#6B8E23";
  Color2["Orange"] = "#FFA500";
  Color2["OrangeRed"] = "#FF4500";
  Color2["Orchid"] = "#DA70D6";
  Color2["PaleGoldenrod"] = "#EEE8AA";
  Color2["PaleGreen"] = "#98FB98";
  Color2["PaleTurquoise"] = "#AFEEEE";
  Color2["PaleVioletRed"] = "#DB7093";
  Color2["PapayaWhip"] = "#FFEFD5";
  Color2["PeachPuff"] = "#FFDAB9";
  Color2["Peru"] = "#CD853F";
  Color2["Pink"] = "#FFC0CB";
  Color2["Plum"] = "#DDA0DD";
  Color2["PowderBlue"] = "#B0E0E6";
  Color2["Purple"] = "#800080";
  Color2["Red"] = "#FF0000";
  Color2["RosyBrown"] = "#BC8F8F";
  Color2["RoyalBlue"] = "#4169E1";
  Color2["SaddleBrown"] = "#8B4513";
  Color2["Salmon"] = "#FA8072";
  Color2["SandyBrown"] = "#F4A460";
  Color2["SeaGreen"] = "#2E8B57";
  Color2["SeaShell"] = "#FFF5EE";
  Color2["Sienna"] = "#A0522D";
  Color2["Silver"] = "#C0C0C0";
  Color2["SkyBlue"] = "#87CEEB";
  Color2["SlateBlue"] = "#6A5ACD";
  Color2["SlateGray"] = "#708090";
  Color2["Snow"] = "#FFFAFA";
  Color2["SpringGreen"] = "#00FF7F";
  Color2["SteelBlue"] = "#4682B4";
  Color2["Tan"] = "#D2B48C";
  Color2["Teal"] = "#008080";
  Color2["Thistle"] = "#D8BFD8";
  Color2["Tomato"] = "#FF6347";
  Color2["Turquoise"] = "#40E0D0";
  Color2["Violet"] = "#EE82EE";
  Color2["Wheat"] = "#F5DEB3";
  Color2["White"] = "#FFFFFF";
  Color2["WhiteSmoke"] = "#F5F5F5";
  Color2["Yellow"] = "#FFF000";
  Color2["YellowGreen"] = "#9ACD32";
  return Color2;
})(Color || {});

// XNA-TS-VSCode/src/contentManager.ts
var ContentManager = class {
  loadedAssets = [];
  disposableAssets;
  static contentExtension = ".xnb";
  serviceProviders;
  rootDirectory = "";
  isRootDirectoryAbsolute = false;
  fullRootDirectory = "";
  byteBuffer;
  weakByteBuffers;
  readAssetRecurseCount = 0;
  constructor() {
  }
  //constructor(serviceProvider/*: IServiceProvider*/, rootDirectory: string) {
  //    if (serviceProvider == null)
  //        throw new ArgumentNullException(nameof(serviceProvider));
  //    if (rootDirectory == null)
  //        throw new ArgumentNullException(nameof(rootDirectory));
  //    this.RootDirectory = rootDirectory;
  //    this.serviceProvider = serviceProvider;
  //}
  //public get ServiceProvider(): IServiceProvider {
  //    return this.serviceProvider;
  //}
  get RootDirectory() {
    return this.rootDirectory;
  }
  set RootDirectory(value) {
    if (value == null) {
      console.log("throw new ArgumentNullException(nameof(value)");
    }
    if (this.loadedAssets.length > 0) {
      console.log("throw new InvalidOperationException(FrameworkResources.ContentManagerCannotChangeRootDirectory");
    }
    this.rootDirectory = value;
    this.fullRootDirectory = value;
    if (!this.isRootDirectoryAbsolute)
      try {
      } catch (err) {
      }
  }
  //public RecordDisposableObject(disposable: IDisposable): void {
  //    this.disposableAssets.Add(disposable);
  //}
  //public Dispose(): void {
  //    this.Dispose(true);
  //    GC.SuppressFinalize(<Object>this);
  //}
  //protected Dispose(disposing: boolean): void {
  //    try {
  //        if (!disposing || this.loadedAssets == null)
  //            return
  //        this.Unload();
  //    }
  //    finally {
  //        this.loadedAssets = <Dictionary<string, Object>>null;
  //        this.disposableAssets = <List<IDisposable>>null;
  //    }
  //}
  //public Unload(): void {
  //    if (this.loadedAssets == null)
  //        throw new ObjectDisposedException(this.ToString());
  //    try {
  //        this.disposableAssets.forEach(function (disposableAsset) { disposableAsset.Dispose(); });
  //    }
  //    finally {
  //        this.loadedAssets.Clear();
  //        this.disposableAssets.Clear();
  //    }
  //}
  //public Load<T>(assetName: string): T {
  //    if (this.loadedAssets == null)
  //        throw new ObjectDisposedException(this.ToString());
  //    if (string.IsNullOrEmpty(assetName))
  //        throw new ArgumentNullException(nameof(assetName));
  //    assetName = TitleContainer.GetCleanPath(assetName);
  //    var obj1: Object;
  //    if (this.loadedAssets.TryGetValue(assetName, obj1)) {
  //        if (!(obj1 instanceof T))
  //            throw new ContentLoadException(string.Format(<IFormatProvider>CultureInfo.CurrentCulture, FrameworkResources.BadXnbWrongType, <Object>assetName,
  //                <Object>obj1.GetType(),
  //                <Object>/*typeof*/T));
  //        return <T>obj1;
  //    }
  //    Logger.BeginLogEvent(LoggingEvent.LoadContent, "XNA: Begin Loading Content: " + assetName);
  //    var obj2: T;
  //    try {
  //        obj2 = this.ReadAsset<T>(assetName, <(_: IDisposable) => void>null);
  //        this.loadedAssets.Add(assetName, <Object>obj2);
  //    }
  //    finally {
  //        Logger.EndLogEvent(LoggingEvent.LoadContent, "XNA: Done Loading Content: " + assetName);
  //    }
  //    return obj2;
  //}
  //protected ReadAsset<T>(assetName: string, recordDisposableObject: (_: IDisposable) => void): T {
  //    if (this.loadedAssets == null)
  //        throw new ObjectDisposedException(this.ToString());
  //    if (string.IsNullOrEmpty(assetName))
  //        throw new ArgumentNullException(nameof(assetName));
  //    var input: Stream = this.OpenStream(assetName)
  //    try {
  //        var contentReader: ContentReader = ContentReader.Create(this, input, assetName, recordDisposableObject)
  //        try {
  //            ++this.readAssetRecurseCount;
  //            try {
  //                return contentReader.ReadAsset<T>();
  //            }
  //            finally {
  //                if (--this.readAssetRecurseCount == 0)
  //                    this.byteBuffer = <number[]>null;
  //            }
  //        }
  //        finally {
  //            if (contentReader != null) contentReader.Dispose();
  //        }
  //    }
  //    finally {
  //        if (input != null) input.Dispose();
  //    }
  //}
  //protected OpenStream(assetName: string): Stream {
  //    try {
  //        var cleanPath: string = TitleContainer.GetCleanPath(Path.Combine(this.fullRootDirectory, assetName + ".xnb"));
  //        if (this.isRootDirectoryAbsolute)
  //            return <Stream>new FileStream(cleanPath, FileMode.Open, FileAccess.Read, FileShare.Read);
  //        return TitleContainer.OpenStream(cleanPath);
  //    }
  //    catch (ex) {
  //        if (ex instanceof FileNotFoundException || ex instanceof DirectoryNotFoundException)
  //            throw new ContentLoadException(string.Format(<IFormatProvider>CultureInfo.CurrentCulture, FrameworkResources.OpenStreamNotFound, <Object>assetName), ex);
  //        throw new ContentLoadException(string.Format(<IFormatProvider>CultureInfo.CurrentCulture, FrameworkResources.OpenStreamError, <Object>assetName), ex);
  //    }
  //}
  //public GetByteBuffer(size: number): number[] {
  //    var numArray: number[] = this.byteBuffer;
  //    if (numArray == null && this.weakByteBuffer != null)
  //        numArray = <number[]>this.weakByteBuffer.Target;
  //    if (numArray == null || numArray.length < size) {
  //        numArray = new Array(size);
  //        this.byteBuffer = numArray;
  //        this.weakByteBuffer = new WeakReference(<Object>numArray);
  //    }
  //    return numArray;
  //}
  //   }
};

// XNA-TS-VSCode/src/controls.ts
var Controls = class {
  m_left = false;
  m_right = false;
  m_up = false;
  m_down = false;
  m_fire = false;
  m_spacePressed = false;
  m_firePressed = false;
  m_divePressed = false;
  m_reversePressed = false;
  m_return = false;
  m_enter = false;
  m_lcontrol = false;
  m_record = false;
  m_play = false;
  constructor() {
    this.m_left = false;
    this.m_right = false;
    this.m_up = false;
    this.m_down = false;
    this.m_fire = false;
    this.m_spacePressed = false;
    this.m_firePressed = false;
    this.m_divePressed = false;
    this.m_reversePressed = false;
    this.m_return = false;
    this.m_enter = false;
    this.m_lcontrol = false;
    this.m_record = false;
    this.m_play = false;
  }
  get left() {
    return this.m_left;
  }
  set left(value) {
    this.m_left = value;
  }
  get right() {
    return this.m_right;
  }
  set right(value) {
    this.m_right = value;
  }
  get up() {
    return this.m_up;
  }
  set up(value) {
    this.m_up = value;
  }
  get down() {
    return this.m_down;
  }
  set down(value) {
    this.m_down = value;
  }
  get lcontrolPressed() {
    return this.m_lcontrol;
  }
  set lcontrolPressed(value) {
    this.m_lcontrol = value;
  }
  get enterPressed() {
    return this.m_enter;
  }
  set enterPressed(value) {
    this.m_enter = value;
  }
  get returnPressed() {
    return this.m_return;
  }
  set returnPressed(value) {
    this.m_return = value;
  }
  get spacePressed() {
    return this.m_spacePressed;
  }
  set spacePressed(value) {
    this.m_spacePressed = value;
  }
};

// XNA-TS-VSCode/src/timeSpan.ts
var TimeSpan = class _TimeSpan {
  TicksPerMillisecond = 1e4;
  MillisecondsPerTick = 1 / this.TicksPerMillisecond;
  ticksPerSecond = this.TicksPerMillisecond * 1e3;
  SecondsPerTick = 1 / this.ticksPerSecond;
  TicksPerMinute = this.ticksPerSecond * 60;
  MinutesPerTick = 1 / this.TicksPerMinute;
  TicksPerHour = this.TicksPerMinute * 60;
  HoursPerTick = 1 / this.TicksPerHour;
  TicksPerDay = this.TicksPerHour * 24;
  DaysPerTick = 1 / this.TicksPerDay;
  MillisPerSecond = 1e3;
  MillisPerMinute = this.MillisPerSecond * 60;
  MillisPerHour = this.MillisPerMinute * 60;
  MillisPerDay = this.MillisPerHour * 24;
  MaxValue_Int64 = 9223372036854776e3;
  MinValue_Int64 = -9223372036854776e3;
  MaxSeconds = this.MaxValue_Int64 / this.ticksPerSecond;
  MinSeconds = this.MinValue_Int64 / this.ticksPerSecond;
  MaxMilliSeconds = this.MaxValue_Int64 / this.TicksPerMillisecond;
  MinMilliSeconds = this.MinValue_Int64 / this.TicksPerMillisecond;
  TicksPerTenthSecond = this.TicksPerMillisecond * 100;
  // private MaxValue: TimeSpan;
  // private MinValue: TimeSpan;
  _ticks = 0;
  constructor(ticks) {
    this._ticks = ticks;
  }
  get Zero() {
    return new _TimeSpan(0);
  }
  get Ticks() {
    return this._ticks;
  }
  set Ticks(value) {
    this._ticks = value;
  }
  get TicksPerSecond() {
    return this.ticksPerSecond;
  }
  get Days() {
    return this._ticks / this.TicksPerDay;
  }
  get Hours() {
    return this._ticks / this.TicksPerHour % 24;
  }
  get Milliseconds() {
    return this._ticks / this.TicksPerMillisecond % 1e3;
  }
  get Minutes() {
    return this._ticks / this.TicksPerMinute % 60;
  }
  get Seconds() {
    return this._ticks / this.TicksPerSecond % 60;
  }
  get TotalDays() {
    return this._ticks * this.DaysPerTick;
  }
  get TotalHours() {
    return this._ticks * this.HoursPerTick;
  }
  get TotalMilliseconds() {
    let temp = this._ticks * this.MillisecondsPerTick;
    if (temp > this.MaxMilliSeconds)
      return this.MaxMilliSeconds;
    if (temp < this.MinMilliSeconds)
      return this.MinMilliSeconds;
    return temp;
  }
  get TotalMinutes() {
    return this._ticks * this.MinutesPerTick;
  }
  get TotalSeconds() {
    return this._ticks * this.SecondsPerTick;
  }
  Add(ts) {
    let result = this._ticks + ts.Ticks;
    if (this._ticks >> 63 == ts.Ticks >> 63 && this._ticks >> 63 != result >> 63) {
      console.log("Overflow_TimeSpanTooLong");
    }
    this._ticks = result;
    return new _TimeSpan(result);
  }
  Subtract(ts) {
    let ticks = this._ticks - ts.Ticks;
    if (this._ticks >> 63 != ts.Ticks >> 63 && this._ticks >> 63 != ticks >> 63) {
      console.log("Overflow_TimeSpanTooLong");
    }
    return new _TimeSpan(ticks);
  }
  LessThan(ts) {
    if (this._ticks < ts) {
      return true;
    }
    return false;
  }
  MoreThan(ts) {
    if (this._ticks > ts) {
      return true;
    }
    return false;
  }
  EqualTo(ts) {
    if (this._ticks == ts) {
      return true;
    }
    return false;
  }
  Compare(t1, t2) {
    if (t1._ticks > t2._ticks)
      return 1;
    if (t1._ticks < t2._ticks)
      return -1;
    return 0;
  }
  CompareTo(value) {
    if (value == null)
      return 1;
    if (!(value instanceof _TimeSpan)) {
      console.log("Arg_MustBeTimeSpan");
    }
    let t = value._ticks;
    if (this._ticks > t) {
      return 1;
    }
    if (this._ticks < t) {
      return -1;
    }
    return 0;
  }
  FromMinutes(value) {
    return this.Interval(value, 6e4);
  }
  FromSeconds(value) {
    return this.Interval(value, this.MillisPerSecond);
  }
  Interval(value, scale) {
    let tmp = value * scale;
    let millis = Math.floor(tmp + (value >= 0 ? 0.5 : -0.5));
    if (millis > this.MaxValue_Int64 / this.TicksPerMillisecond || millis < this.MinValue_Int64 / this.TicksPerMillisecond) {
      console.log("Overflow_TimeSpanTooLong");
    }
    return new _TimeSpan(millis * this.TicksPerMillisecond);
  }
  SetTicks(value) {
    this._ticks = value;
  }
  FromTicks(value) {
    return new _TimeSpan(value);
  }
  FromMilliseconds(value) {
    return this.Interval(value, 1);
  }
};

// XNA-TS-VSCode/src/gameClock.ts
var GameClock = class _GameClock {
  baseRealTime = 0;
  lastRealTime = 0;
  lastRealTimeValid = false;
  suspendCount = 0;
  suspendStartTime = 0;
  timeLostToSuspension = 0;
  lastRealTimeCandidate = 0;
  currentTimeOffset = new TimeSpan(0);
  currentTimeBase = new TimeSpan(0);
  elapsedTime = new TimeSpan(0);
  elapsedAdjustedTime = new TimeSpan(0);
  get CurrentTime() {
    return this.currentTimeBase.Add(this.currentTimeOffset);
  }
  get ElapsedTime() {
    return this.elapsedTime;
  }
  get ElapsedAdjustedTime() {
    return this.elapsedAdjustedTime;
  }
  constructor() {
    this.Reset();
  }
  Reset() {
    this.currentTimeBase.Zero;
    this.currentTimeOffset.Zero;
    this.baseRealTime = _GameClock.Counter;
    this.lastRealTimeValid = false;
  }
  UpdateElapsedTime() {
    var counter = _GameClock.Counter;
    if (!this.lastRealTimeValid) {
      this.lastRealTime = counter;
      this.lastRealTimeValid = true;
    }
    try {
      this.currentTimeOffset = _GameClock.CounterToTimeSpan(counter - this.baseRealTime);
    } catch (ex1) {
      this.baseRealTime = this.lastRealTime;
      try {
        this.currentTimeOffset = _GameClock.CounterToTimeSpan(counter - this.baseRealTime);
      } catch (ex2) {
        this.baseRealTime = counter;
        this.currentTimeOffset.Zero;
      }
    }
    try {
      this.elapsedTime = _GameClock.CounterToTimeSpan(counter - this.lastRealTime);
    } catch (ex) {
      this.elapsedTime.Zero;
    }
    try {
      var num = this.lastRealTime + this.timeLostToSuspension;
      this.elapsedAdjustedTime = _GameClock.CounterToTimeSpan(counter - num);
    } catch (ex) {
      this.elapsedAdjustedTime.Zero;
    }
    this.lastRealTimeCandidate = counter;
  }
  AdvanceFrameTime() {
    this.lastRealTime = this.lastRealTimeCandidate;
    this.timeLostToSuspension = 0;
  }
  Suspend() {
    ++this.suspendCount;
    if (this.suspendCount != 1)
      return;
    this.suspendStartTime = _GameClock.Counter;
  }
  Resume() {
    --this.suspendCount;
    if (this.suspendCount > 0)
      return;
    this.timeLostToSuspension += _GameClock.Counter - this.suspendStartTime;
    this.suspendStartTime = 0;
  }
  static get Counter() {
    return Date.now();
  }
  static get Frequency() {
    return 1e7;
  }
  static CounterToTimeSpan(delta) {
    var num = 1e7;
    return this.FromTicks(delta * num / _GameClock.Frequency);
  }
  static FromTicks(value) {
    return new TimeSpan(value);
  }
};

// XNA-TS-VSCode/src/gameTime.ts
var GameTime = class {
  totalGameTime;
  elapsedGameTime;
  isRunningSlowly;
  constructor() {
    this.totalGameTime = new TimeSpan(0);
    this.elapsedGameTime = new TimeSpan(0);
    this.isRunningSlowly = false;
  }
  set TotalGameTime(value) {
    this.totalGameTime = value;
  }
  get TotalGameTime() {
    return this.totalGameTime;
  }
  set ElapsedGameTime(value) {
    this.elapsedGameTime = value;
  }
  get ElapsedGameTime() {
    return this.elapsedGameTime;
  }
  set IsRunningSlowly(value) {
    this.isRunningSlowly = value;
  }
  get IsRunningSlowly() {
    return this.isRunningSlowly;
  }
};

// XNA-TS-VSCode/src/spriteBatch.ts
var SpriteEffects = /* @__PURE__ */ ((SpriteEffects2) => {
  SpriteEffects2[SpriteEffects2["None"] = 0] = "None";
  return SpriteEffects2;
})(SpriteEffects || {});
var SpriteBatch = class {
  canvas;
  ctx;
  //CanvasRenderingContext2D;// = new CanvasRenderingContext2D();
  get Canvas() {
    return this.canvas;
  }
  constructor(non) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
  }
  Draw(texture, param2, param3, param4, param5, param6, param7, param8, param9) {
    if (!param4) {
      this.ctx.drawImage(texture, param2, param3);
    } else {
      this.ctx.drawImage(texture, param2, param3, param4, param5, param6, param7, param8, param9);
    }
  }
  DrawString(font, value, position, color) {
    this.ctx.font = font;
    this.ctx.fillStyle = color;
    this.ctx.fillText(value, position.X, position.Y);
  }
  DrawButton(button) {
    button.draw(this.ctx);
  }
  Begin() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  Clear(col) {
    this.ctx.fillStyle = col;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  // TODO
  End() {
  }
};

// XNA-TS-VSCode/src/game.ts
var Game = class {
  maximumElapsedTime;
  isFixedTimeStep = true;
  int_MaxValue = 2147483647;
  updatesSinceRunningSlowly1 = this.int_MaxValue;
  updatesSinceRunningSlowly2 = this.int_MaxValue;
  isActive = true;
  exitRequested = false;
  inactiveSleepTime = new TimeSpan(0);
  isMouseVisible = false;
  inRun = false;
  endRunRequired = false;
  clock;
  totalGameTime;
  targetElapsedTime = new TimeSpan(0);
  accumulatedElapsedGameTime;
  lastFrameElapsedGameTime;
  drawRunningSlowly = false;
  doneFirstUpdate = false;
  doneFirstDraw = false;
  forceElapsedTimeToZero = false;
  suppressDraw = false;
  content;
  gameTime = new GameTime();
  spriteBatch = new SpriteBatch();
  constructor() {
    this.maximumElapsedTime = new TimeSpan(0);
    this.content = new ContentManager();
    this.clock = new GameClock();
    this.maximumElapsedTime = this.maximumElapsedTime.FromMilliseconds(500);
    this.totalGameTime = new TimeSpan(0);
    this.accumulatedElapsedGameTime = new TimeSpan(0);
    this.lastFrameElapsedGameTime = new TimeSpan(0);
    this.targetElapsedTime.SetTicks(166667);
    this.inactiveSleepTime = this.inactiveSleepTime.FromMilliseconds(20);
  }
  Run(gameTime) {
    this.Draw(gameTime);
  }
  get GraphicsDevice() {
    return this.spriteBatch;
  }
  get Content() {
    return this.content;
  }
  set Content(value) {
    if (value == null) {
      console.log("ArgumentNullException");
    }
    this.content = value;
  }
  get MaxElapsedTime() {
    return this.maximumElapsedTime;
  }
  set MaxElapsedTime(value) {
    if (value.LessThan(0)) {
      console.log("The time must be positive.");
    }
    if (value.LessThan(this.targetElapsedTime.Ticks)) {
      console.log("The time must be at least TargetElapsedTime");
    }
  }
  get IsActive() {
    return this.isActive;
  }
  get IsMouseVisible() {
    return this.isMouseVisible;
  }
  set IsMouseVisible(value) {
    this.isMouseVisible = value;
  }
  get TargetElapsedTime() {
    return this.targetElapsedTime;
  }
  set TargetElapsedTime(value) {
  }
  get IsFixedTimeStep() {
    return this.isFixedTimeStep;
  }
  set IsFixedTimeStep(value) {
    this.isFixedTimeStep = value;
  }
  RunGame(useBlockingRun) {
    try {
      this.inRun = true;
      this.gameTime.ElapsedGameTime = this.gameTime.ElapsedGameTime.Zero;
      this.gameTime.TotalGameTime = this.totalGameTime;
      this.gameTime.IsRunningSlowly = false;
      this.Update(this.gameTime);
      this.doneFirstUpdate = true;
      if (useBlockingRun) {
      } else {
        this.endRunRequired = true;
      }
    } catch (ex) {
      alert(ex);
    } finally {
      if (!this.endRunRequired) {
        this.inRun = false;
      }
    }
  }
  get ShouldExit() {
    return this.exitRequested;
  }
  Tick() {
    requestAnimationFrame(this.Tick.bind(this));
    if (this.ShouldExit) {
      return;
    }
    this.clock.UpdateElapsedTime();
    let flag = true;
    let t = new TimeSpan(0);
    let timeSpan1 = this.clock.ElapsedAdjustedTime;
    if (timeSpan1 < t)
      timeSpan1 = t;
    if (this.forceElapsedTimeToZero) {
      timeSpan1 = t;
      this.forceElapsedTimeToZero = false;
    }
    if (timeSpan1.MoreThan(this.maximumElapsedTime.Ticks)) {
      timeSpan1 = this.maximumElapsedTime;
    }
    if (this.isFixedTimeStep) {
      if (Math.abs(timeSpan1.Ticks - this.targetElapsedTime.Ticks) < this.targetElapsedTime.Ticks >> 6) {
        timeSpan1 = this.targetElapsedTime;
      }
      let timeSpan2 = this.accumulatedElapsedGameTime.Add(timeSpan1);
      let num = Math.floor(timeSpan2.Ticks / this.targetElapsedTime.Ticks);
      this.lastFrameElapsedGameTime = this.lastFrameElapsedGameTime.Zero;
      if (num == 0) {
        return;
      }
      this.clock.AdvanceFrameTime();
      this.accumulatedElapsedGameTime = timeSpan2;
      let targetElapsedTime = this.targetElapsedTime;
      if (num > 1) {
        this.updatesSinceRunningSlowly2 = this.updatesSinceRunningSlowly1;
        this.updatesSinceRunningSlowly1 = 0;
      } else {
        if (this.updatesSinceRunningSlowly1 < this.int_MaxValue)
          ++this.updatesSinceRunningSlowly1;
        if (this.updatesSinceRunningSlowly2 < this.int_MaxValue)
          ++this.updatesSinceRunningSlowly2;
      }
      this.drawRunningSlowly = this.updatesSinceRunningSlowly2 < 20;
      while (num > 0 && !this.ShouldExit) {
        --num;
        try {
          this.gameTime.ElapsedGameTime = targetElapsedTime;
          this.gameTime.TotalGameTime = this.totalGameTime;
          this.gameTime.IsRunningSlowly = this.drawRunningSlowly;
          this.Update(this.gameTime);
          flag = flag && this.suppressDraw;
          this.suppressDraw = false;
        } finally {
          this.accumulatedElapsedGameTime.Subtract(targetElapsedTime);
          this.lastFrameElapsedGameTime = this.lastFrameElapsedGameTime.Add(targetElapsedTime);
          this.totalGameTime = this.totalGameTime.Add(targetElapsedTime);
        }
      }
    }
    if (flag) {
      return;
    }
    this.DrawFrame();
  }
  DrawFrame() {
    try {
      if (this.ShouldExit || !this.doneFirstUpdate) {
        return;
      }
      this.gameTime.TotalGameTime = this.totalGameTime;
      this.gameTime.ElapsedGameTime = this.lastFrameElapsedGameTime;
      this.gameTime.IsRunningSlowly = this.drawRunningSlowly;
      this.Draw(this.gameTime);
      this.doneFirstDraw = true;
    } finally {
      this.lastFrameElapsedGameTime.Zero;
    }
  }
  Draw(gameTime) {
  }
  Update(gameTime) {
    this.doneFirstUpdate = true;
  }
  Initialize(caller) {
    caller.LoadContent();
  }
};

// XNA-TS-VSCode/src/vector2.ts
var Vector2 = class _Vector2 {
  static Zero = new _Vector2(0, 0);
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
    return new _Vector2(0, 0);
  }
  LengthSquared() {
    return this.m_x * this.m_x + this.m_y * this.m_y;
  }
};

// XNA-TS-VSCode/src/gamePadState.ts
var Buttons = class {
  a = false;
  get A() {
    return this.a;
  }
};
var dpad = class {
  down = false;
  left = false;
  right = false;
  up = false;
  get Left() {
    return this.left;
  }
  get Right() {
    return this.right;
  }
  constructor() {
  }
};
var thumbsticks = class {
  down = new Vector2(0, 0);
  left = new Vector2(0, 0);
  right = new Vector2(0, 0);
  up = new Vector2(0, 0);
  get Left() {
    return this.left;
  }
  get Right() {
    return this.right;
  }
  constructor() {
  }
};
var GamePad = class {
  static Button = new Buttons();
  static Dpad = new dpad();
  static Thumbsticks = new thumbsticks();
  static get DPad() {
    return this.Dpad;
  }
  static get ThumbSticks() {
    return this.Thumbsticks;
  }
  static get Buttons() {
    return this.Button;
  }
  constructor() {
  }
  static GetState() {
    return this;
  }
};

// XNA-TS-VSCode/src/graphicsDeviceManager.ts
var GraphicsDeviceManager = class _GraphicsDeviceManager {
  static DefaultBackBufferWidth = 800;
  static DefaultBackBufferHeight = 480;
  static deviceLostSleepTime;
  /* = TimeSpan.FromMilliseconds(50.0);*/
  synchronizeWithVerticalRetrace = true;
  depthStencilFormats;
  /*: DepthFormat = DepthFormat.Depth24;*/
  backBufferWidth = _GraphicsDeviceManager.DefaultBackBufferWidth;
  backBufferHeight = _GraphicsDeviceManager.DefaultBackBufferHeight;
  game;
  isReallyFullScreen = false;
  isDeviceDirty = false;
  inDeviceTransition = false;
  devices;
  /*: GraphicsDevice;*/
  isFullScreen = false;
  graphicsProfiles;
  /*: GraphicsProfile;*/
  backBufferFormats;
  /*: SurfaceFormat;*/
  allowMultiSampling = false;
  supportedOrientationss;
  /*: DisplayOrientation;*/
  currentWindowOrientations;
  /*: DisplayOrientation;*/
  resizedBackBufferWidth = 0;
  resizedBackBufferHeight = 0;
  useResizedBackBuffer = false;
  deviceCreateds;
  /*: EventHandler<EventArgs>;*/
  deviceResettings;
  /*: EventHandler<EventArgs>;*/
  deviceResets;
  /*: EventHandler<EventArgs>;*/
  deviceDisposings;
  /*: EventHandler<EventArgs>;*/
  beginDrawOk = false;
  // public get GraphicsProfile()/*: GraphicsProfile*/ {
  //     return this.graphicsProfile;
  // }
  // public set GraphicsProfile(value/*: GraphicsProfile*/) {
  //     this.graphicsProfile = value;
  //     this.isDeviceDirty = true;
  // }
  // public get PreferredDepthStencilFormat()/*: DepthFormat*/ {
  //     return this.depthStencilFormat;
  // }
  // public set PreferredDepthStencilFormat(value/*: DepthFormat*/) {
  //     this.depthStencilFormat = value;
  //     this.isDeviceDirty = true;
  // }
  // public get PreferredBackBufferFormat()/*: SurfaceFormat*/ {
  //     return this.backBufferFormat;
  // }
  // public set PreferredBackBufferFormat(value/*: SurfaceFormat*/) {
  //     this.backBufferFormat = value;
  //     this.isDeviceDirty = true;
  // }
  get PreferredBackBufferWidth() {
    return this.backBufferWidth;
  }
  set PreferredBackBufferWidth(value) {
    if (value <= 0) {
    }
    this.backBufferWidth = value;
    this.useResizedBackBuffer = false;
    this.isDeviceDirty = true;
  }
  get PreferredBackBufferHeight() {
    return this.backBufferHeight;
  }
  set PreferredBackBufferHeight(value) {
    if (value <= 0) {
    }
    this.backBufferHeight = value;
    this.useResizedBackBuffer = false;
    this.isDeviceDirty = true;
  }
  get IsFullScreen() {
    return this.isFullScreen;
  }
  set IsFullScreen(value) {
    this.isFullScreen = value;
    this.isDeviceDirty = true;
  }
  //    public get SynchronizeWithVerticalRetrace(): boolean {
  //        return this.synchronizeWithVerticalRetrace;
  //    }
  //    public set SynchronizeWithVerticalRetrace(value: boolean) {
  //        this.synchronizeWithVerticalRetrace = value;
  //        this.isDeviceDirty = true;
  //    }
  //    public get PreferMultiSampling(): boolean {
  //        return this.allowMultiSampling;
  //    }
  //    public set PreferMultiSampling(value: boolean) {
  //        this.allowMultiSampling = value;
  //        this.isDeviceDirty = true;
  //    }
  //    public get SupportedOrientations(): DisplayOrientation {
  //        return this.supportedOrientations;
  //    }
  //    public set SupportedOrientations(value: DisplayOrientation) {
  //        this.supportedOrientations = value;
  //        this.isDeviceDirty = true;
  //    }
  //    public get GraphicsDevice(): GraphicsDevice {
  //        return this.device;
  //    }
  //    public event EventHandler<EventArgs> DeviceCreated
  //    {
  //    add
  //    {
  //        this.deviceCreated += value;
  //    }
  //    remove
  //    {
  //        this.deviceCreated -= value;
  //    }
  //}
  //public event EventHandler < EventArgs > DeviceResetting
  //{
  //    add
  //    {
  //        this.deviceResetting += value;
  //    }
  //    remove
  //    {
  //        this.deviceResetting -= value;
  //    }
  //}
  //public event EventHandler < EventArgs > DeviceReset
  //{
  //    add
  //    {
  //        this.deviceReset += value;
  //    }
  //    remove
  //    {
  //        this.deviceReset -= value;
  //    }
  //}
  //public event EventHandler < EventArgs > DeviceDisposing
  //{
  //    add
  //    {
  //        this.deviceDisposing += value;
  //    }
  //    remove
  //    {
  //        this.deviceDisposing -= value;
  //    }
  //}
  //public event EventHandler < PreparingDeviceSettingsEventArgs > PreparingDeviceSettings;
  //public event EventHandler < EventArgs > Disposed;
  constructor(game) {
    if (game == null) {
    }
    this.game = game;
  }
  ApplyChanges() {
    this.ChangeDevice(false);
  }
  ToggleFullScreen() {
    this.IsFullScreen = !this.IsFullScreen;
    this.ChangeDevice(false);
  }
  //private GameWindowScreenDeviceNameChanged(sender: Object, e: EventArgs): void {
  //    if (this.inDeviceTransition)
  //        return
  //    this.ChangeDevice(false);
  //}
  //private GameWindowClientSizeChanged(sender: Object, e: EventArgs): void {
  //    if (this.inDeviceTransition || this.game.Window.ClientBounds.Height == 0 && this.game.Window.ClientBounds.Width == 0)
  //        return
  //    this.resizedBackBufferWidth = this.game.Window.ClientBounds.Width;
  //    this.resizedBackBufferHeight = this.game.Window.ClientBounds.Height;
  //    this.useResizedBackBuffer = true;
  //    this.ChangeDevice(false);
  //}
  //private GameWindowOrientationChanged(sender: Object, e: EventArgs): void {
  //    if (this.inDeviceTransition || this.game.Window.ClientBounds.Height == 0 && this.game.Window.ClientBounds.Width == 0 || this.game.Window.CurrentOrientation == this.currentWindowOrientation)
  //        return
  //    this.ChangeDevice(false);
  //}
  //private EnsureDevice(): boolean {
  //    if (this.device == null)
  //        return false;
  //    return this.EnsureDevicePlatform();
  //}
  //private CreateDevice(newInfo: GraphicsDeviceInformation): void {
  //    if (this.device != null) {
  //        this.device.Dispose();
  //        this.device = <GraphicsDevice>null;
  //    }
  //    this.OnPreparingDeviceSettings(<Object>this, new PreparingDeviceSettingsEventArgs(newInfo));
  //    this.MassagePresentParameters(newInfo.PresentationParameters);
  //    try {
  //        this.ValidateGraphicsDeviceInformation(newInfo);
  //        this.device = new GraphicsDevice(newInfo.Adapter, newInfo.GraphicsProfile, newInfo.PresentationParameters);
  //        this.device.DeviceResetting += new EventHandler<EventArgs>(this.HandleDeviceResetting);
  //        this.device.DeviceReset += new EventHandler<EventArgs>(this.HandleDeviceReset);
  //        this.device.DeviceLost += new EventHandler<EventArgs>(this.HandleDeviceLost);
  //        this.device.Disposing += new EventHandler<EventArgs>(this.HandleDisposing);
  //    }
  //    catch (__ex__) {
  //        var ex = __ex__; if (ex instanceof NoSuitableGraphicsDeviceException) {
  //            throw ex;
  //        }
  //        var ex = __ex__; if (ex instanceof ArgumentException) {
  //            throw new NoSuitableGraphicsDeviceException(Resources.Direct3DInvalidCreateParameters, <Exception>ex);
  //        }
  //        var ex = __ex__; if (ex instanceof Exception) {
  //            throw new NoSuitableGraphicsDeviceException(Resources.Direct3DCreateError, ex);
  //        }
  //    }
  //    GraphicsDeviceManager.ConfigureTouchInput(newInfo.PresentationParameters);
  //    this.OnDeviceCreated(<Object>this, EventArgs.Empty);
  //}
  ChangeDevice(forceCreate) {
    if (this.game == null) {
    }
  }
  //private MassagePresentParameters(pp: PresentationParameters): void {
  //    var flag1: boolean = pp.BackBufferWidth == 0;
  //    var flag2: boolean = pp.BackBufferHeight == 0;
  //    if (pp.IsFullScreen)
  //        return
  //    var hWnd: IntPtr = pp.DeviceWindowHandle;
  //    if (hWnd == IntPtr.Zero) {
  //        if (this.game == null)
  //            throw new InvalidOperationException(Resources.GraphicsComponentNotAttachedToGame);
  //        hWnd = this.game.Window.Handle;
  //    }
  //    var rect: NativeMethods.RECT;
  //    NativeMethods.GetClientRect(hWnd, rect);
  //    if (flag1 && rect.Right == 0)
  //        pp.BackBufferWidth = 1;
  //    if (!flag2 || rect.Bottom != 0)
  //        return
  //    pp.BackBufferHeight = 1;
  //}
  //private static ConfigureTouchInput(pp: PresentationParameters): void {
  //    TouchPanel.DisplayWidth = pp.BackBufferWidth;
  //    TouchPanel.DisplayHeight = pp.BackBufferHeight;
  //    TouchPanel.DisplayOrientation = pp.DisplayOrientation;
  //}
  //protected FindBestDevice(anySuitableDevice: boolean): GraphicsDeviceInformation {
  //    return this.FindBestPlatformDevice(anySuitableDevice);
  //}
  //protected CanResetDevice(newDeviceInfo: GraphicsDeviceInformation): boolean {
  //    return this.device.GraphicsProfile == newDeviceInfo.GraphicsProfile;
  //}
  //protected RankDevices(foundDevices: List<GraphicsDeviceInformation>): void {
  //    this.RankDevicesPlatform(foundDevices);
  //}
  //private HandleDisposing(sender: Object, e: EventArgs): void {
  //    this.OnDeviceDisposing(<Object>this, EventArgs.Empty);
  //}
  //private HandleDeviceLost(sender: Object, e: EventArgs): void {
  //}
  //private HandleDeviceReset(sender: Object, e: EventArgs): void {
  //    this.OnDeviceReset(<Object>this, EventArgs.Empty);
  //}
  //private HandleDeviceResetting(sender: Object, e: EventArgs): void {
  //    this.OnDeviceResetting(<Object>this, EventArgs.Empty);
  //}
  //protected OnDeviceCreated(sender: Object, args: EventArgs): void {
  //    if (this.deviceCreated == null)
  //        return
  //    this.deviceCreated(sender, args);
  //}
  //protected OnDeviceDisposing(sender: Object, args: EventArgs): void {
  //    if (this.deviceDisposing == null)
  //        return
  //    this.deviceDisposing(sender, args);
  //}
  //protected OnDeviceReset(sender: Object, args: EventArgs): void {
  //    if (this.deviceReset == null)
  //        return
  //    this.deviceReset(sender, args);
  //}
  //protected OnDeviceResetting(sender: Object, args: EventArgs): void {
  //    if (this.deviceResetting == null)
  //        return
  //    this.deviceResetting(sender, args);
  //}
  //protected Dispose(disposing: boolean): void {
  //    if (!disposing)
  //        return
  //    if (this.game != null) {
  //        if (this.game.Services.GetService(/*typeof*/IGraphicsDeviceService) == this)
  //            this.game.Services.RemoveService(/*typeof*/IGraphicsDeviceService);
  //        this.game.Window.ClientSizeChanged -= new EventHandler<EventArgs>(this.GameWindowClientSizeChanged);
  //        this.game.Window.ScreenDeviceNameChanged -= new EventHandler<EventArgs>(this.GameWindowScreenDeviceNameChanged);
  //        this.game.Window.OrientationChanged -= new EventHandler<EventArgs>(this.GameWindowOrientationChanged);
  //    }
  //    if (this.device != null) {
  //        this.device.Dispose();
  //        this.device = <GraphicsDevice>null;
  //    }
  //    if (this.Disposed == null)
  //        return
  //    this.Disposed(<Object>this, EventArgs.Empty);
  //}
  //protected OnPreparingDeviceSettings(sender: Object, args: PreparingDeviceSettingsEventArgs): void {
  //    if (this.PreparingDeviceSettings == null)
  //        return
  //    this.PreparingDeviceSettings(sender, args);
  //}
  //Dispose(): void {
  //    this.Dispose(true);
  //    GC.SuppressFinalize(<Object>this);
  //}
  //CreateDevice(): void {
  //    this.ChangeDevice(true);
  //}
  //BeginDraw(): boolean {
  //    if (!this.EnsureDevice())
  //        return false;
  //    this.beginDrawOk = true;
  //    return true;
  //}
  //EndDraw(): void {
  //    if (!this.beginDrawOk)
  //        return
  //    if (this.device == null)
  //        return
  //    try {
  //        this.device.Present();
  //    }
  //    catch (__ex__) {
  //        var ex = __ex__; if (ex instanceof DeviceLostException) {
  //        }
  //        var ex = __ex__; if (ex instanceof DeviceNotResetException) {
  //        }
  //    }
  //}
  //private ReadDefaultGraphicsProfile(): GraphicsProfile {
  //    var manifestResourceStream: Stream = this.game.GetType().Assembly.GetManifestResourceStream("Microsoft.Xna.Framework.RuntimeProfile");
  //    if (manifestResourceStream != null) {
  //        var streamReader: StreamReader = new StreamReader(manifestResourceStream)
  //        try {
  //            var str: string = streamReader.ReadLine();
  //            if (str != null)
  //                return str.EndsWith("Reach") || !str.EndsWith("HiDef") ? GraphicsProfile.Reach : GraphicsProfile.HiDef;
  //        }
  //        finally {
  //            if (streamReader != null) streamReader.Dispose();
  //        }
  //    }
  //    return GraphicsProfile.Reach;
  //}
  //private RankDevicesPlatform(foundDevices: List<GraphicsDeviceInformation>): void {
  //    foundDevices.Sort(<IComparer<GraphicsDeviceInformation>>new GraphicsDeviceInformationComparer(this));
  //}
  //private FindBestPlatformDevice(anySuitableDevice: boolean): GraphicsDeviceInformation {
  //    var foundDevices: List<GraphicsDeviceInformation> = new List<GraphicsDeviceInformation>();
  //    this.AddDevices(anySuitableDevice, foundDevices);
  //    if (foundDevices.Count == 0 && this.PreferMultiSampling) {
  //        this.PreferMultiSampling = false;
  //        this.AddDevices(anySuitableDevice, foundDevices);
  //    }
  //    if (foundDevices.Count == 0)
  //        throw new NoSuitableGraphicsDeviceException(string.Format(<IFormatProvider>CultureInfo.CurrentCulture, Resources.NoCompatibleDevices, <Object>this.graphicsProfile), <Exception>null);
  //    this.RankDevices(foundDevices);
  //    if (foundDevices.Count == 0)
  //        throw new NoSuitableGraphicsDeviceException(Resources.NoCompatibleDevicesAfterRanking, <Exception>null);
  //    return foundDevices[0];
  //}
  //private AddDevices(anySuitableDevice: boolean, foundDevices: List<GraphicsDeviceInformation>): void {
  //    var handle: IntPtr = this.game.Window.Handle;
  //    GraphicsAdapter.Adapters.forEach(function (adapter) {
  //        if (!anySuitableDevice) {
  //            if (!this.IsWindowOnAdapter(handle, adapter))
  //                continue;
  //        }
  //        try {
  //            if (adapter.IsProfileSupported(this.graphicsProfile)) {
  //                var baseDeviceInfo: GraphicsDeviceInformation = new GraphicsDeviceInformation();
  //                baseDeviceInfo.Adapter = adapter;
  //                baseDeviceInfo.GraphicsProfile = this.graphicsProfile;
  //                baseDeviceInfo.PresentationParameters.DeviceWindowHandle = handle;
  //                baseDeviceInfo.PresentationParameters.MultiSampleCount = 0;
  //                baseDeviceInfo.PresentationParameters.IsFullScreen = this.IsFullScreen;
  //                baseDeviceInfo.PresentationParameters.PresentationInterval = this.SynchronizeWithVerticalRetrace ? PresentInterval.One : PresentInterval.Immediate;
  //                this.AddDevices(adapter, adapter.CurrentDisplayMode, baseDeviceInfo, foundDevices);
  //                if (this.isFullScreen) {
  //                    adapter.SupportedDisplayModes.forEach(function (supportedDisplayMode) {
  //                        if (supportedDisplayMode.Width >= 640 && supportedDisplayMode.Height >= 480)
  //                            this.AddDevices(adapter, supportedDisplayMode, baseDeviceInfo, foundDevices);
  //                    });
  //                }
  //            }
  //        }
  //        catch (ex) {
  //        }
  //    });
  //}
  //    private AddDevices(adapter: GraphicsAdapter, mode: DisplayMode, baseDeviceInfo: GraphicsDeviceInformation, foundDevices: List<GraphicsDeviceInformation>): void {
  //        var deviceInformation: GraphicsDeviceInformation = baseDeviceInfo.Clone();
  //        if (this.IsFullScreen) {
  //            deviceInformation.PresentationParameters.BackBufferWidth = mode.Width;
  //            deviceInformation.PresentationParameters.BackBufferHeight = mode.Height;
  //        }
  //        else if (this.useResizedBackBuffer) {
  //            deviceInformation.PresentationParameters.BackBufferWidth = this.resizedBackBufferWidth;
  //            deviceInformation.PresentationParameters.BackBufferHeight = this.resizedBackBufferHeight;
  //        }
  //        else {
  //            deviceInformation.PresentationParameters.BackBufferWidth = this.PreferredBackBufferWidth;
  //            deviceInformation.PresentationParameters.BackBufferHeight = this.PreferredBackBufferHeight;
  //        }
  //        var selectedFormat: SurfaceFormat;
  //        var selectedDepthFormat: DepthFormat;
  //        var selectedMultiSampleCount: number;
  //        adapter.QueryBackBufferFormat(deviceInformation.GraphicsProfile, mode.Format, this.PreferredDepthStencilFormat, this.PreferMultiSampling ? 16 : 0, selectedFormat, selectedDepthFormat, selectedMultiSampleCount);
  //        deviceInformation.PresentationParameters.BackBufferFormat = selectedFormat;
  //        deviceInformation.PresentationParameters.DepthStencilFormat = selectedDepthFormat;
  //        deviceInformation.PresentationParameters.MultiSampleCount = selectedMultiSampleCount;
  //        if (foundDevices.Contains(deviceInformation))
  //            return
  //        foundDevices.Add(deviceInformation);
  //    }
  //    private IsWindowOnAdapter(windowHandle: IntPtr, adapter: GraphicsAdapter): boolean {
  //        return WindowsGameWindow.ScreenFromAdapter(adapter) == WindowsGameWindow.ScreenFromHandle(windowHandle);
  //    }
  //    private EnsureDevicePlatform(): bool {
  //        if (this.isReallyFullScreen && !this.game.IsActiveIgnoringGuide)
  //            return false;
  //        switch (this.device.GraphicsDeviceStatus) {
  //            case GraphicsDeviceStatus.Lost:
  //                Thread.Sleep((int) GraphicsDeviceManager.deviceLostSleepTime.TotalMilliseconds);
  //                return false;
  //            case GraphicsDeviceStatus.NotReset:
  //                Thread.Sleep((int) GraphicsDeviceManager.deviceLostSleepTime.TotalMilliseconds);
  //                try {
  //                    this.ChangeDevice(false);
  //                    break;
  //                }
  //                catch (DeviceLostException ex)
  //                {
  //                    return false;
  //                }
  //          catch
  //                {
  //                    this.ChangeDevice(true);
  //                    break;
  //                }
  //        }
  //        return true;
  //    }
  //    private ValidateGraphicsDeviceInformation(GraphicsDeviceInformation devInfo): void {
  //        GraphicsAdapter adapter = devInfo.Adapter;
  //        PresentationParameters presentationParameters = devInfo.PresentationParameters;
  //        if (!presentationParameters.IsFullScreen)
  //            return;
  //        if (presentationParameters.BackBufferWidth == 0 || presentationParameters.BackBufferHeight == 0)
  //            throw new ArgumentException(Resources.ValidateBackBufferDimsFullScreen);
  //        bool flag = true;
  //        DisplayMode currentDisplayMode = adapter.CurrentDisplayMode;
  //        if (currentDisplayMode.Format != presentationParameters.BackBufferFormat && currentDisplayMode.Width != presentationParameters.BackBufferWidth && currentDisplayMode.Height != presentationParameters.BackBufferHeight) {
  //            flag = false;
  //            foreach(DisplayMode displayMode in adapter.SupportedDisplayModes[presentationParameters.BackBufferFormat])
  //            {
  //                if (displayMode.Width == presentationParameters.BackBufferWidth && displayMode.Height == presentationParameters.BackBufferHeight) {
  //                    flag = true;
  //                    break;
  //                }
  //            }
  //        }
  //        if (!flag)
  //            throw new ArgumentException(Resources.ValidateBackBufferDimsModeFullScreen);
  //    }
  //}
};

// XNA-TS-VSCode/src/keyboardState.ts
var Keys = class _Keys {
  static f1 = false;
  static f2 = false;
  static f3 = false;
  static f4 = false;
  static f5 = false;
  static f6 = false;
  static f7 = false;
  static f8 = false;
  static f9 = false;
  static f10 = false;
  static f11 = false;
  static f12 = false;
  static right = false;
  static left = false;
  static space = false;
  static up = false;
  static down = false;
  static leftctrl = false;
  static rightctrl = false;
  static a = false;
  static b = false;
  static c = false;
  static d = false;
  static e = false;
  static f = false;
  static g = false;
  static h = false;
  static i = false;
  static j = false;
  static k = false;
  static l = false;
  static m = false;
  static n = false;
  static o = false;
  static p = false;
  static q = false;
  static r = false;
  static s = false;
  static t = false;
  static u = false;
  static v = false;
  static w = false;
  static x = false;
  static y = false;
  static z = false;
  static get F1() {
    return _Keys.f1;
  }
  static set F1(value) {
    _Keys.f1 = value;
  }
  static get F2() {
    return _Keys.f2;
  }
  static set F2(value) {
    _Keys.f2 = value;
  }
  static get F3() {
    return _Keys.f3;
  }
  static set F3(value) {
    _Keys.f3 = value;
  }
  static get F4() {
    return _Keys.f4;
  }
  static set F4(value) {
    _Keys.f4 = value;
  }
  static get F5() {
    return _Keys.f5;
  }
  static set F5(value) {
    _Keys.f5 = value;
  }
  static get F6() {
    return _Keys.f6;
  }
  static set F6(value) {
    _Keys.f6 = value;
  }
  static get F7() {
    return _Keys.f7;
  }
  static set F7(value) {
    _Keys.f7 = value;
  }
  static get F8() {
    return _Keys.f8;
  }
  static set F8(value) {
    _Keys.f8 = value;
  }
  static get F9() {
    return _Keys.f9;
  }
  static set F9(value) {
    _Keys.f9 = value;
  }
  static get F10() {
    return _Keys.f10;
  }
  static set F10(value) {
    _Keys.f10 = value;
  }
  static get F11() {
    return _Keys.f11;
  }
  static set F11(value) {
    _Keys.f11 = value;
  }
  static get F12() {
    return _Keys.f12;
  }
  static set F12(value) {
    _Keys.f12 = value;
  }
  static get Right() {
    return _Keys.right;
  }
  static set Right(value) {
    _Keys.right = value;
  }
  static get Left() {
    return _Keys.left;
  }
  static set Left(value) {
    _Keys.left = value;
  }
  static get Space() {
    return _Keys.space;
  }
  static set Space(value) {
    _Keys.space = value;
  }
  static get Up() {
    return _Keys.up;
  }
  static set Up(value) {
    _Keys.up = value;
  }
  static get Down() {
    return _Keys.down;
  }
  static set Down(value) {
    _Keys.down = value;
  }
  static get LeftControl() {
    return _Keys.leftctrl;
  }
  static set LeftControl(value) {
    _Keys.leftctrl = value;
  }
  static get RightControl() {
    return _Keys.rightctrl;
  }
  static set RightControl(value) {
    _Keys.rightctrl = value;
  }
  static get A() {
    return _Keys.a;
  }
  static set A(value) {
    _Keys.a = value;
  }
  static get B() {
    return _Keys.b;
  }
  static set B(value) {
    _Keys.b = value;
  }
  static get C() {
    return _Keys.c;
  }
  static set C(value) {
    _Keys.c = value;
  }
  static get D() {
    return _Keys.d;
  }
  static set D(value) {
    _Keys.d = value;
  }
  static get E() {
    return _Keys.e;
  }
  static set E(value) {
    _Keys.e = value;
  }
  static get F() {
    return _Keys.f;
  }
  static set F(value) {
    _Keys.f = value;
  }
  static get G() {
    return _Keys.g;
  }
  static set G(value) {
    _Keys.g = value;
  }
  static get H() {
    return _Keys.h;
  }
  static set H(value) {
    _Keys.h = value;
  }
  static get I() {
    return _Keys.i;
  }
  static set I(value) {
    _Keys.i = value;
  }
  static get J() {
    return _Keys.j;
  }
  static set J(value) {
    _Keys.j = value;
  }
  static get K() {
    return _Keys.k;
  }
  static set K(value) {
    _Keys.k = value;
  }
  static get L() {
    return _Keys.l;
  }
  static set L(value) {
    _Keys.l = value;
  }
  static get M() {
    return _Keys.m;
  }
  static set M(value) {
    _Keys.m = value;
  }
  static get N() {
    return _Keys.n;
  }
  static set N(value) {
    _Keys.n = value;
  }
  static get O() {
    return _Keys.o;
  }
  static set O(value) {
    _Keys.o = value;
  }
  static get P() {
    return _Keys.p;
  }
  static set P(value) {
    _Keys.p = value;
  }
  static get Q() {
    return _Keys.q;
  }
  static set Q(value) {
    _Keys.q = value;
  }
  static get R() {
    return _Keys.r;
  }
  static set R(value) {
    _Keys.r = value;
  }
  static get S() {
    return _Keys.s;
  }
  static set S(value) {
    _Keys.s = value;
  }
  static get T() {
    return _Keys.t;
  }
  static set T(value) {
    _Keys.t = value;
  }
  static get U() {
    return _Keys.u;
  }
  static set U(value) {
    _Keys.u = value;
  }
  static get V() {
    return _Keys.v;
  }
  static set V(value) {
    _Keys.v = value;
  }
  static get W() {
    return _Keys.w;
  }
  static set W(value) {
    _Keys.w = value;
  }
  static get X() {
    return _Keys.x;
  }
  static set X(value) {
    _Keys.x = value;
  }
  static get Y() {
    return _Keys.y;
  }
  static set Y(value) {
    _Keys.y = value;
  }
  static get Z() {
    return _Keys.z;
  }
  static set Z(value) {
    _Keys.z = value;
  }
};
var Keyboard = class {
  constructor() {
  }
  static GetState() {
    return this;
  }
  static IsKeyDown(key) {
    return key;
  }
};

// XNA-TS-VSCode/src/mathHelper.ts
var MathHelper = class _MathHelper {
  static E = 2.718282;
  static Log2E = 1.442695;
  static Log10E = 0.4342945;
  static Pi = 3.141593;
  static TwoPi = 6.283185;
  static PiOver2 = 1.570796;
  static PiOver4 = 0.7853982;
  static ToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  static ToDegrees(radians) {
    return radians * 57.29578;
  }
  static Distance(value1, value2) {
    return Math.abs(value1 - value2);
  }
  static Min(value1, value2) {
    return Math.min(value1, value2);
  }
  static Max(value1, value2) {
    return Math.max(value1, value2);
  }
  static Clamp(value, min, max) {
    value = value > max ? max : value;
    value = value < min ? min : value;
    return value;
  }
  static Lerp(value1, value2, amount) {
    return value1 + (value2 - value1) * amount;
  }
  static Barycentric(value1, value2, value3, amount1, amount2) {
    return value1 + amount1 * (value2 - value1) + amount2 * (value3 - value1);
  }
  static SmoothStep(value1, value2, amount) {
    let num = _MathHelper.Clamp(amount, 0, 1);
    return _MathHelper.Lerp(value1, value2, num * num * (3 - 2 * num));
  }
  static CatmullRom(value1, value2, value3, value4, amount) {
    let num1 = amount * amount;
    let num2 = amount * num1;
    return 0.5 * (2 * value2 + (-value1 + value3) * amount + (2 * value1 - 5 * value2 + 4 * value3 - value4) * num1 + (-value1 + 3 * value2 - 3 * value3 + value4) * num2);
  }
  static Hermite(value1, tangent1, value2, tangent2, amount) {
    let num1 = amount;
    let num2 = num1 * num1;
    let num3 = num1 * num2;
    let num4 = 2 * num3 - 3 * num2 + 1;
    let num5 = -2 * num3 + 3 * num2;
    let num6 = num3 - 2 * num2 + num1;
    let num7 = num3 - num2;
    return value1 * num4 + value2 * num5 + tangent1 * num6 + tangent2 * num7;
  }
  static WrapAngle(angle) {
    angle = 6.28318548202515;
    if (angle <= -3.14159274101257) {
      angle += 6.283185;
    } else if (angle > 3.14159274101257) {
      angle -= 6.283185;
    }
    return angle;
  }
};

// XNA-TS-VSCode/src/point.ts
var Point = class {
  static Zero;
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
};

// XNA-TS-VSCode/src/random.ts
var Random = class {
  Next(start, end) {
    return end - start;
  }
};

// XNA-TS-VSCode/src/rectangle.ts
var Rectangle = class _Rectangle {
  X;
  Y;
  Width;
  Height;
  static get Empty() {
    return new _Rectangle(0, 0, 0, 0);
  }
  get Left() {
    return this.X;
  }
  get Right() {
    return this.X + this.Width;
  }
  get Top() {
    return this.Y;
  }
  get Bottom() {
    return this.Y + this.Height;
  }
  constructor(x, y, width, height) {
    this.X = x;
    this.Y = y;
    this.Width = width;
    this.Height = height;
  }
  get Center() {
    return new Point(this.X + this.Width / 2, this.Y + this.Height / 2);
  }
  Contains(value) {
    if (this.X <= value.X && value.X < this.X + this.Width && this.Y <= value.Y) {
      return value.Y < this.Y + this.Height;
    }
    return false;
  }
  Intersects(value) {
    if (value.X < this.X + this.Width && this.X < value.X + value.Width && value.Y < this.Y + this.Height)
      return this.Y < value.Y + value.Height;
    return false;
  }
};

// XNA-TS-VSCode/src/rectangleextensions.ts
var RectangleExtensions = class {
  static GetIntersectionDepth(rectA, rectB) {
    var halfWidthA = rectA.Width / 2;
    var halfHeightA = rectA.Height / 2;
    var halfWidthB = rectB.Width / 2;
    var halfHeightB = rectB.Height / 2;
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
    return new Vector2(rect.X + rect.Width / 2, rect.Bottom);
  }
};

// XNA-TS-VSCode/src/texturedButton.ts
var TexturedButton = class {
  x;
  y;
  width;
  height;
  image;
  onClick;
  constructor(x, y, width, height, imageSrc, onClick) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.onClick = onClick;
    this.image = new Image();
    this.image.src = imageSrc;
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  containsPoint(mouseX, mouseY) {
    return mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height;
  }
  click(mouseX, mouseY) {
    if (this.containsPoint(mouseX, mouseY)) {
      this.onClick();
    }
  }
};
export {
  BoundingBox,
  Buttons,
  Color,
  ContentManager,
  Controls,
  Game,
  GameClock,
  GameTime,
  GraphicsDeviceManager,
  Keyboard,
  Keys,
  MathHelper,
  Point,
  Random,
  Rectangle,
  RectangleExtensions,
  SpriteBatch,
  SpriteEffects,
  TexturedButton,
  TimeSpan,
  Vector2
};

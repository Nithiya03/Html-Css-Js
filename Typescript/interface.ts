interface Shape {
    getArea: () => number;
  }
  
  class Rectangle implements Shape {
    public constructor(protected  width: number, protected  height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  const myRect = new Rectangle(10,20);
  
  console.log(myRect.getArea());
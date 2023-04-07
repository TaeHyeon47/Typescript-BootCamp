class Vehicle {
  //   color: string = 'red';

  //   constructor(color: string) {
  //     this.color = color;
  //   }

  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

// const vehicle = new Vehicle('orange');
// console.log(vehicle.color);

class Car2 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car2 = new Car2(4, 'red');
car2.startDrivingProcess();
// car2.honk();

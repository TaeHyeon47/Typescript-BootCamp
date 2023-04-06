interface Vehicle {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// };

const printVehicle = (vehicle: Vehicle): void => {
  //   console.log(`Name: ${vehicle.name}`);
  //   console.log(`Year: ${vehicle.year}`);
  //   console.log(`Broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
printVehicle(drink2);

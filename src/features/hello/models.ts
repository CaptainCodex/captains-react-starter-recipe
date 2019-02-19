/* Hello */
export interface IHello {
  greeting: string;
}

export class Hello implements IHello {
  constructor(public greeting: string) {}

  static create(json: Hello) {
    return new Hello(json.greeting);
  }
}

/* World */
export interface IWorld {
  salutation: string;
}

export class World implements IWorld {
  constructor(public salutation: string) {}

  static create(json: World) {
    return new World(json.salutation);
  }
}

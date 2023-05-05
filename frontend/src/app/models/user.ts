export interface User {
    username: string;
    password: string;
    email: string;
}
export class UserImpl implements User {
    constructor(
      public username: string,
      public password: string,
      public email: string
    ) {}
}

  
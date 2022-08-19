export class Login {
  static readonly type = '[Auth Login] LoginUser';
  constructor(public user: { email: string, password: string }) {}
}

export class SetUser {
  static readonly type = '[Auth Login] SetUser';
  constructor(public user: { email: string, password: string }) {}
}

export class Logout {
  static readonly type = '[Layout] LogoutUser';
}

export class ClearUser {
  static readonly type = '[Auth State] LogoutUser';
}

import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { User } from '@paltrack/client/shared/interfaces';
import { Md5 } from 'ts-md5';
import { ClearUser, Login, Logout, SetUser } from './auth.actions';
import { Navigate } from '@ngxs/router-plugin';

const md5 = new Md5();

const USER: User = {
  email: 'admin@flights.co.za',
  hash: `${md5.appendStr('admin@flights.co.za').end()}`,
}

export interface AuthStateModel {
  user: User | undefined | null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: {
      email: 'admin@flights.co.za',
      hash: `${md5.appendStr('admin@flights.co.za').end()}`,
    },
  },
})
@Injectable()
export class AuthState {
  @Selector() static user(state: AuthStateModel) {
    return USER;
  }
  @Selector() static isAuthenticated(state: AuthStateModel) {
    return !!USER;
  }

  @Action(Login)
  userLogin(ctx: StateContext<AuthStateModel>, action: Login) {
    console.log("works")
    return ctx.dispatch([new SetUser(action.user), new Navigate(['/home'])]);
  }

  @Action(SetUser)
  setUser(ctx: StateContext<AuthStateModel>, action: Login) {
    return ctx.setState({
      user: {
        email: action.user.email,
        hash: `${md5.appendStr(action.user.email).end()}`,
      },
    });
  }

  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    return ctx.dispatch([new ClearUser(), new Navigate(['/auth', 'login'])]);
  }

  @Action(ClearUser)
  clearUser(ctx: StateContext<AuthStateModel>) {
    return ctx.setState({
      user: null,
    });
  }
}

import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { MenuButtonClick } from './layout.actions';

export interface LayoutStateModel {
  isOpenDrawer: boolean;
}

@State<LayoutStateModel>({
  name: 'layout',
  defaults: {
    isOpenDrawer: false
  }
})
@Injectable()
export class LayoutState {
  @Selector() static isOpenDrawer(state: LayoutStateModel) {
    return state.isOpenDrawer;
  }

  @Action(MenuButtonClick)
  toggleDrawer(ctx: StateContext<LayoutStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      isOpenDrawer: !state.isOpenDrawer
    });
  }
}

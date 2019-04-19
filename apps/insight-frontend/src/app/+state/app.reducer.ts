import { AppAction, AppActionTypes } from './app.actions';

import { User } from '@insight/shared-model';

export const APP_FEATURE_KEY = 'app';

export interface AppState {
  user: User;
  error?: any;
}

export interface AppPartialState {
  readonly [APP_FEATURE_KEY]: AppState;
}

export const appInitialState: AppState = {
  user: null
};

export function appReducer(state: AppState = appInitialState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionTypes.InitUser: {
      state = { ...state};
      break;
    }
    case AppActionTypes.Login: {
      state = { ...state};
      break;
    }
    case AppActionTypes.SetUser: {
      state = { ...state, user: action.payload };
      break;
    }

    case AppActionTypes.Logout: {
      state = { ...state };
      break;
    }
    case AppActionTypes.LogoutSuccess: {
      state = { ...appInitialState };
      break;
    }
    case AppActionTypes.AuthError: {
      state = { ...appInitialState, error: action.payload, user: null };
      break;
    }
  }

  return state;
}

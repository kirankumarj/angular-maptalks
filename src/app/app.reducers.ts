import {AppState} from './app.state';
import {ActionReducerMap} from '@ngrx/store';
import * as orgReducers from './org/store/org.reducers';
import * as assetsReduceras from './new-assets/store/assets.reducers';

export const AllReducers:ActionReducerMap<AppState>={
            organizations:orgReducers.orgReducer,
            assets:assetsReduceras.reducer
}
import * as fromOrganization from './org/store/org.reducers';
import * as fromAssets from './new-assets/store/assets.reducers';


export interface AppState{
    organizations:fromOrganization.State;
    assets:fromAssets.AssetsState
}
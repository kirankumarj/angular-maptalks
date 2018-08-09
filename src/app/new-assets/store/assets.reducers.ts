import {AssetModel} from '../assets.model';
import * as assetsActions from './assets.action';


export interface AssetsState{
   assetsList:AssetModel[]
}

const assetsState={
    assetsList:[{
        assetName:'Asset1',
        orgnization:'Organization'

    }]
}

export function reducer(state=assetsState,action):AssetsState{
    switch(action.type){
        case assetsActions:
        //do something
       return state;
    }
    return state;
}
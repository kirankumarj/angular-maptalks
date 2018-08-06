import { Action } from "@ngrx/store";
import { AssetModel } from "../assets.model";
export const CREATE_ASSET="['assets'] create";


export class CreateAsset implements Action{
    readonly type=CREATE_ASSET;
    constructor(payload:AssetModel){}
}


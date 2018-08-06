import { Actions, Effect } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import * as assetActions from './assets.action';
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { AssetsService } from "../../services/assets/assets.service";

@Injectable()
export class AssetsEffects{
    constructor(private actions$:Actions,private assetsService:AssetsService){}

    @Effect()
    createAsset$:Observable<any>=this.actions$.ofType(assetActions.CREATE_ASSET)
    .pipe(
        switchMap(()=>{
            console.log("From the switch Map.....");
            return this.assetsService.createAsset();
        })
    )
}

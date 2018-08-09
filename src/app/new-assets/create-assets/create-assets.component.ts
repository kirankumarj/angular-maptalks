import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as maptalks from 'maptalks';
import { Store } from '@ngrx/store';
import { AssetsState } from '../store/assets.reducers';
import * as AssetActions from '../store/assets.action';
@Component({
  selector: 'app-create-assets',
  templateUrl: './create-assets.component.html',
  styleUrls: ['./create-assets.component.css']
})
export class CreateAssetsComponent implements OnInit,AfterViewInit {
  assets:FormGroup;
  map;
  step = 0;
  newOrg = {
    name: '',
    latitude: 0,
    longitude: 0,
    type: '',
    info: '',
    address: {
      city: '',
      country: '',
      postcode: '',
      state: '',
      state_district: ''
    }
  };
  organizationList=[
    {
      id:1,
      name:'Org1'
    },
    {
      id:2,
      name:'Org2'
    },
    {
      id:3,
      name:'Org3'
    }];

  constructor(private store:Store<AssetsState>) { }

  ngOnInit() {
        this.createAssetForm();
        this.newOrg.latitude = 78.498;
        this.newOrg.longitude = 17.476;
  }
  
  createAssetForm(){
    this.assets=new FormGroup({
      id:new FormControl('1'),
      name:new FormControl('Sample Assets..'),
      organizationName:new FormControl('Sample Organization Name')
    });
  }
  ngAfterViewInit(){
    window.navigator.geolocation.getCurrentPosition((location) => {
      this.newOrg.latitude = location.coords.longitude;
      this.newOrg.longitude  = location.coords.latitude;
      this.loadMap();
      }
  );
  }
  loadMap() {
    this.map = new maptalks.Map('map', {
      center: [this.newOrg.latitude, this.newOrg.longitude],
      zoom: 12,
      centerCross: true,
      zoomControl: {
        'position'  : 'top-right'
      },
      baseLayer: new maptalks.TileLayer('base', {
        // urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        // subdomains: ['a', 'b' , 'c' , 'd'],
        // attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
      urlTemplate: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      subdomains: ['a', 'b' , 'c'],
      attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
    })
    });
  }
createAsset(){
  console.log("From the create asset button.....");
  console.log(this.assets);
  this.store.dispatch({type:AssetActions.CREATE_ASSET});
}
}

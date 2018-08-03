import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Office } from '../../models/office/Office';
import { InfoService } from '../../info.service';
import { OrgMapInfo } from '../../models/organization/OrgMapInfo';
import { MatSnackBar } from '@angular/material';

import * as maptalks from 'maptalks';
import { PopupComponent } from '../../popup/popup.component';
import { OrganizationService } from '../../services/organization.service';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import { AddOrganization } from '../store/org.actions';



@Component({
  selector: 'app-orgcreate',
  templateUrl: './orgcreate.component.html',
  styleUrls: ['./orgcreate.component.css']
})

export class OrgcreateComponent implements OnInit, AfterViewInit {
  office: Office;
  step = 0;
  searchAddress;
  organizations: OrgMapInfo[];
  address;
  map;
  extent;
  ex;
  mapStatus;
  center;
  addressInfo;
  addressLocation = [];
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
  organizationsList = [];
  constructor(private service: InfoService, private snackBar: MatSnackBar,
    private organizationService: OrganizationService ,
    private store: Store<AppState>
) { }
  ngOnInit() {
    this.newOrg.latitude = 78.498;
    this.newOrg.longitude = 17.476;
    if (environment.isDataAvailableInRealService) {
      console.log('Hit the service :: Get the all Org Details ');
      this.getAllOrganizations();
    } else {
      console.log('Mock Data :: Get the all Org Details ');
      this.service.mapLocation.subscribe(res => this.organizationsList = res);
      this.service.saveOrganization(this.organizationsList);
    }
  }
  ngAfterViewInit() {
    window.navigator.geolocation.getCurrentPosition((location) => {
        this.newOrg.latitude = location.coords.longitude;
        this.newOrg.longitude  = location.coords.latitude;
        this.loadMap();
        }
    );
  }
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
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
    this.map.on('zoomend moveend', () => {
          this.getStatus();
    });
}
getStatus() {
  this.addressInfo = '';
  this.step = 2;
  this.searchAddress = '';
  this.newOrg.address.city = '';
  this.newOrg.address.state = '';
  this.newOrg.address.postcode = '';
  this.newOrg.address.country = '';
  this.newOrg.address.state_district = '';
  this.center = this.map.getCenter();
  this.newOrg.latitude =  parseFloat(this.center.x.toFixed(5));
  this.newOrg.longitude = parseFloat(this.center.y.toFixed(5));
  this.service.getMapLocationDataByLL(this.newOrg.latitude, this.newOrg.longitude).
    subscribe((res) => {
      this.addressInfo = res;
      this.mapValues(this.addressInfo, this.newOrg.address);
    });
}

mapValues(fromAddress, toAddress) {
    this.searchAddress = fromAddress.display_name;
    toAddress.city = fromAddress.address.city;
    toAddress.state = fromAddress.address.state;
    toAddress.postcode = fromAddress.address.postcode;
    toAddress.country = fromAddress.address.country;
    toAddress.state_district = fromAddress.address.state_district;
    this.step = 2;
}
  moveMap(addresDetails) {
    this.newOrg.latitude =  parseFloat(addresDetails.lon);
    this.newOrg.longitude = parseFloat(addresDetails.lat);
    this.map.remove();
    this.loadMap();
    this.mapValues(addresDetails, this.newOrg.address);
    this.address = [];
  }
  saveOrg() {
    if (environment.isDataAvailableInRealService) {
      console.log('Hit Service:: Create Org ', this.newOrg);
      this.createOrganization();
    } else {
      console.log('Mock Data :: Create Org ', this.newOrg);
        this.organizationsList.push(this.newOrg);
        this.service.saveOrganization(this.organizationsList);
        this.snackBar.openFromComponent(PopupComponent, {
        duration: 1000,
        data: 'Saved Data...!'
      });
    this.step = 0;
    }
  }
  searchMapLocationBySearchData() {
    this.service.getMapLocationData(this.searchAddress).subscribe((res) => {
      this.address = res;
    });
  }
  createOrganization() {
    // this.store.dispatch(new AddOrganization(this.newOrg));
    this.organizationService.createOrganization(this.newOrg).subscribe((res) => {
      // console.log(res);
      if ( res.id ) {
        this.snackBar.openFromComponent(PopupComponent, {
          duration: 1000,
          data: 'Saved Data...!'
        });
        this.step = 0;
        this.newOrg.name = '';
        this.newOrg.type = '';
        this.newOrg.info = '';
      }
    },
    error => {
      this.snackBar.openFromComponent(PopupComponent, {
        duration: 2000,
        data: 'Service Error...!'
      });
      this.step = 0;
    });
  }

  getAllOrganizations() {
    this.organizationService.getAllOrganizations().subscribe((res) => {
      this.organizationsList = res;
      // console.log(this.organizationsList);
    },
    error => {
      this.snackBar.openFromComponent(PopupComponent, {
        duration: 3000,
        data: 'Service Error...!'
      });
      this.step = 0;
    });
  }
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Office } from '../../models/office/Office';
import { InfoService } from '../../info.service';
import { OrgMapInfo } from '../../models/organization/OrgMapInfo';
import { MatSnackBar } from '@angular/material';

import * as maptalks from 'maptalks';
import { PopupComponent } from '../../popup/popup.component';
import { HttpClient } from '@angular/common/http';

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
    id: 'Enter Id',
    name: 'Enter Name',
    latitude: 0,
    longitude: 0,
    type: 'Enter Type',
    info: 'Enter Info',
    address: {
      city: 'City',
      country: 'Country',
      postcode: 'Postcode',
      state: 'State',
      state_district: 'State District'
    }
  };

  maps = [];
  constructor(private service: InfoService, private snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit() {
    this.newOrg.latitude = 78.498;
    this.newOrg.longitude = 17.476;
    this.newOrg.id = '0';
    this.newOrg.name = 'enter org name';
    this.service.mapLocation.subscribe(res => this.maps = res);
    this.service.saveMapLocation(this.maps);
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

  saveOffice() {
    console.log(this.office);
  }

  loadMap() {
    this.map = new maptalks.Map('map', {
      center: [this.newOrg.latitude, this.newOrg.longitude],
      zoom: 12,
      centerCross: true,
      zoomControl : true,
      baseLayer: new maptalks.TileLayer('base', {
        urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ['a', 'b' , 'c' , 'd'],
        attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
      })
    });
    let ref = this;
    this.map.on('zoomend moveend', getStatus);
  function getStatus() {
          ref.addressInfo = '';
          ref.step = 2;
          ref.searchAddress = '';
          ref.newOrg.address.city = '';
          ref.newOrg.address.state = '';
          ref.newOrg.address.postcode = '';
          ref.newOrg.address.country = '';
          ref.newOrg.address.state_district = '';
      ref.extent = ref.map.getExtent(),
      ref.ex = [
        '{',
        'xmin:' + ref.extent.xmin.toFixed(5),
        ', ymin:' + ref.extent.ymin.toFixed(5),
        ', xmax:' + ref.extent.xmax.toFixed(5),
        ', ymax:' + ref.extent.xmax.toFixed(5),
        '}'
      ].join('');
      ref.center = ref.map.getCenter();
      ref.mapStatus = [
      'Center : [' + [ref.center.x.toFixed(5), ref.center.y.toFixed(5)].join() + ']',
      'Extent : ' + ref.ex,
      'Size : ' + ref.map.getSize().toArray().join(),
      'Zoom : '   + ref.map.getZoom(),
      'MinZoom : ' + ref.map.getMinZoom(),
      'MaxZoom : ' + ref.map.getMaxZoom(),
      'Projection : ' + ref.map.getProjection().code
    ];
     ref.newOrg.latitude =  parseFloat(ref.center.x.toFixed(3));
     ref.newOrg.longitude = parseFloat(ref.center.y.toFixed(3));
     ref.http.get('https://nominatim.openstreetmap.org/reverse?format=json&lat='
    + ref.newOrg.longitude + '&lon=' + ref.newOrg.latitude + '&addressdetails=1')
    .subscribe((res) => {
          console.log(res);
          ref.addressInfo = res;
          ref.step = 2;
          ref.searchAddress = ref.addressInfo.display_name;
          ref.newOrg.address.city = ref.addressInfo.address.city;
          ref.newOrg.address.state = ref.addressInfo.address.state;
          ref.newOrg.address.postcode = ref.addressInfo.address.postcode;
          ref.newOrg.address.country = ref.addressInfo.address.country;
          ref.newOrg.address.state_district = ref.addressInfo.address.state_district;
      });
    // if ( ref.addressInfo ) {

    // }
    // console.log(ref.mapStatus);
  }
}
  moveMap(addresDetails) {
    console.log(addresDetails);
    this.newOrg.latitude =  parseFloat(addresDetails.lon);
    this.newOrg.longitude = parseFloat(addresDetails.lat);
    this.map.remove();
    this.loadMap();
    this.searchAddress = addresDetails.display_name;
    console.log(this.searchAddress);
    this.newOrg.address.city = addresDetails.address.city;
    this.newOrg.address.state = addresDetails.address.state;
    this.newOrg.address.postcode = addresDetails.address.postcode;
    this.newOrg.address.country = addresDetails.address.country;
    this.newOrg.address.state_district = addresDetails.address.state_district;
    this.address = [];
    this.step = 2;
    // this.addressLocation = this.searchAddress.split(', ');
    // console.log(this.addressLocation);
    // this.addressLocation.reverse();
    // console.log(this.addressLocation);
  }

  saveOrg() {
    console.log(this.maps);
    console.log(this.newOrg);
    this.maps.push(this.newOrg);
    this.service.saveMapLocation(this.maps);
    this.snackBar.openFromComponent(PopupComponent, {
      duration: 1000,
    });
    this.step = 0;
  }

  searchData() {
    // const input = document.getElementById('mapSearch').value;
    this.http.get('http://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=5&q=' + this.searchAddress)
    .subscribe((res) => {
          console.log(res);
          this.address = res;
    });
  }
}

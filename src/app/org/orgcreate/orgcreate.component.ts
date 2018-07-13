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
  newOrg = {
    id: 'Enter Id',
    name: 'Enter Name',
    latitude: 0,
    longitude: 0,
    type: 'Enter Type',
    info: 'Enter Info'
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
      zoom: 14,
      centerCross: true,
      baseLayer: new maptalks.TileLayer('base', {
        urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ['a', 'b' , 'c' , 'd'],
        attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
      })
    });

  }
  getStatus() {
    this.extent = this.map.getExtent(),
      this.ex = [
        '{',
        'xmin:' + this.extent.xmin.toFixed(5),
        ', ymin:' + this.extent.ymin.toFixed(5),
        ', xmax:' + this.extent.xmax.toFixed(5),
        ', ymax:' + this.extent.xmax.toFixed(5),
        '}'
      ].join('');
      this.center = this.map.getCenter();
      this.mapStatus = [
      'Center : [' + [this.center.x.toFixed(5), this.center.y.toFixed(5)].join() + ']',
      'Extent : ' + this.ex,
      'Size : ' + this.map.getSize().toArray().join(),
      'Zoom : '   + this.map.getZoom(),
      'MinZoom : ' + this.map.getMinZoom(),
      'MaxZoom : ' + this.map.getMaxZoom(),
      'Projection : ' + this.map.getProjection().code
    ];
     this.newOrg.latitude =  parseFloat(this.center.x.toFixed(3));
     this.newOrg.longitude = parseFloat(this.center.y.toFixed(3));
  console.log(this.mapStatus);
  }
  moveMap(addresDetails) {
    console.log(addresDetails);
    this.newOrg.latitude =  parseFloat(addresDetails.lon);
    this.newOrg.longitude = parseFloat(addresDetails.lat);
    this.map.remove();
    this.loadMap();
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
    this.http.get('http://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + this.searchAddress)
    .subscribe((res) => {
          console.log(res);
          this.address = res;
    });
  }
}

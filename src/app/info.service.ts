import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { OrgMapInfo } from './models/organization/OrgMapInfo';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfoService {
  findMapLocationBySearchDataURL = '';
  findMapLocationBySearchLLURL = '';
  org = [
    {
      'id' : '0001',
      'name': 'org1',
      'latitude': -0.131049,
      'longitude': 51.498568,
      'info': 'organization1',
      'type': 'Org1'
    },
    {
      'id' : '0002',
      'name': 'HELPPING HANDS',
      'latitude': -0.107049,
      'longitude': 51.498568,
      'info': 'organization2',
      'type': 'Org2'
    },
    {
      'id' : '0003',
      'name': 'TECH',
      'latitude': -0.131049,
      'longitude': 51.490568,
      'info': 'organization3',
      'type': 'Org3'
    },
    {
      'id' : '0004',
      'name': 'OSI',
      'latitude': -0.107049,
      'longitude': 51.490568,
      'info': 'organization4',
      'type': 'Org4'
    }
  ];

  officesList = [
    {
      'id' : '0001',
      'name': 'office',
      'latitude': -0.121049,
      'longitude': 51.498568,
      'info': 'Office_1',
      'type': 'office'
    },
    {
      'id' : '0002',
      'name': 'office',
      'latitude': -0.117049,
      'longitude': 51.498568,
      'info': 'Office_2',
      'type': 'office'
    }
  ];

  listIncidents = [
    {
      'id' : '0001',
      'name': 'Incident1',
      'latitude': -0.12066,
      'longitude': 51.498568,
      'info': 'InfoIncident1',
      'type': 'fire'
    },
    {
      'id' : '0002',
      'name': 'Incident2',
      'latitude': -0.14161,
      'longitude': 51.49509,
      'info': 'Floods',
      'type': 'floods'
    },
    {
      'id' : '0003',
      'name': 'Incident3',
      'latitude': -0.14161,
      'longitude': 51.20509,
      'info': 'InfoIncident3',
      'type': 'accident'
    },
    {
      'id' : '0004',
      'name': 'Incident4',
      'latitude': -0.14161,
      'longitude': 41.49509,
      'info': 'InfoIncident4',
      'type': 'fire'
    },
    {
      'id' : '0005',
      'name': 'Incident5',
      'latitude': -0.14161,
      'longitude': 51.10509,
      'info': 'earthquake',
      'type': 'earthquake'
    },
    {
      'id' : '0006',
      'name': 'Incident6',
      'latitude': -0.13461,
      'longitude': 51.49509,
      'info': 'InfoIncident6',
      'type': 'fire'
    },
    {
      'id' : '0007',
      'name': 'Incident7',
      'latitude': -1.14161,
      'longitude': 41.49509,
      'info': 'InfoIncident7',
      'type': 'fire'
    },
    {
      'id' : '0008',
      'name': 'Incident8',
      'latitude': -1.24161,
      'longitude': 51.10509,
      'info': 'InfoIncident8',
      'type': 'accident'
    },
    {
      'id' : '0009',
      'name': 'Incident9',
      'latitude': -1.25461,
      'longitude': 51.49509,
      'info': 'InfoIncident9',
      'type': 'fire'
    }
  ];

  private maps = new BehaviorSubject<any>(this.org);
  mapLocation = this.maps.asObservable();


  private incidents = new BehaviorSubject<any>(this.listIncidents);
  incident = this.incidents.asObservable();

  private offices = new BehaviorSubject<any>(this.officesList);
  office = this.offices.asObservable();

  constructor(private http: HttpClient) {
    this.findMapLocationBySearchDataURL = 'http://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=5&q=';
    this.findMapLocationBySearchLLURL = 'http://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=5&q=';
  }


  saveMapLocation(orgMapInfo) {
    this.maps.next(orgMapInfo);
  }

  saveIncident(incidentInfo) {
    this.incidents.next(incidentInfo);
  }

  saveOffice(officeInfo) {
    this.offices.next(officeInfo);
  }
  getMapLocationData(address): Observable<any> {
    return this.http.get(this.findMapLocationBySearchDataURL + address);
  }

  getMapLocationDataByLL(latitude , longitude): Observable<any> {
    return this.http.get('https://nominatim.openstreetmap.org/reverse?format=json&lat='
    + longitude + '&lon=' + latitude + '&addressdetails=1');
  }



}

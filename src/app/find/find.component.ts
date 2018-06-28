import { Component, OnInit ,  AfterViewChecked, AfterViewInit} from '@angular/core';
import { InfoService } from '../info.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit , AfterViewInit {
  organization;
  mapLoc = [];

  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'map', cols: 2, rows: 5, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 4, color: 'lightpink'},
  ];

  constructor(private service: InfoService) {

  }

  ngOnInit() {
    this.service.mapLocation.subscribe(res => this.organization = res);
    this.service.saveMapLocation(this.organization);
  }


  ngAfterViewInit() {
    this.loadMap();
  }


  loadMap() {
        let center = new maptalks.Coordinate(-0.113049, 51.498568);
        let map = new maptalks.Map('map', {
          center: center,
          zoom: 14,
          baseLayer: new maptalks.TileLayer('base', {
            urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
            subdomains: ['a','b','c','d'],
            attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
          })
        });

        map.on('click', function (param) {
          var infoDom = document.getElementById('info');
          infoDom.innerHTML = '<div>' + new Date().toLocaleTimeString() +
            ': click map on ' + param.coordinate.toFixed(5).toArray().join() + '</div>' +
            infoDom.innerHTML;
        });
        console.log(this.organization);

        this.organization.forEach(element => {
          this.mapLoc.push([element.latitude, element.longitude]);
        });

        let multipoint = new maptalks.MultiPoint(this.mapLoc, {
          visible : true,
          editable : true,
          cursor : 'pointer',
          shadowBlur : 0,
          shadowColor : 'black',
          draggable : false,
          dragShadow : false, // display a shadow during dragging
          drawOnAxis : null,  // force dragging stick on a axis, can be: x, y
          symbol : {
            'textFaceName' : 'sans-serif',
            'textName' : 'org',
            'textFill' : '#34495e',
            'textHorizontalAlignment' : 'right',
            'textSize' : 30
          }
        });

        new maptalks.VectorLayer('vector', multipoint).addTo(map);
  }

}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';
import { InfoService } from '../info.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements AfterViewInit, OnInit {
  incidents;

  incidentLocations = [];

  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'map', cols: 2, rows: 5, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 4, color: 'lightpink'},
  ];

  constructor(private service: InfoService) {
  }

  ngOnInit() {
    this.service.incident.subscribe(res => this.incidents = res);
    this.service.saveIncident(this.incidents);
  }


  ngAfterViewInit() {
    this.loadMap();
  }
  locateTheIncident(incident) {
    console.log(incident);
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


        // map.on('click', function (param) {
        //   var infoDom = document.getElementById('info');
        //   infoDom.innerHTML = '<div>' + new Date().toLocaleTimeString() +
        //     ': click map on ' + param.coordinate.toFixed(5).toArray().join() + '</div>' +
        //     infoDom.innerHTML;
        // });
        console.log(this.incidents);

        this.incidents.forEach(element => {
          this.incidentLocations.push([element.latitude, element.longitude]);
        });

        let multipoint = new maptalks.MultiPoint(this.incidentLocations, {
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
            'textName' : 'Incident',
            'textFill' : '#34495e',
            'textHorizontalAlignment' : 'right',
            'textSize' : 30
          }
        });

        new maptalks.VectorLayer('vector', multipoint).addTo(map);
  }

}


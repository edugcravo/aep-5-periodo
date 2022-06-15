import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  constructor() { 
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.iniciaGrafico()
  }

  listaLabels: any = ['a', 'b', 'c', 'd','e']
  listaValores: any = ['1','2', '1', '5', '1']
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  iniciaGrafico(){
    setTimeout (() => {
      this.grafico()
   }, 100);
  }

  grafico() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
  
    new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: this.listaLabels,
          datasets: [{
              label: 'Seguidores',
              data: this.listaValores,
              borderWidth: 4,
              backgroundColor: "rgb(115 185 243 / 5%)",
              borderColor: "#007ee7",
              fill: true,
          },
        ],
      },
  
  });
  }

}

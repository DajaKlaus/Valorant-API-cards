import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Valorant } from '../models/valorant.models';
// app
import { browserRefresh } from '../app.component';
import { ControlloHeaderService } from '../services/controllo-header.service';

@Component({
  selector: 'app-gekko',
  templateUrl: './gekko.component.html',
  styleUrls: ['./gekko.component.css']
})

export class GekkoComponent implements OnInit{
    data!: Valorant;
    loading!: boolean;
    o!: Observable<Valorant>;

    public browserRefresh!: boolean;

    constructor(public http: HttpClient, private controlloHeader: ControlloHeaderService) {}
    
    makeCompactRequest(): void {
      this.loading = true;
      this.http
        .get<Valorant>('https://valorant-api.com/v1/agents/e370fa57-4757-3604-3648-499e1f642d3f')
        .subscribe((newData : Valorant) => {
        this.data = newData;
        this.loading = false;
        });
    }

    ngOnInit() {
        this.browserRefresh = browserRefresh;
        console.log("Refresh?:", browserRefresh)
        if (this.browserRefresh) {
            this.controlloHeader.head1 = false;
            this.controlloHeader.head2 = true;
        }
    }
}

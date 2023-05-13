import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Valorant } from '../models/valorant.models';
// app
import { browserRefresh } from '../app.component';
import { ControlloHeaderService } from '../services/controllo-header.service';

@Component({
  selector: 'app-killjoy',
  templateUrl: './killjoy.component.html',
  styleUrls: ['./killjoy.component.css']
})

export class KilljoyComponent implements OnInit {
    data!: Valorant;
    loading!: boolean;
    o!: Observable<Valorant>;

    roleS = false;
    slot1 = false;
    slot2 = false;
    slot3 = false;
    slot4 = false;

    public browserRefresh!: boolean;

    constructor(public http: HttpClient, private controlloHeader: ControlloHeaderService) {}
    
    makeCompactRequest(): void {
        this.loading = true;
        this.http
            .get<Valorant>('https://valorant-api.com/v1/agents/1e58de9c-4950-5125-93e9-a0aee9f98746')
            .subscribe((newData : Valorant) => {
            this.data = newData;
            this.loading = false;
            });
    }

    showRole() {
        this.roleS = true;
        this.slot1 = false;
        this.slot2 = false;
        this.slot3 = false;
        this.slot4 = false;
    }

    showSlot1() {
        this.roleS = false;
        this.slot1 = true;
        this.slot2 = false;
        this.slot3 = false;
        this.slot4 = false;
    }

    showSlot2() {
        this.roleS = false;
        this.slot1 = false;
        this.slot2 = true;
        this.slot3 = false;
        this.slot4 = false;
    }

    showSlot3() {
        this.roleS = false;
        this.slot1 = false;
        this.slot2 = false;
        this.slot3 = true;
        this.slot4 = false;
    }

    showSlot4() {
        this.roleS = false;
        this.slot1 = false;
        this.slot2 = false;
        this.slot3 = false;
        this.slot4 = true;
    }

    ngOnInit() {
        this.browserRefresh = browserRefresh;
        console.log("Refresh?:", browserRefresh)
        if (this.browserRefresh) {
            this.controlloHeader.head1 = false;
            this.controlloHeader.head2 = true;
        }

        this.makeCompactRequest()
    }
}

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Valorant } from '../models/valorant.models';
// app
import { browserRefresh } from '../app.component';
import { ControlloHeaderService } from '../services/controllo-header.service';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})

export class GenericComponent implements OnInit {
    data!: Valorant;
    loading!: boolean;
    o!: Observable<Valorant>;

    roleS = false;
    slot1 = false;
    slot2 = false;
    slot3 = false;
    slot4 = false;
    slot5 = false;

    viperIcon = false;

    nSlots = false;

    public browserRefresh!: boolean;

    constructor(public http: HttpClient, private route: ActivatedRoute, private controlloHeader: ControlloHeaderService) {
        this.route.paramMap.subscribe(this.getRouterParam);
    }

    makeCompactRequestGekko(): void {
        this.nSlots = false;
        this.http
            .get<Valorant>('https://valorant-api.com/v1/agents/e370fa57-4757-3604-3648-499e1f642d3f')
            .subscribe((newData : Valorant) => {
            this.data = newData;
            this.loading = false;
            });
    }

    makeCompactRequestKilljoy(): void {
        this.nSlots = false;
        this.http
            .get<Valorant>('https://valorant-api.com/v1/agents/1e58de9c-4950-5125-93e9-a0aee9f98746')
            .subscribe((newData : Valorant) => {
            this.data = newData;
            this.loading = false;
            });
    }

    makeCompactRequestViper(): void {
        this.nSlots = true;
        this.viperIcon = false;
        this.http
            .get<Valorant>('https://valorant-api.com/v1/agents/707eab51-4836-f488-046a-cda6bf494859')
            .subscribe((newData : Valorant) => {
            this.data = newData;
            this.loading = false;
            });
    }

    makeCompactRequestJett(): void {
        this.nSlots = true;
        this.viperIcon = true;
        this.http
            .get<Valorant>('https://valorant-api.com/v1/agents/add6443a-41bd-e414-f6ad-e58d267f4e95')
            .subscribe((newData : Valorant) => {
            this.data = newData;
            this.loading = false;
            });
    }

    makeCompactRequestReyna(): void {
        this.nSlots = false;
        this.http
            .get<Valorant>('https://valorant-api.com/v1/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc')
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
        this.slot5 = false;
    }

    showSlot1() {
        this.roleS = false;
        this.slot1 = true;
        this.slot2 = false;
        this.slot3 = false;
        this.slot4 = false;
        this.slot5 = false;
    }

    showSlot2() {
        this.roleS = false;
        this.slot1 = false;
        this.slot2 = true;
        this.slot3 = false;
        this.slot4 = false;
        this.slot5 = false;
    }

    showSlot3() {
        this.roleS = false;
        this.slot1 = false;
        this.slot2 = false;
        this.slot3 = true;
        this.slot4 = false;
        this.slot5 = false;
    }

    showSlot4() {
        this.roleS = false;
        this.slot1 = false;
        this.slot2 = false;
        this.slot3 = false;
        this.slot4 = true;
        this.slot5 = false;
    }

    showSlot5() {
        this.roleS = false;
        this.slot1 = false;
        this.slot2 = false;
        this.slot3 = false;
        this.slot4 = false;
        this.slot5 = true;
    }

    getRouterParam = (params: ParamMap) => {
        let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
        console.log (uri_param); //Stampo su console
        //this.service.getTrack()
        if (uri_param == 'gekko') this.makeCompactRequestGekko();
        if (uri_param == 'killjoy') this.makeCompactRequestKilljoy();
        if (uri_param == 'viper') this.makeCompactRequestViper();
        if (uri_param == 'jett') this.makeCompactRequestJett();
        if (uri_param == 'reyna') this.makeCompactRequestReyna();
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

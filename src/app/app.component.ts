import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ControlloHeaderService } from './services/controllo-header.service';

export let browserRefresh = false;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    subscription: Subscription;

    constructor(private router: Router, public controlloHeader: ControlloHeaderService) {
        this.subscription = router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
              browserRefresh = !router.navigated;
            }
        });
    }

    hideHeader(): void {
        this.controlloHeader.head1 = false;
        this.controlloHeader.head2 = true;
    }

    showHeader(): void {
        this.controlloHeader.head1 = true;
        this.controlloHeader.head2 = false;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

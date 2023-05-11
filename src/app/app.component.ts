import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    head1 = true;
    head2 = false;

    hideHeader(): void {
        this.head1 = false;
        this.head2 = true;
    }

    showHeader(): void {
        this.head1 = true;
        this.head2 = false;
    }

    public get view() {
        console.log(localStorage.getItem('view'))

        if (!localStorage.getItem('view')) {
            this.showHeader()
            localStorage.setItem('view', 'in')
            console.log(localStorage.getItem('view'))
        } else {
            this.hideHeader()
            console.log(localStorage.getItem('view'))
        }
        
        return "null"
    }

    ngOnInit(): void {
        this.view
    }
}

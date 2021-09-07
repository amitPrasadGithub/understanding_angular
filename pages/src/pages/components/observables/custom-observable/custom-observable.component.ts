import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
    selector: 'app-custom-observable-component',
    templateUrl: './custom-observable.component.html'
})
export class CustomObservable implements OnInit, OnDestroy {
    private n_subscription: Subscription;
    constructor() {}

    ngOnInit() {
        const n_observable = Observable.create(
            (observer) => {
                let count = 0;
                setInterval(
                    () => {
                        observer.next(count);
                        count++
                    }, 1000
                )
            }
        )

        this.n_subscription = n_observable.pipe(
            (
                map(
                    (data) => {
                        return `cipher ${data}`
                    }
                )
            )
        ).subscribe(
            (data) => {
                console.log(data);
            }
        )
    }

    ngOnDestroy() {
        this.n_subscription.unsubscribe();
    }
}
import { HttpClient } from "@angular/common/http";
import { flatten } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { stringify } from "querystring";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { Search } from "../modules/search.module";

@Injectable()
export class GenericSearchService {
    
    m_search: Array<Search> = [];
    
    constructor(
        private http: HttpClient
    ) {}

    searchResults(str) {
            const n_observable = Observable.create(
                observer => {
                    fetch('./assets/search.json')
                        .then(response => {
                            return response.json();
                        })
                        .then(response => {
                            observer.next(response);
                        })
                }
            );
            
            n_observable.subscribe(
                data => {
                    console.log(data);
                }
            )
    }

    fileToJSON(str) {
        const n_observable = this.http.get<Search[]>('./assets/search.json');
        const n_subscription = n_observable.pipe(filter(e => true));
        n_subscription.subscribe(
            search => {
                this.m_search = search;
            }
        )
        this.m_search = this.m_search.filter(
            e => {
                return (str != '' && e.term.includes(str));
            }
        )
        return this.m_search;
    }
}
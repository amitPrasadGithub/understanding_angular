import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { Search } from "src/pages/modules/search.module";
import { GenericSearchService } from "src/pages/services/generic-search.service";

@Component({
    selector: 'app-generic-search-component',
    templateUrl: './generic-search.component.html'
})
export class GenericSearchComponent implements OnInit {
    searchstr: string = "";
    search: Array<Search> = [];

    @ViewChild("outputResults")
    outputResults: ElementRef;

    constructor(
        private genericSearchService: GenericSearchService,
        private renderer: Renderer2
    ) {}
    
    ngOnInit() {

    }

    searchResults() {
        this.search = this.genericSearchService.fileToJSON(this.searchstr);
        let output = '';
        this.search.forEach(e => {
            output +=   `<p><a href='${e.result}' target='_blank'>${e.term}</a></p><br>`;
        })
        this.outputResults.nativeElement.innerHTML = output;
        
    }
}
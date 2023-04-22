import { Pipe, PipeTransform } from '@angular/core';
import { concat } from 'rxjs';

@Pipe({
    name: 'stringmanipulation'
})
export class StringManipulation implements PipeTransform {
    transform(str: string, option: string) {
        switch(option) {
            case 'UPPERCASE':
                return str.toUpperCase();
            case 'LOWERCASE': 
                return str.toLowerCase();
            case 'REMOVE DUPLICATE CHARACTERS':
                return this.removeDuplicateCharacters(str);
            case 'REMOVE -':
                return str.replaceAll('-', ' ');
            case 'UPPERCASE AND REPLACE DASH':
                return this.replaceDashWithSpaceUppercase(str);
            case 'REPLACE SPACE BY UNDERSCORE':
                return this.replaceSpaceByUnderscore(str);

            
        }
    }

    replaceSpaceByUnderscore(str: string): string {
        let ar = str.split(' ');
        let n_str = '';
        ar.forEach(element => {
            n_str = n_str + element + '_';
        })
        return n_str;
    }

    removeDuplicateCharacters(str: string): string {
        let i: number, j: number;
        for(i=0; i<str.length; i++) {
            for(j=i+1; j<str.length; j++) {
                if(str.charAt(i) === str.charAt(j)) {
                    str = str.slice(0, j).concat(str.slice(j+1));
                    j--;
                }
            }
        }
        return str;
    }

    replaceDashWithSpaceUppercase(str: string) {
        str = str.toLocaleUpperCase().replaceAll('-', ' ');
        return str;
    }
}
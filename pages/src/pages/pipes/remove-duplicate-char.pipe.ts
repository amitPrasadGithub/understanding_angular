import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'removeduplicate'
})
export class RemoveDuplicateCharPipe implements PipeTransform {
    transform(value: any, ch: string) {
        let m_value: string = value;
        debugger;
        let i: number, j: number;
        for(i=0; i<m_value.length; i++) {
            for(j=i+1; i<m_value.length; j++) {
                if(m_value.charAt(i) === m_value.charAt(j)) {
                    m_value = m_value.substr(i, j-1);
                    j--;
                }
            }
        }
    }
}
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
            for(j=i+1; j<m_value.length; j++) {
                if(m_value.charAt(i) === m_value.charAt(j)) {
                    m_value = m_value.slice(0, j).concat(m_value.slice(j+1));
                    j--;
                }
            }
        }
        return m_value;
    }
}
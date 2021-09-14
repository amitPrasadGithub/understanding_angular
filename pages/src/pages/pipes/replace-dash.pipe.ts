import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replacedash'
})
export class ReplaceDashPipe implements PipeTransform {
    transform(value: any) {
        let m_value: string = value;
        m_value = m_value.replace('-', ' ');
        return m_value;
    }
}
import { Pipe, PipeTransform } from "@angular/core"

@Pipe ({
    name: 'date'
})

export class CalendarDatePipe implements PipeTransform {
    transform(value: any): string{
        return this.convertDate(value);

    }

    convertDate(value: any): string {
        let fullDate = value;
        let date = new Date(fullDate);
        let year = date.getFullYear();
        let day = this.formatValue(date.getDate());
        let month = this.formatValue(date.getMonth());

        return day + "." + month + "." + year + ".";
    }
 
    formatValue(value: number): any {
        if(value < 10) {
            return "0"+value;
        }
        else {
            return value;
        }
    }
}
import { Pipe, PipeTransform } from "@angular/core"

@Pipe ({
    name: 'day'
})

export class ItemsDateDayPipe implements PipeTransform {
    transform(value: any): string{
        return this.convertDate(value);
    }

    convertDate(value: any): string {
        let fullDate = value;
        let date = new Date(fullDate);
        let day = "";
        day = date.getDate().toString();
        return day;
    }
}
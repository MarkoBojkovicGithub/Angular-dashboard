import { Pipe, PipeTransform } from "@angular/core"

@Pipe ({
    name: 'month'
})

export class ItemsDateMonthPipe implements PipeTransform {
    transform(value: any): string{
        return this.convertDate(value);
    }

    convertDate(value: any): string {
        let fullDate = value;
        let date = new Date(fullDate);
        let month = "";
        return month = this.formatMonth(date.getMonth());
    }

    formatMonth(value: any): string {
        switch(value) {
            case 0: return "JUN"
            break;
            case 1: return "FEB"
            break;
            case 2: return "MAR"
            break;
            case 3: return "APR";
            break;
            case 4: return "MAY";
            break;
            case 5: return "JUN";
            break;
            case 6: return "JUL";
            break;
            case 7: return "AVG";
            break;
            case 8: return "SEP";
            break;
            case 9: return "OCT";
            break;
            case 10: return "NOV";
            break; 
            case 11: return "DEC";
            break;
            default: return "Jun";
        }
    }
}
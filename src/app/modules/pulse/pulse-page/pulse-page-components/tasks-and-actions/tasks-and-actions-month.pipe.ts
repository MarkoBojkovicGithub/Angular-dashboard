import { Pipe, PipeTransform } from "@angular/core"

@Pipe ({
    name: 'taskAndActionsMonth'
})

export class TasksAndActionsMonthPipe implements PipeTransform {
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
            case 0: return "Jun"
            break;
            case 1: return "Feb"
            break;
            case 2: return "Mar"
            break;
            case 3: return "Apr";
            break;
            case 4: return "May";
            break;
            case 5: return "Jun";
            break;
            case 6: return "Jul";
            break;
            case 7: return "Avg";
            break;
            case 8: return "Sep";
            break;
            case 9: return "Oct";
            break;
            case 10: return "Nov";
            break; 
            case 11: return "Dec";
            break;
            default: return "Jun";
        }
    }
}
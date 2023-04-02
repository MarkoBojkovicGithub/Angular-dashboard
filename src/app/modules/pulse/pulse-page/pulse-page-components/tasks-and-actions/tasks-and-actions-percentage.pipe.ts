import { Pipe, PipeTransform } from "@angular/core"

@Pipe ({
    name: 'percentage'
})

export class TasksAndActionsPercentagePipe implements PipeTransform {
    transform(value: any): string{
        return value + "%";
    }
}
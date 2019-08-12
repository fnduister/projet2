import { Component } from '@angular/core';

@Component({
    selector: 'shared-breadcrumb',
    templateUrl: './breadcrumb.view.html',
    styleUrls: ['./breadcrumb.scss']
})
export class BreadcrumbController {
    title = 'polyTeam';
    lexiques: string[] = ["Grouped", "Waiting for response", "Not grouped yet"];
    paths: string[] = ["Current courses", "LOG1245"];
}
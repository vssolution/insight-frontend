import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppFacade } from './+state/app.facade';

@Component({
  selector: 'insight-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private appFacade: AppFacade) {}

  ngOnInit() {
    this.appFacade.initApp();
    this.appFacade.initNotification();
  }
}

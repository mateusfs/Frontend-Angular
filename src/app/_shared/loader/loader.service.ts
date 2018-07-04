import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LoaderState } from './loader';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Injectable()

export class LoaderService {

    private loaderSubject = new Subject<LoaderState>();

    loaderState = this.loaderSubject.asObservable();

    constructor(private SlimLoadingBarService: SlimLoadingBarService) { }

    show() {
        this.SlimLoadingBarService.start();
        this.loaderSubject.next(<LoaderState>{show: true});
    }

    hide() {
        this.loaderSubject.next(<LoaderState>{show: false});
        this.SlimLoadingBarService.complete();
    }
}

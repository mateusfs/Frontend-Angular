import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, RequestOptionsArgs, Response, Request, Headers, XHRBackend } from '@angular/http';
import 'rxjs/Rx';

import { LoaderService } from './../loader/loader.service';

@Injectable()
export class HttpService extends Http {

    private counter = 0;

    constructor(
        backend: XHRBackend,
        defaultOptions: RequestOptions,
        private loaderService: LoaderService,
    ) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.showLoader();

        return super.get(this.mountUrl(url), options)
            .catch(this.onCatch)
            .do((res: Response) => { }
                , (error: any) => {
                    this.onError(error);
                })
            .finally(() => {
                this.hideLoader();
            });
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        this.showLoader();

        return super.post(this.mountUrl(url), body, options)
            .catch(this.onCatch)
            .do((res: Response) => { }
                , (error: any) => {
                    this.onError(error);
                })
            .finally(() => {
                this.hideLoader();
            });
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        this.showLoader();

        return super.put(this.mountUrl(url), body, options)
            .catch(this.onCatch)
            .do((res: Response) => { }
                , (error: any) => {
                    this.onError(error);
                })
            .finally(() => {
                this.hideLoader();
            });
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.showLoader();

        return super.delete(this.mountUrl(url), options)
            .catch(this.onCatch)
            .do((res: Response) => { }
                , (error: any) => {
                    this.onError(error);
                })
            .finally(() => {
                this.hideLoader();
            });
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }


    private onError(res: Response): void {
    }

    private showLoader(): void {
        this.counter++;
        this.loaderService.show();
    }

    private hideLoader(): void {
        this.counter--;
        if (this.counter == 0) {
            this.loaderService.hide();
        }
    }

    private mountUrl(url) {
        if (url.indexOf('?') > -1) {
            return url + '&timestamp=' + this.getTimestamp();
        }

        return url + '?timestamp=' + this.getTimestamp();
    }

    private getTimestamp() {
        const date = new Date();

        return `${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;
    }

}

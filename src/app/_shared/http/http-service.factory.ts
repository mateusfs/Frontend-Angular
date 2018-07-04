import { XHRBackend, RequestOptions } from '@angular/http';
import { HttpService } from './http.service';

import { LoaderService } from './../loader/loader.service';


function httpServiceFactory(backend: XHRBackend, options: RequestOptions, loaderService: LoaderService) {
    return new HttpService(backend, options, loaderService);
}

export { httpServiceFactory };

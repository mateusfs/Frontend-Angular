import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { SessionService } from './../session/session.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class HeaderService {

  constructor(private http: Http, private SessionService: SessionService) { }

  getHeadersGnx(): Headers {
    const token_gnx = this.SessionService.getValor('token_gnx');
    if (token_gnx) {
      const headers = this.getDefaultHeaders();
      headers.append('authorization', 'OAuth ' + token_gnx);

      return headers;
    }
    return null;
  }

  getTokenGnx() {
    return this.http
      .get(environment.apiGxUrlToken + '/aGetAcessToken.aspx',
      {
        headers: this.getHeaders()
      })
      .map(res => { this.SessionService.setValor('token_gnx', res.json().access_token); return res.json(); })
      .catch((err: any) => {
        return err.json();
      });
  }

  public getHeaders() {
    const headers = this.getDefaultHeaders();
    const token = this.SessionService.getValor('token');
    if (token) {
      headers.append('authorization', token);
    }
    return headers;
  }

  private getDefaultHeaders() {
    const headers = new Headers();
    headers.append('content-Type', 'application/json');
    return headers;
  }
}

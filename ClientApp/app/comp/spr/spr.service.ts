import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { jmspr } from './spr.common';

@Injectable()
export class jSprService {
    private jUrl = 'http://localhost:5001/api/it/eq_vendors';  // URL to web API

    constructor(private http: Http) { }

    getSpr(): Observable<jmspr[]> {
        return this.http.get(this.jUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    putSpr(_j: jmspr): Observable<jmspr> {
        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
        const body = JSON.stringify(_j);
        return this.http.post(this.jUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        //let body = res.json();
        //return body.data || {};
        return res.json();
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
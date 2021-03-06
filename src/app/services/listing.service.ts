import { Injectable, Inject } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import { CONFIG } from '../../../config'
import { map } from 'rxjs/operators'


export class ListingService {

    http: any

    constructor( @Inject(Http) http) {
        this.http = http
    }

    getListings() {
        return this.http.get('http://localhost:' + CONFIG.LISTING.port).pipe(
            map((res: Response) => res.json())
        )
    }

    getMainListing() {
        return this.http.post('http://localhost:' + CONFIG.LISTING.port + '/get-main').pipe(
            map((res: Response) => res.json())
        )
    }

    getListing(data) {
        return this.http.post('http://localhost:' + CONFIG.LISTING.port + '/get', data).pipe(
            map((res: Response) => res.json())
        )
    }

    addListing(data) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        })
        const options = new RequestOptions({
            headers: headers
        })
        return this.http.post('http://localhost:' + CONFIG.LISTING.port + '/addlisting', JSON.stringify(data), options).pipe(
            map((res: Response) => (res.json()))
        )
    }

    addIngredientToList(data) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        })
        const options = new RequestOptions({
            headers: headers
        })
        return this.http.post('http://localhost:' + CONFIG.LISTING.port + '/addingredient-tolisting', JSON.stringify(data), options).pipe(
            map((res: Response) => (res.json()))
        )
    }

    deleteListing(data) {
        return this.http.post('http://localhost:' + CONFIG.LISTING.port + '/deleterecipe', data).pipe(
            map((res: Response) => (res.json()))
        )
    }

    deleteIngredientFromList(data) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        })
        const options = new RequestOptions({
            headers: headers
        })
        return this.http.post('http://localhost:' + CONFIG.LISTING.port + '/deleteingredient-fromlisting', JSON.stringify(data), options).pipe(
            map((res: Response) => (res.json()))
        )
    }


}

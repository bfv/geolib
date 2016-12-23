
import { GeoPoint } from './geopoint';
import { Route } from './route';


// constants
export const earthRadius: number = 6371000;
export const nauticalMile: number = 1852;
export const nm: number = nauticalMile;

export function calculateRoute(start: GeoPoint, end: GeoPoint): Route {

    let distance: number;

    distance = calculateDistance(start, end);

    return {
        start: start,
        end: end,
        distance: distance,
        initialBaring: 0,
        finalBaring: 0
    }
}


/* 
Haversine
formula:	a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
c = 2 ⋅ atan2( √a, √(1−a) )
d = R ⋅ c
where	φ is latitude, λ is longitude, R is earth’s radius (mean radius = 6,371km);
note that angles need to be in radians to pass to trig functions!
*/

export function calculateDistance(start: GeoPoint, end: GeoPoint): number {

    let distance: number;

    let a = Math.pow(Math.sin((end.latrad - start.latrad) / 2), 2) +
        Math.cos(start.latrad) *
        Math.cos(end.latrad) *
        Math.pow(Math.sin((end.lonrad - start.lonrad) / 2), 2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    distance = earthRadius * c;

    return distance;
} 
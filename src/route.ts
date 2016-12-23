
import { GeoPoint } from './geopoint';

export interface Route {
    start: GeoPoint;
    end: GeoPoint;
    distance: number;
    initialBaring: number;
    finalBaring: number;
}


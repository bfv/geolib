
import { GeoPoint } from '../src/geopoint';
import * as geolib from '../src/index';

describe("Geolib", () => {

    it("longitude conversion deg->rad", () => {
        let geoPoint = new GeoPoint(0, 90);
        expect(geoPoint.lonrad).toBeCloseTo(Math.PI * 0.5);
    });

    it("latitude conversion deg->rad", () => {
        let geoPoint = new GeoPoint(90, 0);
        expect(geoPoint.latrad).toBeCloseTo(Math.PI * 0.5);
    });

    it('1 minute is approx 1 nm', () => {
        expect(
            Math.abs(geolib.calculateDistance(new GeoPoint(0, 0), new GeoPoint(0.016666666, 0)) - 1852)
        ).toBeLessThan(2);
    });
});
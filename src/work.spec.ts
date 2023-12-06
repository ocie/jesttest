import { Work } from './work';

describe('Work', () => {
    it('should have a field', () => {
        const work = new Work();
        expect(work.field).toBeDefined();
    });
});
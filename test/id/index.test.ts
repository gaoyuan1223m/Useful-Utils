import { generateIdByDateTimeAndRandomNumber, guid } from "../../src/id";
import { red } from "chalk";

const loopCount = 100000;
const generateBy = (idGenerator: () => string, loopCount = 1000000) => {
    const set = new Set<string>();
    for (let i = 0; i < loopCount; i++) {
        set.add(idGenerator());       
    }
    return set.size;
}

describe('Test Id Generator', () => {
    it(`${red(1)} - id by DateTime and RandomNumber`, () => {
        const size = generateBy(generateIdByDateTimeAndRandomNumber, loopCount)
        
        expect(size).toBe(loopCount);
    });

    it(`${red(2)} - id by guid`, () => {
        const size = generateBy(guid, loopCount)
        
        expect(size).toBe(loopCount);
    })
});

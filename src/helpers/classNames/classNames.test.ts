import {classNames} from "./classNames";

describe('Test fn classNames', () => {
    it("valid data", () => {
        expect(classNames('test', {}, ['test'])).toBe('test test')
    })

    it("with only first param", () => {
        expect(classNames('test')).toBe('test')
    })

    it("valid data with mods true", () => {
        expect(classNames('test', {'active': true, 'disabled': false}, [null, undefined])).toBe('test active')
    })

    it("valid data with mods false", () => {
        expect(classNames('test', {'active': false, 'disabled': false}, [null, undefined])).toBe('test')
    })

    it("valid data with mods undefined", () => {
        expect(classNames('test', {'active': undefined, 'disabled': true}, [null, undefined])).toBe('test disabled')
    })
})
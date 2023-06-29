import { addNumbers } from "./add_numbers";

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {

		expect(addNumbers(2,1)).toBe(3);
	});
});

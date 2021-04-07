import Numbers from './removeFalsyValues.js';
import removeFalsyValues from './removeFalsyValues.js';

test('Felsy values remove from arrey', () => {
    // Arrange
    const array = [45, '', 0, 'hello', 4.7, false];
    const expectedResult = [45, 'hello', 4.7];
    const numbers = new Numbers();

    // Act
    const result = numbers.removeFalsyValues(array);

    // Assert
    expect(result).toEqual(expectedResult);
})

test('Argument should be an array', () => {
    // Arrange
    const numbers = new Numbers();

    // Act and Assert
    expect(() => numbers.removeFalsyValues('Hello')).toThrow();
    })


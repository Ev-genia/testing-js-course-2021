import removeFalsyValues from './removeFalsyValues.js';

test('Felsy values remove from arrey', () => {
    // Arrenge
    const array = [45, '', 0, 'hello', 4.7, false];
    const expectedResult = [45, 'hello', 4.7];

    // Act
    result = new removeFalsyValues(array);

    // Assert
    expect(result).toEqual(expectedResult);

})
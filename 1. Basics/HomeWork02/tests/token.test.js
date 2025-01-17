import StringToken from '../src/token';

// @ts-ignore
test('Empty string should return null', () => {
    // Arrange
    const token = new StringToken('');

    // Act
    const result = token.getToken();

    // Assert
    // @ts-ignore
    expect(result).toBe(null);
});

// @ts-ignore
test('Normal string should return token', () => {
    // Arrange
    const str = 'Bearer vCVVCHjTylu2lMtEf5wjljd5VvBkuizKYGITwAoV75XXj5uiv30MLYtINF';
    const expectResult = 'vCVVCHjTylu2lMtEf5wjljd5VvBkuizKYGITwAoV75XXj5uiv30MLYtINF';
    const token = new StringToken(str);

    // Act
    const result = token.getToken();

    // Assert
    // @ts-ignore
    expect(result).toBe(expectResult);

})

// @ts-ignore
test('Token lenght should be more then 10 elements', () => {
    // Arrange
    const str = 'Bearer 1';
    const token = new StringToken(str);
    // const expectResult = 'Token should be more then 10 elements';

    // Act
    const result = token.getToken();

    // Assert
    // @ts-ignore
    expect(result).toBe(null);

})

// @ts-ignore
test('Token should contain only numbers and english alphabet letters', () => {
    // Arrange
    const str = 'Bearer фываывафываыва';
    const token = new StringToken(str);
    // const expectResult = 'Token should contain only numbers and english alphabet letters'

    // Act
    const result = token.getToken();

    // Assert
    // @ts-ignore
    expect(result).toBe(null);

})
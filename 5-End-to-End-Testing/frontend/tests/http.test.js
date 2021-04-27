import { Http } from "../app/http/http";

describe('http', () => {
    test('doGet contain header Authorization for authorized user', () => {
        // Arrange
        const fakeData = {
            id: "165466",
            email: "ryvywipew@mail.com",
            createdAt: "2021-04-26T11:37:48.396Z",
            updatedAt: "2021-04-26T11:37:48.411Z",
            username: "bopojil",
            bio: null,
            image: null,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTY1NDY2LCJ1c2VybmFtZSI6ImJvcG9qaWwiLCJleHAiOjE2MjQ2MjEwNjh9.OUi_WL6gh8uXAbpxGkGSK-pPBQTyNviUVKQyLlclvsg"
        };

        localStorage.getItem = jest.fn().mockReturnValue(fakeData);
        const pageHttp = new Http('test');
        console.log('pageHttp:', pageHttp);

        // Act
        const result = pageHttp.doGet(fakeData);
        // Assert
        expect(result).toBeTruthly();
    });
})

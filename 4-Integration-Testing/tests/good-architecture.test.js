// import LocalStorageDataService from "../src/local-storage-data-service";
import RestApiStorageDataService from './rest-api-storage-data-service';
import IssuesDataStorage from "../src/issues-data-storage";
// import IssuesTemplating from "../src/issues-templating";

describe('Issues tests with good architecture', () => {
    test('Create issues sucsessfully', () => {
        // Arrange
        // expect.hasAssertions();
        
        const newLocalStDataServ = new RestApiStorageDataService('http://localhost:3000/list');
        const newIssDataStor = new IssuesDataStorage(newLocalStDataServ);
        // const objFakeData = fakeData[0];

        // Act
        const result = newIssDataStor.createIssue();

        // Assert
        expect(result).toBeTruthy();
    });

    test('Create issues without ID', () => {
        // Arrange
        expect.hasAssertions();
        const ID_2 = '92698cbe-4eb0-5727-9959-d587d3042e94';
        const fakeData = [
            {
                description: "jbj",
                severity: "Low",
                assignedTo: "jbk",
                status: 'Open'
            },
            {
                id: ID_2,
                description: "fdbcxfbxf",
                severity: "High",
                assignedTo: "1234",
                status: "Open"
            }
        ];
        localStorage.getItem = jest.fn().mockReturnValue(fakeData);
        const newLocalStDataServ = new LocalStorageDataService('test 2');
        const newIssDataStor = new IssuesDataStorage(newLocalStDataServ);
        
        const objFakeData = fakeData[0];

        // Act & Assert
        expect(() => newIssDataStor.createIssue(objFakeData)).toThrow(Error);
    })

    test('Delete issue sucsessfully', () => {
        // Arrange
        expect.hasAssertions();
        const ID_1 = '0ae8cc16-be04-5741-a1be-d6745d73665f';
        const ID_2 = '92698cbe-4eb0-5727-9959-d587d3042e94';
        const ID_3 = '0ae8cc16-be04-5741-a1be-d6745d77777f';
        const fakeData = [
            {
                id: ID_1,
                description: "jbj",
                severity: "Low",
                assignedTo: "jbk",
                status: 'Open'
            },
            {
                id: ID_2,
                description: "fdbcxfbxf",
                severity: "High",
                assignedTo: "1234",
                status: "Open"
            },
            {
                id: ID_3,
                description: "fdbcxfbxf",
                severity: "High",
                assignedTo: "3333",
                status: "Open"
            }
        ];
        localStorage.getItem = jest.fn().mockReturnValue(fakeData);
        const newLocalStDataServ = new LocalStorageDataService('test 3');
        const newIssDataStor = new IssuesDataStorage(newLocalStDataServ);
        const objFakeData = fakeData[0];

        // Act
        const result = newIssDataStor.createIssue(objFakeData);

        // Assert
        expect(result).toBe(true);
    });
})
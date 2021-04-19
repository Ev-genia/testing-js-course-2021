import LocalStorageDataService from "../src/local-storage-data-service";
import IssuesDataStorage from "../src/issues-data-storage";
import IssuesTemplating from "../src/issues-templating";

describe('Issues tests with good architecture', () => {
    test('Create issues sucsessfully', () => {
        // Arrange
        // expect.hasassertions();
        const ID_1 = '0ae8cc16-be04-5741-a1be-d6745d73665f';
        const ID_2 = '92698cbe-4eb0-5727-9959-d587d3042e94';
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
            }
        ];
        // JSON.parse = jest.fn(fakeData);
        localStorage.getItem = jest.fn().mockReturnValue(fakeData);
        // console.log();

        
        

        const newLocalStDataServ = new LocalStorageDataService('test 1');
        const newIssDataStor = new IssuesDataStorage(newLocalStDataServ);
        const newIssTemp = new IssuesTemplating(newIssDataStor);
        JSON.parse = jest.fn().mockReturnValue(newIssTemp);
        

        // Act
        const result = newIssDataStor.createIssue(fakeData);
        console.log(result);

        // Assert
        expect(result).toEqual();

        
    });

    test('Delete issue sucsessfully', () => {
        // Arrange
        

        // Act

        // Assert

    });
})
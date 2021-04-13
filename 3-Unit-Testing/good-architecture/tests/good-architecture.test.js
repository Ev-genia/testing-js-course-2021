import IssuesDataStorage from "../src/issues-data-storage";
// import LocalStorageDataService from "../src/local-storage-data-service";

describe('Issues tests with good architecture', () => {
   
    test('Create issues sucsessfully', () => {
        
        // Arrange
        // expect.assertions(1);

        const issues = ['Test issue 1', 'Test issue 2', 'Test issue 3'];
        const expectedIssueus = issues.map((issue) => {
            return new IssuesDataStorage(issue);
        })
        const dataService = {
            addEntiti() {
            }
        };
        dataService.createIssue = jest.fn().mockResolvedValue(expectedIssueus);
        const issuesDataStorage = new IssuesDataStorage(dataService);

        // Act
        issuesDataStorage.createIssue();
        // const dataService = new LocalStorageDataService('issues');
        // const issuesStorage = new IssuesDataStorage(dataService);

        // Assert
        expect(issuesDataStorage._issues).toEqual(expectedIssueus);
    });

    test('Delete issue sucsessfully', () => {
        // Arrange
        const issues = [
            {
                id: 1,
                issue: 'Test issue 1'
            },
            {
                id: 2,
                issue: 'Test issue 2'
            },
            { 
                id: 3,
                issue: 'Test issue 3'
            }
        ];

        // Act

        // Assert

    })
})
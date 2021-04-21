// import { TestScheduler } from '@jest/core';
import { deleteIssue, setStatusClosed } from '../src/main';

describe('function deleteIssue', () => {
    test('Delete is correctly', () => {
        // Arrange
        expect.hasAssertions();
        const ID_1 = '0ae8cc16-be04-5741-a1be-d6745d73665f';
        const ID_2 = '92698cbe-4eb0-5727-9959-d587d3042e94';
        const ID_3 = 'b5d9e628-f8d2-5e7e-8da0-93d2f70164eb';
        const fakeDataFirstCall = [
            {
                id: ID_1,
                description: "jbj",
                severity: "Low",
                assignedTo: "jbk",
                status: "Open"
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
                description: "dfkghfkl",
                severity: "Medium",
                assignedTo: "vbjkdvkjdzv",
                status: "Open"
            }
        ];
        const fakeDataSecondCall = [
            {
                id: ID_1,
                description: "jbj",
                severity: "Low",
                assignedTo: "jbk",
                status: "Open"
            },
            {
                id: ID_2,
                description: "fdbcxfbxf",
                severity: "High",
                assignedTo: "1234",
                status: "Open"
            }
        ];
        JSON.parse = jest.fn().mockReturnValueOnce(fakeDataFirstCall).mockReturnValueOnce(fakeDataSecondCall);

        // Act
        deleteIssue(ID_3);

        // Assert
        expect(fakeDataFirstCall).toEqual(fakeDataSecondCall);
    })
});

describe('setStatusClosed function', () => {
    test('Close status is correctly', () => {
        // Arrange
        expect.hasAssertions();
        const ID_1 = '0ae8cc16-be04-5741-a1be-d6745d73665f';
        const ID_2 = '92698cbe-4eb0-5727-9959-d587d3042e94';
        const fakeDataFirstCall = [
            {
                id: ID_1,
                description: "jbj",
                severity: "Low",
                assignedTo: "jbk",
                status: "Open"
            },
            {
                id: ID_2,
                description: "fdbcxfbxf",
                severity: "High",
                assignedTo: "1234",
                status: "Open"
            }
        ];
        const fakeDataSecondCall = [
            {
                id: ID_1,
                description: "jbj",
                severity: "Low",
                assignedTo: "jbk",
                status: "Open"
            },
            {
                id: ID_2,
                description: "fdbcxfbxf",
                severity: "High",
                assignedTo: "1234",
                status: "Closed"
            }
        ];
        JSON.parse = jest.fn().mockReturnValueOnce(fakeDataFirstCall).mockReturnValueOnce(fakeDataSecondCall);

        // Act
        setStatusClosed(ID_2);

        // Assert
        expect(fakeDataFirstCall).toEqual(fakeDataSecondCall);
    })
});
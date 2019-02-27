import 'dotenv/config';

describe('Test the configuration', () => {
    test('if the Environment variables are present', () => {
        expect(process.env.SECRET_KEY).toBeTruthy();
    });
    test('if NODE_ENV is present', () => {
        expect(process.env.NODE_ENV).toBeTruthy();
    })
})

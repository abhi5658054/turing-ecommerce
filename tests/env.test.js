import 'dotenv/config';

describe('Test the configuration', () => {
    test('if the Environment variables are present', () => {
        expect(process.env.SECRET_KEY).toBeTruthy();
    });
})

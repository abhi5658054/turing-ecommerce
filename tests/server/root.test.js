import request from "supertest";

import app from "../../server/app";

describe('Test the root path', () => {
    test('if the response is success for root path /', () => {
        return request(app).get("/").expect(200);
    })
})


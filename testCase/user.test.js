const assert = require('assert');
const chai = require('chai');

describe('User Test', function () {
    it('should return user details', function () {
        const user = { name: 'John Doe', age: 30 };
        assert.strictEqual(user.name, 'John Doe');
        assert.strictEqual(user.age, 30);
    });

    it('should return user age', function () {
        const user = { name: 'Jane Doe', age: 25 };
        assert.strictEqual(user.age, 25);
    });
});
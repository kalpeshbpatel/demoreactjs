const assert = require('assert');
const chai = require('chai');
expect = chai.expect;

const userCtrl = require('../app/Users/controllers/user.controller');

describe('Users', function () {
    it('test return 12 value', async function () {
        await expect(userCtrl.test()).equal(12);
    });
});

describe('Users', function () {
    it('should return more then one users', async function () {
        expect(userCtrl.users()).length.to.be.greaterThan(0);
    });
});
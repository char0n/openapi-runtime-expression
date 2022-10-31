import { assert } from 'chai';

import { test } from '../src/index.js'

describe('test', function () {
  it('should detect expression', function () {
    assert.isTrue(test('$url'));
    assert.isTrue(test('$method'));
    assert.isTrue(test('$request.path.eventType}'));
    assert.isTrue(test('$request.path.id'));
    assert.isTrue(test('$request.query.queryUrl'));
    assert.isTrue(test('$request.header.content-Type'));
    assert.isTrue(test('$request.header.accept'));
    assert.isTrue(test('$response.header.Location'));
    assert.isTrue(test('$response.header.Server'));
    assert.isTrue(test('$request.body#/url'));
    assert.isTrue(test('$request.body#/failedUrl'));
    assert.isTrue(test('$request.body#/successUrls/2'));
    assert.isTrue(test('$request.body#/id'));
    assert.isTrue(test('$request.body#/email'));
    assert.isTrue(test('$request.body#/user/uuid'));
    assert.isTrue(test('$response.body#/uuid'));
    assert.isTrue(test('$response.body#/username'));
    assert.isTrue(test('$response.body#/status'));
  });

  it('should not detect expression', function () {
    assert.isFalse(test(''));
    assert.isFalse(test('1'));
    assert.isFalse(test('nonsensical string'));
    assert.isFalse(test('inside$urlstring'));
    assert.isFalse(test('inside $url string'));
    assert.isFalse(test(1));
    assert.isFalse(test(null));
    assert.isFalse(test(undefined));
  });
});

import { assert } from 'chai';

import {extract, test} from '../src/index.js';

describe('extract', function () {
  it('should extract expression from OpenAPI runtime expression', function () {
    assert.strictEqual(extract('{$url}'), '$url');
    assert.strictEqual(extract('{$method}'), '$method');
    assert.strictEqual(extract('{$request.path.eventType}'), '$request.path.eventType');
    assert.strictEqual(extract('{$request.path.id}'), '$request.path.id');
    assert.strictEqual(extract('{$request.query.queryUrl}'), '$request.query.queryUrl');
    assert.strictEqual(extract('{$request.header.content-Type}'), '$request.header.content-Type');
    assert.strictEqual(extract('{$request.header.accept}'), '$request.header.accept');
    assert.strictEqual(extract('{$response.header.Location}'), '$response.header.Location');
    assert.strictEqual(extract('{$response.header.Server}'), '$response.header.Server');
    assert.strictEqual(extract('{$request.body#/url}'), '$request.body#/url');
    assert.strictEqual(extract('{$request.body#/failedUrl}'), '$request.body#/failedUrl');
    assert.strictEqual(extract('{$request.body#/successUrls/2}'), '$request.body#/successUrls/2');
    assert.strictEqual(extract('{$request.body#/id}'), '$request.body#/id');
    assert.strictEqual(extract('{$request.body#/email}'), '$request.body#/email');
    assert.strictEqual(extract('{$request.body#/user/uuid}'), '$request.body#/user/uuid');
    assert.strictEqual(extract('{$response.body#/uuid}'), '$response.body#/uuid');
    assert.strictEqual(extract('{$response.body#/username}'), '$response.body#/username');
    assert.strictEqual(extract('{$response.body#/status}'), '$response.body#/status');

    assert.strictEqual(extract('{$url $method}'), '$url $method');
    assert.strictEqual(extract('{$request.path.eventType}}'), '$request.path.eventType}');
    assert.strictEqual(extract('{$request.path.id}}'), '$request.path.id}');
    assert.strictEqual(extract('{$request.query.queryUrl}}'), '$request.query.queryUrl}');
    assert.strictEqual(extract('{$request.body#/url}}'), '$request.body#/url}');
    assert.strictEqual(extract('{$request.body#/user/uuid}}'), '$request.body#/user/uuid}');
  });

  it('should return null on no match', function () {
    assert.isNull(extract('nonsensical string'));
  });

  it('should return null on invalid input', function () {
    assert.isNull(extract(null));
    assert.isNull(extract(1));
  });
});

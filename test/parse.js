import { assert } from 'chai';

import { parse } from '../src/index.js'

describe('parse', function () {
  context('given valid source string', function () {
    context('$url', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$url');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [[ 'expression', '$url']]);
      });
    });

    context('$method', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$method');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [['expression', '$method']]);
      });
    });

    context('$request.path.eventType', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$request.path.eventType');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [
          ['expression', '$request.path.eventType'],
          ['source', 'path.eventType'],
          ['path-reference', 'path.eventType'],
          ['name', 'eventType'],
        ]);
      });
    });

    context('$request.path.id', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$request.path.id');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [
          ['expression', '$request.path.id' ],
          ['source', 'path.id'],
          ['path-reference', 'path.id'],
          ['name', 'id'],
        ]);
      });
    });

    context('$request.query.queryUrl', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$request.query.queryUrl');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [
          ['expression', '$request.query.queryUrl'],
          ['source', 'query.queryUrl'],
          ['query-reference', 'query.queryUrl'],
          ['name', 'queryUrl'],
        ]);
      });
    });

    context('$request.header.content-Type', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$request.header.content-Type');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [
          ['expression', '$request.header.content-Type'],
          ['source', 'header.content-Type'],
          ['header-reference', 'header.content-Type'],
          ['token', 'content-Type'],
        ]);
      });
    });

    context('$request.header.accept', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$request.header.accept');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [
          ['expression', '$request.header.accept'],
          ['source', 'header.accept'],
          ['header-reference', 'header.accept'],
          ['token', 'accept'],
        ]);
      });
    });

    context('$request.header.Location', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$request.header.Location');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [
          ['expression', '$request.header.Location' ],
          ['source', 'header.Location'],
          ['header-reference', 'header.Location'],
          ['token', 'Location'],
        ]);
      });
    });

    context('$request.header.Server', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$request.header.Server');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [
          ['expression', '$request.header.Server'],
          ['source', 'header.Server'],
          ['header-reference', 'header.Server'],
          ['token', 'Server'],
        ]);
      });
    });

    context('$request.body#/url', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$request.body#/url');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [
          ['expression', '$request.body#/url'],
          ['source', 'body#/url'],
          ['body-reference', 'body#/url'],
          ['json-pointer', '/url'],
          ['reference-token', 'url'],
        ]);
      });
    });

    context('$request.body#/failedUrl', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$request.body#/failedUrl');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [
          ['expression', '$request.body#/failedUrl'],
          ['source', 'body#/failedUrl'],
          ['body-reference', 'body#/failedUrl'],
          ['json-pointer', '/failedUrl'],
          ['reference-token', 'failedUrl'],
        ]);
      });
    });

    context('$request.body#/successUrls/2', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$request.body#/successUrls/2');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [
          ['expression', '$request.body#/successUrls/2'],
          ['source', 'body#/successUrls/2'],
          ['body-reference', 'body#/successUrls/2'],
          ['json-pointer', '/successUrls/2'],
          ['reference-token', 'successUrls'],
          ['reference-token', '2'],
        ]);
      });
    });

    context('$request.body#/id', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$request.body#/id');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [
          ['expression', '$request.body#/id' ],
          ['source', 'body#/id'],
          ['body-reference', 'body#/id'],
          ['json-pointer', '/id'],
          ['reference-token', 'id'],
        ]);
      });
    });

    context('$request.body#/email', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$request.body#/email');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [
          ['expression', '$request.body#/email' ],
          ['source', 'body#/email'],
          ['body-reference', 'body#/email'],
          ['json-pointer', '/email'],
          ['reference-token', 'email'],
        ]);
      });
    });

    context('$request.body#/user/uuid', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$request.body#/user/uuid');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [
          ['expression', '$request.body#/user/uuid' ],
          ['source', 'body#/user/uuid'],
          ['body-reference', 'body#/user/uuid'],
          ['json-pointer', '/user/uuid'],
          ['reference-token', 'user'],
          ['reference-token', 'uuid'],
        ]);
      });
    });

    context('$response.body#/uuid', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$response.body#/uuid');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [
          ['expression', '$response.body#/uuid' ],
          ['source', 'body#/uuid'],
          ['body-reference', 'body#/uuid'],
          ['json-pointer', '/uuid'],
          ['reference-token', 'uuid'],
        ]);
      });
    });

    context('$response.body#/username', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$response.body#/username');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [
          ['expression', '$response.body#/username'],
          ['source', 'body#/username'],
          ['body-reference', 'body#/username'],
          ['json-pointer', '/username'],
          ['reference-token', 'username'],
        ]);
      });
    });

    context('$response.body#/status', function () {
      specify('should parse and translate', function () {
        const parseResult = parse('$response.body#/status');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isTrue(parseResult.result.success);
        assert.deepEqual(parts, [
          ['expression', '$response.body#/status'],
          ['source', 'body#/status'],
          ['body-reference', 'body#/status'],
          ['json-pointer', '/status'],
          ['reference-token', 'status'],
        ]);
      });
    });
  });

  context('given invalid source string', function () {
    context('empty string', function () {
      specify('should fail parsing', function () {
        const parseResult = parse('');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isFalse(parseResult.result.success);
        assert.lengthOf(parts, 0);
      });
    });

    context('1', function () {
      specify('should fail parsing', function () {
        const parseResult = parse('1');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isFalse(parseResult.result.success);
        assert.lengthOf(parts, 0);
      });
    });

    context('nonsensical string', function () {
      specify('should fail parsing', function () {
        const parseResult = parse('nonsensical string');

        const parts = [];
        parseResult.ast.translate(parts);

        assert.isFalse(parseResult.result.success);
        assert.lengthOf(parts, 0);
      });
    });
  });

  context('given non-string input', function () {
    specify('should throw error', function () {
      assert.throws(() => parse(1), Error);
      assert.throws(() => parse(null), Error);
      assert.throws(() => parse(undefined), Error);
    });
  });
});

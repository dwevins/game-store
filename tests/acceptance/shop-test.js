import { test } from 'qunit';
import moduleForAcceptance from 'game-store/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | shop');

test('User can visit store page (index route)', function (assert) {
  visit('/');

  andThen(function () {
    assert.equal(currentURL(), '/', 'user is at root url');
    assert.equal(currentRouteName(), 'index', 'user is in index route');
  });
});

test('User can get to registration route from index route', (assert) => {
  visit('/');
  click('.register-link');

  andThen(() => {
    assert.equal(currentURL(), '/register', 'user is at /register url');
    assert.equal(currentRouteName(), 'register', 'user is in register route');
  });
});

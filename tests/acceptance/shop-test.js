import { test } from 'qunit';
import moduleForAcceptance from 'game-store/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | shop');

test('User can visit store page (index route)', (assert) => {
  visit('/');

  andThen(() => {
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

test('User can get to login route from index route', (assert) => {
  visit('/');
  click('.login-link');

  andThen(() => {
    assert.equal(currentURL(), '/login', 'user is at /login url');
    assert.equal(currentRouteName(), 'login', 'user is in login route');
  });
});

test('User can see a list of available games', (assert) => {
  // create mirage data mockup
  visit('/');
  andThen(() => {
    // find components
  });
});

test('User can see the shopping cart', (assert) => {
  // this does not test cart functionlity, see cart-test.js for those tests
  visit('/');

  andThen(() => {
    findWithAssert('.cart-box');
  });
});

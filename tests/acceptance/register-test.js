import { test } from 'qunit';
import moduleForAcceptance from 'game-store/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | register');

test('visiting /register', function(assert) {
  visit('/register');

  andThen(function() {
    assert.equal(currentURL(), '/register');
  });
});

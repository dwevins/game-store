import { test } from 'qunit';
import moduleForAcceptance from 'game-store/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | shop');

test('visiting /shop', function(assert) {
  visit('/shop');

  andThen(function() {
    assert.equal(currentURL(), '/shop');
  });
});

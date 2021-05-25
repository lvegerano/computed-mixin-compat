import EmberObject from '@ember/object';
import ClassicMixinMixin from 'computed-mixin-compat/mixins/classic-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | classic-mixin', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ClassicMixinObject = EmberObject.extend(ClassicMixinMixin);
    let subject = ClassicMixinObject.create();
    assert.ok(subject);
  });
});

import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Mixin.create({
    proxyService: service(),

    shouldRenderFoo: computed('proxyService.{arrayProp,stringProp}', function () {
        if (this.proxyService.arrayProp.length && this.proxyService.stringProp) return 'has both';
        if (this.proxyService.arrayProp.length) return 'has array';
        if (this.proxyService.stringProp) return 'has string';
        return 'foo';
    }),
});

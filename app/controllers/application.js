import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import faker from 'faker';

export default class ApplicationController extends Controller {
    @tracked record;
    @service proxyService;
    @service classic;

    /** COMMENT THIS SECTION TO MAKE THE COMPUTED WORK**/
    /** START  **/
    queryParams = [
        { labels: { type: 'array', as: 'l' } }
    ];

    set labels(value) {
        this.proxyService.array_prop = value;
    }

    get labels() {
        return this.proxyService.arrayProp;
    }
    /** END **/

    @action
    addToArray() {
        this.proxyService.pushId(faker.random.alphaNumeric());
    }

    @action
    reload() {
        window.location.replace('/')
    }
}

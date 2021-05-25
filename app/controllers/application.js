import Controller from '@ember/controller';
import Obj from '../models';
import { tracked } from '@glimmer/tracking';
import { getOwner } from '@ember/application';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import faker from 'faker';

export default class ApplicationController extends Controller {
    @tracked record;
    @service proxyService;

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

    constructor(...args) {
        super(...args);
        // This simulates a tribal data layer we have
        this.record = Obj.create({
            container: getOwner(this),
        });
    }

    @action
    addToArray() {
        this.proxyService.pushId(faker.random.alphaNumeric());
    }
}

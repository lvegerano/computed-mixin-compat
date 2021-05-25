import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { dependentKeyCompat } from '@ember/object/compat';

export default class ProxyServiceService extends Service {
    @tracked _array_prop;

    get array_prop() {
        return this._array_prop;
    }

    set array_prop(value) {
        this._array_prop = value;
    }

    @dependentKeyCompat
    get arrayProp() {
        return this.array_prop || [];
    }

    pushId(id) {
        if (!this._array_prop) {
            this._array_prop = [id];
            return;
        }

        const array = [...this._array_prop];
        array.push(id);
        array.sort((a, b) => a > b);
        this._array_prop = array;
        // this.notifyPropertyChange('arrayProp') // UNCOMMENTING THIS ALSO MAKES IT WORK BUT IMO THIS IS SUS
    }
}

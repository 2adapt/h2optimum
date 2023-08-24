let { Model, raw } = require('objection');

class DeviceType extends Model {
    static get tableName() {
        return 't_device_types';
    }

    static get idColumn() {
        return 'id';
    }

    static get useLimitInFirst() {
        return true;
    }
    
    
    static get modifiers() {
        return {

            defaultSelect(query) {
                                
                let { ref } = this._modelClass;

                query.select(
                    // ref('id'),
                    ref('code'),
                    ref('description')
                )
                .where('active', true)

            },

        }
    }
   

}

module.exports = DeviceType;

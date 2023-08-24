let { Model, raw } = require('objection');

class Device extends Model {
    static get tableName() {
        return 't_devices';
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
                    ref('id'),
                    ref('user_id'),
                    ref('installation_id'),
                    ref('device_type_code'),
                    ref('battery_mode_code'),
                    ref('mac'),
                    ref('activation_key'),
                    ref('description'),
                    ref('last_reading'),
                    ref('created_at'),
                    ref('active'),

                )

            },

        }
    }
    
    static get relationMappings() {

        let User = require('./User.js')
        let Installation = require('./Installation.js');
        let DeviceType = require('./DeviceType.js');
        
        return {

            owner: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 't_devices.user_id',
                    to: 't_users.id',
                }
            },

            installation: {
                relation: Model.BelongsToOneRelation,
                modelClass: Installation,
                join: {
                    from: 't_devices.installation_id',
                    to: 't_installations.id',
                }
            },

            deviceType: {
                relation: Model.BelongsToOneRelation,
                modelClass: DeviceType,
                join: {
                    from: 't_devices.device_type_code',
                    to: 't_device_types.code',
                }
            }
        }
    }
    /*
    static get jsonSchema () {

        return {
            type: 'object',
            properties: {

                files: { 
                    type: 'array' ,
                    items: { type: 'string' }
                }
            }
        }
    }
    */
}

module.exports = Device;

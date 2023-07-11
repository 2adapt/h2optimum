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
                .orderBy('id')

            },

            // slimSelect(query) {
                                
            //     let { ref } = this._modelClass;

            //     query.select(
            //         ref('id'),
            //         ref('municipality_id'),
            //         ref('type'),
            //         ref('valid_from'),
            //         ref('valid_until'),
            //         ref('best_practice_limit'),
            //     )
            //     .orderBy('valid_until', 'desc')
                

            // },
        }
    }
    
    static get relationMappings() {

        let User = require('./User.js')
        let Installation = require('./Installation.js');
        
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

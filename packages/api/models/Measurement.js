let { Model, raw } = require('objection');

class Measurement extends Model {
    static get tableName() {
        return 't_measurements';
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
                    ref('ts'),
                    ref('device_id'),
                    ref('sid'),
                    ref('type'),
                    ref('val'),
                    ref('version'),
                    ref('installation_id'),
                )
                .orderBy('id')

            },

        }
    }
    
    static get relationMappings() {

        let Device = require('./Device.js');
        let Installation = require('./Installation.js');
        
        return {

            device: {
                relation: Model.BelongsToOneRelation,
                modelClass: Device,
                join: {
                    from: 't_measurements.device_id',
                    to: 't_devices.id',
                }
            },

            installation: {
                relation: Model.BelongsToOneRelation,
                modelClass: Installation,
                join: {
                    from: 't_measurements.installation_id',
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

module.exports = Measurement;

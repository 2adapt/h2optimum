let { Model, raw } = require('objection');

class Installation extends Model {
    static get tableName() {
        return 't_installations';
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
                    ref('soil_type_code'),
                    ref('crop_type_code'),
                    ref('name'),
                    raw(`slugify(name)`).as('slug'),
                    ref('description'),
                    ref('timezone'),
                    ref('location'),
                    ref('active'),
                    ref('status'),

                    // field from the old api; should be remove later
                    ref('user_id').as('userId'),
                    ref('soil_type_code').as('soilTypeCode'),
                    ref('crop_type_code').as('cropTypeCode'),
                )
                .orderBy('id', 'desc')

            },

        }
    }
    
    static get relationMappings() {

        let User = require('./User.js');
        let Device = require('./Device.js');
        let SoilType = require('./SoilType.js');

        return {

            owner: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 't_installations.user_id',
                    to: 't_users.id',
                }
            },

            deviceList: {
                relation: Model.HasManyRelation,
                modelClass: Device,
                join: {
                    from: 't_devices.installation_id',
                    to: 't_installations.id',
                }
            },

            soilType: {
                relation: Model.BelongsToOneRelation,
                modelClass: SoilType,
                join: {
                    from: 't_installations.soil_type_code',
                    to: 't_soil_types.code',
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

module.exports = Installation;

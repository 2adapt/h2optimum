let { Model, raw } = require('objection');

class SoilType extends Model {
    static get tableName() {
        return 't_soil_types';
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
                    ref('description'),
                    ref('limit1'),
                    ref('limit2'),
                )
                .where('active', true)

            },

        }
    }
   

}

module.exports = SoilType;

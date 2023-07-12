let { Model, raw } = require('objection');

class User extends Model {
    static get tableName() {
        return 't_users';
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
                    ref('email'),
                    ref('first_name'),
                    ref('last_name'),
                )
                .orderBy('id', 'desc')

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

        let Installation = require('./Installation.js');

        return {

            installationList: {
            	relation: Model.HasManyRelation,
            	modelClass: Installation,
            	join: {
            	    from: 't_users.id',
            	    to: 't_installations.user_id',
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

module.exports = User;

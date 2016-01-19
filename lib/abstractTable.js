module.exports = {
    _name: null,
    _connection: require('knex')(require('../config/mysql')),
    fetchAll : function(limit,offset){
        var query = this._connection(this._name);
        if(limit){query.limit(limit);}
        if(offset){query.offset(offset);}
        return query;
    }
};
const {Schema,model} = require('mongoose')
require('dotenv').config;





const restSchema = new Schema({
  carta: 
		{
			nombre: { type: String, required: true },
			detalle: { type: String, required: true },
			imagen: { type: String, required: true },
            precio: { type: Number, required: true },
            ranking: { type: Number, required: true },
    },

});
module.exports = model("Carta", restSchema);
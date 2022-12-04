const { gql } = require('apollo-server-express') 


const  typeDefs = gql`

    type Comentario {
		idUsuario: ID
		contenido: String
		idRestaurante: ID
	}

    input ComentarioInput {
		idUsuario: ID
		contenido: String
		idRestaurante: ID
	}


    type Carta {
	  nombre: String
	  detalle:String
	  imagen:String
      precio:Float
      ranking:Float
	}

    input CartaInput {
		nombre: String
	    detalle:String
	    imagen:String
        precio:Float
        ranking:Float
	}



    type Calificacion {
		idUsuario: ID
		calificacion: Float
		idRestaurante: ID
	}

    input CalificacionInput {
		idUsuario: ID
		calificacion: Float
		idRestaurante: ID
	}


    type Etiqueta {
		etiqueta: String
    }

    input EtiquetaInput {
		etiqueta: String
	}

    type Restaurante {
        id: ID
		nombre: String
		direccion: String
		telefono: String
		email: String
		imagen: String
		descripcion: String
        latitud: Float
        longitud: Float
        etiquetas: [String]
        comentarios: [Comentario]
        calificaciones: [Carta]
        carta: [Carta]
        N_calificaciones: Float
        total_puntos: Float
        
    }

    input RestauranteInput {
        id: ID
		nombre: String
		direccion: String
		telefono: String
		email: String
		imagen: String
		descripcion: String
        latitud: Float
        longitud: Float
        etiquetas: [String]
        N_calificaciones: Float
        total_puntos: Float
    }


type Query {
    hello: String
    getRestaurantes: [Restaurante]
    getRestaurante(id: ID): Restaurante
    getRestauranteEtiqueta(etiquetas2: [String]): [Restaurante]
    getRestaurantesCerca(latitud1: Float,longitud1:Float,etiquetas2: [String]):[Restaurante]
    getComentarios(idRest: ID): [Restaurante]
    
    Variosrestaurantes(id:[ID]):[Restaurante]
    
}

type Mutation{
    crearRestaurante(Restaurante:RestauranteInput): Restaurante
    deteleRestaurante(id:ID): String
    updateRestaurante(id:ID,Restaurante:RestauranteInput): Restaurante
    createEtiqueta(idRest: ID!, etiqueta: [String]): Restaurante
    createComentario(idRest: ID!, Comentario: ComentarioInput!): Restaurante
    createCalificacion(idRest:ID!,Calificacion:CalificacionInput!):Restaurante
    crearCarta(idRest:ID!,carta:CartaInput):Restaurante

    
}
`


module.exports = {typeDefs}

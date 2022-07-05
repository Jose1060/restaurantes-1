
const restaurantes = require('./models/Restaurantes')


const resolvers = {
    Query: {
        hello: () => "Hello world",
        getRestaurantes: async() => {
           const rest = await restaurantes.find()
            return rest
        },
        getRestaurante: async(_, {id}) => {
            return await restaurantes.findById(id);
        },
        getRestauranteEtiqueta: async(_,{etiquetas2}) =>{
            
            

                const rest = await restaurantes.find({etiquetas: {$in:etiquetas2}})

                console.log(rest)

            return rest

            
        },
        getRestaurantesCerca: async(_,{latitud1,longitud1,etiquetas2}) =>{
            const rest = await restaurantes.find({}).select('longitud')
            const x1 = latitud1 - 0.004
            const x2 = latitud1 + 0.004

            const y1 = longitud1 - 0.004
            const y2 = longitud1 + 0.004


            const rest2 = await restaurantes.find({$and: [{longitud: {$gte:y1,$lte : y2}}, {latitud: {$gte:x1, $lte : x2}},{etiquetas: {$in:etiquetas2}}]})

            console.log("latitud")
            console.log(x1)
            console.log(x2)

            console.log("longitud")
            console.log(y1)
            console.log(y2)
            console.log(rest)
            
            return rest2
        },
        getComentarios: async (_, args) => {
			return Restaurante.findById(args.idRest);
		},
        
    },
    Mutation: {
        createComentario: async (_, args) => {
			const { idRest, Comentario } = args;
			const rest = await restaurantes.findById(idRest);
			rest.comentarios.push(Comentario);
			await rest.save();
			return rest;
		},

        createCalificacion: async (_, args) => {
			const { idRest, Calificacion } = args;
            //buscamos el restaruante al cual calificar 
			const rest = await restaurantes.findById(idRest);
            

            //le sumamos 1 a las calificaciones que tiene el restaurante 
            if (rest.N_calificaciones == 0.0){
                const updatecal = await restaurantes.findOneAndUpdate(idRest,{
                    $set: {N_calificaciones: 1}
                },{new: true})

                const updateprom = await restaurantes.findOneAndUpdate(idRest,{
                    $set: {promedio: Calificacion.calificacion}
                },{new: true})

                const updatetotalPunto = await restaurantes.findOneAndUpdate(idRest,{
                    $set: {total_puntos: Calificacion.calificacion}
                },{new: true})


            }else{

                const prom = ((rest.total_puntos+ Calificacion.calificacion)/(rest.N_calificaciones+1))

                const updatecal = await restaurantes.findOneAndUpdate(idRest,{
                    $set: {N_calificaciones: rest.N_calificaciones+1}
                },{new: true})

                const updateprom = await restaurantes.findOneAndUpdate(idRest,{
                  $set: {promedio: prom}
                 },{new: true})

                 const updatetotalPunto = await restaurantes.findOneAndUpdate(idRest,{
                    $set: {total_puntos: rest.total_puntos+Calificacion.calificacion}
                },{new: true})

            }
            
			rest.calificaciones.push(Calificacion)
            
			await rest.save();
			return rest;
		},


        createEtiqueta: async (_, args) => {
			const { idRest, etiqueta } = args;
			const rest = await restaurantes.findById(idRest);
			await rest.save();
            
            for(etiqueta3 in etiqueta){
                const rest = await restaurantes.findById(idRest);
			    rest.etiquetas.push(etiqueta[etiqueta3]);
			    await rest.save();
            }
            
			return rest;
		},

        crearRestaurante: async(_, args) => {
            var N_calificaciones = 0.0
            var promedio = 0.0
            var total_puntos = 0.0
            const {nombre,direccion,telefono,email,imagen,descripcion,latitud,longitud,etiquetas} = args.Restaurante
            const newRestaurante = new restaurantes({nombre,direccion,telefono,email,imagen,descripcion,latitud,longitud,etiquetas,N_calificaciones,promedio,total_puntos});
            await newRestaurante.save()
            return newRestaurante
        },
        async deteleRestaurante(_,{id}){
            await restaurantes.findByIdAndDelete(id)
            return "se elimino el restaurante";
        },
        async updateRestaurante(_,{Restaurante,id}){
            const restupdate = await restaurantes.findByIdAndUpdate(id,{
                $set: Restaurante
            },{new: true})
            return restupdate
        },
        
        
    }
}

module.exports = { resolvers };
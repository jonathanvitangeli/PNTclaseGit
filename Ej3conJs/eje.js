const personajesSimpsons = [
    { nombre: "Homero", edad: 39, rol: "Padre" },
    { nombre: "Marge", edad: 36, rol: "Madre" },
    { nombre: "Bart", edad: 10, rol: "Hijo" },
    { nombre: "Lisa", edad: 8, rol: "Hija" },
    { nombre: "Maggie", edad: 1, rol: "Hija" },
    { nombre: "Ned", edad: 35, rol: "Vecino" },
    { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
    { nombre: "Milhouse", edad: 10, rol: "Amigo" },
    { nombre: "Nelson", edad: 12, rol: "Bravucón" },
    { nombre: "Martin", edad: 10, rol: "Compañero de clase" }
    ];

    const personajesMenores = personajesSimpsons.filter(personajesSimpsons => personajesSimpsons.edad < 18);

    console.log(personajesMenores);

    const sumaEdades = personajesSimpsons.reduce((total, personajesSimpsons) => total + personajesSimpsons.edad, 0);

    console.log(`La suma de las edades de todos los personajes es: ${sumaEdades}`);

    const nombresPersonajes = personajesSimpsons.map(personajesSimpsons => personajesSimpsons.nombre);

    console.log(nombresPersonajes);

    const personajesActualizados = personajesSimpsons.map(({ nombre, edad, rol }) => {
        return {
            nombre,
            edad,
            rol: edad < 18 ? "Estudiante" : rol
        };
    });

    console.log(personajesActualizados);

    const personajesAdicionales = [
        { nombre: "Apu", edad: 40, rol: "Dueño de tienda" },
        { nombre: "Skinner", edad: 50, rol: "Director de escuela" },
        { nombre: "Edna", edad: 45, rol: "Maestra" },
        { nombre: "Krusty", edad: 60, rol: "Payaso" }
    ];

    const todosLosPersonajes = [...personajesSimpsons, ...personajesAdicionales];

    console.log(todosLosPersonajes);
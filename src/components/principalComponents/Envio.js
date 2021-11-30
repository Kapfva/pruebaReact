
// async manejarEnvioDeFormulario(evento) {

//     evento.preventDefault();
//     // Codificar nuestro videojuego como JSON

//     const cargaUtil = JSON.stringify(this.state.videojuego);
//     // ¡Y enviarlo!
//     const respuesta = await fetch(`${Constantes.RUTA_API}/guardar_videojuego.php`, {
//         method: "POST",
//         body: cargaUtil,
//     });
//     const exitoso = await respuesta.json();
//     if (exitoso) {
//         toast('Videojuego guardado 🎮', {
//             position: "top-left",
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         this.setState({
//             videojuego: {
//                 nombre: "",
//                 precio: "",
//                 calificacion: "",
//             }
//         });
//     } else {
//         toast.error("Error guardando. Intenta de nuevo");
//     }
// }
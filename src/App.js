
import preguntas from "./preguntas";
import "./global.css"
import { useState, useEffect } from "react";


function App() {

  const [preguntaActual, setPreguntaActual] = useState(0);

  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const [tiempoRestante, setTiempoRestante] = useState(10);

  const [areDisabled, setAreDisabled] = useState(false);

  const [respuestasVisibles, setRespuestasVisibles] = useState(false);

  function handleAnswerSubmit(isCorrect, e) {
    //añadir puntuacion
    if (isCorrect) {
      setPuntuacion(puntuacion + 1)

    }
    //añadir estilos
    e.target.classList.add(isCorrect ? "correct" : "incorrect")

    //cambiar pregunta
    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {

        setIsFinished(true);




      } else {

        setPreguntaActual(preguntaActual + 1)
      }
    }, 1500);


  }
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) {
        setTiempoRestante(prev => prev - 1);
      } else {
        clearInterval(intervalo); // Detener el intervalo cuando el tiempo restante llegue a 0
        setAreDisabled(true); // Desactivar los botones cuando el tiempo restante llegue a 0
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  // Reiniciar el contador de tiempo cuando cambia la pregunta actual
  useEffect(() => {
    setTiempoRestante(10); // Reiniciar el contador de tiempo a su valor inicial
  }, [preguntaActual]);


  if (isFinished) return (

    <main className="app">

      <div className="juego-terminado">

       

        <button onClick={() => window.location.href = "/"}>Volver A Jugar</button>
        
      </div>
      <span className="game-over-message">Obtuviste {puntuacion} puntos de {preguntas.length}</span>

      <div className="juego-terminado">

       

        <button onClick={() => {

          setIsFinished(false);
          setRespuestasVisibles(true);
          setPreguntaActual (0) ;

        }}>Ver Respuestas</button>
      </div>
    </main>
  )

  if (respuestasVisibles) return (

    <main className="app">

      <div className="lado-izquierdo">

        <div className="numero-pregunta">

          <span>pregunta {preguntaActual + 1}de</span> {preguntas.length}
        </div>
        <div className="titulo-pregunta">
          {preguntas[preguntaActual].titulo}

        </div>


        <div>
          {preguntas[preguntaActual].opciones.filter((opcion)=> opcion.isCorrect)[0].textoRespuesta}
        </div>
        <div>
          <button onClick={()=>{
             if (preguntaActual === preguntas.length - 1) {

             window.location.href="/";
      
      
      
      
            } else {
      
              setPreguntaActual(preguntaActual + 1)
            }
          
      


          }}>
            {preguntaActual=== preguntas.length -1 ? "Volver a Jugar" : "Siguiente" }
          </button>
        </div>

      </div>
    </main >
  )

  return (
    <main className="app">



      <div className="lado-izquierdo">

        <div className="numero-pregunta">

          <span>pregunta {preguntaActual + 1}de</span> {preguntas.length}
        </div>
        <div className="titulo-pregunta">
          {preguntas[preguntaActual].titulo}

        </div>
        <div> {!areDisabled ? (<span className="tiempo-restante">
          Tiempo Restante: {tiempoRestante}

        </span>) : (

          <button onClick={() => {
            setTiempoRestante(10)
            setAreDisabled(false)
            setPreguntaActual(preguntaActual + 1)

          }}>Continuar</button>
        )}



        </div>
      </div>


      <div className="lado-derecho">

        {preguntas[preguntaActual].opciones.map((respuesta) => (
          <button disabled={areDisabled} key={respuesta.textoRespuesta} onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}>
            {respuesta.textoRespuesta}
          </button>
        ))}


      </div>





    </main>
  );
}

export default App;

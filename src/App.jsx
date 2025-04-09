import { AppRouter } from "./routing/AppRouter";
import "./styles/styles.css";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/mis-paquetes" element={<div>Mis paquetes</div>} />
        <Route path="/mis-notificaciones" element={<div>Mis notificaciones</div>} />
        <Route path="/mi-cuenta" element={<div>Mi cuenta</div>} />
        <Route path="/cerrar-sesion" element={<div>Cerrar sesión</div>} />
      </Routes>
    </Router>
  );


}


export default App;
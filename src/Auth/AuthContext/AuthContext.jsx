import {createContext, useContext} from 'react'
import {useState, useEffect} from 'react'


const AuthContext = createContext();

const AuthProvider = ({children,  initialAuthenticated = false, initialUser = null })=>{
    const [authenticated, setAuthenticated]= useState(initialAuthenticated);
    const [user, setUser]= useState(initialUser);
    const [loading, setLoading] = useState(false)
    const [timeLeft, setTimeLeft] = useState(null);  // Tiempo restante para la cuenta regresiva
    const [showWarning, setShowWarning] = useState(false); // Para mostrar la alerta de la sesión por expirar

    const login = (userData, token) => { 
        //console.log('user: ', userData)
        //console.log('tok', token)
        setAuthenticated(true);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('validToken', token)
     }

     const logout = () => { 
        setAuthenticated(false);
        setUser(null);
        //Limpiamos el token y el user
        localStorage.clear();
        window.location.reload();
      }

//*Con esta funcion prevenimos el deslogueo por refresh.
    useEffect(()=>{
        const storedToken = localStorage.getItem('validToken')
        const storedUser = localStorage.getItem('user')
        if (storedToken && storedUser) {
            const tokenPayload = JSON.parse(atob(storedToken.split('.')[1])); // Decodificar el token
            
            const currentTime = Date.now() / 1000; // Tiempo actual en segundos
            if (tokenPayload.exp > currentTime) {
              // Si el token no ha expirado
              setAuthenticated(true);
              setUser(JSON.parse(storedUser));
      
              // Calcular el tiempo restante y programar el logout
              const timeToExpire = (tokenPayload.exp - currentTime) * 1000; // Diferencia en milisegundos
              console.log('aoy el timespire',(timeToExpire /1000/60))
              const timeBeforeWarning = timeToExpire - 120000; // Aviso 2 minutos antes

              // Mostrar aviso faltando 2 minutos
              setTimeout(() => {
                  setShowWarning(true);
                  let countdownTime = 120; // 120 segundos (2 minutos)
                  
                  // Iniciar cuenta regresiva
                  const countdownInterval = setInterval(() => {
                      countdownTime -= 1;
                      setTimeLeft(countdownTime);

                      if (countdownTime <= 0) {
                          clearInterval(countdownInterval);
                      }
                  }, 1000); // Reducir cada segundo
              }, timeBeforeWarning);
              setTimeout(() => {
                logout();
              }, timeToExpire);
            } else {
              // Si el token ya ha expirado, limpiar la sesión
              logout();
            }
          }
         setLoading(false)
       
    },[])
       
    return(
        <AuthContext.Provider value={{authenticated, user, loading, login, logout}}>
            {children}
            {/* {showWarning && (
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                Su sesión expirará en <strong>{timeLeft}</strong> segundos. Guarde todos sus trabajos para no perder datos.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            )} */}
        </AuthContext.Provider>
    )
}

const useAuth = ()=>{
    return useContext(AuthContext);
};

export {AuthProvider, useAuth}
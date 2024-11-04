Te ayudo a explicar cómo puedes integrar contenido de redes sociales en tu aplicación React con Vite.

Para compartir videos de Facebook e Instagram en tu app, puedes usar los plugins oficiales que proporcionan estas plataformas:

Para Facebook, puedes usar el componente de Facebook para React. Aquí te muestro un ejemplo:



```javascript
// Primero instala el paquete:
// npm install react-facebook

import React, { useEffect } from 'react';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';

const SocialMediaEmbed = () => {
  useEffect(() => {
    // Cargar el SDK de Facebook
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: 'TU_APP_ID_DE_FACEBOOK', // Necesitarás crear una app en Facebook Developers
        xfbml: true,
        version: 'v18.0'
      });
    };

    // Cargar el SDK
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/es_LA/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div className="social-container">
      <FacebookProvider appId="TU_APP_ID_DE_FACEBOOK">
        {/* Para compartir un post de Facebook */}
        <EmbeddedPost href="URL_DEL_POST_DE_FACEBOOK" />
        
        {/* Para videos de Facebook */}
        <div 
          className="fb-video" 
          data-href="URL_DEL_VIDEO_DE_FACEBOOK"
          data-width="500"
        />
      </FacebookProvider>

      {/* Para Instagram */}
      <iframe
        title="Instagram post"
        src="https://www.instagram.com/p/CODIGO_DEL_POST/embed"
        width="400"
        height="480"
        frameBorder="0"
        scrolling="no"
        allowtransparency="true"
      />
    </div>
  );
};

export default SocialMediaEmbed;

```

Para usar este componente necesitarás:

1. Crear una aplicación en Facebook Developers (developers.facebook.com) para obtener un App ID
2. Instalar la dependencia react-facebook
3. Reemplazar "TU_APP_ID_DE_FACEBOOK" con tu ID real
4. Para Facebook:
   - Para posts: Usa la URL completa del post en el atributo `href`
   - Para videos: Usa la URL completa del video en `data-href`
5. Para Instagram:
   - Usa el código del post de Instagram en la URL del iframe (es la parte que va después de /p/ en la URL del post)

Algunas consideraciones importantes:

- Asegúrate de que los enlaces que uses sean públicos
- El contenido debe respetar las políticas de uso de Facebook e Instagram
- Es recomendable agregar manejo de errores y estados de carga
- Puedes personalizar el tamaño y la apariencia según tus necesidades

¿Te gustaría que te muestre cómo agregar más funcionalidades como compartir o interactuar con las publicaciones?

Te mostraré el mismo componente pero adaptado para usar Bootstrap en lugar de Tailwind.



```javascript
import React, { useEffect, useState } from 'react';
import { FacebookProvider, EmbeddedPost, ShareButton, Like } from 'react-facebook';

const SocialMediaEmbed = ({ facebookPostUrl, instagramPostCode, videoUrl }) => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Cargar el SDK de Facebook
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: 'TU_APP_ID_DE_FACEBOOK',
        xfbml: true,
        version: 'v18.0'
      });
      setIsLoading(false);
    };

    // Cargar el SDK
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/es_LA/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  // Función para compartir en redes sociales
  const shareToSocialMedia = (platform) => {
    const encodedUrl = encodeURIComponent(window.location.href);
    const encodedTitle = encodeURIComponent('¡Mira este producto increíble!');
    
    const sharePlatforms = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`
    };

    window.open(sharePlatforms[platform], '_blank', 'width=600,height=400');
  };

  // Componente para el menú de compartir
  const ShareMenu = () => (
    <div className="card position-fixed bottom-0 end-0 mb-5 me-5" style={{ zIndex: 1000 }}>
      <div className="card-body">
        <h5 className="card-title">Compartir en:</h5>
        <div className="d-flex flex-column gap-2">
          <button 
            onClick={() => shareToSocialMedia('facebook')}
            className="btn btn-primary"
          >
            <i className="bi bi-facebook me-2"></i>
            Facebook
          </button>
          <button 
            onClick={() => shareToSocialMedia('twitter')}
            className="btn btn-info text-white"
          >
            <i className="bi bi-twitter me-2"></i>
            Twitter
          </button>
          <button 
            onClick={() => shareToSocialMedia('whatsapp')}
            className="btn btn-success"
          >
            <i className="bi bi-whatsapp me-2"></i>
            WhatsApp
          </button>
          <button 
            onClick={() => shareToSocialMedia('telegram')}
            className="btn btn-info"
          >
            <i className="bi bi-telegram me-2"></i>
            Telegram
          </button>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Error al cargar el contenido: {error}
      </div>
    );
  }

  return (
    <div className="social-container">
      <FacebookProvider appId="TU_APP_ID_DE_FACEBOOK">
        {/* Container principal */}
        <div className="container py-4">
          <div className="row">
            {/* Contenedor del post de Facebook */}
            {facebookPostUrl && (
              <div className="col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <EmbeddedPost 
                      href={facebookPostUrl}
                      onError={(error) => setError(error.message)} 
                    />
                    <div className="mt-3">
                      <Like href={facebookPostUrl} colorScheme="dark" showFaces share />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contenedor del video de Facebook */}
            {videoUrl && (
              <div className="col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div 
                      className="fb-video" 
                      data-href={videoUrl}
                      data-width="500"
                      data-show-text="true"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Contenedor de Instagram */}
            {instagramPostCode && (
              <div className="col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <iframe
                      title="Instagram post"
                      src={`https://www.instagram.com/p/${instagramPostCode}/embed`}
                      className="w-100"
                      height="480"
                      frameBorder="0"
                      scrolling="no"
                      allowtransparency="true"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Botón flotante para compartir */}
        <button
          onClick={() => setShowShareMenu(!showShareMenu)}
          className="btn btn-primary rounded-circle position-fixed bottom-0 end-0 mb-3 me-3 p-3"
          style={{ width: '60px', height: '60px', zIndex: 1000 }}
        >
          <i className="bi bi-share-fill"></i>
        </button>

        {/* Menú de compartir */}
        {showShareMenu && <ShareMenu />}
      </FacebookProvider>
    </div>
  );
};

export default SocialMediaEmbed;

```

Para usar este componente con Bootstrap, necesitarás:

1. Agregar Bootstrap a tu proyecto si aún no lo tienes:
```html
<!-- En tu index.html -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

2. Agregar Bootstrap Icons:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
```

3. Instalar las dependencias necesarias:
```bash
npm install react-facebook
```

Los principales cambios en esta versión con Bootstrap son:

1. Uso de clases Bootstrap en lugar de Tailwind:
   - `card` para contenedores
   - `btn btn-primary` para botones
   - `spinner-border` para el loading
   - Sistema de grid con `container`, `row` y `col-*`
   - Utilidades de espaciado de Bootstrap (`mb-4`, `py-4`, etc.)

2. Iconos de Bootstrap (bi-*) para los botones de compartir

3. Diseño responsivo usando el sistema de grid de Bootstrap

4. Estilos de cards y alerts de Bootstrap para mejor presentación

Para usar el componente:

```jsx
function App() {
  return (
    <SocialMediaEmbed
      facebookPostUrl="https://www.facebook.com/tu_pagina/posts/123456"
      instagramPostCode="ABC123xyz"
      videoUrl="https://www.facebook.com/tu_pagina/videos/123456"
    />
  );
}
```

¿Te gustaría que agregue alguna funcionalidad adicional o que modifique algo del estilo actual?
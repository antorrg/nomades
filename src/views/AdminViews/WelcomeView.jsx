import React from 'react'

const WelcomeView = () => {
    
  return (
    <div className='container-sm'>
      <div className="row justify-content-center">
    <div className="col-6 col-sm-4">
      <article className="blog-post">
        <h2 className="display-5 link-body-emphasis mb-1">Bienvenido al panel de administrador</h2>
        <p className="blog-post-meta">22 Septiembre de 2024</p>

        <p>Este es el panel de administrador, aqui podrá mandarse todas las macanas que quiera bajo su exclusiva responsabilidad.</p>
        <hr/>
        <p>Aqui podrá editar toda la información que se ve en la pagina, asi como tambien crear nuevos productos, items y usuarios, controlar su visibilidad (si fuera posible) y tambien eliminarlos.</p>
        <h2>Blockquotes</h2>
        <p>This is an example blockquote in action:</p>
        <blockquote className="blockquote">
          <p>Quoted text goes here.</p>
        </blockquote>
        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <h3>Example lists</h3>
        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
       </article>
    </div>
    </div>
  </div>
  )
}

export default WelcomeView
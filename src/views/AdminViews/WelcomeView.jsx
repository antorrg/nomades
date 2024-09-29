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
        <ul>
          <li>First list item</li>
          <li>Second list item with a longer description</li>
          <li>Third list item to close it out</li>
        </ul>
        <p>And this is an ordered list:</p>
        <ol>
          <li>First list item</li>
          <li>Second list item with a longer description</li>
          <li>Third list item to close it out</li>
        </ol>
        <p>And this is a definition list:</p>
        <dl>
          <dt>HyperText Markup Language (HTML)</dt>
          <dd>The language used to describe and define the content of a Web page</dd>
          <dt>Cascading Style Sheets (CSS)</dt>
          <dd>Used to describe the appearance of Web content</dd>
          <dt>JavaScript (JS)</dt>
          <dd>The programming language used to build advanced Web sites and applications</dd>
        </dl>
        <h2>Inline HTML elements</h2>
        <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
        <ul>
          <li><strong>To bold text</strong>, use <code className="language-plaintext highlighter-rouge"></code>.</li>
          <li><em>To italicize text</em>, use <code className="language-plaintext highlighter-rouge"></code>.</li>
          <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code className="language-plaintext highlighter-rouge"></code>, with an optional <code className="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
          <li>Citations, like <cite>— Mark Otto</cite>, should use <code className="language-plaintext highlighter-rouge"></code>.</li>
          <li><del>Deleted</del> text should use <code className="language-plaintext highlighter-rouge"></code> and <ins>inserted</ins> text should use <code className="language-plaintext highlighter-rouge"></code>.</li>
          <li>Superscript <sup>text</sup> uses <code className="language-plaintext highlighter-rouge"></code> and subscript <sub>text</sub> uses <code className="language-plaintext highlighter-rouge"></code>.</li>
        </ul>
        <p>Most of these elements are styled by browsers with few modifications on our part.</p>
        <h2>Heading</h2>
        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <h3>Sub-heading</h3>
        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <pre><code>Example code block</code></pre>
        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
      </article>
    </div>
    </div>
  </div>
  )
}

export default WelcomeView
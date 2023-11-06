import './footer.scss'

export function Footer () {

  return (
    <footer>
      <div className = "footer-container">
        <p className = 'footer-text'> Powered by: The Simpsons API </p>
        <img className='footer-image' src='footer.png' alt="The Simpsons API footer" width="82" height="80"/>
      </div>
    </footer>
  );
}


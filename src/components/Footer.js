import '../styles/layout/footer.scss';

function Footer() {
    return (
      <footer className='footer'>
      <small className='footer__copy'>&copy; 2022 Olga RG</small>
      <section className='footer__rrss'>
        <a href='https://github.com/olguita2412' className='footer__rrss--link'>
          <i className='icon fab fa-github-square'></i>
        </a>
        <a href='https://www.linkedin.com/in/olguita2412/' className='footer__rrss--link'>
          <i className='icon fab fa-linkedin'></i>
        </a>
        <a href='https://twitter.com/olguiita24' className='footer__rrss--link'>
          <i className='icon fab fa-twitter-square'></i>
        </a>
      </section>
    </footer>
    );
  }
  
  export default Footer;
  
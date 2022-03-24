export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Smith & Wilson
          </a>{' '}
          <div className='navbar-contact-data'>
          886 691 317 <br></br>
          kontakt@kancelariasiw.pl
</div>
        </div>
        

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Kancelaria
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Specializacje
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Kariera
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Współpraca
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Szkolenia
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Zespół
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Kontakt
              </a>
            </li>
           
          </ul>
        </div>
        
      </div>
    </nav>
  )
}

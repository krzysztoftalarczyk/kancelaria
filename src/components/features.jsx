import slide1 from '../data/slides/PałacKultury.png'
import slide2 from '../data/slides/Katowice.png'
import slide3 from '../data/slides/Gdańsk.png'
import slide4 from '../data/slides/Kopalnia.png'
import slide5 from '../data/slides/Malbork.png'



export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Kancelaria</h2>
          
        </div>
        <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Kancelaria dla zarządu i rady nadzorczej.</h2><br></br>
          <p>
          W zespole Kancelarii współpracują eksperci z dziedzin niezbędnych dla zapewnienia
kompleksowej obsługi prawnej podmiotów gospodarczych takich jak:
- spółki z ograniczoną odpowiedzialnością, w tym z udziałem JST,
- spółki osobowe, w szczególności spółki jawne i komandytowe,
- spółdzielnie, w szczególności spółdzielnie mieszkaniowe.
<br></br>
<br></br>
<br></br>
<h5>Więcej niż prawo.</h5>
<br></br>
Znajomość przepisów prawa to podstawa. Dla wypracowania optymalnego rozwiązania
potrzeba czegoś więcej - poznania źródła problemu oraz zrozumienia złożoności aspektów
ekonomicznych i gospodarczych. To właśnie zapewniamy, gdy potrzebne jest skuteczne
rozwiązanie.
     </p>
        </div>
      </div>
      <div class="col-md-6">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
 
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
    <li data-target="#myCarousel" data-slide-to="4"></li>
    
  </ol>

 
  <div class="carousel-inner">
    <div class="item active">
      <img src={slide1} alt=""/>
      <div class="carousel-caption">
        <p style={{"font-size": "34px", "color":"rgb(230, 225, 147)",}}>Wiedza. Pewność. Bezpieczeństwo.</p>
      </div>
    </div>

    <div class="item">
      <img src={slide2} alt=""/>
      <div class="carousel-caption">
      
        <p style={{"font-size": "34px", "color":"rgb(230, 225, 147)"}}>Skuteczne rozwiązania na czas.</p>
      </div>
    </div>

    <div class="item">
      <img src={slide3} alt=""/>
      <div class="carousel-caption">
  
        <p style={{"font-size": "34px", "color":"rgb(230, 225, 147)"}}>Z dumą wspieramy przedsiębiorców.</p>
      </div>
    </div>
    <div class="item">
      <img src={slide4} alt=""/>
      <div class="carousel-caption">
      
        <p style={{"font-size": "34px", "color":"rgb(230, 225, 147)"}}>Więcej niż prawo. Zrozumienie biznesu.</p>
      </div>
    </div>

    <div class="item">
      <img src={slide5} alt=""/>
      <div class="carousel-caption">
  
        <p style={{"font-size": "34px", "color":"rgb(230, 225, 147)"}}>Wiedza daje możliwości.</p>
      </div>
    </div>
    
  </div>

  
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="nivo-lightbox-theme-default .nivo-lightbox-prev"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="nivo-lightbox-theme-default .nivo-lightbox-next"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      </div>
    </div>
      </div>
    </div>
  )
}

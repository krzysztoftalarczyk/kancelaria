import slide1 from '../data/slides/Stocznia.png'
import slide2 from '../data/slides/PolskieGóry.png'
import slide3 from '../data/slides/Poznań.png'
import slide4 from '../data/slides/Statek.png'
import slide5 from '../data/slides/Kraków.png'


export const Features1 = (props) => {
  return (
    <div id='features1' className='text-center'>
      <div className='container'>
    
        <div class="row align-items-md-stretch">
      
      <div class="col-md-6">
      <div id="myCarousel1" class="carousel slide" data-ride="carousel">
 
  <ol class="carousel-indicators">
    <li data-target="#myCarousel1" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel1" data-slide-to="1"></li>
    <li data-target="#myCarousel1" data-slide-to="2"></li>
    <li data-target="#myCarousel1" data-slide-to="3"></li>
    <li data-target="#myCarousel1" data-slide-to="4"></li> 
  </ol>

 
  <div class="carousel-inner">
    <div class="item active">
      <img src={slide1} alt=""/>
      <div class="carousel-caption">
        <p style={{"font-size": "34px", "color":"rgb(230, 225, 147)"}}>DORADZAMY &sect;PRAWNIE</p>
      </div>
    </div>

    
    <div class="item">
      <img src={slide2} alt=""/>
      <div class="carousel-caption">
  
        <p style={{"font-size": "34px", "color":"rgb(230, 225, 147)"}}>Indywidualne podejście.</p>
      </div>
    </div>
    <div class="item">
      <img src={slide3} alt=""/>
      <div class="carousel-caption">
      
        <p style={{"font-size": "34px", "color":"rgb(230, 225, 147)"}}>Pomagamy bezpiecznie rozwijać biznes.</p>
      </div>
    </div>

    <div class="item">
      <img src={slide4} alt=""/>
      <div class="carousel-caption">
  
        <p style={{"font-size": "34px", "color":"rgb(230, 225, 147)"}}>Warto współpracować z najlepszymi.</p>
      </div>
    </div>
    <div class="item">
      <img src={slide5} alt=""/>
      <div class="carousel-caption">
  
        <p style={{"font-size": "34px", "color":"rgb(230, 225, 147)"}}>Tworzymy pragmatyczne rozwiązania</p>
      </div>
    </div>
  </div>

  
  <a class="left carousel-control" href="#myCarousel1" data-slide="prev">
    <span class="nivo-lightbox-theme-default .nivo-lightbox-prev"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel1" data-slide="next">
    <span class="nivo-lightbox-theme-default .nivo-lightbox-next"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Indywidualne dopasowanie</h2><br></br>
          <p>
          
Realia rynkowe i regulacje prawne zmieniają się dynamicznie. Rozumiemy to i wiemy jak
ważne dla zapewnienia bezpieczeństwa prowadzonej działalności jest podjęcie
odpowiedniego działania na czas - dlatego istotą współpracy jest synergiczne działanie
z Klientem na miarę jego indywidualnych potrzeb.
<br></br>
<br></br>
<br></br>
<h5>Efekt</h5>
<br></br>
Efektem takiego połączenia jest możliwość:<br></br><br></br>
<li> zastosowania pragmatycznych rozwiązań,</li>
<li> realizacji założonych celów,</li>
<li> wysokiej skuteczności w sprawie,</li>
<li> ograniczenia ryzyka gospodarczego i prawnego,</li>
<li> dostrzegania nowych kierunków rozwoju.</li>
     </p>
          
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

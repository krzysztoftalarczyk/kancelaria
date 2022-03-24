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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est in libero hendrerit sollicitudin. Mauris sit amet congue purus. Suspendisse quis massa malesuada, volutpat magna et, ultrices enim. Duis neque felis, tristique a tincidunt nec, lacinia vel justo. In dictum suscipit feugiat. Nam volutpat fringilla lorem, in efficitur enim finibus vel. Aenean dictum vitae mauris sit amet posuere. Donec tincidunt elit risus, eu cursus tellus mattis at. Nullam non felis lectus. Integer posuere, erat id elementum vestibulum, felis ante sodales justo, quis auctor arcu nisi sit amet elit. Proin vel magna vulputate, sagittis mauris sit amet, euismod neque. Suspendisse eget interdum ex. Integer tristique consequat placerat. Curabitur egestas, neque ac mattis ultrices, diam arcu mattis urna, et rutrum quam nunc vel odio. Etiam ornare cursus feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
          
        </div>
      </div>
      <div class="col-md-6">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
 
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

 
  <div class="carousel-inner">
    <div class="item active">
      <img src="https://cdn11.bigcommerce.com/s-qumrn4xrtm/images/stencil/1280x1280/products/27467/130309/54462_62375_MAIN__82759.1604960840.jpg?c=2" alt="Chania"/>
      <div class="carousel-caption">
        <p style={{"font-size": "30px", "color":"rgb(212, 175, 55)"}}>Skuteczne rozwiązania na czas.</p>
      </div>
    </div>

    <div class="item">
      <img src="https://cdn11.bigcommerce.com/s-qumrn4xrtm/images/stencil/1280x1280/products/27467/130309/54462_62375_MAIN__82759.1604960840.jpg?c=2" alt="Chicago"/>
      <div class="carousel-caption">
      
        <p style={{"font-size": "30px", "color":"rgb(212, 175, 55)"}}>Wiedza. Pewność. Bezpieczeństwo</p>
      </div>
    </div>

    <div class="item">
      <img src="https://cdn11.bigcommerce.com/s-qumrn4xrtm/images/stencil/1280x1280/products/27467/130309/54462_62375_MAIN__82759.1604960840.jpg?c=2" alt="New York"/>
      <div class="carousel-caption">
  
        <p style={{"font-size": "30px", "color":"rgb(212, 175, 55)"}}>Z dumą wspieramy przedsiębiorców.</p>
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

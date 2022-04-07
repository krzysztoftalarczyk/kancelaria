import { useState } from 'react'
import emailjs from 'emailjs-com'
import map from '../data/map1.png'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
        
    
        
        
        
        
        <div className='col-md-4 col-md-offset-0 contact-info'>
           <div><i> Ogólnopolski zasięg.
             <br></br> Indywidualne podejście.
Łączymy to co najlepsze.</i><br></br><br></br></div>
           <p>
           <img src={map}  alt=""/>
           </p>
            <div className='contact-item'>
              <h3>Kontakt</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Adres
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Telefon
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
            <div style={{"font-size": '8px'}}>
            Informacja o wizytach w kancelarii do końca 2022 r. - Ze względu na zapewnienie bezpieczeństwa
epidemiologicznego naszym Klientom i pracownikom, wizyta w kancelarii osób nieobjętych stacjonarną stałą
obsługą prawną jest możliwa wyłącznie po wcześniejszym uzgodnieniu telefonicznym.

            </div>
          </div>
          <div className='col-md-8'>
            <div className='row'>
              <p style={{"margin-bottom":"80px"}}>Szanowni Państwo,
w tych trudnych chwilach, chcemy być jeszcze bliżej Państwa problemów, dlatego
wszystkim stale obsługiwanym Klientom będziemy pomagali nie tylko w zakresie bieżących
zagadnień prawnych, ale także w związku z nowopowstałymi zagadnieniami wynikającymi
z wprowadzaniem i znoszeniem stanu zagrożenia epidemiologicznego oraz sytuacją na
wschodzie, a także związaną z tym imigracją. Więcej informacji można uzyskać bezpośrednio
u prawnika kierującego obsługą. Poza tym, dla stale obsługiwanych stałych Klientów zasady
współpracy nie zmieniły się.
Życząc powodzenia, pozostajemy do Państwa dyspozycji.</p>
              <div className='section-title'>
                <h2>Jak możemy ci pomóc?</h2>
                <p>
                  Wyślij do nas wiadomość.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Imię'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Wiadomość'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                
                <div className="col-sm-12">

          
                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">Poznaj nasz <a href="https://example.com/faq.html"> regulamin </a></label>
</div>
<br></br>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">Przykładowa zgoda</label>
</div>

            
          

        </div>
                <div id='success'></div>
               


                <button type='submit' className='btn btn-custom btn-lg'>
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
          
          <div className='col-md-12'>
            <div className='row'>
              
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; Copyright 2022 Krzysztof Talarczyk
          
          </p>
        </div>
      </div>
    </div>
  )
}

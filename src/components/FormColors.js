import React from 'react'

const FormColors = ({
  name,
  shirt,
  jeans,
  shoes,
  jacket,
  tie,
  suit,
  watch,
  pickColorShirt = f => f,
  pickColorJeans = f => f,
  pickColorShoes = f => f,
  pickColorJacket = f => f,
  pickColorTie = f => f,
  pickColorSuit = f => f,
  pickColorWatch = f => f
}) => {

  let _shirt, _jeans, _shoes, _jacket, _tie, _suit, _watch


  return (
    <form className="custom-form">
      { (shirt !== undefined) ?
        <div className="custom-form__item">
          <p className="custom-form__heading">Майка или рубака</p>
          <div className="uk-tile uk-tile-default">
            <p className="uk-h4">
              {shirt}
            </p>
            <input value={shirt} ref={input => _shirt = input} onChange={() => pickColorShirt(name, _shirt.value)} type="color" required/>
          </div>
        </div>
       : null }

       { (jeans !== undefined) ?
         <div className="custom-form__item">
           <p className="custom-form__heading">Брюки или шерты</p>
           <div className="uk-tile uk-tile-default">
             <p className="uk-h4">
               {jeans}
             </p>
             <input value={_jeans} ref={input => _jeans = input} onChange={() => pickColorJeans(name, _jeans.value)} type="color" required/>
           </div>
         </div>
        : null }

        { (shoes !== undefined) ?
          <div className="custom-form__item">
            <p className="custom-form__heading">Обувь</p>
            <div className="uk-tile uk-tile-default">
              <p className="uk-h4">
                {shoes}
              </p>
              <input value={shoes} ref={input => _shoes = input} onChange={() => pickColorShoes(name, _shoes.value)} type="color" required/>
            </div>
          </div>
         : null }

         { (jacket !== undefined) ?
           <div className="custom-form__item">
             <p className="custom-form__heading">Куртка или пиджак</p>
             <div className="uk-tile uk-tile-default">
               <p className="uk-h4">
                 {jacket}
               </p>
               <input value={jacket} ref={input => _jacket = input} onChange={() => pickColorJacket(name, _jacket.value)} type="color" required/>
             </div>
           </div>
          : null }

          { (tie !== undefined) ?
            <div className="custom-form__item">
              <p className="custom-form__heading">Галстук</p>
              <div className="uk-tile uk-tile-default">
                <p className="uk-h4">
                  {tie}
                </p>
                <input value={tie} ref={input => _tie = input} onChange={() => pickColorJacket(name, _tie.value)} type="color" required/>
              </div>
            </div>
           : null }

           { (suit !== undefined) ?
             <div className="custom-form__item">
               <p className="custom-form__heading">Галстук</p>
               <div className="uk-tile uk-tile-default">
                 <p className="uk-h4">
                   {suit}
                 </p>
                 <input value={suit} ref={input => _suit = input} onChange={() => pickColorJacket(name, _suit.value)} type="color" required/>
               </div>
             </div>
            : null }

            { (watch !== undefined) ?
              <div className="custom-form__item">
                <p className="custom-form__heading">Галстук</p>
                <div className="uk-tile uk-tile-default">
                  <p className="uk-h4">
                    {watch}
                  </p>
                  <input value={watch} ref={input => _watch = input} onChange={() => pickColorJacket(name, _watch.value)} type="color" required/>
                </div>
              </div>
             : null }
    </form>
  )
}

export default FormColors

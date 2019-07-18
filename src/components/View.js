import React from 'react'

import FormColors from './FormColors'

// convector - 1
import Buterin from './persontUI/Buterin'
import Spagni from './persontUI/Spagni'
import Wong from './persontUI/Wong'

// convector - 2
// Может и не будет разницы, посмотрим
import Ivanov from './persontUI/Ivanov'
import Wood from './persontUI/Wood'
import Larimer from './persontUI/Larimer'
import Lee from './persontUI/Lee'
import Palmer from './persontUI/Palmer'
import Sonstebo from './persontUI/Sonstebo'

const View = ({
  selectImg,
  characters,
  onColorShirt = f => f,
  onColorJeans = f => f,
  onColorShoes = f => f,
  onColorJacket = f => f,
  onColorTie = f => f,
  onColorSuit = f => f,
  onColorWatch = f => f
}) => {

  const renderImg = (pers) => {
    switch (pers) {
      case "Buterin":
        return <Buterin {...characters.find(el => el.name === selectImg)}/>
      case "Spagni":
        return <Spagni {...characters.find(el => el.name === selectImg)}/>
      case "Wong":
        return <Wong {...characters.find(el => el.name === selectImg)}/>
      case "Ivanov":
        return <Ivanov {...characters.find(el => el.name === selectImg)}/>
      case "Wood":
        return <Wood {...characters.find(el => el.name === selectImg)}/>
      case "Larimer":
        return <Larimer {...characters.find(el => el.name === selectImg)}/>
      case "Lee":
        return <Lee {...characters.find(el => el.name === selectImg)}/>
      case "Palmer":
        return <Palmer {...characters.find(el => el.name === selectImg)}/>
      case "Sonstebo":
        return <Sonstebo {...characters.find(el => el.name === selectImg)}/>
      default:
        return <h2>Select person</h2>
    }
  }

  return (
    <div className="uk-container">
      <div className="uk-margin-top uk-child-width-1-2 uk-text-center" uk-grid="true">
        <div>
            <div className="uk-card uk-card-default uk-card-body uk-background-secondary uk-light">
              <h2>Images</h2>
              {renderImg(selectImg)}
            </div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body uk-background-secondary uk-light">
            <h2>Options</h2>
            {(selectImg !== 'none') ?
              <FormColors
                pickColorShirt={onColorShirt}
                pickColorJeans={onColorJeans}
                pickColorShoes={onColorShoes}
                pickColorJacket={onColorJacket}
                pickColorTie={onColorTie}
                pickColorSuit={onColorSuit}
                pickColorWatch={onColorWatch}
                {...characters.find(el => el.name === selectImg)}
              />
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default View

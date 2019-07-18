import React from 'react'

import Buterin from '../images/persons/buterin.svg'
import Wood from '../images/persons/wood.svg'
import Ivanov from '../images/persons/ivanov.svg'
import Larimer from '../images/persons/larimer.svg'
import Lee from '../images/persons/lee.svg'
import Palmer from '../images/persons/palmer.svg'
import Spagni from '../images/persons/spagni.svg'
import Wong from '../images/persons/wong.svg'
import Sonstebo from '../images/persons/sonstebo.svg'

const Slider = ({onSelectPers = f => f}) => {

  const pickPers = (pers) => {
    onSelectPers(pers);
  }

    return (
      <div className="uk-margin-top custom-slider-characters uk-position-relative uk-visible-toggle uk-light" uk-slider="true">
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m uk-grid">
            <li>
                <div className="uk-panel" onClick={() => pickPers("Buterin")}>
                    <img src={Buterin}/>
                </div>
            </li>
            <li>
                <div className="uk-panel" onClick={() => pickPers("Wood")}>
                    <img src={Wood}/>
                </div>
            </li>
            <li>
                <div className="uk-panel" onClick={() => pickPers("Ivanov")}>
                    <img src={Ivanov}/>
                </div>
            </li>
            <li>
                <div className="uk-panel" onClick={() => pickPers("Larimer")}>
                    <img src={Larimer}/>
                </div>
            </li>
            <li>
                <div className="uk-panel" onClick={() => pickPers("Lee")}>
                    <img src={Lee}/>
                </div>
            </li>
            <li>
                <div className="uk-panel" onClick={() => pickPers("Palmer")}>
                    <img src={Palmer}/>
                </div>
            </li>
            <li>
                <div className="uk-panel" onClick={() => pickPers("Spagni")}>
                    <img src={Spagni}/>
                </div>
            </li>
            <li>
                <div className="uk-panel" onClick={() => pickPers("Wong")}>
                    <img src={Wong}/>
                </div>
            </li>
            <li>
                <div className="uk-panel" onClick={() => pickPers("Sonstebo")}>
                    <img src={Sonstebo}/>
                </div>
            </li>
        </ul>
        <a className="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous={"true"} uk-slider-item="previous" uk-icon="icon: chevron-left; ratio: 3.5"></a>
        <a className="uk-position-center-right uk-position-small" href="#" uk-slidenav-next={"true"} uk-slider-item="next" uk-icon="icon: chevron-right; ratio: 3.5"></a>
      </div>
    )
}

export default Slider

import React from 'react'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

// иначе иконки не появятся
UIkit.use(Icons)

import Nav from './Nav'
import Slider from './Slider'
import View from './View'

/*
Spagni сделать цвет для пальм
*/

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectImg: "none",
      characters: [
        {
          name: "Buterin",
          shirt: "#CB172D",
          jeans: '#444560',
          shoes: '#D6D6D6'
        },
        {
          name: 'Wood',
          jeans: '#1b272d',
          shirt: '#ff1515',
          jacket: '#3d1919',
          shoes: '#7f7166'
        },
        {
          name: 'Ivanov',
          shirt: '#d19f9f',
          jeans: '#0f3a6d',
          shoes: '#550808'
        },
        {
          name: 'Larimer',
          shirt: '#82a05f',
          jeans: '#151515',
          shoes: '#000'
        },
        {
          name: 'Lee',
          shirt: '#287AD9',
          jeans: '#2A2725',
          shoes: '#583618'
        },
        {
          name: 'Palmer',
          shoes: '#581e1e',
          jeans: '#1f3a5b',
          shirt: '#c724ff',
          jacket: '#801220'
        },
        {
          name: 'Spagni',
          jeans: '#50E3C2',
          shirt: '#4a90e2',
          shoes: '#F5A623'
        },
        {
          name: 'Wong',
          suit: '#302F3C',
          shirt: '#ACCBF0',
          tie: '#AC3C4A',
          watch: '#BD2F2F',
          shoes:'#2A0707'
        },
        {
          name: 'Sonstebo',
          shirt: '#f5a623',
          jacket: '#39384a',
          jeans: '#0e3d65',
          shoes: '#CA5151'
        }
      ]
    }
  }

  changeColorShirt = (name, shirt) => {
    this.setState(prevState => ({
      characters: prevState.characters.map(character =>
        (character.name !== name) ?
          character :
          {
            ...character,
            shirt
          }
      )
    }))
  };

  changeColorJeans = (name, jeans) => {
    this.setState(prevState => ({
      characters: prevState.characters.map(character =>
        (character.name !== name) ?
          character :
          {
            ...character,
            jeans
          }
      )
    }))
  }

  changeColorShoes = (name, shoes) => {
    this.setState(prevState => ({
      characters: prevState.characters.map(character =>
        (character.name !== name) ?
          character :
          {
            ...character,
            shoes
          }
      )
    }))
  }

  changeColorJacket = (name, jacket) => {
    this.setState(prevState => ({
      characters: prevState.characters.map(character =>
        (character.name !== name) ?
          character :
          {
            ...character,
            jacket
          }
      )
    }))
  }

  changeColorTie = (name, tie) => {
    this.setState(prevState => ({
      characters: prevState.characters.map(character =>
        (character.name !== name) ?
          character :
          {
            ...character,
            tie
          }
      )
    }))
  }

  changeColorSuit = (name, suit) => {
    this.setState(prevState => ({
      characters: prevState.characters.map(character =>
        (character.name !== name) ?
          character :
          {
            ...character,
            suit
          }
      )
    }))
  }

  changeColorWatch = (name, watch) => {
    this.setState(prevState => ({
      characters: prevState.characters.map(character =>
        (character.name !== name) ?
          character :
          {
            ...character,
            watch
          }
      )
    }))
  }

  selectPers = (pers) => {
    this.setState({
      selectImg: pers
    });
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <Slider onSelectPers={this.selectPers}/>
        <View
          {...this.state}
          onColorShirt={this.changeColorShirt}
          onColorJeans={this.changeColorJeans}
          onColorShoes={this.changeColorShoes}
          onColorJacket={this.changeColorJacket}
          onColorTie={this.changeColorTie}
          onColorSuit={this.changeColorSuit}
          onColorWatch={this.changeColorWatch}
        />
      </div>
    )
  }
}

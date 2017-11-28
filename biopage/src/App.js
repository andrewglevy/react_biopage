import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './about.js'
import Header from './header.js'

class App extends Component {


  constructor(props){
    super(props)
    this.state = {
      info: [
        {name: "KariAnn",
         favoritefood: "Thai",
         reactopinion: "Once you understand it it's easier than Rails.",
         photo: "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/10/30/0/FN_thai-restaurant-Som-tum-Der-larb-moo_s4x3.jpg.rend.hgtvcom.966.725.suffix/1477872052701.jpeg"
       },
        {name: "Andrew",
        favoritefood: "Steak",
        reactopinion: "*whimpers softly to self*", photo: "http://www.seriouseats.com/recipes/assets_c/2015/05/Anova-Steak-Guide-Sous-Vide-Photos15-beauty-thumb-1500xauto-423558.jpg"}
      ]
    }
  }
  render() {

    return (
      <div>
        <Header />
        <br />
        <About person={this.state.info}/>
      </div>
    );
  }
}

export default App;

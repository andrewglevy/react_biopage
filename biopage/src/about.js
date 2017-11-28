import React, { Component } from 'react';

class About extends Component {



  render() {

    let n = this.props.person.map(function(n) {
      return (
        <div>
          <h1>{n.name} </h1><br /><p> Favorite food: {n.favoritefood}</p><br /><img className={"foodpics"} src={n.photo} /><br /><p>Opinion about React: {n.reactopinion}</p>
        </div>
      )
    })
    return(
      <div>
        {n}
      </div>
    )
  }
}

export default About;

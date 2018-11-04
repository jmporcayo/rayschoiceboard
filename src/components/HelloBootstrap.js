import React from "react";
import "./HelloBootstrap.css";

  // build an array of url
  var imageUrl = [
    "abby",
    "babybear",
    "bert",
    "bigbird",
    "cookie",
    "elmo",
    "ernie",
    "grover",
    "rosita",
    "snuffy",
    "telly",
    "thecount",
  ];

class HelloBootstrap extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      guesses : [],
      current: 0,
      high: 0
    }
    // guesses, current score, high score

    this.cardClick = this.cardClick.bind(this);
    this.shuffle = this.shuffle.bind(this);    
  }

   shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  cardClick(e){
    console.log(e.target.name)

    imageUrl = this.shuffle(imageUrl);

    let guesses = this.state.guesses;
    let current = this.state.current;
    let high = this.state.high;
    // value is in an array
     if (guesses.indexOf(e.target.name)=== -1) {
       guesses.push(e.target.name);
       current++;
       this.setState({
         guesses,
        current
       })
     }
    else
    {
      if (current > high){
        high = current;
      }
      this.setState({
        guesses: [],
        current: 0,
        high
      })
    }
  }
  
  render(){
    return(
  <div className="container">

     {/* Begin NavBar */}
    <nav className="navbar">
        <ul>
          <li className="clickygame">
          <a href="/">Clicky Game</a>
          </li>
          <li className="">Click an image to begin!</li>
          <li>Score: {this.state.current} | Top Score: {this.state.high}</li>
          </ul>
    </nav>
    {/* End NavBar */}

    <div className="jumbotron">
      <h1> The Sesame Street Game!</h1>
      <p>
      Click on an image to earn points, but don't click on any more than once!
      </p>
    </div>
    {/* End jumbotron */}

 {/* name of my react component */}
  { imageUrl.map(x => <ImageRandom image={x} parentClick={this.cardClick} />) }   
  </div>

    )}
  // array of already chosen images




  //  logic if the user clicks on a card cross reference if its already in the chosen array if it is game over

  // increment score

  // if its a new img score goes up randomize images add to chosen img array

};

function ImageRandom(props){
  return (

  <div className="card  mb-3" style={{'maxWidth': '10rem', 'maxHeight': '10rem'}}>
  
  <div className="card-body" onClick={props.parentClick}>
  <img name={props.image} src={"./images/" + props.image  + ".JPG"}/>
  
  </div>
  
</div>
)}




export default HelloBootstrap;

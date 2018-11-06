import React from "react";
import "./HelloBootstrap.css";
import Lightbox from "react-lightbox-component";

  // build an array of url
  var imageUrl = [
    "shower",
    "potty",
    "brushyourteeth",
    "getdressed",
    "book",
    "juice",
    "snack",
    "thirsty",
    "toys",
    "sleep",
  ];

class HelloBootstrap extends React.Component {
  constructor(props){
    super(props);
    
 
   
   this.cardClick = this.cardClick.bind(this);
  }

  cardClick(e){
    console.log(e.target.name);
    window.responsiveVoice.speak(e.target.name);

    this.setState({
      currentImage : e.target.name
    })
  }
  
  render(){
   



    return(
      <div>
      <div className="container">

        {/* Begin NavBar */}
        <nav className="navbar">
            <ul>
              <li className="clickygame">
              <a href="/">Ray's Choice Board</a>
              </li>
              
              </ul>
        </nav>

        {/* End NavBar */}

          <div className="jumbotron">
          <h1> COMMUNICATE WITHOUT WORDS</h1>
        </div> 

        {/* End jumbotron */}

    {/* name of my react component */}
      { imageUrl.map(x => <ImageCard image={x} parentClick={this.cardClick} />) }   
          
      </div>
      </div>

    )}
 

};

function ImageCard(props){
  return (

  <div className="card  mb-3" style={{'maxWidth': '10rem', 'maxHeight': '10rem'}}>
  
  <div className="card-body" onClick={props.parentClick}>
  <img name={props.image} src={"./images/" + props.image  + ".JPG"}/>
  
  </div>
  
</div>
)}




export default HelloBootstrap;


// const App = () => (
//   <div>

//     <Lightbox images={imageUrl}  { src: "imageUrl",}/>

//   </div>
// );

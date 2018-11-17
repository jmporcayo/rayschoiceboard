import React, { Component } from 'react'
import "./HelloBootstrap.css";
import axios from 'axios'


class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=aa8da71621ddef16847b8a414a45c2dc&format=json&nojsoncallback=1&per_page=5&sort=relevance&safe_search=1&text=${this.state.query}`)
      .then(({ data }) =>
      
      { console.log(data);
        this.setState({
        results: data.photos.photo[0]           
        })
      })
  }

  imageURL = (results) => {
    return 'http://farm' + results.farm + '.staticflickr.com/' + results.server + '/' + results.id + '_' + results.secret + '.jpg'
    }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

  render() {
    const selectedImage = this.imageURL(this.state.results);
    return (
      <div className="flickr-results">
      <form className="query">
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
        <img className="flickr-results-img" src={selectedImage} />
      </div>
    )
  }
}

export default Search

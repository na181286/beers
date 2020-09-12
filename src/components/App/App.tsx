import * as React from 'react';
import BeerList from '../BeerList/BeerList';
import { BeerItem } from '../../types';

declare global {
  interface Window {
    XMLHttpRequest?: any;
    ActiveXObject?: any;
  }
}

class App extends React.Component {
  public state = {
    isLoaded: false,
    error: false,
    beers: [] as BeerItem[],
    page: 1,
  };
  public componentDidMount() {
    if (window && window.XMLHttpRequest) {
      let request = new window.XMLHttpRequest();

      // request = new ActiveXObject("Microsoft.XMLHTTP");

      if (window.XMLHttpRequest) {
        // Mozilla, Safari, ...
        request = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        // IE
        try {
          request = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {
          try {
            request = new ActiveXObject('Microsoft.XMLHTTP');
          } catch (e) {
            this.setState({
              isLoaded: true,
              error: e,
            });
          }
        }
      }

      request.open('GET', 'https://api.punkapi.com/v2/beers?page=1', true);
      request.send(null);

      request.onload = () => {
        if (request.status !== 200) {
          console.log('Request failed.  Returned status of ' + request.status);
          this.setState({ isLoaded: true, error: request.status });
        }
      };

      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
          const beers = JSON.parse(request.responseText);
          this.setState({
            isLoaded: true,
            beers: [...beers],
          });
        }
      };
    }
    // fetch("https://api.punkapi.com/v2/beers?page=1")
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       console.log(result);
    //       this.setState({
    //         isLoaded: true,
    //         beers: result,
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error: error,
    //       });
    //     }
    //   );
  }

  public loadMore = () => {
    const beers = [...this.state.beers];
    const page = this.state.page + 1;

    if (window && window.XMLHttpRequest) {
      let request = new window.XMLHttpRequest();
      if (window.XMLHttpRequest) {
         // Mozilla, Safari, ...
         request = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
         // IE
        try {
          request = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {
          try {
           request = new ActiveXObject('Microsoft.XMLHTTP');
          } catch (e) {
           this.setState({
             isLoaded: true,
             error: e,
           });
          }
       }
      }

      request.open('GET', 'https://api.punkapi.com/v2/beers?page=' + page, true);
      request.send(null);

      request.onload = () => {
        if (request.status !== 200) {
         console.log('Request failed.  Returned status of ' + request.status);
         this.setState({ isLoaded: true, error: request.status });
        }
      };

      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
          const items = JSON.parse(request.responseText);
          const updatedBeers = beers.concat(items);
          this.setState({
            isLoaded: true,
            beers: updatedBeers,
            page,
         });
        }
      };
    }
    // fetch("https://api.punkapi.com/v2/beers?page=" + page)
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       console.log(result);
    //       const updatedBeers = beers.concat(result);
    //       this.setState({
    //         isLoaded: true,
    //         beers: updatedBeers,
    //         page: page,
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error: error,
    //       });
    //     }
    //   );
  }

  public render() {
    const loadMoreBtn = <div className="LoadMore" onClick={this.loadMore}>Load More</div>;
    const loadMore = (this.state.beers && this.state.beers.length > 0) ? loadMoreBtn : null;
    return (
      <div className="App">
        <h1>Beers</h1>
          {this.state.isLoaded === false && (<div>Loading...</div>)}
          {this.state.error  && (<div>Error</div>)}
          {this.state.beers && <BeerList beers={this.state.beers}/>}
          {loadMore}
      </div>
    );
  }
}
export default App;

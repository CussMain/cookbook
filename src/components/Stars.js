import React from 'react';
import start from '../img/star.png';
import starEmpty from '../img/star_empty.png';

class Stars extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.difficulty === 'Hard' ? (
          <div>
            <img src={start}/>
            <img src={start}/>
            <img src={start}/>
          </div>
        ) : this.props.difficulty === 'Medium' ? (
          <div>
            <img src={start}/>
            <img src={start}/>
            <img src={starEmpty}/>
          </div>
        ) : (
          <div>
            <img src={start}/>
            <img src={starEmpty}/>
            <img src={starEmpty}/>
          </div>
        )}
      </div>
    );
  }
}

export default Stars;
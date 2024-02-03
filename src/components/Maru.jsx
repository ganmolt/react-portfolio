import React from 'react';

import png_mbtk from "../Images/maru/mabataki_ren_touka.png";
import png_hidari from "../Images/maru/hidarimuku_1_ren_touka.png";
import png_migi from "../Images/maru/migimuku_1_ren_touka.png";

import Draggable from 'react-draggable'

import './Maru.css';

class Maru extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [png_mbtk, png_hidari, png_migi],
      num: 0,
      isAnimated: false,
      isJumped: false,
      count: 0,
    };
  }

  // ------------------JUMP---------------
  setFinished = () => this.setState({ isJumped: false });

  onClickButton = () => {
    this.setState({ isJumped: true });
    setTimeout(this.setFinished, 1000);
  };
  // -------------------------------------

  // ----------------MABATAKI-------------
  getRandom = ( min, max ) => {
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
    return random;
  }
  componentDidMount(){
    setTimeout( () => {
      this.setState({count: this.state.count+1});
      console.log(String(this.state.count));
    }, 1000);
  }
  componentDidUpdate(){
    setTimeout( () => {
      this.setState({count: this.state.count+1});
      // アニメ実行中なら行わない
      if ( this.state.isAnimated === true ) {
        return;
      }

      var rnd = this.getRandom(1, 100);
      if( rnd%13 === 0 ) {
        this.setState({ isAnimated: true, num: 2 });
        setTimeout(this.setFinishedAnime, 2000);
      } else if( rnd%11 === 0 ) {
        this.setState({ isAnimated: true, num: 1 });
        setTimeout(this.setFinishedAnime, 2000);
      } else if( rnd%10 === 0 ) {
        this.setState({ isAnimated: true, num: 0 });
        setTimeout(this.setFinishedAnime, 2000);
      }
    }, 1000);
  }
  
  setFinishedAnime = () => this.setState({ isAnimated: false });
  
  render() {
    return (
      <Draggable defaultPosition={{x: 0, y: 0}}>
        <div className="wrapper">
          <div className="maru-area">
            <div className={this.state.isJumped ? "jump" : ""} id="button" onClick={() => this.onClickButton()}>
              {/* 背景画像 */}
              <div id="maru-bg"></div>
              {/* キャラクター本体 */}
              <div className={this.state.isAnimated ? "mabataki" : ""} id="maru" style={{ backgroundImage: 'url('+this.state.urls[this.state.num]+')' }} ></div>
            </div>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Maru;

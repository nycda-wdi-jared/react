// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

export default class Home extends Component {
  constructor(props, context) {
  super(props, context);
    this.state = {
      orcHP: 50,
      aragornHP: 200,
      shelobHP: 100,
      hideOrc: false,
      showAlert: 1,
      aragornDefeated: false,
      youWin: false,
      playerChosen: false,
      char: undefined
    }
  }
  attackThis(){
    const { orcHP, aragornHP, shelobHP } = this.state;
    let orcRandomNum, aragornRandomNum, shelobRandomNum;
    orcRandomNum = Math.floor(Math.random() * 20);
    aragornRandomNum = Math.floor(Math.random() * 20);
    shelobRandomNum = Math.floor(Math.random() * 20);


    if(orcHP > 0 && aragornHP > 0){
      this.setState({
        orcHP: parseInt(orcHP - (orcRandomNum * 1.5)),
        aragornHP: parseInt(aragornHP - (aragornRandomNum * 1.5))
      });
    }
    if(orcHP <= 0 && shelobHP > 0){
      this.setState({
        shelobHP: parseInt(shelobHP - (shelobRandomNum * 1.5)),
        aragornHP: parseInt(aragornHP - (aragornRandomNum * 2))
      })
    }
  }
  characterChoose(char){
    this.setState({
      playerChosen: true,
      char: char
    })
  }
  componentWillMount(){
    let what = setInterval(function(){
      if(this.state.orcHP <= 0){
        this.setState({
          showAlert: 0
        })
      }
      if(this.state.aragornHP <= 0){
        this.setState({
          aragornDefeated: true
        })
        clearInterval(what)
      }
      if(this.state.shelobHP <= 0){
        this.setState({
          youWin: true
        })
        clearInterval(what)
      }
    }.bind(this), 100);
  }
  render() {
  	/*
		Html within this render method every time
  	*/
    const appendOrcAlert = () => {
      if(this.state.orcHP <= 0){
        return (
          <h4 style={{opacity: this.state.showAlert, transition: "opacity 2s"}}>Orc Defeated</h4>
        )
      }
    }
    return (
      <div>
        <br></br>
          {
            this.state.playerChosen ?
              this.state.aragornDefeated ?
              <div className="text-center">
                <h1>YOU LOSE, try again</h1>
              </div> : this.state.youWin ?
              <div>
                <h1>YOU WIN YAYAYAYA</h1>
              </div> :
              <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-2">
                  <h3>{this.state.char.charAt(0).toUpperCase() + this.state.char.substring(1, this.state.char.length)}</h3>
                  <img style={{height: '150px', width: 'auto'}} src={this.state.char ? `./images/${this.state.char}.jpg` : ''}/>
                  <p>HP: {this.state.aragornHP}</p>
                </div>
                <div className="col-md-3 text-center">
                  <button onClick={this.attackThis.bind(this)} style={{marginTop: '100px', marginLeft: '20px'}} className="btn btn-primary">Attack</button>
                </div>
                <div className="col-md-2">
                  {
                    this.state.orcHP > 0 ?
                    <div>
                      <h3>Orc</h3>
                      <img style={{height: '150px', width: 'auto'}} src="./images/orc.jpg"/>
                      <p>HP: {this.state.orcHP}</p>
                    </div> :
                    <div>
                      <h3>Shelob</h3>
                      <img style={{height: '150px', width: 'auto'}} src="./images/shelob.jpg"/>
                      <p>HP: {this.state.shelobHP}</p>
                    </div>                
                  }
                  <div>
                    {appendOrcAlert()}
                  </div>
                </div>
              </div> : 
              <div>
                <h3>Choose a Character</h3>
                <br></br>
                <img onClick={() => this.characterChoose('gimli')} src="./images/gimli_choose.jpg" style={{height: '150px', width: 'auto', padding: '10px'}} />
                <img onClick={() => this.characterChoose('legolas')} src="./images/legolas_choose.jpg" style={{height: '150px', width: 'auto', padding: '10px'}} />
                <img onClick={() => this.characterChoose('aragorn')} src="./images/aragorn_choose.jpg" style={{height: '150px', width: 'auto', padding: '10px'}} />
              </div>
          }
      </div>
    );
  }
};

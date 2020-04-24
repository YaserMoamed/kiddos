import React from "react";

import ModalVideo from "react-modal-video";

class Tutorials extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div className="todo">
        <div className="tutorials">
          <p className="title"> Impara con i nostri tutorial</p>
        </div>
        <div className="video">
          <div className="grid">
            <div className="grid-item">
              <ModalVideo
                channel="youtube"
                isOpen={this.state.isOpen}
                videoId="pKO9UjSeLew"
                onClose={() => this.setState({ isOpen: false })}
              />
              <img
                src="/coding.jpg"
                alt="coding"
                onClick={this.openModal}
                label="Se il coding fosse un anime"
              />
              <img
                className="play"
                src="/svg/play.svg"
                alt="play"
                onClick={this.openModal}
              />
              <p>Se il coding fosse un anime</p>
            </div>
            <div className="grid-item">
              <ModalVideo
                channel="youtube"
                isOpen={this.state.isOpen}
                videoId="7lFxgae_mLE"
                onClose={() => this.setState({ isOpen: false })}
              />
              <img
                className="thumb"
                src="/meccasaur.jpg"
                alt="coding"
                onClick={this.openModal}
              />
              <img
                className="play"
                src="/svg/play.svg"
                alt="play"
                onClick={this.openModal}
              />
              <p>Recensione del Meccasaur</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tutorials;

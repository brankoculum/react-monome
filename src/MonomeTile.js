import React, { Component } from 'react'

class MonomeTile extends Component {
  onClick = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('tileid')
    this.props.toggleTile(id)
  }

  render() {
    let classes = ['tile'];
    if (this.props.enabled) classes.push('enabled');
    if (this.props.active) classes.push('active');

    return (
      <div
        tileid={this.props.tileId}
        onClick={this.onClick}
        className={classes.join(' ')}></div>
      )
  }
}

export default MonomeTile;

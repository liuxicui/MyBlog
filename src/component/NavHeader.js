import React from 'react';

class NavHeader extends React.Component {
  handleBack(){
    this.context.router.goBack();
  }
  render () {
    return(
      <div className="nav-header">
        <button type="button" className="btn btn-default" aria-label="Left Align" onClick={this.handleBack.bind(this)}>
        <span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span>BACK
        </button>
        <h3>liuxicui@{this.props.title}</h3>
        <button type="button" className="btn btn-default" aria-label="Left Align">
        <span className="glyphicon glyphicon-qrcode" aria-hidden="true"></span>
        </button>
      </div>
    )
  }
}
NavHeader.contextTypes = {
  router: React.PropTypes.object
};
export default NavHeader;

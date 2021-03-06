var React = require("react");
require("./overlay.less");

var Overlay = React.createClass({
  render: function(){
    var style = this.getStyle();
    return (
      <div className="overlay" style={style}></div>
    );
  },
  getStyle: function(){
    if (this.props.connectionState === "online") {
      return {
        opacity: 0,
        zIndex: -1
      };
    } else {
      return {
        opacity: 0.5,
        zIndex: 100
      }
    }
  }
});

module.exports = Overlay;

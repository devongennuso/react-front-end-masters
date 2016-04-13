var Radium = require('radium')
var React = require('react')
var color = require('color')

var Button = React.createClass({
  render () {
    let propTypes = {
      kind: React.PropTypes.oneOf(['primary', 'warning']).isRequired
    }

    return (
      <button
        style={[
          styles.base,
          styles[this.props.kind]
        ]}>
        {this.props.children}
      </button>
    )
  }
})

var styles = {
  base: {
    margin: '10px auto',
    color: '#fff',
    ':hover': {
      background: color('#0074d9').lighten(0.2).hexString()
    }
  },

  primary: {
    background: '#0074D9'
  },

  warning: {
    background: '#FF4136'
  }
}

module.exports = Radium(Button)

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render() {
    return (
      div(null,
        h1(null, 'Check out this component!')
      )
    )
  }
});

var MyTitleFactory = React.createFactory(MyTitle);

// composite components
var MyFirstCompononet = (
  div(null,
    MyTitleFactory(null),
    MyTitleFactory(null),
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null)
  )
)

ReactDOM.render(MyFirstCompononet, document.getElementById('app'))

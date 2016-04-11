var React = require('react')
var ReactDOM = require('react-dom')
var div = React.DOM.div
var MyTitle = require('./MyTitle')

var MyTitleFactory = React.createFactory(MyTitle)

// composite components
var MyFirstCompononet = (
  div(null,
    MyTitleFactory({
      title: 'Props are great',
      color: 'rebeccapurple'}),
    MyTitleFactory({
      title: 'Use props everywhere!',
      color: 'mediumaquamarine'}),
    MyTitleFactory({
      title: 'Props are the best!',
      color: 'peru'
    })
  )
)

ReactDOM.render(MyFirstCompononet, document.getElementById('app'))

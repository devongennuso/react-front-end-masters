var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var MyFirstCompononet = () => {
  return (
    <div>
      <MyTitle title='Title 1' color='rebeccapurple' />
      <MyTitle title='Title 2' color='peru' />
      <MyTitle title='Title 3' color='#f06d06' />
    </div>
  )
}

ReactDOM.render(<MyFirstCompononet />, document.getElementById('app'))

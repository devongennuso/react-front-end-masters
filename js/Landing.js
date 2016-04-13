const React = require('react')
let Button = require('./Button')

const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input className='search' type='text' placeholder='Search' />
      <Button kind='primary'>or Browse All</Button>
    </div>
  </div>
)

module.exports = Landing

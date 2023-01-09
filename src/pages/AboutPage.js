

import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>In this app, you can add, edit, delete, and even rate your review </p>
        <p>The output will display: your review and number rating,  number of reviews listed, and a card component that holds the data</p>

        <p>NuCamp Project Portfolio</p>

        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
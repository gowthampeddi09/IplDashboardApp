// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeamDetails} = props
  const {id, name, teamImageUrl} = eachTeamDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-card">
        <img className="team-logo" src={teamImageUrl} alt={`${name}`} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard

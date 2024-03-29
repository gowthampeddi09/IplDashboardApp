// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamDetailsData: [], isLoading: true}

  componentDidMount() {
    this.getIplTeamsData()
  }

  getIplTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const updatedData = teams.map(eachTeamDetails => ({
      name: eachTeamDetails.name,
      id: eachTeamDetails.id,
      teamImageUrl: eachTeamDetails.team_image_url,
    }))
    this.setState({teamDetailsData: updatedData, isLoading: false})
  }

  renderTeamsList = () => {
    const {teamDetailsData} = this.state
    return (
      <ul className="teams-container">
        {teamDetailsData.map(eachTeam => (
          <TeamCard eachTeamDetails={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-bg-container">
        <div className="ipl-container">
          <div className="heading-container">
            <img
              className="ipl-logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="main-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamsList()}
        </div>
      </div>
    )
  }
}

export default Home

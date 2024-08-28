import PropTypes from 'prop-types'
function ScoreCounter({currentScoreCount}) {
 return <p className='m-2'>{`Current Score : ${currentScoreCount}`}</p>
}
function HighScoreSaver({highestScoreCount}) {
    return <p className='m-2'>{`Highest Score : ${highestScoreCount}`}</p>

}
ScoreCounter.propTypes = {
    currentScoreCount : PropTypes.number
}
HighScoreSaver.propTypes = {
    highestScoreCount : PropTypes.number
}
export {ScoreCounter,HighScoreSaver}
import narutologo from '../assets/naruto.jpg'
import { ScoreCounter,HighScoreSaver } from './counter'
import PropTypes from 'prop-types'
export default function Header({score,highScore}) {
    return <>
        <div className="header-container flex justify-between items-center bg-gray-950 text-slate-100  font-['Reggae_One'] font-bold ">
            <header className="w-4/6 px-3 py-6 md:px-4 flex gap-3 items-center">
                <h1 className=" text-2xl md:text-4xl">Naruto : Memory Trials</h1>
                <img src={narutologo} alt='game logo' className='w-20 h-10'/>
            </header>
            <div className='counter-container w-1/6 m-auto p-4'>
                <ScoreCounter currentScoreCount={score}/> 
                <HighScoreSaver highestScoreCount = { highScore }/>
            </div>
        </div>
        <div className="h-[2px] w-full bg-gradient-to-r from-[#f8ffa1] via-[#f6d5ee] to-[#a8a3f6]"></div>
    </>
}
Header.propTypes = {
score : PropTypes.number,
highScore : PropTypes.number
}
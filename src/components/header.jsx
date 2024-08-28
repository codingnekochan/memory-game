import knylogo from '../assets/kny.svg'
import { ScoreCounter,HighScoreSaver } from './counter'
export default function Header() {
    return <>

        <div className="header-container flex justify-between items-center bg-gray-950 text-slate-100  font-['Reggae_One'] font-bold ">
            <header className="w-4/6 px-3 py-6 md:px-4 flex gap-3 items-center">
                <h1 className=" text-2xl md:text-4xl">Demon Slayer: Memory Trials</h1>
                <img src={knylogo} alt='game logo' className='w-20 h-20'/>
            </header>
            <div className='counter-container w-1/6 m-auto p-4'>
                <ScoreCounter currentScoreCount={4}/> 
                <HighScoreSaver highestScoreCount = {14}/>
            </div>
        </div>
        <div className="h-[2px] w-full bg-gradient-to-r from-[#f8ffa1] via-[#f6d5ee] to-[#a8a3f6]"></div>
    </>
}
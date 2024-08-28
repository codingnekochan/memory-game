import PropTypes from 'prop-types'
export default function Card({id}){
    return <button className={`card-${id} w-[250px] h-[300px] m-auto p-4 flex flex-col items-center border max-sm:scale-[0.82] rounded-xl`}>
        <div className="character-image w-[100%] h-[100%] bg-white rounded-t-lg"></div>
        <p className="w-full py-3 px-2 character-name border  rounded-b-lg text-slate-100 font-bold font-[Arimo] bg-[#24316b]">Character Name</p>
    </button>
}

Card.propTypes = {
    id : PropTypes.number.isRequired,
}
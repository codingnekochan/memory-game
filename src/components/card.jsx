import PropTypes from 'prop-types'


export default function Card({ characterName, characterImage, id, classID,handleHighScore, setScore, characterList, setCharacterList, clickedCardIds, setClickedCardIds, originalCharacterArray }) {
    
    function handleSetScore(e) {
        const isAlreadyClicked = clickedCardIds.find((clickedCard => {
            return (clickedCard.id === e.currentTarget.id)
        }))
        console.log(isAlreadyClicked)
        setClickedCardIds([...clickedCardIds, { id: e.currentTarget.id }])
        if (isAlreadyClicked) {
            setScore(0)
            setClickedCardIds([])
            setCharacterList(originalCharacterArray)
            handleHighScore()
        }
        else {
            shuffleArray()
            setScore(prev => prev + 1);
            setClickedCardIds([...clickedCardIds, { id: e.currentTarget.id }])
            console.log(isAlreadyClicked)
        }
    }
    function shuffleArray() {
        let shuffledArray = [...characterList]
        shuffledArray.forEach((item, index, array) => {
            let newIndex = Math.floor(Math.random() * (index + 1));
            [array[index], array[newIndex]] = [array[newIndex], array[index]]
        })
        console.log(shuffledArray)
        return setCharacterList(shuffledArray)
    }
  
    return <>
        {

            < button id={id} className={`card-${classID} w-[250px] h-[300px] m-auto p-4 flex flex-col items-center border max-sm:scale-[0.82] rounded-xl`} onClick={handleSetScore}>
                <div className="character-image w-[100%] h-[100%] bg-white rounded-t-lg">
                    <img src={characterImage} alt="" className='h-full w-full object-cover rounded-t-lg' />
                </div>
                <p className="w-full py-3 px-2 character-name rounded-b-lg text-slate-100 font-bold font-[Arimo] bg-[#24316b]">{characterName}</p>
            </button>
        }
    </>

}

Card.propTypes = {
    classID: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    characterImage: PropTypes.string,
    characterName: PropTypes.string,
    setScore: PropTypes.func,
    characterList: PropTypes.array,
    setCharacterList: PropTypes.func,
    clickedCardIds: PropTypes.array,
    setClickedCardIds: PropTypes.func,
    originalCharacterArray :PropTypes.array,
    score :PropTypes.number,
    handleHighScore:PropTypes.func
}
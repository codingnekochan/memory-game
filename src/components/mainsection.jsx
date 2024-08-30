;import Card from './card'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'


export default function Main({ score, setScore, handleHighScore }) {
    const ApiEndPoint = `https://dattebayo-api.onrender.com/characters?limit=15`
    const [characterList, setCharacterList] = useState([])
    const [originalCharacterArray, setOrginialCharacterArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [clickedCardIds, setClickedCardIds] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        async function fetchCharacters() {
            const response = await fetch(ApiEndPoint);
            try {
                if (response.ok && response.status == 200) {
                    const list = await response.json();
                    const fetchedCharacterList = list.characters
                    setOrginialCharacterArray(fetchedCharacterList)
                    return setCharacterList(fetchedCharacterList)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        let loading = setTimeout(() => {
            fetchCharacters()

        }, 3000);
        return () => {
            clearTimeout(loading)
        }
    }, [ApiEndPoint])

    return <main className="w-full border border-yellow-600 h-full flex flex-wrap items-center justify-center gap-4 p-4 bg-gray-950">
        {
            isLoading ? <p className='text-white font-bold'>Loading...</p> :
                characterList?.length > 0 && characterList?.map((character, index) => {
                    let classID = parseInt(index + 1)
                    return <Card key={character.id} id={character.id} classID={classID} characterImage={character?.images[1] || character?.images[0]} characterName={character.name} setScore={setScore} characterList={characterList} setCharacterList={setCharacterList} clickedCardIds={clickedCardIds} setClickedCardIds={setClickedCardIds} originalCharacterArray={originalCharacterArray} handleHighScore={handleHighScore} />
                })
        }

    </main>
}
Main.propTypes = {
    score : PropTypes.number,
    setScore: PropTypes.func,
    setHighScore: PropTypes.func,
}
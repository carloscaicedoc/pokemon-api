import React, { useState } from 'react'

const FetchComponent = () => {
    const [pokemonList, setPokemonList] = useState([])

    const fetchPokemonThen = (e) => {
        e.preventDefault();
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
            .then(response => {
                return response.json()
            })
            .then(jsonResponse => {
                console.log(jsonResponse)
                setPokemonList(jsonResponse.results)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="mt-2">POKEMON API</h1>
                <button onClick={fetchPokemonThen} className="btn btn-dark text-light mt-1 mb-2 py-1">.fetch pokemon</button>                
            </div>
            <div className="list d-flex justify-content-center">
                <ul>
                    {pokemonList.length > 0 && pokemonList.map((pokemon, i) => {
                        return (
                            // <p key={i}>{pokemon.name}</p>
                            <li key={i}>{pokemon.name}</li>
                        )
                    })
                    }
                </ul>
            </div>

        </>
    )
}

export default FetchComponent
import './Finder.css'

export function Finder() {

    return (
        <div id="background-finder">
            <h2>Onde quer ir?</h2>
            <div id="input-local">
                <img src="public\search icon.png" id="search-icon" />
                <input name="user-local" type="search" id="user-local" placeholder='Ex.: Porto de galinhas, PE' />
                <button><img src="public\microfone.png" id="microfone-icon" /></button>
            </div>
            <button id="filter">Filtros</button>

        </div>
    )
}


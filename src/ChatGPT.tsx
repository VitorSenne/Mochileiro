import './ChatGPT.css'

export function ChatGPT() {

    return (
        <div id="background-roteiro">
            <h2>Gere roteiros de viagens baseado na localidade</h2>

            <div id="input-roteiro">
                <img src="public\search icon.png" id="search-icon" />

                <input name="user-roteiro" type="search" id="user-roteiro" placeholder='Ex.: Roteiro de viagem em Porto de galinhas' />

                <button>
                    <img src="public\microfone.png" id="microfone-icon" />
                </button>
            </div>
            <button id="download"><img src="public\download.png"></img></button>
            <button id="email"><img src="public\email.png"></img></button>

            <div id="roteiro-return">
            </div>
        </div>
    )
}

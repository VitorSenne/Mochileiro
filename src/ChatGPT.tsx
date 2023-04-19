import './ChatGPT.css';
import axios from 'axios'
import { useState } from 'react';

export function ChatGPT() {
    const [location, setLocation] = useState('');
    const [travelPlan, setTravelPlan] = useState('');
    const CHAT_GPT_URL = 'https://api.openai.com/v1/completions';
    const CHATGPT_KEY = 'API_KEY'
    const params = {
        model: 'text-davinci-003',
        prompt: `Eu quero um roteiro de viagem para ${location}`,
        max_tokens: 1000,
        temperature: 0.7,
        n: 1,
        suffix: "\n"
    }

    const generateTravelPlan = async () => {
        axios.post(CHAT_GPT_URL, params, {
            headers: {
                'Authorization': `Bearer ${CHATGPT_KEY}`,
                'username': '',
                'password': 'thecommunist',
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            const travelPlan = response.data?.choices?.[0].text?.trim();
            if (travelPlan) {
                setTravelPlan(travelPlan);
            }
        }).catch((error) => {
            console.error(error);
        });
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        generateTravelPlan();
    };

    return (
        <div className="ChatGPT">
            <h1>Roteiro de Viagem</h1>
            <form onSubmit={handleSubmit}>
                <img src="public\search icon.png" id="search-icon" />
                <label>
                    <input
                        type="text"
                        value={location}
                        onChange={handleLocationChange}
                        placeholder="Ex.: Porto de galinhas, PE"
                    />
                </label>
                <button type="submit" id="submit">
                    Gerar
                </button>
            </form>
            <div className='resultCamp'>
                <h2>Roteiro para {location}</h2>
                <hr></hr>
                <p className="result">{travelPlan}</p>
            </div>
        </div>
    );
}

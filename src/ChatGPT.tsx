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

            <div id="roteiro-return"><p>
                Dia 1: Chegada em Porto de Galinhas, transfer para o hotel e check-in. Aproveite a tarde para conhecer as praias mais próximas do hotel, como a Praia do Cupe e a Praia Muro Alto. À noite, jante em um dos restaurantes da Vila de Porto de Galinhas.

                Dia 2: Passeio de buggy pelas praias do litoral sul. Visite as praias de Maracaípe, Pontal de Maracaípe, Barra de Sirinhaém e a Praia dos Carneiros, considerada uma das mais bonitas do Brasil. Aproveite para almoçar em um dos restaurantes da região, com vista para o mar. À noite, retorne à Vila de Porto de Galinhas para jantar e curtir a vida noturna.

                Dia 3: Passeio de jangada até as piscinas naturais de Porto de Galinhas, onde é possível fazer snorkel e ver a fauna marinha local. Aproveite para tirar fotos com os peixinhos coloridos e curtir a beleza do lugar. À tarde, faça um passeio de bicicleta até a Praia de Maracaípe e conheça as dunas da região. Jante em um dos restaurantes locais e experimente os pratos típicos da culinária nordestina.

                Dia 4: Dia livre para aproveitar a praia do hotel ou fazer compras na Vila de Porto de Galinhas. Aproveite para visitar o Mercado do Artesanato e comprar lembranças da viagem. À noite, jante em um dos restaurantes da região e experimente a culinária local.

                Dia 5: Transfer para o aeroporto e retorno para casa.

                Lembre-se de sempre consultar as medidas de segurança e higiene recomendadas pelas autoridades locais em relação à pandemia de COVID-19.</p>
            </div>
        </div>
    )
}

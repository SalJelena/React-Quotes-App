import React, { useState } from 'react'
import CreateQuote from './components/CreateQuote'
import Home from './components/Home'
import Login from './components/Login'
import Quotes from './components/Quotes'
import Register from './components/Register'

const App = ({ citati }) => {

    const [page, setPage] = useState('home')
    const [user, setUser] = useState({
        "id": 1,
        "username": "Jeja",
        "email": "jeja@gmail.com",
        "pass": "jeja123"})

    const content = () => {
        switch (page) {
            case 'home': return <Home loggedIn={user} setUser={setUser} />
            case 'login': return <Login />
            case 'register': return <Register />
            case 'quotes': return <Quotes />
            case 'createquote': return <CreateQuote />
            default: return <Home />
        }
    }

    return (
        <div className='App'>

            <button onClick={() => {setPage('home')}}>Home</button>
            <button onClick={() => {setPage('login')}}>Login</button>
            <button onClick={() => {setPage('register')}}>Register</button>
            <button onClick={() => {setPage('quotes')}}>Quotes</button>
            <button onClick={() => {setPage('createquote')}}>Create quote</button>
            {content()}

        </div>
    )




    // const [selected, setSelected] = useState(0) // selektovan je nulti citat
    // const [votes, setVotes] = useState(new Array(citati.length).fill(0)) //prazan niz glasova

    // let maxIndex = votes.indexOf(Math.max(...votes))

    // return (
    //     <div>
    //         <p>{citati[selected]}</p>
    //         <p>{votes[selected]}</p>
    //         <button onClick={() => {
    //             setSelected((selected + 1) % citati.length)
    //         }}>Sledeci citat</button>
    //         <button onClick={() => {
    //             let copyVotes = [...votes]
    //             copyVotes[selected]++
    //             setVotes(copyVotes)
    //         }}>Glasaj</button>

    //         {maxIndex == 0 && votes[maxIndex] == 0?
    //             <p>Nema jos uvek glasova.</p>
    //         :
    //             <p>Citat sa najvise glasova: {citati[maxIndex]}, glasova: {votes[maxIndex]}</p>
    //         }
    //     </div>
    // )
}

export default App;
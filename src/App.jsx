import React, { useState } from 'react'
import CreateQuote from './components/CreateQuote'
import Home from './components/Home'
import Login from './components/Login'
import Quotes from './components/Quotes'
import Register from './components/Register'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const App = () => {

    // const [page, setPage] = useState('home')

    const [user, setUser] = useState({
        "id": 1,
        "username": "Jeja",
        "email": "jeja@gmail.com",
        "pass": "jeja123"})

    return (
        <Router>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/quotes">Quotes</Link>
                <Link to="/createquote">Create Quote</Link>
            </nav>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/quotes" element={<Quotes />} />
                <Route path="/createquote" element={<CreateQuote />} />
            </Routes>
        </Router>
    )


    // const content = () => {
    //     switch (page) {
    //         case 'home': return <Home loggedIn={user} setUser={setUser} />
    //         case 'login': return <Login />
    //         case 'register': return <Register />
    //         case 'quotes': return <Quotes />
    //         case 'createquote': return <CreateQuote />
    //         default: return <Home />
    //     }
    // }

    // return (
    //     <div className='App'>

    //         <button onClick={() => {setPage('home')}}>Home</button>
    //         <button onClick={() => {setPage('login')}}>Login</button>
    //         <button onClick={() => {setPage('register')}}>Register</button>
    //         <button onClick={() => {setPage('quotes')}}>Quotes</button>
    //         <button onClick={() => {setPage('createquote')}}>Create quote</button>
    //         {content()}

    //     </div>
    // )

// QUOTES APLIKACIJA KOJA REDJA QUOTES REDOM, i OCENJUJE:

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
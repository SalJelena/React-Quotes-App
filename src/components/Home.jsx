const Home = ({loggedIn, setUser}) => {
    return (
        <div>
            <p>Home</p>
            {loggedIn?'ulogovan':'nije ulogovan'}
            <button onClick={() => {setUser(null)}}>LOG OUT</button>
        </div>
    )
};

export default Home;
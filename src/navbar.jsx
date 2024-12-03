
function Navbar() {
    return (
        <nav className="navbar  border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Career Portal</a>
                <div className="d-flex">
                <a className="navbar-brand" href="/login">Login</a>
                <a className="navbar-brand" href="/register">Register</a>

                </div>
            </div>
        </nav>
    )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
                <div className="container">

                    <Link className="navbar-brand fw-bold" to="/">
                        Placement Registration
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav ms-auto">

                            <Link className="nav-link" to="/">
                                Add Student
                            </Link>

                            <Link className="nav-link" to="/view">
                                View Students
                            </Link>

                            <Link className="nav-link" to="/search">
                                Search Student
                            </Link>

                            <Link className="nav-link" to="/delete">
                                Remove Student
                            </Link>

                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default NavigationBar
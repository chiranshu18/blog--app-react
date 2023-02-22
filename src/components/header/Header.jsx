import React from 'react'

const header = () => {
  return (
    <div>
        <header className="page-padding">
            <div className="title">
                <h2>The Artifact</h2>
            </div>

            <div className="subtitle">
                <h3> <em>Culture and Art blog</em> </h3>
            </div>

            <div class="navbar">
                    <p className="nav-element">Blog</p>
                    <p className="nav-element">About</p>
                    <p className="nav-element">Contact</p>
            </div>        
        </header>
    </div>
  )
}

export default header
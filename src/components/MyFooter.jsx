import React from 'react'

function MyFooter() {
  return (
    <div className="container">
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">Home</li>
            <li className="nav-item">Features</li>
            <li className="nav-item">Pricing</li>
            <li className="nav-item">FAQs</li>
            <li className="nav-item">About</li>
            </ul>
            <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
        </footer>
    </div>
  )
}

export default MyFooter;
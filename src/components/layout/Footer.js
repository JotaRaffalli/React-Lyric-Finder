import React from 'react'

const Footer = () => {
  return (
      <footer className="container py-5">
          <div className="row">
              <div className="col-12 col-md">
                  <small className="d-block mb-3 text-muted">&copy; 2018-2019 Jose Raffalli Adriani All rights reserved.</small>
              </div>
              <div className="col-6 col-md">
                  <h5>Jose Luis Raffalli Adriani</h5>
                  <p>
						Special thanks to Brad Traversy<a href="https://www.udemy.com/user/brad-traversy/" target="_blank"> Traversy Media</a> for his cool tutorials.
				  </p>
                  
              </div>
              <div className="col-6 col-md">
                  <h5>Follow me</h5>
                  <ul className="list-unstyled text-small">
                      <li><a target="_blank" className="text-muted" href="https://www.linkedin.com/in/jos%C3%A9raffalli/">Linkedin</a></li>
                      <li><a className="text-muted" href="https://github.com/JotaRaffalli">GitHub</a></li>
                      <li><a className="text-muted" href="http://raffallijoseluis.com.ve">Raffalli Jose</a></li>
                  </ul>
              </div>
          </div>
      </footer>
  )
}
export default Footer
import React from "react";
import './App.css'

function Home(props) {
  return(
      <div>
          <div className="container">
              <a>
                  <div className="item">
                      <div id="firmwareBg">
                      </div>
                  </div>
                  <div className="itemTitle">FIRMWARE</div>
              </a>
          </div>
          <div className="container">
              <a>
                  <div className="item">
                      <div id="buildsBg">
                      </div>
                  </div>
                  <div className="itemTitle">BUILDS</div>
              </a>
          </div>
      </div>
  )
}

export default Home
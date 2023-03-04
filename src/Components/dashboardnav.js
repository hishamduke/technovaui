import React from 'react'

const Dashboardnav = () => {

  return (
    <>
    <section className="navbar-bg dash-nav">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <a class="navbar-brand dashnav-brand" href="#">
              Technova 5.0
            </a>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link dashnav-link" aria-current="page" href="#">
                    <img src="../../../images/user.png" className="userimg"/>
                    User
                  </a>
                </li>
              </ul>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Dashboardnav
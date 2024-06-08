import React from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Publisher</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Ikigai</td>
                  <td>Francis</td>
                  <td>DC</td>
                  <td>120</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>The Hidden Hindu</td>
                  <td>Akshat Gupta</td>
                  <td>Canvua</td>
                  <td>200</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>That Night</td>
                  <td>Nidhi Gupta</td>
                  <td>Shalot</td>
                  <td>500</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>The mountain is you</td>
                  <td>Brianna Wiest</td>
                  <td>romiet</td>
                  <td>400</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAll
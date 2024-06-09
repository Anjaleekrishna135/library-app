import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
  const [data, changeData] = useState(
    [
      { "Title": "The Hidden Hindhu", "Author": "Akshath Guptha", "Publisher": "DC", "Price": 250 },
      { "Title": "That Night", "Author": "Nidhi", "Publisher": "Fres", "Price": 300 },
      { "Title": "The Mountain is You", "Author": "Briana Wiest", "Publisher": "ABC", "Price": 300 },
      { "Title": "The Alchemist", "Author": "Paulo colelo", "Publisher": "Brusio", "Price": 250 }
    ]

  )
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>

                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Publisher</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.Title}</td>
                    <td>{value.Author}</td>
                    <td>{value.Publisher}</td>
                    <td>{value.Price}</td>

                  </tr>
                )
                )
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAll
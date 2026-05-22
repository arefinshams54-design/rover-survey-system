
import { useState } from 'react'
import axios from 'axios'
import './style.css'

export default function App() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    department: '',
    blood: '',
    scoutLevel: ''
  })

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const submitForm = async (e) => {
    e.preventDefault()

    try {
      await axios.post('http://localhost:5000/api/survey', form)
      alert('Submitted Successfully')
    } catch (err) {
      alert('Submission Failed')
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Rover Survey Form</h1>

        <form onSubmit={submitForm}>
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <input
            name="department"
            placeholder="Department"
            onChange={handleChange}
          />

          <input
            name="blood"
            placeholder="Blood Group"
            onChange={handleChange}
          />

          <select
            name="scoutLevel"
            onChange={handleChange}
            required
          >
            <option value="">Select Rover Level</option>
            <option>Novice</option>
            <option>Promise</option>
            <option>Skilled</option>
            <option>Senior</option>
          </select>

          <button type="submit">Submit Survey</button>
        </form>
      </div>
    </div>
  )
}

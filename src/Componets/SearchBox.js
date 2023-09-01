/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const SearchBox = (props) => {
  const { selectPosition, setSelectPosition } = props
  const [search, setSearch] = useState('')
  const [city, setCity] = useState([])
  const navigate = useNavigate()

  const url = `https://api.geoapify.com/v1/geocode/search?text=${search}&lang=it&limit=2&type=city&apiKey=46dce4298ec24081a7726cbed248b156`

  function handleInput(event) {
    event.preventDefault()
    setSearch(event.target.value)
  }

  const handleButton = async () => {
    try {
      await axios.get(url).then((res) => {
        setCity(res.data.features[0].properties)
        setSelectPosition(res.data.features[0].properties)
        navigate('/map')
        console.log(res.data.features[0].properties)
      })
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <form className="w-2/4 flex gap-2.5 justify-center" onSubmit={handleInput}>
      <input
        onChange={handleInput}
        className="rounded-md w-2/4  p-1"
        type="text"
        placeholder="Città"
        required
      />
      <button
        className="w-12 h-9 rounded-md border-2 border-white hover:bg-white flex items-center justify-center"
        onClick={handleButton}
      >
        Cerca
      </button>
    </form>
  )
}

export default SearchBox

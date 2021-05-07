import './Ocasion.css'
import axios from "axios"
import { useEffect, useState } from "react"

const Page = ({ match }) => {
  const [data, setData] = useState([])
  const { id } = match.params

  useEffect(() => {
    axios.get(`https://peaceful-eyrie-60926.herokuapp.com/ocasion/${id}`)
      .then(response => {
        setData(response.data)
      })
  }, [id])

  const { ref, name, cpu, ram, hdd, price, so, image } = data

  return (
    <div className="ocasion">
      <div>
        <h1>OCASIÓN</h1>
        <p className="product-ref">{ref}</p>
        <h2 className="product-name">{name}</h2>
        <p className="product-spec"><span>Procesador:</span> {cpu}</p>
        <p className="product-spec"><span>Memoria RAM:</span> {ram} GB</p>
        <p className="product-spec"><span>Disco duro:</span> {hdd}</p>
        <p className="product-spec"><span>Sistema Operativo: </span> {so}</p>
        <h1 className="product-price">{price} €</h1>
      </div>
      <div>
        <img src={image} alt={name} />
      </div>
    </div>
  )
}

export default Page;
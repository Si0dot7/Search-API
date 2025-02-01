
const Card = ({flags, name, region, capital, population}) => {

    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

  return (
    <div>
        <section className='max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all'>
            <div className='relative'>
                <img src={flags.svg} alt={name.common} className='w-full h-52 object-cover'/>               
            </div>
                <div>
                    <div className='mx-3 my-5'>
                        <h2 className='font-bold text-xl '>{name.common}</h2>
                    <div>
                        <h3>Region: {region}</h3>
                        <h3>Capital: {capital}</h3>
                        <h3>Population: {formatNumber(population)} people</h3>
                    </div>
                </div>
            </div>
        </section>
     </div>
  )
}

export default Card
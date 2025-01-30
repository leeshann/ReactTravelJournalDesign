import marker from '/src/assets/marker.png'
import '/src/components/componentsCSS/Entry.css'

export default function Entry(props) {
    return (
        <article className='entry-container'>
            <img className='country-image' src={props.img} alt='image of country'></img>

            <section className='informaton-container'> 
                <section className='location-information'>
                    <img className='marker' src={marker} alt='location marker' />
                    <p className='country-name'>{props.countryName}</p>
                    <a className='location-link' href={props.locationLink}>View on Google Maps</a>
                </section>

                <h1 className='location-name'>{props.locationName}</h1>
                
                <section className='date'>
                    <time>{props.fromDate}</time>
                    <span> - </span>
                    <time>{props.toDate}</time>
                </section>

                <section className='text-content'>
                    <p>{props.description}</p>
                </section>
            </section>
        </article>
    )
}
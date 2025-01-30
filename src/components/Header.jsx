import globe from '/src/assets/globe.png'
import '/src/components/componentsCSS/Header.css'

export default function Header() {
    return (
        <header className='header'>
            <img className='globe-icon' src={globe} alt='globe icon' ></img>
            <span className='header-title'>my travel journal.</span>
        </header>
    )
}
import Link from 'next/link'

const Bannerbox = (props) => {
  return (
    <div className='box bannerBox overflow-hidden rounded-lg group'>
      <Link href={"/"}>
        <img src={props.src} alt={props.alt} className="w-full transition group-hover:scale-110 group-hover:rotate-1"/>
      </Link>
    </div>
  )
}

export default Bannerbox

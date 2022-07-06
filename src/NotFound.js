import { Link } from 'react-router-dom'
import NotFoundGif from './notfound.gif';

function NotFound() {
  return (
    <div style={{ textAlign: "center" }}>
        <h1>Böyle bir sayfa yok!</h1>     
        <p>Üzgünüm :( Aradığın sayfa bulunamadı. <br /> Ancak belki anasayfada ilgini çekebilecek bir şeyler bulabilirsin.</p>
        <p><Link to="/">Anasayfaya Git</Link></p>
        <img src={NotFoundGif} alt='Sayfa Bulunamadı' style={{ maxWidth: "100% " }} />
    </div>
  )
}
export default NotFound
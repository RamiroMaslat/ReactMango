import { Link } from 'react-router';
import './Footer.css'



function Footer () {
    return(    
    <footer className='footer'>
        <section className="footerPayments">
                <div className="creditPayment">
                    <img src="/FooterImg/creditLogo.png"alt="Tarjeta de Crédito"/>
                    <p>Crédito</p>            
                </div>

                <div className="debitPayment">
                    <img src="/FooterImg/debitLogo.png" alt="Tarjeta de Débito"/>
                    <p>Débito</p>
                </div>
                <div className="mpPayment">
                    <a href="https://www.mercadopago.com.ar/paid?code=V1C70X&utm_source=google&utm_medium=cpc&utm_campaign=MLA_MP_G_AO_ALL_BRD_SEARCH_MP_EXACT&matt_tool=28766038&matt_word=MLA_MP_Sellers_AO_X_G_Search_X_BrandKW_X&gad_source=1&gclid=CjwKCAiA0rW6BhAcEiwAQH28Iu0rqJ6--Q8Qyegc_bjJO_P1oLxouhlP3MryFaQ2g-eZ0RzUrKBtxBoCVPcQAvD_BwE"><img src="/FooterImg/mpLogo.png" alt="Mercado Pago"/></a>                
                </div>
                
                
            </section>

            <section className="copyright">
                <p>Created and Designed by Ramiro Maslat</p>
                <p>Todos los derechos reservados &copy;</p>
            </section>

            <section className="footerSocial"> 
                <Link to="https://web.whatsapp.com/"><img className="whatsApp" src="/FooterImg/wpplogo.png" alt='WhatsAppLogo'/></Link>
                <Link to="https://www.facebook.com/"><img className="faceBook" src="/FooterImg/fblogo.png" alt="facebookLogo"/></Link>
                <Link to="https://www.instagram.com/"><img className="instagram" src="/FooterImg/iglogo.png" alt="instagramLogo"/></Link>
            </section>
    </footer>           
    
    )
}

export default Footer;
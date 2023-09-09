import React from 'react'
import "../styles/footer.css"

function Footer() {
    return<>
     <footer>
        <div className="footer">
            <div className={"leftFooter"} >
                <p>STAY IN THE LOOP</p>
                <p>Stay in the loop special offers, plant-parenting tips, and more.</p>
                <div className={"socialIcons"}>
                    <div className="img"><i class="fa-brands fa-facebook"></i></div>
                    <div className="img"><i class="fa-brands fa-square-instagram"></i></div>
                    <div className="img"><i class="fa-brands fa-square-twitter"></i></div>
                    <div className="img"><i class="fa-brands fa-linkedin"></i></div>
                </div>
            </div>

            <div className={"rightFooter"}>
            
                <div className={"rightFooterContent"}>
                    <ul>
                        <h3>Quick Links</h3>
                        <a to="">Home</a>
                        <a to="">About Us</a>
                        <a to="">Services</a>
                        <a to="">Contact Us</a>
                    </ul>
                </div>

                <div className={"rightFooterContent"}>
                    <ul>
                        <h3>Support</h3>
                        <li>Help + FAQs</li>
                        <li>Shipping</li>
                        <li>Returns</li>
                        <li>Contact Support</li>
                    </ul>
                </div>

                <div className={"rightFooterContent"}>
                    <ul>
                        <h3>Office</h3>
                        <li>+2349046807203</li>
                        <li>Aptech Computer Education,<br/> Beside Shell IA, Rumuobiakani, <br/> Port Harcourt</li>
                    </ul>
                </div>

                <div className={"rightFooterContent"}>
                    <ul>
                        <h3>Company</h3>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={"copyright"}>
        <p>All Rights Reserved. CodeXLegion</p>
     </div>
     </footer>
   </>
}

export default Footer
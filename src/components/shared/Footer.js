import React from 'react'
import './footer.css'

const Footer = () => {
    return ( <div class="footer-basic">
                <footer>
                    <hr/>
                <ul class="list-inline">
                        <li class="list-inline-item"><a href="/episodes">Episodes</a></li>
                        <li class="list-inline-item"><a href="/characters">Characters</a></li>
                        <li class="list-inline-item"><a href="/deaths">Deaths</a></li>
                        <li class="list-inline-item"><a href="/quotes">Quotes</a></li>
                    </ul>
                    <p class="copyright"> All Rights Reserved © 2021  |  Made with Love by Enas Gamal</p>
                </footer>
            </div>
    )
}
export default Footer

const Footer = () => {
    return(
        <footer class="footer" style={{marginTop: "70px"}}>
        <div class="card text-center justify-content-center" style={{height: "400px", backgroundColor: "#EFC81A", borderRadius: "0", border: "none"}}>
            <div class="card-body" style={{marginTop: "150px"}}>
                <h5 class="card-title">Eat, Cook, Repeat</h5>
                <p class="card-text">Share your best recipe by uploading here !</p>
            </div>
            <div class="menu-footer">
                <ul>
                    <li style={{listStyle: "none"}}>
                        <a href="">Product </a>
                        <a href="">Company </a>
                        <a href="">Learn more</a>
                        <a href="">Get in touch</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    )
} 

export default Footer
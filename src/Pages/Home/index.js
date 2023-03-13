import Footer from '../../components/footer';
import photo from '../../assets/assets/img/landing-hero.webp';
import photoForYou from '../../assets/assets/img/landing-suggestion.webp'
import newRecipes from '../../assets/assets/img/landing-new.webp'
import popularRecipes1 from '../../assets/assets/img/popular-1.webp'
import popularRecipes2 from '../../assets/assets/img/popular-2.webp'
import popularRecipes3 from '../../assets/assets/img/popular-3.webp'
import popularRecipes4 from '../../assets/assets/img/popular-4.webp'
import popularRecipes5 from '../../assets/assets/img/popular-5.webp'
import popularRecipes6 from '../../assets/assets/img/popular-6.webp'

export default function Home() {

  return (
    <>

<nav className="navbar navbar-expand-sm navbar-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="register.html">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login.html">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="serachMenu.html">Search menu</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    <section className="hero row">
      <div className="content col-10 col-sm-9 d-flex flex-column justify-content-center ">
        <h1 className="display-5 mb-3">Discover Recipe & Delicious Food</h1>
        <div className="search mb-3">
          <label className="py-2 px-4" for="search"><i className="fas fa-search"></i></label>
          <input type="search" className="form-control p-3" id="search" placeholder="Search Restaurant, Food"/>
        </div>
      </div>
      <div className="decoration col-2 col-sm-3 d-flex align-items-center background-landing">
        <img className="d-none d-md-block" src={photo} alt="Hero Image"/>
      </div>
    </section> 

    <section class="popular mb-10">
      <div class="title-section mb-4 mb-md-5">
        <h1>Popular For You!</h1>
      </div>
      <div class="row">
        <div class="left col-12 col-md-6">
          <img src={photoForYou} alt="popular Image"/>
          <div></div>
        </div>
        <div class="right col-12 col-md-6">
          <div>
            <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
            <hr/>
            <p>
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!
            </p>
            <a href="/detail.html" class="btn back-primary text-light">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <section class="new mb-10">
      <div class="title-section mb-4 mb-md-5">
        <h1>New Recipe</h1>
      </div>
      <div class="row">
        <div class="left col-12 col-md-6">
          <img src={newRecipes} alt="New Recipe Image"/>
          <div></div>
        </div>
        <div class="right col-12 col-md-6">
          <div>
            <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
            <hr/>
            <p>
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!
            </p>
            <a href="/detail.html" class="btn back-primary text-light">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <section class="popular mb-10">
      <div class="title-section mb-4 mb-md-5">
        <h1>Popular Recipe</h1>
      </div>
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          <div class="col">
            <a href="/detail.html">
              <div class="card align-items-center">
                <p class="title text-dark">Chicken <br/> Kare</p>
                <img src={popularRecipes1} class="card-img-top" alt="Chicken Kare"/>
              </div>
            </a>
          </div>
          <div class="col">
            <a href="/detail.html">
              <div class="card align-items-center">
                <p class="title text-dark">Bomb <br/> Chicken</p>
                <img src={popularRecipes2} class="card-img-top" alt="Bomb Chicken"/>
              </div>
            </a>
          </div>
          <div class="col">
            <a href="/detail.html">
              <div class="card align-items-center">
                <p class="title text-dark">Banana <br/> Smothie Pop</p>
                <img src={popularRecipes3} class="card-img-top" alt="Banana Smothie Pop"/>
              </div>
            </a>
          </div>
          <div class="col">
            <a href="/detail.html">
              <div class="card align-items-center">
                <p class="title text-dark">Coffe Lava <br/> Cake</p>
                <img src={popularRecipes4} class="card-img-top" alt="Coffe Lava Cake"/>
              </div>
            </a>
          </div>
          <div class="col">
            <a href="/detail.html">
              <div class="card align-items-center">
                <p class="title text-dark">Sugar <br/> Salmon</p>
                <img src={popularRecipes5} class="card-img-top" alt="Sugar Salmon"/>
              </div>
            </a>
          </div>
          <div class="col">
            <a href="/detail.html">
              <div class="card align-items-center">
                <p class="title text-dark">Indian <br/> Salad</p>
                <img src={popularRecipes6} class="card-img-top" alt="Indian Salad"/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import photo from "../../assets/assets/img/landing-hero.webp";
import photoForYou from "../../assets/assets/img/landing-suggestion.webp";
import newRecipes from "../../assets/assets/img/landing-new.webp";
import popularRecipes1 from "../../assets/assets/img/popular-1.webp";
import popularRecipes2 from "../../assets/assets/img/popular-2.webp";
import popularRecipes3 from "../../assets/assets/img/popular-3.webp";
import popularRecipes4 from "../../assets/assets/img/popular-4.webp";
import popularRecipes5 from "../../assets/assets/img/popular-5.webp";
import popularRecipes6 from "../../assets/assets/img/popular-6.webp";
import { useSelector } from "react-redux";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="hero row">
        <div className="content col-10 col-sm-9 d-flex flex-column justify-content-center ">
          <h1 className="display-5 mb-3">Discover Recipe & Delicious Food</h1>
          <div className="search mb-3">
            <label className="py-2 px-4" htmlFor="search">
              <i className="fas fa-search"></i>
            </label>
            <input
              type="search"
              className="form-control p-3"
              id="search"
              placeholder="Search Restaurant, Food"
            />
          </div>
        </div>
        <div className="decoration col-2 col-sm-3 d-flex align-items-center background-landing">
          <img className="d-none d-md-block" src={photo} alt="Hero Image" />
        </div>
      </section>

      <section className="popular mb-10">
        <div className="title-section mb-4 mb-md-5">
          <h1>Popular For You!</h1>
        </div>
        <div className="row">
          <div className="left col-12 col-md-6">
            <img src={photoForYou} alt="popular Image" />
            <div></div>
          </div>
          <div className="right col-12 col-md-6">
            <div>
              <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
              <hr />
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <a href="/detail.html" className="btn back-primary text-light">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="new mb-10">
        <div className="title-section mb-4 mb-md-5">
          <h1>New Recipe</h1>
        </div>
        <div className="row">
          <div className="left col-12 col-md-6">
            <img src={newRecipes} alt="New Recipe Image" />
            <div></div>
          </div>
          <div className="right col-12 col-md-6">
            <div>
              <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
              <hr />
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <a href="/detail.html" className="btn back-primary text-light">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="popular mb-10">
        <div className="title-section mb-4 mb-md-5">
          <h1>Popular Recipe</h1>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <div className="col">
              <a href="/detail.html">
                <div className="card align-items-center">
                  <p className="title text-dark">
                    Chicken <br /> Kare
                  </p>
                  <img
                    src={popularRecipes1}
                    className="card-img-top"
                    alt="Chicken Kare"
                  />
                </div>
              </a>
            </div>
            <div className="col">
              <a href="/detail.html">
                <div className="card align-items-center">
                  <p className="title text-dark">
                    Bomb <br /> Chicken
                  </p>
                  <img
                    src={popularRecipes2}
                    className="card-img-top"
                    alt="Bomb Chicken"
                  />
                </div>
              </a>
            </div>
            <div className="col">
              <a href="/detail.html">
                <div className="card align-items-center">
                  <p className="title text-dark">
                    Banana <br /> Smothie Pop
                  </p>
                  <img
                    src={popularRecipes3}
                    className="card-img-top"
                    alt="Banana Smothie Pop"
                  />
                </div>
              </a>
            </div>
            <div className="col">
              <a href="/detail.html">
                <div className="card align-items-center">
                  <p className="title text-dark">
                    Coffe Lava <br /> Cake
                  </p>
                  <img
                    src={popularRecipes4}
                    className="card-img-top"
                    alt="Coffe Lava Cake"
                  />
                </div>
              </a>
            </div>
            <div className="col">
              <a href="/detail.html">
                <div className="card align-items-center">
                  <p className="title text-dark">
                    Sugar <br /> Salmon
                  </p>
                  <img
                    src={popularRecipes5}
                    className="card-img-top"
                    alt="Sugar Salmon"
                  />
                </div>
              </a>
            </div>
            <div className="col">
              <a href="/detail.html">
                <div className="card align-items-center">
                  <p className="title text-dark">
                    Indian <br /> Salad
                  </p>
                  <img
                    src={popularRecipes6}
                    className="card-img-top"
                    alt="Indian Salad"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

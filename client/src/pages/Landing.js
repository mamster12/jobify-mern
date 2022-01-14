import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span>
          </h1>
          <p>
            I'm baby hella gentrify jianbing yuccie fixie try-hard. Truffaut
            retro +1 banjo tattooed, adaptogen messenger bag listicle. Butcher
            locavore occupy fam plaid. Williamsburg hashtag taxidermy cloud
            bread listicle, vaporware meditation distillery fam humblebrag.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;

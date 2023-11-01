import rect from "../../componenet/Hero section.png";

import game2 from "../../componenet/Component 1.png";
import game1 from "../../componenet/Component 2.png";

import "../../css/Home.css"
const Home = () => {
    return ( 
        <>
        {/* first section  */}
        <div >
                <img src={rect} alt="rect" className="homeImg" />



        </div>
        {/* end first section  */}

        {/* images section  */}
        <div className="availableGames">
            <div className="headerr">
            <h1>available Games</h1>
            </div>
            <div className="images">
            <div className="game1">
                <img alt="game 1" src={game1}/>
                

            </div>
            <div className="game1">
                <img alt="game 2" src={game2}/>
                

            </div>
            </div>
        </div>
        {/* end images section  */}

        {/* third section  */}
        <div className="third">
        <div className="about">
            <h1>About</h1>
            </div>
        </div>
        </>
     );
}
 
export default Home;
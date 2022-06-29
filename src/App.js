import React from "react";
import "./App.css";
import { Link, Switch, Route } from 'react-router-dom';

import Help_Page from './Components/help'
import Buy_Page from './Components/buy'

const App = () => {
  return (
    <>
      <header>
        <p> Lambda Eats </p>

        <nav className="nav-bar">
          <Link className="HOME-BUTTON" to="/"> HOME </Link>
          <Link className="HELP-BUTTON" to="/help"> HELP </Link>
        </nav>
      </header>

      <main>
        <Switch>

          <Route exact path="/">

            <section className="topPicture">
              <div>
                <h2> Your favorite food, delivered while coding </h2>
                <button>
                  <Link id="order-pizza" to="/pizza"> Pizza? </Link>
                </button>
              </div>
            </section>

            <div>
              <h4>Food Delivery in Gotham City</h4>

              <div className="row">
                <div className="portfolio-element">
                  <div className="imageHolder">
                    <img src="https://cdn.discordapp.com/attachments/805958742457057311/991371100489515118/Screen_Shot_2022-06-28_at_11.54.43_AM.png?size=4096" />
                  </div>
                  <p>McDonald's</p>
                  <p> $ - American - Fast Food - Burgers</p>
                </div>

                <div className="portfolio-element">
                  <div className="imageHolder">
                    <img src="https://cdn.discordapp.com/attachments/805958742457057311/991371100489515118/Screen_Shot_2022-06-28_at_11.54.43_AM.png?size=4096" />
                  </div>
                  <p>McDonald's</p>
                  <p> $ - American - Fast Food - Burgers</p>
                </div>

                <div className="portfolio-element">
                  <div className="imageHolder">
                    <img src="https://cdn.discordapp.com/attachments/805958742457057311/991371100489515118/Screen_Shot_2022-06-28_at_11.54.43_AM.png?size=4096" />
                  </div>
                  <p>McDonald's</p>
                  <p> $ - American - Fast Food - Burgers</p>
                </div>

                <div className="portfolio-element">
                  <div className="imageHolder">
                    <img src="https://cdn.discordapp.com/attachments/805958742457057311/991371100489515118/Screen_Shot_2022-06-28_at_11.54.43_AM.png?size=4096" />
                  </div>
                  <p>McDonald's</p>
                  <p> $ - American - Fast Food - Burgers</p>
                </div>

                <div className="portfolio-element">
                  <div className="imageHolder">
                    <img src="https://cdn.discordapp.com/attachments/805958742457057311/991371100489515118/Screen_Shot_2022-06-28_at_11.54.43_AM.png?size=4096" />
                  </div>
                  <p>McDonald's</p>
                  <p> $ - American - Fast Food - Burgers</p>
                </div>

                <div className="portfolio-element">
                  <div className="imageHolder">
                    <img src="https://cdn.discordapp.com/attachments/805958742457057311/991371100489515118/Screen_Shot_2022-06-28_at_11.54.43_AM.png?size=4096" />
                  </div>
                  <p>McDonald's</p>
                  <p> $ - American - Fast Food - Burgers</p>
                </div>

              </div>

            </div>

          </Route>

          <Route exact path="/help">
            <Help_Page />
          </Route>

          <Route exact path="/pizza">
            <Buy_Page />
          </Route>

        </Switch>
      </main>
    </>
  );
};
export default App;

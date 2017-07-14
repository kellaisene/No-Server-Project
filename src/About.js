import React from 'react';
import {Route, Link} from 'react-router-dom';

function AboutHistory(props) {
    return(
        <div className="something">
            <p>Nicknamed the “Navigator Islands” by early European explorers because of the inhabitant’s vast knowledge of seafaring, Samoa is home to some of the biggest and most populated islands of Polynesia. Situated south of the equator in the Pacific Ocean, Samoa’s indigenous population (Samoans) continues to partake in traditional practices, including subsistent agricultural farming.</p>
            <p>However, today commercial farming is more common throughout the islands, which was introduced to the area during colonial rule. Among the commercially farmed products is Cacao, brought by German imperial powers in the early 19th century by ways of Brazil and Madagascar. Samoa possesses a unique hybrid between Forastero and Criollo Cacao.</p>
            <p>The foreign seedlings became widely popular among Samoans and became indigenized into a “traditional” food and could be considered a comfort food among Samoans. The local cacao hybrid beverage called “Koko Samoa” has become just as much apart of Samoan culture as any other commodity, even rivaling the local beer, Vailima, as the national drink.</p>
            </div>
    )
}

export default function About(props) {
    return (
        <div>
            <h1>About</h1>

            <div>
                <Link to='/about/history'>History</Link>
            </div>

            <Route path='/about/history' component={AboutHistory}/>
            
        </div>

    )
}
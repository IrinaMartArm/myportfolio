import { GoTop } from './components/goTop/GoTop';
import { Particle } from './components/particle/Particle';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { Contacts } from './layout/sections/contakts/Contacts';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Slogan } from './layout/sections/slogan/Slogan';
import { Works } from './layout/sections/works/Works';


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            {/* <Testimony/> */}
            <Slogan/>
            <Contacts/>
            <Footer/>
            <GoTop/>
        </div>
    );
}

export default App;


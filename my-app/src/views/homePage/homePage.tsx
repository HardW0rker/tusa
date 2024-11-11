import {Page} from "../viewsStyles"
import Header from "../../components/homePage/header/header"
import Title from '../../components/homePage/title/title';
import LocationSelection from '../../components/homePage/locationSelection/locationSelection';
import Carusel from "../../components/homePage/carusel/carusel";
import Baners from "../../components/homePage/baners/baners";
import CardList from "../../components/card/card-list";

function HomePage() {
    return (
    <Page>
        <Header/>
        <Title/>
        <LocationSelection/>
        <Carusel/>
        <Baners/>
        <CardList/>
    </Page>
  );
}

export default HomePage;
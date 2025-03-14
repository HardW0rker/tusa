import "./page.scss";
import { Header } from "../../components/header";
import { Title } from "../../components/ui/title";
import { LocationSelection } from "../../components/locationSelection";

export default function Home() {
  return (
    <div className="page">
      <Header />
      <Title
        header="Поможем выбрать развлечение на вечер"
        text="Ищи место, которое подходит именно тебе"
      />
      <LocationSelection />
    </div>
  );
}

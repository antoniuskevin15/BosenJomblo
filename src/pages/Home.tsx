import { IonContent, IonHeader, IonPage } from "@ionic/react";

// import 'swiper/scss';
import '@ionic/react/css/ionic-swiper.css';
import Navbar from "../components/Navbar";
import List from "../components/List";

import './Home.css';

const Home: React.FC = () => {
    return (
        <>
            <IonPage>
                <IonHeader>
                    <Navbar title="Bosen Jomblo" />
                </IonHeader>
                <IonContent className="ion-padding">
                    <List />
                </IonContent>
            </IonPage>
        </>
    );
};

export default Home;

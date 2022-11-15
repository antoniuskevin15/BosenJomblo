import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { logoInstagram, personAddOutline, personCircleOutline } from "ionicons/icons";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";

import "./Home.css"


const Profile: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <Navbar title="Profile"></Navbar>
            </IonHeader>
            <IonContent>
                <ProfileCard />
            </IonContent>
        </IonPage>
    );
};

export default Profile;
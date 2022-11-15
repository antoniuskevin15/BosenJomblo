import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";
import Navbar from "../components/Navbar";
import TargetPage from "../components/TargetPage";

const Target: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <Navbar title="Target Gebetan" />
            </IonHeader>
            <IonContent>
                <TargetPage></TargetPage>
            </IonContent>
        </IonPage>
    );
};

export default Target;
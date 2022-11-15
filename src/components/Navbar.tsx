import { IonButton, IonButtons, IonIcon, IonItem, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";

const Navbar: React.FC<{ title: string | undefined }> = props => {
    return (
        <IonToolbar color="primary">
            <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>{props.title}</IonTitle>
            <IonButton fill="clear" className="ion-padding-left" slot="end" routerLink="/profile">
                <IonIcon className="ion-margin" color="light" size="large" slot="end" icon={personCircleOutline}></IonIcon>
            </IonButton>
        </IonToolbar>
    );
};

export default Navbar
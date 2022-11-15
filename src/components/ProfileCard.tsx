import { IonButton, IonCard, IonCol, IonGrid, IonIcon, IonImg, IonLabel, IonRow, } from "@ionic/react";
import { logoGithub, logoInstagram, logoWhatsapp, personAddOutline } from "ionicons/icons";
const ProfileCard: React.FC = () => {
    return (
        <IonCard>
            <IonImg className="ion-margin potoku" src="../assets/diriku.JPG"></IonImg>
            <IonGrid>
                <IonRow className="ion-justify-content-center">
                    <IonLabel><h2>Antonius Kevin Budi Saputra</h2></IonLabel>
                </IonRow>
                <IonRow className="ion-justify-content-center">
                    <IonLabel><h2>00000045444</h2></IonLabel>
                </IonRow>
                <IonRow className="ion-justify-content-center">
                    <IonCol>
                        <IonButton className="w_100" color="danger" href="https://www.instagram.com/antoniuskevin_/">
                            <IonIcon icon={logoInstagram} />
                            <IonLabel className="ion-margin">
                                Instagram
                            </IonLabel>
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton className="w_100" color="secondary" href="http://line.me/ti/p/~antonius15">
                            <IonIcon icon={personAddOutline} />
                            <IonLabel className="ion-margin">
                                Line
                            </IonLabel>
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-center">
                    <IonCol>
                        <IonButton className="w_100" color="tertiary" href="https://github.com/antoniuskevin15/">
                            <IonIcon icon={logoGithub} />
                            <IonLabel className="ion-margin">
                                Github
                            </IonLabel>
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton className="w_100" color="dark" href="https://wa.me/+6282136010198">
                            <IonIcon icon={logoWhatsapp} />
                            <IonLabel className="ion-margin">
                                Whatsapp
                            </IonLabel>
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    );
};

export default ProfileCard;
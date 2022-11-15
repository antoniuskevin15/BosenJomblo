import { IonActionSheet, IonAlert, IonAvatar, IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonModal, IonPage, IonRow, IonTitle, IonToast, IonToolbar, useIonActionSheet, useIonLoading } from "@ionic/react"
import { femaleOutline, heart, maleOutline, push, pushOutline, trash, trashBin } from "ionicons/icons";
import React, { useContext, useRef, useState } from "react";
import DataGebetanContext from "../data/list-gebetan-context";
import MatchedContext, { Pacar } from "../data/list-matched-context";
import "./TargetEmpty.css";

const TargetPage: React.FC = () => {
    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
    const gebetanContext = useContext(DataGebetanContext);
    const matchedContext = useContext(MatchedContext);
    const arraySize = matchedContext.matches.length;
    const [loading, dismiss] = useIonLoading();
    const [startDeleting, setStartDeleting] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [selectedPacar, setSelectedPacar] = useState<Pacar | null | undefined>();

    const startDeletePacar = (pacarId: string) => {
        slidingOptionsRef.current?.closeOpened();
        setStartDeleting(true);
        const pacar = matchedContext.matches.find(g => g.id === pacarId);
        console.log(pacar);
        setSelectedPacar(pacar);
    };
    const deletePacar = () => {
        matchedContext.deletePacar(selectedPacar!);
        gebetanContext.addList(selectedPacar!);
        loading({
            message: 'Deleting...',
            duration: 1500
        });
        setToastMessage("Matched List Deleted!!");
        setStartDeleting(false);
    }
    const gaJadiDeletePacar = () => {
        loading({
            message: 'Canceling...',
            duration: 1500
        });
        setToastMessage("Matched List Doesn't Deleted");
        setStartDeleting(false);
    }
    return (
        <React.Fragment>
            <IonActionSheet
                isOpen={startDeleting}
                onDidDismiss={() => setStartDeleting(false)}
                // translucent={true}
                header={'Yakin udah gamau sama ' + selectedPacar?.fname + ' ' + selectedPacar?.lname + ' lagi??'}
                buttons={[
                    {
                        text: 'Yakin, mau cari pacar baru aja..',
                        role: 'destructive',
                        icon: trashBin,
                        handler: () => { deletePacar(); }
                    },
                    {
                        text: 'Ga jadi deh, masih sayang',
                        icon: pushOutline,
                        handler: () => { gaJadiDeletePacar(); }
                    }
                ]}
            >
            </IonActionSheet>
            {/* <IonAlert isOpen={startDeleting}
                header="Are you sure?"
                message="Do you want to delete your friend? This cannot be undone."
                buttons={[
                    { text: 'No', role: 'cancel', handler: gaJadiDeletePacar },
                    { text: 'Yes', handler: deletePacar }
                ]} /> */}
            <IonToast isOpen={!!toastMessage}
                message={toastMessage}
                duration={2000}
                onDidDismiss={() => {
                    setToastMessage('')
                }} />
            <IonContent className="ion-padding ion-margin ion-text-center">
                {arraySize == 0 ? (
                    <>
                        <IonImg className="ion-margin-horizontal meme" src="https://i.pinimg.com/originals/57/0b/4a/570b4a0fa520bb1d5a3e8b226386f744.jpg"></IonImg>
                        <IonLabel className=""><h2>Kamu Jones??</h2></IonLabel>
                        <IonButton className="btn ion-margin-horizontal ion-padding-vertical" color="success" routerLink="/home">
                            <IonLabel><h2>Cari Gebetan</h2></IonLabel>
                        </IonButton>
                    </>
                ) : (
                    <>
                        <IonList>
                            {matchedContext.matches.map(g => (
                                <IonItemSliding key={g.id} ref={slidingOptionsRef}>
                                    <IonItemOptions side="end">
                                        <IonItemOption color="danger" onClick={startDeletePacar.bind(null, g.id)}>
                                            <IonIcon slot="icon-only" icon={trashBin} />
                                        </IonItemOption>
                                    </IonItemOptions>
                                    <IonItem lines="full" button >
                                        <IonAvatar className="ion-margin">
                                            <IonImg src={g.url} />
                                        </IonAvatar>
                                        <IonLabel>
                                            <h2><b>{g.fname} {g.lname}</b></h2>
                                            <h4>{g.caption}</h4>
                                            <h6><IonIcon icon={g.gender === "Female" ? femaleOutline : maleOutline}></IonIcon> {g.gender}</h6>
                                        </IonLabel>
                                    </IonItem>
                                </IonItemSliding>
                            ))}
                        </IonList>
                    </>
                )
                }
            </IonContent>
        </React.Fragment>

    );
};

export default TargetPage;

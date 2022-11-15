import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonGrid, IonIcon, IonImg, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonLoading, IonRow, IonToast, useIonLoading } from "@ionic/react";
import { femaleOutline, heart, maleOutline } from "ionicons/icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Zoom, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/zoom';
import 'swiper/core';
// import 'swiper/scss';
import '@ionic/react/css/ionic-swiper.css';
import React, { useState, useEffect, useContext, useRef } from 'react';
import DataGebetanContext, { Gebetan } from "../data/list-gebetan-context";
import MatchedContext from "../data/list-matched-context";

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return { width };
}
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
}

const List: React.FC = () => {
    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
    const gebetanContext = useContext(DataGebetanContext);
    const matchedContext = useContext(MatchedContext);
    const gebetanList = gebetanContext.gebetans;

    const arrayNum: Array<number> = [];
    const { width } = useWindowDimensions();
    const [loading, dismiss] = useIonLoading();
    const [toastMessage, setToastMessage] = useState('');
    const matchGebetanHandler = (gebetanId: string) => {
        slidingOptionsRef.current?.closeOpened();
        const gebetan = gebetanContext.gebetans.find(g => g.id === gebetanId);
        matchedContext.addPacar(gebetan!);
        loading({
            message: 'Loading..',
            duration: 1500
        });
        gebetanContext.deleteList(gebetan!);
        // console.log(gebetanList.length);
        // console.log(gebetanContext.gebetans.length);
        // console.log(gebetanList);
        // console.log(gebetanContext.gebetans);
        setToastMessage("Matched !!!");
    };
    return (
        <>
            <React.Fragment>
                <IonToast isOpen={!!toastMessage}
                    message={toastMessage}
                    duration={2000}
                    onDidDismiss={() => {
                        setToastMessage('')
                    }} />
                <Swiper
                    spaceBetween={1}
                    slidesPerView={width < 492 ? 2 : width < 768 ? 3 : 4}
                    modules={[Autoplay, Keyboard, Pagination, Navigation, Zoom]}
                    navigation={true}
                    autoplay={true}
                    keyboard={true}
                    pagination={true}
                    zoom={true}
                >
                    {Array.from({ length: (gebetanContext.gebetans.length < 10 ? gebetanContext.gebetans.length : 10) }).map((_, i) => {
                        var rand = 0;
                        if (arrayNum.length === 0) {
                            rand = Math.floor((Math.random() * 100) % gebetanContext.gebetans.length);
                        } else {
                            do {
                                rand = Math.floor((Math.random() * 100) % gebetanContext.gebetans.length);
                            } while (arrayNum.includes(rand));
                        }
                        arrayNum[i] = rand;
                        var g = gebetanList[arrayNum[i]];
                        // var g = gebetanContext.gebetans.find(gb => +gb.id == arrayNum[i]);
                        // console.log(g);
                        // console.log(arrayNum);
                        return (
                            <SwiperSlide key={g!.id}>
                                <IonCard className="w_100">
                                    <IonGrid>
                                        <IonRow className="ion-justify-content-center">
                                            <IonCardHeader className="ion-no-padding ion-padding-top">
                                                <IonAvatar>
                                                    <IonImg src={g!.url} />
                                                </IonAvatar>
                                            </IonCardHeader>
                                        </IonRow>
                                        <IonRow className="ion-justify-content-center">
                                            <IonCardContent>
                                                <IonLabel className="ion-text-center">{g!.fname} {g!.lname}</IonLabel>
                                            </IonCardContent>
                                        </IonRow>
                                    </IonGrid>
                                </IonCard>
                            </SwiperSlide>

                        )
                    })}
                </Swiper>
                <IonList>
                    {gebetanContext.gebetans.map(g => (
                        <IonItemSliding key={g.id} ref={slidingOptionsRef}>
                            <IonItemOptions side="end">
                                <IonItemOption color="success" onClick={matchGebetanHandler.bind(null, g.id)}>
                                    <IonIcon slot="icon-only" icon={heart} />
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
            </React.Fragment>
        </>
    );
};

export default List;
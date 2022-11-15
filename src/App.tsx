import { Redirect, Route } from 'react-router-dom';
import { IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToggle, IonToolbar } from "@ionic/react";
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { heartCircleOutline, list, moon, personCircleOutline, toggleSharp } from "ionicons/icons";

import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Profile from './pages/Profile';
import Target from './pages/Target';
import GebetanContextProvider from './data/GebetanContextProvider';
import MatchedContextProvider from './data/MatchedContextProvider';

setupIonicReact();

const App: React.FC = () => {

  const toggleDarkModeHandler = () => {
    console.log("Toggle changed");
    document.body.classList.toggle("dark");
  };
  return (
    <IonApp>
      <IonReactRouter>
        <IonMenu contentId='main'>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Gebet App</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonMenuToggle>
                <IonItem button routerLink="/home">
                  <IonIcon slot='start' icon={list} />
                  <IonLabel>Daftar Calon Pasangan</IonLabel>
                </IonItem>
                <IonItem button routerLink="/target">
                  <IonIcon slot='start' icon={heartCircleOutline} />
                  <IonLabel>Target Pasangan</IonLabel>
                </IonItem>
                <IonItem button routerLink="/profile">
                  <IonIcon slot='start' icon={personCircleOutline} />
                  <IonLabel>Profile</IonLabel>
                </IonItem>
                <IonItem>
                  <IonIcon slot='start' icon={moon} />
                  <IonLabel>Dark Mode</IonLabel>
                  <IonToggle id='themeToggle' color="success"
                    name="darkMode"
                    onIonChange={toggleDarkModeHandler} />
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>
        <MatchedContextProvider>
          <GebetanContextProvider>
            <IonRouterOutlet id='main'>
              <Route path="/home" component={Home} />
              <Route path="/target" component={Target} />
              <Route path="/profile" component={Profile} />
              <Redirect exact from="/" to="/home" />
            </IonRouterOutlet>
          </GebetanContextProvider>
        </MatchedContextProvider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

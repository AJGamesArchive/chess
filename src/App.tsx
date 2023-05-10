import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import './App.css';

// Importing all app pages so they be put into the nav system
import Home from './pages/Home';
import MainMenu from './pages/MainMenu';
import ChessGame from './pages/ChessGame/Game';
import Records from './pages/Records';
import GameSetup from './pages/ChessGame/Setup';
import GameEnding from './pages/ChessGame/Ending';
import TestingEvidence from './pages/TestingEvidence';

import ChessBoardMockup from './pages/Mockups/ChessBoard';

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

// App nav system setup function
setupIonicReact();

// App nav system JSX code
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" exact={true}>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact={true}>
          <Home />
        </Route>
        <Route path="/mainMenu/:username" exact={true}>
          <MainMenu />
        </Route>
        <Route path="/records/:username" exact={true}>
          <Records />
        </Route>
        <Route path="/setup/:username/:mode" exact={true}>
          <GameSetup />
        </Route>
        <Route path="/game/:username/:mode/:opponent/:opponentColor" exact={true}>
          <ChessGame />
        </Route>
        <Route path="/ending/:username/:mode/:opponent/:opponentColor/:winnerName/:winnerColor/:loserName/:loserColor/:numWhiteTaken/:numBlackTaken/:isDraw" exact={true}>
          <GameEnding />
        </Route>
        <Route path="/chessBoardMockup" exact={true}>
          <ChessBoardMockup />
        </Route>
        <Route path="/test" exact={true}>
          <TestingEvidence />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

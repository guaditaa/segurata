import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { StatusBar } from '@capacitor/status-bar';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar';
import { PureComponent, ReactNode } from 'react';
import './App.scss';

// Pages
import Home from './pages/Home';
import Quests from './games/Quests';

/* Theme variables */
import './theme/variables.scss';

setupIonicReact();

type IProps = {};
type IState = {};

export default class App extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  componentDidMount(): void {
    StatusBar.setBackgroundColor({ color: '#f9b409' });
    NavigationBar.setColor({ color: '#f9b409', darkButtons: true });
  }
  render(): ReactNode {
    return(<IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home" component={Home} />
          <Route exact path="/game/quests" component={Quests} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>);
  }
};

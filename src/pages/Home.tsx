import { IonContent, IonPage } from '@ionic/react';
import React, { PureComponent } from 'react';
import './Home.scss';

type IProps = {};
type IState = {};

export default class Home extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render(): React.ReactNode {
    return (<IonPage>
      <IonContent>
        <div className="tiles">
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
        </div>
      </IonContent>
    </IonPage>);
  }
}

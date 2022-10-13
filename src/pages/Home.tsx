import { IonContent, IonPage } from '@ionic/react';
import React, { PureComponent } from 'react';
import Camion from '../components/Camion';
import CustomTile from '../components/CustomTile';
import { helpCircleOutline, gameControllerOutline, libraryOutline, accessibilityOutline } from 'ionicons/icons';
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
          <Camion style={{ padding: 14 }} />
          {/*<div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>*/}
          <CustomTile icon={helpCircleOutline} title={'Preguntas y Respuestas'} />
          <CustomTile icon={gameControllerOutline} title={'El Ahorcado Seguridad'} />
          <CustomTile icon={libraryOutline} title={'Juego De Memoria'} />
          <CustomTile icon={accessibilityOutline} title={'El Juego De La Oca Vial'} />
        </div>
      </IonContent>
    </IonPage>);
  }
}

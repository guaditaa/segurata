import { IonContent, IonPage } from '@ionic/react';
import React, { PureComponent } from 'react';
import Camion from '../components/Camion';
import CustomTile from '../components/CustomTile';
import { helpCircleOutline, gameControllerOutline, libraryOutline, accessibilityOutline } from 'ionicons/icons';
import './Home.scss';
import { RouteChildrenProps } from 'react-router';

interface IProps extends RouteChildrenProps<{}, unknown> {};
type IState = {};

export default class Home extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  goToPage(location: string) {
    this.props.history.push(location);
  }
  render(): React.ReactNode {
    return (<IonPage>
      <IonContent>
        <div className="tiles">
          <Camion style={{ padding: 14 }} />
          <CustomTile delay={200} icon={helpCircleOutline} title={'Preguntas y Respuestas'} onPress={()=>this.goToPage('/game/quests')} />
          <CustomTile delay={300} icon={gameControllerOutline} title={'El Ahorcado Seguridad'} />
          <CustomTile delay={400} icon={libraryOutline} title={'Juego De Memoria'} />
          <CustomTile delay={500} icon={accessibilityOutline} title={'El Juego De La Oca Vial'} />
        </div>
      </IonContent>
    </IonPage>);
  }
}

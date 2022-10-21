import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { play } from "ionicons/icons";
import React, { createRef, PureComponent } from "react";
import { waitTo } from "../scripts/Utils";
import QuestsScript from "./QuestsScript";
import "./Quests.scss";
import "./QuestsGame.scss";

type IProps = {};
type IState = {
    start: boolean;
};

export default class Quests extends PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            start: false
        };
        this._startNow = this._startNow.bind(this);
    }
    private refStartScreen = createRef<HTMLDivElement>();
    componentDidMount(): void {
        document.addEventListener('reset_screen', ()=>this.setState({ start: false }));
    }
    async _startNow() {
        if (this.refStartScreen.current?.style) {
            this.refStartScreen.current.style.transform = "scale(2)";
            this.refStartScreen.current.style.opacity = "0";
            await waitTo(700);
            this.refStartScreen.current.style.transform = "scale(1)";
            this.refStartScreen.current.style.opacity = "1";
            this.setState({ start: true }, ()=>{
                QuestsScript.init();
                QuestsScript.escoger_pregunta();
            });
        }
    }
    render(): React.ReactNode {
        return(<IonPage id="game-quests">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Preguntas y Respuestas</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {(!this.state.start)? <div ref={this.refStartScreen} className={'start-screen'} onClick={this._startNow}>
                    <IonIcon icon={play} />
                    <IonText>Comenzar</IonText>
                </div>:
                <div className={'game-screen'}>
                    <div className={'contenedor'}>
                        <div className={'puntaje'} id={'puntaje'} />
                        <div className={'encabezado'} id={'encabezado'}>
                            <div className={'categoria'} id={'categoria'}>Categoria</div>
                            <div className={'numero'} id={'numero'}>0</div>
                            <div className={'pregunta'} id={'pregunta'}>Aqui va la pregunta</div>
                            <div className={'imagen'} id={'imagen'} />
                        </div>
                        <div className={'buttons'}>
                            <div className={'btn'} id={'btn1'}>Respuesta 1</div>
                            <div className={'btn'} id={'btn2'}>Respuesta 2</div>
                            <div className={'btn'} id={'btn3'}>Respuesta 3</div>
                            <div className={'btn'} id={'btn4'}>Respuesta 4</div>
                        </div>
                    </div>
                </div>}
            </IonContent>
            <div id={"dialog-message"}>
                <div className={"content"}>
                    <p className="title">Mensaje de prueba</p>
                    <p className="extraText">Correcto: 0<br />Incorrecto: 0</p>
                </div>
            </div>
        </IonPage>);
    }
}
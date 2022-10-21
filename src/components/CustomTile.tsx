import { IonIcon, IonRippleEffect, IonText } from "@ionic/react";
import React, { CSSProperties, PureComponent } from "react";

interface StyleSheet {
    [key: string]: React.CSSProperties;
}

type IProps = {
    icon: string;
    title: string;
    delay: number;
    onPress?: ()=>any;
};
type IState = {
    style: CSSProperties;
};

export default class CustomTile extends PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            style: {}
        };
    }
    componentDidMount(): void {
        setTimeout(()=>this.setState({
            style: {
                transform: 'scale(1)',
                opacity: '1'
            }
        }), this.props.delay);
    }
    render(): React.ReactNode {
        return(<div className="tile ion-activatable ripple-parent" style={{ ...styles.content, ...this.state.style}} onClick={this.props.onPress}>
            <IonIcon icon={this.props.icon} style={{ fontSize: 96 }} />
            <IonText style={styles.text}>{this.props.title}</IonText>
            <IonRippleEffect />
        </div>);
    }
}

const styles: StyleSheet = {
    content: {
        position: 'relative',
        overflow: 'hidden',
        width: 'calc(50% - 16px)',
        height: 200,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 8,
        borderRadius: 8,
        boxShadow: '0 1px 4px 0px rgb(255 255 255 / 50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        transform: 'scale(0.6)',
        opacity: '0',
        transition: 'transform 0.35s, opacity 0.5s'
    },
    text: {
        marginTop: 12,
        marginLeft: 8,
        marginRight: 8,
        textAlign: 'center',
        fontSize: 16
    }
};
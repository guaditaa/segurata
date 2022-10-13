import React, { PureComponent } from "react";

type IProps = {
    style?: React.CSSProperties;
};
type IState = {
    isLoad: boolean;
};

export default class Camion extends PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isLoad: false
        };
    }
    componentDidMount(): void {
        setTimeout(()=>this.setState({ isLoad: true }), 1200);
    }
    render(): React.ReactNode {
        return(<svg
            className="animated"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 420"
            id={(this.state.isLoad)? "freepik_stories-vintage-truck": "freepik_stories-vintage-truck-hide"}
            {...this.props}
          >
            <g
              className="animable"
              style={{
                transformOrigin: "249.389px 179.19px",
              }}
            >
              <path
                d="M394.63 167.08c.35-2.53-3.22-4.61-5.9-4.82a15.62 15.62 0 0 1-3.82-.33c-2.62-.92-3.67-4.31-6.23-5.39-1.91-.8-4.12-.09-6 .85s-3.69 2.11-5.77 2.24c-1.8.12-3.76-.55-5.34.33-1.17.65-1.79 2-2.87 2.81a6.86 6.86 0 0 1-3.76 1 10.49 10.49 0 0 0-3.87.63 3.06 3.06 0 0 0-1.94 3.11Z"
                style={{
                  fill: "#f5f5f5",
                  transformOrigin: "371.887px 161.852px",
                }}
                className="animable"
              />
              <path
                d="M91 36.64c.39-2.88-3.67-5.25-6.72-5.49-1.45-.12-3 .1-4.34-.38-3-1-4.18-4.9-7.1-6.13-2.18-.92-4.69-.1-6.8 1s-4.24 2.36-6.6 2.52c-2 .13-4.28-.63-6.07.37-1.34.75-2 2.29-3.28 3.2a7.78 7.78 0 0 1-4.28 1.16 11.94 11.94 0 0 0-4.41.72 3.47 3.47 0 0 0-2.2 3.54Z"
                style={{
                  fill: "#f5f5f5",
                  transformOrigin: "65.1063px 30.6962px",
                }}
                className="animable"
              />
              <path
                d="M276.78 56.9c.57-4.09-5.21-7.45-9.55-7.8-2.07-.17-4.21.15-6.17-.54-4.25-1.48-5.95-7-10.09-8.71-3.1-1.31-6.67-.14-9.67 1.37s-6 3.41-9.33 3.63c-2.92.18-6.09-.9-8.64.53-1.9 1.06-2.9 3.25-4.65 4.54s-4 1.54-6.09 1.65-4.33.14-6.27 1-3.54 2.94-3.14 5Z"
                style={{
                  fill: "#f5f5f5",
                  transformOrigin: "239.969px 48.4264px",
                }}
                className="animable"
              />
              <path
                d="M430.4 38.6c.53-3.83-4.88-7-8.94-7.3-1.94-.16-3.95.14-5.78-.5-4-1.39-5.57-6.53-9.45-8.16-2.89-1.22-6.23-.14-9 1.28s-5.59 3.19-8.73 3.4c-2.74.17-5.7-.84-8.09.49-1.78 1-2.72 3.05-4.36 4.26a10.36 10.36 0 0 1-5.69 1.54 16 16 0 0 0-5.87 1c-1.82.83-3.32 2.75-2.94 4.71Z"
                style={{
                  fill: "#f5f5f5",
                  transformOrigin: "395.963px 30.715px",
                }}
                className="animable"
              />
              <path
                d="M66.49 124.75c.35-2.52-3.22-4.6-5.9-4.82a15.15 15.15 0 0 1-3.82-.33c-2.62-.91-3.67-4.3-6.23-5.38-1.91-.81-4.12-.09-6 .84s-3.69 2.11-5.77 2.24c-1.8.12-3.76-.55-5.34.33-1.17.66-1.79 2-2.87 2.81a6.88 6.88 0 0 1-3.76 1 10.54 10.54 0 0 0-3.88.63A3.09 3.09 0 0 0 21 125.2Z"
                style={{
                  fill: "#f5f5f5",
                  transformOrigin: "43.7512px 119.534px",
                }}
                className="animable"
              />
              <path
                d="M430.29 104.58c-.71.35-19.71 10.2-19.71 10.2l3.87 4.75 16.89-13Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "420.96px 112.055px",
                }}
                className="animable"
              />
              <path
                d="M433.07 110c-.56.55-15.68 15.71-15.68 15.71l5.13 3.35 12.15-17.53Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "426.03px 119.53px",
                }}
                className="animable"
              />
              <path
                d="M427.66 99.11c-.79.09-21.57 1.1-21.57 1.1l1.49 7.37L428 101.3Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "417.045px 103.345px",
                }}
                className="animable"
              />
              <path
                d="M428.21 93.32c-.77-.14-21-5-21-5l-.65 7.49 21.33-.27Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "417.385px 92.065px",
                }}
                className="animable"
              />
              <path
                d="M431.78 88.94c-.62-.49-16.16-14.33-16.16-14.33l-4.1 6.3 19 9.81Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "421.65px 82.665px",
                }}
                className="animable"
              />
              <path
                d="M436.17 86.76c-.29-.73-6.91-20.46-6.91-20.46l-6.68 3.44 11.58 17.91Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "429.375px 76.975px",
                }}
                className="animable"
              />
              <path
                d="M442.66 86.12c.07-.78 3.33-21.33 3.33-21.33l-7.51-.05 2 21.24Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "442.235px 75.43px",
                }}
                className="animable"
              />
              <path
                d="M448.63 99.82a5.75 5.75 0 1 1-5.75-5.75 5.74 5.74 0 0 1 5.75 5.75Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "442.88px 99.82px",
                }}
                className="animable"
              />
              <path
                d="M421.65 294.77c-.31 0 3.53-41.19 8.57-91.91s9.36-91.84 9.67-91.81-3.53 41.18-8.57 91.92-9.32 91.83-9.67 91.8Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "430.77px 202.91px",
                }}
                className="animable"
              />
              <path
                d="M466 293.48c-.31 0-4.63-40.25-9.65-90s-8.85-90.06-8.54-90.09 4.62 40.25 9.65 90 8.88 90.06 8.54 90.09Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "456.907px 203.435px",
                }}
                className="animable"
              />
              <path
                d="M454.25 178.57c0 .31-4.44.56-9.92.56s-9.92-.25-9.92-.56 4.44-.55 9.92-.55 9.92.25 9.92.55Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "444.33px 178.575px",
                }}
                className="animable"
              />
              <path
                d="M458.51 223.69c0 .31-6.49.55-14.49.55s-14.48-.24-14.48-.55 6.48-.56 14.48-.56 14.49.25 14.49.56Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "444.025px 223.685px",
                }}
                className="animable"
              />
              <path
                d="M463.77 269.68c0 .31-8.79.56-19.64.56s-19.64-.25-19.64-.56 8.8-.56 19.64-.56 19.64.25 19.64.56Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "444.13px 269.68px",
                }}
                className="animable"
              />
              <path
                d="M443.41 103.35c.31 0 .92 42.56 1.37 95.05s.56 95.07.25 95.08-.92-42.55-1.36-95.07-.56-95.06-.26-95.06Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "444.225px 198.415px",
                }}
                className="animable"
              />
              <path
                d="M469.27 100.79a2.19 2.19 0 0 1 0-.44c0-.32-.06-.74-.1-1.28 0-.29 0-.6-.06-.95s-.11-.72-.17-1.12a21.64 21.64 0 0 0-.57-2.79 26.27 26.27 0 0 0-3-7.15 27 27 0 0 0-35.69-9.88 26.08 26.08 0 0 0-3.28 2.11 29.44 29.44 0 0 0-3 2.58 30.2 30.2 0 0 0-2.62 3.1 25.93 25.93 0 0 0-3.82 7.37 26.53 26.53 0 0 0 0 16.89 25.93 25.93 0 0 0 3.82 7.37 31.44 31.44 0 0 0 2.62 3.11 30.73 30.73 0 0 0 3 2.58 24.74 24.74 0 0 0 6.77 3.65 26.87 26.87 0 0 0 32.2-11.43 26.27 26.27 0 0 0 3-7.15 21.87 21.87 0 0 0 .57-2.78c.06-.41.13-.78.17-1.13s0-.66.06-.94c0-.55.07-1 .1-1.29a2.14 2.14 0 0 1 0-.43 2.44 2.44 0 0 1 0 .44v2.23c0 .34-.1.73-.15 1.14a19.82 19.82 0 0 1-.52 2.81 25.93 25.93 0 0 1-2.95 7.26 27.23 27.23 0 0 1-18.31 12.9 27.33 27.33 0 0 1-14.33-1.15 28 28 0 0 1-3.57-1.56 29.14 29.14 0 0 1-3.35-2.14 32 32 0 0 1-3.1-2.63 32.62 32.62 0 0 1-2.68-3.16 26.43 26.43 0 0 1-3.91-7.53 27 27 0 0 1 0-17.23 26.5 26.5 0 0 1 3.91-7.52 25.08 25.08 0 0 1 5.69-5.79 24.48 24.48 0 0 1 6.92-3.7 27.15 27.15 0 0 1 32.66 11.74 26.05 26.05 0 0 1 2.95 7.26 19.82 19.82 0 0 1 .52 2.81c.05.41.12.79.15 1.14s0 .66 0 1v1.29a2.44 2.44 0 0 1 .07.39Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "442.134px 100.786px",
                }}
                className="animable"
              />
              <path
                d="M452.36 92c.87.12 20.3-5.68 20.3-5.68l-5.44-9.53-15.49 13.45Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "462.195px 84.3959px",
                }}
                className="animable"
              />
              <path
                d="M447.85 87.48c.56-.55 16.74-15.15 16.74-15.15l-7.65-5.86-10.7 20.27Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "455.415px 76.975px",
                }}
                className="animable"
              />
              <path
                d="M454.69 99.37c.78-.08 21.56-1.1 21.56-1.1l-1.49-7.36-20.38 6.28Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "465.315px 95.14px",
                }}
                className="animable"
              />
              <path
                d="M453.72 106.74c.77.18 20.75 6 20.75 6l1-7.45-21.32-.69Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "464.595px 108.67px",
                }}
                className="animable"
              />
              <path
                d="M450.8 111.64c.62.49 16.2 14.36 16.2 14.36l4.1-6.3-18.94-9.81Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "460.95px 117.945px",
                }}
                className="animable"
              />
              <path
                d="M446.24 112.57c.29.73 6.91 20.46 6.91 20.46l6.69-3.44-11.58-17.91Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "453.04px 122.355px",
                }}
                className="animable"
              />
              <path
                d="M438.35 112.05c-.16.77-5.72 20.83-5.72 20.83l7.47.89.42-21.33Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "436.575px 122.91px",
                }}
                className="animable"
              />
              <rect
                x={98.42}
                y={85.28}
                width={8.95}
                height={166.91}
                rx={4.15}
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "102.895px 168.735px",
                }}
                className="animable"
              />
              <path
                d="M132.36 39.28A26.76 26.76 0 0 1 159.12 66v183.67a5.39 5.39 0 0 1-5.39 5.39H111a5.39 5.39 0 0 1-5.39-5.39V66a26.76 26.76 0 0 1 26.75-26.72Z"
                style={{
                  fill: "#ebebeb",
                  transformOrigin: "132.365px 147.17px",
                }}
                className="animable"
              />
              <path
                style={{
                  fill: "#ebebeb",
                  transformOrigin: "109.38px 254.14px",
                }}
                className="animable"
                d="M57.75 252.19h103.26v3.9H57.75z"
              />
              <path
                style={{
                  fill: "#ebebeb",
                  transformOrigin: "110.63px 276.815px",
                }}
                className="animable"
                d="M62.14 255.06h96.98v43.51H62.14z"
              />
              <rect
                x={103.75}
                y={63.64}
                width={57.94}
                height={3.48}
                rx={1.39}
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.72px 65.38px",
                }}
                className="animable"
              />
              <path
                d="M160.29 67.12a3 3 0 0 1 .31-.06 1.38 1.38 0 0 0 .73-.48 1.42 1.42 0 0 0 .27-.58 6.76 6.76 0 0 0 0-.8 1.35 1.35 0 0 0-1-1.44h-12.88l-42.58.07a1.18 1.18 0 0 0-1 .65 1.42 1.42 0 0 0-.12.66v.73a1.18 1.18 0 0 0 .79.94 2.13 2.13 0 0 0 .69 0h37.15l12.9.07h4.42a1.2 1.2 0 0 1 .31 0H155.55l-12.9.07h-37.19a2.46 2.46 0 0 1-.83-.08 1.62 1.62 0 0 1-1.1-1.29v-.8a1.75 1.75 0 0 1 .17-.85 1.6 1.6 0 0 1 1.45-.91l42.58.07c5.46 0 9.84 0 12.92.11a1.5 1.5 0 0 1 1.11 1.61 5.43 5.43 0 0 1 0 .82 1.57 1.57 0 0 1-.31.62 1.38 1.38 0 0 1-.79.46 1 1 0 0 1-.37.41Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.652px 65.07px",
                }}
                className="animable"
              />
              <path
                d="M159.52 75.79c0 .12-12 .22-26.89.22s-26.89-.1-26.89-.22 12-.23 26.89-.23 26.89.1 26.89.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 75.785px",
                }}
                className="animable"
              />
              <path
                d="M159.52 86.29c0 .13-12 .23-26.89.23s-26.89-.1-26.89-.23 12-.22 26.89-.22 26.89.1 26.89.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 86.295px",
                }}
                className="animable"
              />
              <path
                d="M159.52 96.8c0 .12-12 .22-26.89.22s-26.89-.1-26.89-.22 12-.22 26.89-.22 26.89.1 26.89.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 96.8px",
                }}
                className="animable"
              />
              <path
                d="M159.52 107.31c0 .12-12 .22-26.89.22s-26.89-.1-26.89-.22 12-.23 26.89-.23 26.89.1 26.89.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 107.305px",
                }}
                className="animable"
              />
              <path
                d="M159.52 117.81c0 .13-12 .23-26.89.23s-26.89-.1-26.89-.23 12-.22 26.89-.22 26.89.1 26.89.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 117.815px",
                }}
                className="animable"
              />
              <path
                d="M159.52 128.32c0 .13-12 .23-26.89.23s-26.89-.1-26.89-.23 12-.22 26.89-.22 26.89.1 26.89.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 128.325px",
                }}
                className="animable"
              />
              <path
                d="M159.52 138.83c0 .12-12 .22-26.89.22s-26.89-.1-26.89-.22 12-.23 26.89-.23 26.89.1 26.89.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 138.825px",
                }}
                className="animable"
              />
              <path
                d="M159.52 149.34c0 .12-12 .22-26.89.22s-26.89-.1-26.89-.22 12-.23 26.89-.23 26.89.1 26.89.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 149.335px",
                }}
                className="animable"
              />
              <path
                d="M159.52 159.84c0 .13-12 .23-26.89.23s-26.89-.1-26.89-.23 12-.22 26.89-.22 26.89.1 26.89.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 159.845px",
                }}
                className="animable"
              />
              <path
                d="M159.52 170.35c0 .12-12 .22-26.89.22s-26.89-.1-26.89-.22 12-.22 26.89-.22 26.89.1 26.89.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 170.35px",
                }}
                className="animable"
              />
              <path
                d="M159.52 180.86c0 .12-12 .22-26.89.22s-26.89-.1-26.89-.22 12-.23 26.89-.23 26.89.1 26.89.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 180.855px",
                }}
                className="animable"
              />
              <path
                d="M159.52 191.36c0 .13-12 .23-26.89.23s-26.89-.1-26.89-.23 12-.22 26.89-.22 26.89.1 26.89.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 191.365px",
                }}
                className="animable"
              />
              <path
                d="M159.52 201.87c0 .12-12 .22-26.89.22s-26.89-.1-26.89-.22 12-.22 26.89-.22 26.89.1 26.89.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 201.87px",
                }}
                className="animable"
              />
              <path
                d="M159.52 212.38c0 .12-12 .22-26.89.22s-26.89-.1-26.89-.22 12-.23 26.89-.23 26.89.1 26.89.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 212.375px",
                }}
                className="animable"
              />
              <path
                d="M159.52 223.2c0 .12-12 .22-26.89.22s-26.89-.1-26.89-.22 12-.23 26.89-.23 26.89.1 26.89.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 223.195px",
                }}
                className="animable"
              />
              <path
                d="M159.52 234c0 .13-12 .23-26.89.23s-26.89-.1-26.89-.23 12-.22 26.89-.22 26.89.11 26.89.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 234.005px",
                }}
                className="animable"
              />
              <path
                d="M159.52 244.83c0 .13-12 .23-26.89.23s-26.89-.1-26.89-.23 12-.22 26.89-.22 26.89.1 26.89.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "132.63px 244.835px",
                }}
                className="animable"
              />
              <path
                d="M57.75 256.09v-3.99c11.69-.1 53.52-.1 103.25-.1h.23v4.34H161l-73.25-.09-22-.07H57.7 65.82l22.11-.18 73.08-.09-.22.23v-3.9l.22.22c-49.74 0-91.57-.07-103.26-.16l.06-.06v2.94c0 .66-.06.91-.06.91Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "109.465px 254.17px",
                }}
                className="animable"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "380.385px 220.965px",
                }}
                className="animable"
                d="M333.43 200.61h84.89l9.02 40.71h-93.91v-40.71z"
              />
              <path
                style={{
                  fill: "#ebebeb",
                  transformOrigin: "376.685px 269.79px",
                }}
                className="animable"
                d="M333.43 241.01h86.51v57.56h-86.51z"
              />
              <path
                style={{
                  fill: "#f5f5f5",
                  transformOrigin: "244.555px 197.795px",
                }}
                className="animable"
                d="M333.43 298.57V183.58l-31.01-54.15-61.17-32.41-55.65 33.26-29.92 55.86v112.43h177.75z"
              />
              <path
                d="M333.82 221c0 .13-39.88.23-89.06.23s-89.07-.1-89.07-.23 39.87-.22 89.07-.22 89.06.06 89.06.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "244.755px 221.005px",
                }}
                className="animable"
              />
              <path
                d="M333.82 229.74c0 .12-39.88.22-89.06.22s-89.07-.1-89.07-.22 39.87-.22 89.07-.22 89.06.1 89.06.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "244.755px 229.74px",
                }}
                className="animable"
              />
              <path
                d="M333.82 238.52c0 .12-39.88.22-89.07.22s-89.07-.1-89.07-.22 39.87-.23 89.07-.23 89.07.1 89.07.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "244.75px 238.515px",
                }}
                className="animable"
              />
              <path
                d="M333.82 247.29c0 .12-39.88.23-89.07.23s-89.07-.11-89.07-.23 39.87-.22 89.07-.22 89.07.1 89.07.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "244.75px 247.295px",
                }}
                className="animable"
              />
              <path
                d="M333.82 256.07c0 .12-39.88.22-89.06.22s-89.07-.1-89.07-.22 39.87-.23 89.07-.23 89.06.1 89.06.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "244.755px 256.065px",
                }}
                className="animable"
              />
              <path
                d="M333.82 264.84c0 .13-39.88.23-89.06.23s-89.07-.1-89.07-.23 39.87-.22 89.07-.22 89.06.1 89.06.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "244.755px 264.845px",
                }}
                className="animable"
              />
              <path
                d="M333.82 273.62c0 .12-39.88.22-89.06.22s-89.07-.1-89.07-.22 39.87-.23 89.07-.23 89.06.1 89.06.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "244.755px 273.615px",
                }}
                className="animable"
              />
              <path
                style={{
                  fill: "#fff",
                  transformOrigin: "244.555px 210.63px",
                }}
                className="animable"
                d="M155.68 208.12h177.75v5.02H155.68z"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "244.905px 273.27px",
                }}
                className="animable"
                d="M234.45 247.59h20.91v51.36h-20.91z"
              />
              <path
                style={{
                  fill: "#fff",
                  transformOrigin: "184.725px 284.18px",
                }}
                className="animable"
                d="M155.68 281.9h58.09v4.56h-58.09z"
              />
              <path
                d="M159 298.19a37.06 37.06 0 0 1-.23-5.86 37.06 37.06 0 0 1 .23-5.86 78.15 78.15 0 0 1 0 11.72Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "158.98px 292.33px",
                }}
                className="animable"
              />
              <path
                d="M162.1 298.19a78.15 78.15 0 0 1 0-11.72 37.06 37.06 0 0 1 .23 5.86 37.06 37.06 0 0 1-.23 5.86Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "162.12px 292.33px",
                }}
                className="animable"
              />
              <path
                d="M165.22 298.19a78.15 78.15 0 0 1 0-11.72 78.15 78.15 0 0 1 0 11.72Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "165.22px 292.33px",
                }}
                className="animable"
              />
              <path
                d="M168.34 298.19a37.06 37.06 0 0 1-.23-5.86 37.06 37.06 0 0 1 .23-5.86 78.15 78.15 0 0 1 0 11.72Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "168.32px 292.33px",
                }}
                className="animable"
              />
              <path
                d="M171.45 298.19a78.15 78.15 0 0 1 0-11.72 37.06 37.06 0 0 1 .23 5.86 37.06 37.06 0 0 1-.23 5.86Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "171.47px 292.33px",
                }}
                className="animable"
              />
              <path
                d="M174.57 298.19a37.06 37.06 0 0 1-.23-5.86 37.06 37.06 0 0 1 .23-5.86 78.15 78.15 0 0 1 0 11.72Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "174.55px 292.33px",
                }}
                className="animable"
              />
              <path
                d="M177.68 298.19a78.15 78.15 0 0 1 0-11.72 37.06 37.06 0 0 1 .23 5.86 37.06 37.06 0 0 1-.23 5.86Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "177.7px 292.33px",
                }}
                className="animable"
              />
              <path
                d="M180.8 298.19a78.15 78.15 0 0 1 0-11.72 78.15 78.15 0 0 1 0 11.72Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "180.8px 292.33px",
                }}
                className="animable"
              />
              <path
                d="M183.92 298.19a37.06 37.06 0 0 1-.23-5.86 37.06 37.06 0 0 1 .23-5.86 78.15 78.15 0 0 1 0 11.72Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "183.9px 292.33px",
                }}
                className="animable"
              />
              <path
                d="M187 298.19a78.15 78.15 0 0 1 0-11.72 37.06 37.06 0 0 1 .23 5.86 37.06 37.06 0 0 1-.23 5.86Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "187.02px 292.33px",
                }}
                className="animable"
              />
              <path
                d="M190.15 298.19a37.06 37.06 0 0 1-.23-5.86 37.06 37.06 0 0 1 .23-5.86 78.15 78.15 0 0 1 0 11.72Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "190.13px 292.33px",
                }}
                className="animable"
              />
              <path
                d="M193.26 298.19a78.15 78.15 0 0 1 0-11.72 37.06 37.06 0 0 1 .23 5.86 37.06 37.06 0 0 1-.23 5.86Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "193.28px 292.33px",
                }}
                className="animable"
              />
              <path
                d="M196.38 298.19a78.15 78.15 0 0 1 0-11.72 78.15 78.15 0 0 1 0 11.72Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "196.38px 292.33px",
                }}
                className="animable"
              />
              <path
                d="M199.5 298.19a37.06 37.06 0 0 1-.23-5.86 37.06 37.06 0 0 1 .23-5.86 78.15 78.15 0 0 1 0 11.72Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "199.48px 292.33px",
                }}
                className="animable"
              />
              <path
                d="M202.61 298.19a78.15 78.15 0 0 1 0-11.72 37.06 37.06 0 0 1 .23 5.86 37.06 37.06 0 0 1-.23 5.86Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "202.63px 292.33px",
                }}
                className="animable"
              />
              <path
                d="M206.12 298.19a78.15 78.15 0 0 1 0-11.72 37.06 37.06 0 0 1 .23 5.86 37.06 37.06 0 0 1-.23 5.86Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "206.14px 292.33px",
                }}
                className="animable"
              />
              <path
                d="M209.63 298.19a78.15 78.15 0 0 1 0-11.72 37.06 37.06 0 0 1 .23 5.86 37.06 37.06 0 0 1-.23 5.86Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "209.65px 292.33px",
                }}
                className="animable"
              />
              <path
                style={{
                  fill: "#fff",
                  transformOrigin: "305.71px 284.18px",
                }}
                className="animable"
                d="M277.59 281.9h56.24v4.56h-56.24z"
              />
              <path
                d="M290.73 299.05a44.37 44.37 0 0 1-.22-6.22 44.58 44.58 0 0 1 .22-6.23 41.91 41.91 0 0 1 .23 6.23 41.71 41.71 0 0 1-.23 6.22Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "290.736px 292.825px",
                }}
                className="animable"
              />
              <path
                d="M287.34 299a44.37 44.37 0 0 1-.22-6.22 44.58 44.58 0 0 1 .22-6.23 41.91 41.91 0 0 1 .23 6.23 41.71 41.71 0 0 1-.23 6.22Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "287.346px 292.775px",
                }}
                className="animable"
              />
              <path
                d="M284 298.92a44.58 44.58 0 0 1-.22-6.23 44.37 44.37 0 0 1 .22-6.22 41.71 41.71 0 0 1 .23 6.22 41.91 41.91 0 0 1-.23 6.23Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "284.006px 292.695px",
                }}
                className="animable"
              />
              <path
                d="M280.32 298.92a44.58 44.58 0 0 1-.22-6.23 44.37 44.37 0 0 1 .22-6.22 44.37 44.37 0 0 1 .22 6.22 44.58 44.58 0 0 1-.22 6.23Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "280.32px 292.695px",
                }}
                className="animable"
              />
              <path
                d="M293.85 299.05a41.71 41.71 0 0 1-.23-6.22 41.91 41.91 0 0 1 .23-6.23 44.58 44.58 0 0 1 .22 6.23 44.37 44.37 0 0 1-.22 6.22Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "293.844px 292.825px",
                }}
                className="animable"
              />
              <path
                d="M297 299.05a44.37 44.37 0 0 1-.22-6.22 44.58 44.58 0 0 1 .22-6.23 41.91 41.91 0 0 1 .23 6.23 41.71 41.71 0 0 1-.23 6.22Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "297.006px 292.825px",
                }}
                className="animable"
              />
              <path
                d="M300.08 299.05a44.37 44.37 0 0 1-.22-6.22 44.58 44.58 0 0 1 .22-6.23 44.58 44.58 0 0 1 .22 6.23 44.37 44.37 0 0 1-.22 6.22Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "300.08px 292.825px",
                }}
                className="animable"
              />
              <path
                d="M303.2 299.05a41.71 41.71 0 0 1-.23-6.22 41.91 41.91 0 0 1 .23-6.23 44.58 44.58 0 0 1 .22 6.23 44.37 44.37 0 0 1-.22 6.22Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "303.194px 292.825px",
                }}
                className="animable"
              />
              <path
                d="M306.31 299.05a44.37 44.37 0 0 1-.22-6.22 44.58 44.58 0 0 1 .22-6.23 41.91 41.91 0 0 1 .23 6.23 41.71 41.71 0 0 1-.23 6.22Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "306.316px 292.825px",
                }}
                className="animable"
              />
              <path
                d="M309.43 299.05a41.71 41.71 0 0 1-.23-6.22 41.91 41.91 0 0 1 .23-6.23 44.58 44.58 0 0 1 .22 6.23 44.37 44.37 0 0 1-.22 6.22Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "309.424px 292.825px",
                }}
                className="animable"
              />
              <path
                d="M312.54 299.05a44.37 44.37 0 0 1-.22-6.22 44.58 44.58 0 0 1 .22-6.23 41.91 41.91 0 0 1 .23 6.23 41.71 41.71 0 0 1-.23 6.22Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "312.546px 292.825px",
                }}
                className="animable"
              />
              <path
                d="M315.66 299.05a44.37 44.37 0 0 1-.22-6.22 44.58 44.58 0 0 1 .22-6.23 44.58 44.58 0 0 1 .22 6.23 44.37 44.37 0 0 1-.22 6.22Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "315.66px 292.825px",
                }}
                className="animable"
              />
              <path
                d="M318.78 299.05a41.71 41.71 0 0 1-.23-6.22 41.91 41.91 0 0 1 .23-6.23 44.58 44.58 0 0 1 .22 6.23 44.37 44.37 0 0 1-.22 6.22Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "318.774px 292.825px",
                }}
                className="animable"
              />
              <path
                d="M321.89 299.05a44.37 44.37 0 0 1-.22-6.22 44.58 44.58 0 0 1 .22-6.23 41.91 41.91 0 0 1 .23 6.23 41.71 41.71 0 0 1-.23 6.22Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "321.896px 292.825px",
                }}
                className="animable"
              />
              <path
                d="M325 299.05a41.71 41.71 0 0 1-.23-6.22 41.91 41.91 0 0 1 .23-6.23 44.58 44.58 0 0 1 .22 6.23 44.37 44.37 0 0 1-.22 6.22Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "324.994px 292.825px",
                }}
                className="animable"
              />
              <path
                d="M328.12 299.05a44.37 44.37 0 0 1-.22-6.22 44.58 44.58 0 0 1 .22-6.23 41.91 41.91 0 0 1 .23 6.23 41.71 41.71 0 0 1-.23 6.22Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "328.126px 292.825px",
                }}
                className="animable"
              />
              <path
                d="M331.24 299.05a44.37 44.37 0 0 1-.22-6.22 44.58 44.58 0 0 1 .22-6.23 44.58 44.58 0 0 1 .22 6.23 44.37 44.37 0 0 1-.22 6.22Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "331.24px 292.825px",
                }}
                className="animable"
              />
              <path
                style={{
                  fill: "#fff",
                  transformOrigin: "177.685px 260.84px",
                }}
                className="animable"
                d="M168.95 254.64h17.47v12.4h-17.47z"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "177.68px 260.84px",
                }}
                className="animable"
                d="M171.45 257.12h12.46v7.44h-12.46z"
              />
              <path
                style={{
                  fill: "#fff",
                  transformOrigin: "315.685px 260.84px",
                }}
                className="animable"
                d="M306.95 254.64h17.47v12.4h-17.47z"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "315.68px 260.84px",
                }}
                className="animable"
                d="M309.45 257.12h12.46v7.44h-12.46z"
              />
              <path
                style={{
                  fill: "#fff",
                  transformOrigin: "229.61px 272.7px",
                }}
                className="animable"
                d="M213.77 246.39h31.68v52.62h-31.68z"
              />
              <path
                d="M217 250c0 .27.35 42.75.35 42.75L228 271.38Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "222.5px 271.375px",
                }}
                className="animable"
              />
              <path
                d="M242.71 250c0 .27-.36 42.75-.36 42.75l-10.57-21.37Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "237.245px 271.375px",
                }}
                className="animable"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "230.21px 257.07px",
                }}
                className="animable"
                d="m219.37 246.39 10.66 21.36 11.02-21.36h-21.68z"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "229.91px 286.125px",
                }}
                className="animable"
                d="m240.45 296.42-10.66-20.59-10.42 20.59h21.08z"
              />
              <path
                d="M213.77 299.61c-.13 0-.23-11.83-.23-26.42s.1-26.43.23-26.43.22 11.83.22 26.43-.1 26.42-.22 26.42Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "213.765px 273.185px",
                }}
                className="animable"
              />
              <path
                d="M333.82 200.54c0 .13-39.88.23-89.06.23s-89.07-.1-89.07-.23 39.87-.22 89.07-.22 89.06.1 89.06.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "244.755px 200.545px",
                }}
                className="animable"
              />
              <path
                d="M333.82 190.81c0 .12-39.88.22-89.06.22s-89.07-.1-89.07-.22 39.87-.23 89.07-.23 89.06.11 89.06.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "244.755px 190.805px",
                }}
                className="animable"
              />
              <path
                d="M333.82 181.07c0 .13-39.88.23-89.06.23s-89.07-.1-89.07-.23 39.87-.22 89.07-.22 89.06.15 89.06.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "244.755px 181.075px",
                }}
                className="animable"
              />
              <path
                d="M329.77 171.34c0 .12-38.22.22-85.37.22s-85.38-.1-85.38-.22 38.22-.22 85.38-.22 85.37.1 85.37.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "244.395px 171.34px",
                }}
                className="animable"
              />
              <path
                d="M321.91 161.6c0 .13-34.36.23-76.74.23s-76.75-.1-76.75-.23 34.35-.22 76.75-.22 76.74.1 76.74.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "245.165px 161.605px",
                }}
                className="animable"
              />
              <path
                d="M318.76 151.87c0 .12-33.66.22-75.17.22s-75.17-.1-75.17-.22 33.65-.22 75.17-.22 75.17.1 75.17.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "243.59px 151.87px",
                }}
                className="animable"
              />
              <path
                d="M310.11 142.14c0 .12-30.27.22-67.61.22s-67.61-.1-67.61-.22 30.26-.23 67.61-.23 67.61.09 67.61.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "242.5px 142.135px",
                }}
                className="animable"
              />
              <path
                d="M307.71 132.4c0 .12-28.86.23-64.45.23s-64.47-.11-64.47-.23 28.86-.22 64.47-.22 64.45.1 64.45.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "243.25px 132.405px",
                }}
                className="animable"
              />
              <path
                d="M292.25 122.67c0 .12-21.8.22-48.69.22s-48.7-.1-48.7-.22 21.8-.23 48.7-.23 48.69.1 48.69.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "243.555px 122.665px",
                }}
                className="animable"
              />
              <path
                d="M273.22 112.93a3.44 3.44 0 0 1-.66 0h-1.9l-7 .07-23 .07-23-.07-7-.07h-1.9a3.44 3.44 0 0 1-.66 0 4.28 4.28 0 0 1 .66 0h1.9l7-.07 23-.06 23 .06 7 .07h1.9a4.28 4.28 0 0 1 .66 0Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "240.66px 112.935px",
                }}
                className="animable"
              />
              <path
                d="M258 103.2c0 .12-7 .22-15.55.22s-15.54-.1-15.54-.22 7-.23 15.54-.23 15.55.1 15.55.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "242.455px 103.195px",
                }}
                className="animable"
              />
              <path
                style={{
                  fill: "#f5f5f5",
                  transformOrigin: "244.55px 140.525px",
                }}
                className="animable"
                d="m339.39 185.11-34.89-58.05-63.96-34.35-60.63 36.32-30.2 57.25 5.17 2.06v-1.15l29.93-55.65 55.65-33.13 61.16 32.28 31.01 53.95v1.15l6.76-.68z"
              />
              <path
                d="m339.39 185.11-6.75.73h-.05v-1.21l-31.09-53.9.05.06-61.19-32.21h.19l-55.63 33.15.08-.08-29.92 55.65v-.11 1.48l-.31-.12-5.17-2.06-.23-.1.12-.22c.12-.23.26-.49.39-.75l29.81-56.49v-.06h.06l60.64-36.3.1-.06.09.06 63.94 34.39 34.76 58.13-35-58h.05l-64-34.31h.19L180 129.22l.08-.09-29.79 56.5c-.14.26-.27.52-.4.75l-.11-.31 5.17 2.07-.31.2v-1.2l29.94-55.65v-.05l55.66-33.12h.19l61.14 32.32 30.93 54v1.15h-.05Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "244.38px 140.59px",
                }}
                className="animable"
              />
              <path
                style={{
                  fill: "#ebebeb",
                  transformOrigin: "243.045px 183.29px",
                }}
                className="animable"
                d="M228.7 180.83h28.69v4.92H228.7z"
              />
              <path
                style={{
                  fill: "#ebebeb",
                  transformOrigin: "243.06px 160.8px",
                }}
                className="animable"
                d="M231.21 138.32h23.7v44.96h-23.7z"
              />
              <path
                style={{
                  fill: "#fff",
                  transformOrigin: "243.055px 160.705px",
                }}
                className="animable"
                d="M233.52 140.53h19.07v40.35h-19.07z"
              />
              <path
                d="M252.59 180.71a1.7 1.7 0 0 1-.32 0h-4.79l-14.07.09h-.16v-.17c0-10.42 0-24.48-.06-39.91l.23-.23h19.37v.22c-.05 11.65-.08 21.64-.11 28.75v11.16a1.57 1.57 0 0 1 0-.2v-2.81c0-2 0-4.76-.06-8.29 0-7.08-.06-17-.1-28.61l.21.21h-19.29c-.06 0 .42-.42.22-.22 0 15.43 0 29.49-.06 39.91l-.17-.16 14 .09h4.83Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "242.99px 160.645px",
                }}
                className="animable"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "243.06px 160.54px",
                }}
                className="animable"
                d="M231.21 159.45h23.7v2.18h-23.7z"
              />
              <path
                d="M254.91 161.64a3.8 3.8 0 0 1 0-.59c0-.41 0-.94-.05-1.6l.09.09c-4 .08-13.09.14-23.7.14-.05 0 .42-.43.22-.22v2.17l-.22-.23c6.6 0 12.48.05 16.75.1l5.06.07h1.89a2.42 2.42 0 0 1-.45 0h-1.33l-5 .07c-4.25 0-10.22.09-16.91.09H231v-2.39l.23-.23c10.61 0 19.72.06 23.7.14h.07v.08c0 .68 0 1.23-.05 1.65a3.91 3.91 0 0 1-.04.66Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "243px 160.42px",
                }}
                className="animable"
              />
              <path
                d="M256.59 180.83c0 .12-6.28.22-14 .22s-14-.1-14-.22 6.28-.23 14-.23 14 .1 14 .23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "242.59px 180.825px",
                }}
                className="animable"
              />
              <path
                style={{
                  fill: "#fff",
                  transformOrigin: "261.74px 272.73px",
                  transform: "rotate(180deg)",
                }}
                className="animable"
                d="M245.9 246.42h31.68v52.62H245.9z"
              />
              <path
                d="M274.32 250c0 .27-.36 42.75-.36 42.75l-10.58-21.38Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "268.85px 271.375px",
                }}
                className="animable"
              />
              <path
                d="M248.64 250c0 .27.36 42.75.36 42.75l10.57-21.38Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "254.105px 271.375px",
                }}
                className="animable"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "261.145px 257.1px",
                }}
                className="animable"
                d="m271.99 246.42-10.67 21.36-11.02-21.36h21.69z"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "261.445px 286.16px",
                }}
                className="animable"
                d="m250.9 296.46 10.66-20.6 10.43 20.6H250.9z"
              />
              <path
                d="M277.66 299c-.12 0-.22-11.78-.22-26.3s.1-26.3.22-26.3.22 11.77.22 26.3-.1 26.3-.22 26.3Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "277.66px 272.7px",
                }}
                className="animable"
              />
              <path
                d="M155.68 298.19c-.13 0-.23-25.15-.23-56.17s.1-56.17.23-56.17.22 25.14.22 56.17-.1 56.17-.22 56.17Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "155.675px 242.02px",
                }}
                className="animable"
              />
              <path
                d="M333.72 298.19c-.12 0-.22-25.23-.22-56.34s.1-56.35.22-56.35.22 25.22.22 56.35-.1 56.34-.22 56.34Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "333.72px 241.845px",
                }}
                className="animable"
              />
              <path
                d="M419.57 247.56c0 .12-19.38.22-43.28.22s-43.3-.1-43.3-.22 19.38-.22 43.3-.22 43.28.1 43.28.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "376.28px 247.56px",
                }}
                className="animable"
              />
              <path
                d="M419.57 256.07c0 .12-19.38.22-43.28.22s-43.3-.1-43.3-.22 19.38-.23 43.3-.23 43.28.1 43.28.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "376.28px 256.065px",
                }}
                className="animable"
              />
              <path
                d="M419.57 264.84c0 .13-19.16.23-42.79.23s-42.8-.1-42.8-.23 19.16-.22 42.8-.22 42.79.1 42.79.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "376.775px 264.845px",
                }}
                className="animable"
              />
              <path
                d="M419.57 273.62c0 .12-19.19.22-42.87.22s-42.88-.1-42.88-.22 19.2-.23 42.88-.23 42.87.1 42.87.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "376.695px 273.615px",
                }}
                className="animable"
              />
              <path
                d="M419.57 281.59c0 .12-19.22.22-42.92.22s-42.93-.1-42.93-.22 19.22-.23 42.93-.23 42.92.1 42.92.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "376.645px 281.585px",
                }}
                className="animable"
              />
              <path
                d="M419.57 290.09c0 .13-19.19.23-42.87.23s-42.88-.1-42.88-.23 19.2-.22 42.88-.22 42.87.13 42.87.22Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "376.695px 290.095px",
                }}
                className="animable"
              />
              <path
                style={{
                  fill: "#fff",
                  transformOrigin: "245.94px 244.025px",
                }}
                className="animable"
                d="M198.87 241.32h94.14v5.41h-94.14z"
              />
              <path
                d="M293.19 246.73c0 .12-21.09.22-47.08.22s-47.09-.1-47.09-.22 21.08-.23 47.09-.23 47.08.1 47.08.23Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "246.105px 246.725px",
                }}
                className="animable"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "249.445px 277.325px",
                }}
                className="animable"
                d="M21.1 274.69h456.69v5.27H21.1z"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "249.445px 296.145px",
                }}
                className="animable"
                d="M21.1 293.51h456.69v5.27H21.1z"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "47.235px 303.535px",
                }}
                className="animable"
                d="M43.74 270.8h6.99v65.47h-6.99z"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "140.165px 303.535px",
                }}
                className="animable"
                d="M136.67 270.8h6.99v65.47h-6.99z"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "239.975px 303.535px",
                }}
                className="animable"
                d="M236.48 270.8h6.99v65.47h-6.99z"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "339.775px 303.535px",
                }}
                className="animable"
                d="M336.28 270.8h6.99v65.47h-6.99z"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "439.575px 303.535px",
                }}
                className="animable"
                d="M436.08 270.8h6.99v65.47h-6.99z"
              />
            </g>
            <g
              id={"freepik--Truck--inject-139"}
              className="animable animator-active"
              style={{
                transformOrigin: "247.156px 318.276px",
              }}
            >
              <path
                style={{
                  fill: "#ff725e",
                  transformOrigin: "414.275px 349.59px",
                }}
                className="animable"
                d="M363.83 331.71h100.89v35.76H363.83z"
              />
              <path
                d="M464.75 367.5H363.81v-35.81h100.94Zm-100.89-.05H464.7v-35.71H363.86Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "414.28px 349.595px",
                }}
                className="animable"
              />
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "414.275px 349.59px",
                  }}
                  className="animable"
                >
                  <path
                    className="animable"
                    style={{
                      transformOrigin: "414.275px 349.59px",
                    }}
                    d="M363.83 331.71h100.89v35.76H363.83z"
                  />
                </g>
              </g>
              <rect
                x={464.34}
                y={344.72}
                width={11.53}
                height={22.75}
                rx={2.51}
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "470.105px 356.095px",
                }}
                className="animable"
              />
              <path
                d="M473.36 367.47s.23 0 .63-.14a2.45 2.45 0 0 0 1.4-1.08 2.28 2.28 0 0 0 .35-1.23v-5.53c0-2.92 0-6.38-.06-10.21v-1.46a3.64 3.64 0 0 0-.15-1.38 2.27 2.27 0 0 0-2.15-1.47h-6.48a2.25 2.25 0 0 0-2.17 1.66 6.38 6.38 0 0 0-.08 1.54v15.51a5.64 5.64 0 0 0 .18 2.18 2.38 2.38 0 0 0 1.37 1.28 6.28 6.28 0 0 0 1.78.15h3l1.88.05a3.39 3.39 0 0 1 .65.05 2.59 2.59 0 0 1-.65 0l-1.88.05-3 .05a6 6 0 0 1-1.89-.13 2.7 2.7 0 0 1-1.59-1.44 2.6 2.6 0 0 1-.24-1.16v-16.68a6.9 6.9 0 0 1 .1-1.67 2.78 2.78 0 0 1 2.67-2.05h6.48a2.77 2.77 0 0 1 2.61 1.8 4.11 4.11 0 0 1 .18 1.56v1.46c0 3.83 0 7.29-.05 10.21v5.54a2.58 2.58 0 0 1-2 2.41 1.85 1.85 0 0 1-.89.13Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "470.28px 355.937px",
                }}
                className="animable"
              />
              <path
                d="M230 284.91v-38.3a23.18 23.18 0 0 1 23.18-23.19h57.9s16.14-1.81 22.49 12 21.4 41.72 21.4 41.72 59.81.24 84 9c22.2 8 19.2 24.4 19.2 24.4.87 1.55.07 12 .07 12l-99 15-14.95 22.35H230.67Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "344.288px 291.616px",
                }}
                className="animable"
              />
              <path
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "460.66px 330.03px",
                }}
                className="animable"
                d="M456.98 307.55h7.36v44.96h-7.36z"
              />
              <path
                d="M464.34 352.5a1.1 1.1 0 0 1 0-.24V349c0-2.28 0-5.52-.08-9.53 0-8.07-.06-19.26-.11-31.92l.26.25H457l.25-.25v26.33c0 7.69-.07 14.11-.1 18.6l-.13-.13 5.42.08h1.94a2.49 2.49 0 0 1-.46 0h-1.4l-5.5.08h-.13v-.14c0-4.49-.05-10.91-.09-18.6v-26.33c.12-.12-.26.25.27-.27h7.61v.26c-.05 12.73-.09 24-.12 32.11 0 4-.05 7.2-.07 9.46V352.18a1.86 1.86 0 0 1-.15.32Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "460.729px 329.84px",
                }}
                className="animable"
              />
              <path
                d="M381.93 311.1a2.51 2.51 0 0 1-.65 0l-1.84.05-6.8.08-10.08.06h-2.92a11.29 11.29 0 0 1-3.07-.45 10.41 10.41 0 0 1-5.28-3.68 10.22 10.22 0 0 1-2.12-6.08c0-2.06-.05-4.06-.07-6s-.1-3.69.07-5.41a19.76 19.76 0 0 1 1.19-4.58 34.6 34.6 0 0 1 3.12-6.06c.44-.67.79-1.18 1-1.52a2.92 2.92 0 0 1 .41-.5 3 3 0 0 1-.32.56l-1 1.57a39 39 0 0 0-2.95 6.08 19.64 19.64 0 0 0-1.1 4.5c-.15 1.64 0 3.46 0 5.35s.06 3.89.1 6a9.85 9.85 0 0 0 2 5.78 10 10 0 0 0 5 3.51 20.66 20.66 0 0 0 5.84.44l10.08.06 6.8.08 1.84.05a3.26 3.26 0 0 1 .75.11Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "365.497px 294.15px",
                }}
                className="animable"
              />
              <path
                style={{
                  fill: "#263238",
                  transformOrigin: "254.96px 364.84px",
                }}
                className="animable"
                d="M164.41 359.29h181.1v11.1h-181.1z"
              />
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "369.785px 336.817px",
                  }}
                  className="animable"
                >
                  <path
                    d="M368 311a68 68 0 0 0-27.57 25.73c-3.05 5.13-5.45 10.78-5.9 16.72s1.24 12.24 5.42 16.49L405.11 304a68 68 0 0 0-37.11 7Z"
                    className="animable"
                    style={{
                      transformOrigin: "369.785px 336.817px",
                    }}
                  />
                </g>
              </g>
              <path
                d="M381 352.84a38.46 38.46 0 0 1 8.36-10.31c7.39-6.12 13.92-8.93 23-9.33 8-.36 18.74 1.58 27.14 9 7.05 6.27 11.58 11.84 17.86 18.76a8.26 8.26 0 0 0 1.6 1.41c5 3.29 9.34-1.86 10.84-6.55 3.7-11.56.09-24.75-7.8-34s-19.54-14.73-31.52-16.7a113.73 113.73 0 0 0-39.59 1c-14.77 3.31-22.54 6.19-34.24 17.17-7.83 7.35-21.24 27.06-18.64 42.39 0 0 3.53 12.72 17.32 10.73s17.16-9.07 19.92-13.36c1.75-2.73 3.55-6.38 5.75-10.21Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "404.469px 340.234px",
                }}
                className="animable"
              />
              <path
                d="m381 352.84-.49.92-1.47 2.68c-.64 1.19-1.41 2.66-2.38 4.37-.48.86-1 1.77-1.63 2.73s-1.22 2-2 3a25.57 25.57 0 0 1-2.56 3.14 21.94 21.94 0 0 1-3.48 2.82 28.1 28.1 0 0 1-9.42 3.64 25.75 25.75 0 0 1-5.62.58c-.49 0-1 0-1.48-.07l-1.48-.26a8.66 8.66 0 0 1-1.47-.4 7.67 7.67 0 0 1-1.44-.56 16 16 0 0 1-8.33-9.72 30.63 30.63 0 0 1 .86-12.73 58.71 58.71 0 0 1 5.18-12.78A77.56 77.56 0 0 1 352 328a49.55 49.55 0 0 1 5.27-5.6c1.89-1.77 3.91-3.46 6-5.08a50.93 50.93 0 0 1 14.29-7.79 117.25 117.25 0 0 1 16.44-4.27 116.44 116.44 0 0 1 35.47-.49 59.8 59.8 0 0 1 18 5.63A46.94 46.94 0 0 1 462 321.56c7.88 9.16 11.21 21.67 8.48 32.52a15.29 15.29 0 0 1-3.7 7.32 7.26 7.26 0 0 1-3.48 2.14 5.63 5.63 0 0 1-4-.62 10.09 10.09 0 0 1-3-2.61l-2.56-2.86c-1.68-1.9-3.34-3.77-5-5.58a121 121 0 0 0-10.09-10 35 35 0 0 0-11.29-6.38 41.71 41.71 0 0 0-22.14-1.27 37 37 0 0 0-15 7.62 34.53 34.53 0 0 0-7.28 7.82c-.7 1-1.2 1.8-1.54 2.33s-.51.81-.51.81a34.71 34.71 0 0 1 2-3.2 34 34 0 0 1 7.25-7.92 37 37 0 0 1 15.15-7.68 41.92 41.92 0 0 1 22.32 1.2 35.46 35.46 0 0 1 11.39 6.4 118.84 118.84 0 0 1 10.15 10c1.66 1.81 3.32 3.68 5 5.57l2.56 2.86a9.68 9.68 0 0 0 2.85 2.5 5.11 5.11 0 0 0 3.65.57 6.82 6.82 0 0 0 3.25-2 15.1 15.1 0 0 0 3.57-7.11c2.67-10.68-.62-23-8.41-32.08a46.62 46.62 0 0 0-14.37-11 59.29 59.29 0 0 0-17.87-5.58 115.34 115.34 0 0 0-35.3.49 115.72 115.72 0 0 0-16.3 4.18 50.66 50.66 0 0 0-14.17 7.7q-3.15 2.42-6 5.05a48.65 48.65 0 0 0-5.23 5.54 76.72 76.72 0 0 0-8.14 12.15 58.26 58.26 0 0 0-5.17 12.67 30.43 30.43 0 0 0-.89 12.57 15.73 15.73 0 0 0 8.1 9.51 8.08 8.08 0 0 0 1.41.55 9.19 9.19 0 0 0 1.43.39l1.45.26c.49 0 1 .05 1.45.08a25.87 25.87 0 0 0 5.55-.56 28 28 0 0 0 9.34-3.55 22.06 22.06 0 0 0 3.45-2.78 25.38 25.38 0 0 0 2.56-3.09c.74-1 1.36-2.08 2-3s1.16-1.85 1.65-2.71c1-1.7 1.77-3.17 2.43-4.34s1.16-2.07 1.51-2.66.49-.94.49-.94Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "404.43px 340.183px",
                }}
                className="animable"
              />
              <path
                d="M367.55 349.48c0 .14-4.86.26-10.85.26s-10.86-.12-10.86-.26 4.86-.26 10.86-.26 10.85.11 10.85.26Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "356.695px 349.48px",
                }}
                className="animable"
              />
              <path
                d="M365.69 355.71c0 .15-4.86.26-10.85.26s-10.86-.11-10.86-.26 4.86-.26 10.86-.26 10.85.12 10.85.26Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "354.835px 355.71px",
                }}
                className="animable"
              />
              <path
                d="M363.83 362c0 .15-4.86.26-10.85.26s-10.86-.11-10.86-.26 4.86-.26 10.86-.26 10.85.07 10.85.26Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "352.975px 362px",
                }}
                className="animable"
              />
              <path
                d="M47.05 341.65h29.58c3.22 0 3.22-5 0-5H47.05c-3.22 0-3.23 5 0 5Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "61.8381px 339.15px",
                }}
                className="animable"
              />
              <path
                d="M44.51 347.89h29.58c3.22 0 3.23-5 0-5H44.51c-3.21 0-3.22 5 0 5Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "59.3037px 345.39px",
                }}
                className="animable"
              />
              <path
                d="M42 354.13h29.56c3.22 0 3.22-5 0-5H42c-3.22 0-3.22 5 0 5Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "56.78px 351.63px",
                }}
                className="animable"
              />
              <path
                d="M353.68 303h-11.34a3 3 0 0 1-2.95-2.95 3 3 0 0 1 2.95-3h11.34a3 3 0 0 1 3 3 3 3 0 0 1-3 2.95Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "348.035px 300.025px",
                }}
                className="animable"
              />
              <path
                d="M320.84 274.18c-1.53-8.1-6.64-20.77-9.68-25.21s-7.28-5.68-13.19-6.42-32-.06-32-.06c-.59 0-10.54-.5-10.57 13 0 14.41.37 19.45.37 19.45s0 9 9.22 9h47.77a8.23 8.23 0 0 0 8.15-9.58c-.04-.02-.06-.1-.07-.18Z"
                style={{
                  fill: "#455a64",
                  transformOrigin: "288.211px 263.072px",
                }}
                className="animable"
              />
              <path
                d="M320.84 274.18a2.61 2.61 0 0 1 .08.37 7.58 7.58 0 0 1 .11 1.12 8 8 0 0 1-1 4.2 8.4 8.4 0 0 1-5.46 4.07 22.75 22.75 0 0 1-4.35.21h-4.89l-24.35.06h-16.52l-1-.06c-.32 0-.65-.12-1-.18a10.13 10.13 0 0 1-1.92-.59 9 9 0 0 1-1.72-1.08 9.91 9.91 0 0 1-3.35-7.33c-.34-5.82-.36-11.85-.37-18 0-3.25.19-6.65 1.75-9.56a9.57 9.57 0 0 1 3.23-3.57 10.11 10.11 0 0 1 4.48-1.56c6.21-.23 12.14-.28 17.82-.33h8.29a73.79 73.79 0 0 1 7.83.4 26.91 26.91 0 0 1 7.12 1.75 12.79 12.79 0 0 1 5.29 4.19 32.56 32.56 0 0 1 3 5.35c.83 1.75 1.54 3.43 2.18 5 1.27 3.17 2.22 5.95 2.93 8.24s1.16 4.11 1.43 5.34c.14.62.22 1.1.28 1.41s.08.49.08.49a3.88 3.88 0 0 1-.13-.48c-.08-.31-.17-.78-.33-1.39-.3-1.23-.79-3-1.52-5.3s-1.72-5.05-3-8.2c-.65-1.57-1.37-3.24-2.21-5a33.6 33.6 0 0 0-3-5.27 12.49 12.49 0 0 0-5.16-4 26.92 26.92 0 0 0-7-1.69 72.46 72.46 0 0 0-7.78-.37h-8.28c-5.66.06-11.64.13-17.76.35a9.26 9.26 0 0 0-7.32 4.88 13.87 13.87 0 0 0-1.41 4.48c-.05.4-.14.79-.16 1.19l-.06 1.2c-.06.8-.05 1.62-.05 2.44 0 6.15 0 12.19.36 18a9.47 9.47 0 0 0 3.15 6.93 8.77 8.77 0 0 0 1.62 1 9.74 9.74 0 0 0 1.81.57c.31.05.62.14.93.17l.95.06c.62.06 1.27 0 1.91 0h14.59l24.35.06h4.89a22.9 22.9 0 0 0 4.3-.18 8.15 8.15 0 0 0 5.35-3.9 8 8 0 0 0 1.1-4.11 8.93 8.93 0 0 0-.07-1.11 1.81 1.81 0 0 1-.04-.27Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "288.068px 263.08px",
                }}
                className="animable"
              />
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "262.579px 301.977px",
                  }}
                  className="animable"
                >
                  <path
                    d="M269.58 300.4c-.5-.87-1.69-1-2.69-.94l-10.08.15-1.4 1.18a5.73 5.73 0 0 0 4.84 3.67 16.93 16.93 0 0 0 6.34-.73 5.59 5.59 0 0 0 2.39-1 1.93 1.93 0 0 0 .6-2.33Z"
                    className="animable"
                    style={{
                      transformOrigin: "262.579px 301.977px",
                    }}
                  />
                </g>
              </g>
              <path
                d="M268.25 301.85c1.43-.18 2.17-.87 2.27-1.51a1.44 1.44 0 0 0-.28-1.14c-1.32-1.66-7-2-10.25-2-3 0-5 .79-5 2.51 0 1.89.65 2.5 5.67 2.5a54.86 54.86 0 0 0 7.59-.36Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "262.766px 299.712px",
                }}
                className="animable"
              />
              <path
                d="M268.25 301.85a5.62 5.62 0 0 1-1.38.26c-.9.11-2.21.21-3.83.27a42.91 42.91 0 0 1-5.7-.09 4.78 4.78 0 0 1-1.66-.47 1.86 1.86 0 0 1-1-1.6 2.37 2.37 0 0 1 .45-1.86 3.44 3.44 0 0 1 1.66-1 11.89 11.89 0 0 1 3.65-.4c1.17 0 2.29.07 3.36.17a16.05 16.05 0 0 1 5.59 1.25 3 3 0 0 1 .95.76 1.59 1.59 0 0 1 .29 1.07 1.72 1.72 0 0 1-1 1.34 3.3 3.3 0 0 1-1 .3h-.37a7.22 7.22 0 0 0 1.29-.49 1.5 1.5 0 0 0 .85-1.17 1.36 1.36 0 0 0-.26-.86 2.7 2.7 0 0 0-.86-.63 16.77 16.77 0 0 0-5.46-1.11 49.85 49.85 0 0 0-3.33-.13 11.41 11.41 0 0 0-3.48.38 3 3 0 0 0-1.41.85 1.92 1.92 0 0 0-.36 1.49 1.34 1.34 0 0 0 .7 1.21 4 4 0 0 0 1.47.42 47.42 47.42 0 0 0 5.64.2c1.61 0 2.91-.06 3.81-.11a8.69 8.69 0 0 1 1.39-.05Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "262.64px 299.691px",
                }}
                className="animable"
              />
              <path
                d="m322.66 243.39 18 32.82a3.56 3.56 0 0 0 5 1.31l7.09-4.45-18.31-35.68-9.88 1.9a2.8 2.8 0 0 0-1.9 4.1Z"
                style={{
                  fill: "#455a64",
                  transformOrigin: "337.53px 257.723px",
                }}
                className="animable"
              />
              <path
                d="M322.66 243.39a2.25 2.25 0 0 1-.37-1 2.84 2.84 0 0 1 1.18-2.73 5.16 5.16 0 0 1 2.11-.69l2.58-.51 6.28-1.25h.13l.07.13c4.45 8.63 10.64 20.65 17.5 33.94L353 273l.11.21-.2.13-4.5 2.82-2.2 1.38a4.11 4.11 0 0 1-2.52.82 3.86 3.86 0 0 1-2.45-1 4.05 4.05 0 0 1-.81-1l-.59-1.07-2.27-4.17-7.84-14.4-5.23-9.7-1.39-2.64-.35-.7a.92.92 0 0 1-.11-.24s.06.07.15.22l.4.67 1.48 2.59c1.28 2.31 3.11 5.58 5.37 9.62s4.94 8.95 7.93 14.35l2.3 4.16c.19.36.39.72.59 1.07a3.44 3.44 0 0 0 .71.9 3.35 3.35 0 0 0 2.12.84 3.7 3.7 0 0 0 2.24-.75l2.19-1.39 4.5-2.82-.09.33c-.28-.53-.58-1.11-.88-1.7-6.8-13.31-12.94-25.36-17.36-34l.2.1-6.3 1.17-2.58.48a5 5 0 0 0-2.05.6 2.77 2.77 0 0 0-1.19 2.56 4.89 4.89 0 0 0 .28.95Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "337.685px 257.785px",
                }}
                className="animable"
              />
              <path
                style={{
                  fill: "#263238",
                  transformOrigin: "37.5px 356.075px",
                }}
                className="animable"
                d="M28.84 351.54h17.32v9.07H28.84z"
              />
              <path
                style={{
                  fill: "#ff725e",
                  transformOrigin: "130.31px 331.655px",
                }}
                className="animable"
                d="m230.67 359.29-58.8-.06-.62-8.51-141.3 1.02v-47.72h200.72v55.27z"
              />
              <path
                style={{
                  fill: "#ff725e",
                  transformOrigin: "114.035px 344.835px",
                }}
                className="animable"
                d="M64.94 330.6h98.19v28.47H64.94z"
              />
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "114.035px 344.835px",
                  }}
                  className="animable"
                >
                  <path
                    className="animable"
                    style={{
                      transformOrigin: "114.035px 344.835px",
                    }}
                    d="M64.94 330.6h98.19v28.47H64.94z"
                  />
                </g>
              </g>
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "407.865px 296.15px",
                  }}
                  className="animable"
                >
                  <path
                    d="M417.75 297.08H398a.93.93 0 0 1-.93-.93.93.93 0 0 1 .93-.93h19.73a.92.92 0 0 1 .93.93.93.93 0 0 1-.91.93Z"
                    className="animable"
                    style={{
                      transformOrigin: "407.865px 296.15px",
                    }}
                  />
                </g>
              </g>
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "407.865px 298.84px",
                  }}
                  className="animable"
                >
                  <path
                    d="M417.75 299.77H398a.93.93 0 0 1-.93-.93.93.93 0 0 1 .93-.93h19.73a.92.92 0 0 1 .93.93.93.93 0 0 1-.91.93Z"
                    className="animable"
                    style={{
                      transformOrigin: "407.865px 298.84px",
                    }}
                  />
                </g>
              </g>
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "407.865px 301.53px",
                  }}
                  className="animable"
                >
                  <path
                    d="M417.75 302.46H398a.93.93 0 0 1-.93-.93.93.93 0 0 1 .93-.93h19.73a.93.93 0 0 1 .93.93.92.92 0 0 1-.91.93Z"
                    className="animable"
                    style={{
                      transformOrigin: "407.865px 301.53px",
                    }}
                  />
                </g>
              </g>
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "153.597px 338.69px",
                  }}
                  className="animable"
                >
                  <path
                    d="M176.8 341.9c-1.85-7.5-6.32-16.53-12.39-21.3-9.8-7.71-22.37-11.34-34.81-12.15l17.21 12.13a43 43 0 0 1 24.07 48.35c4.94-8.79 8.33-17.24 5.92-27.03Z"
                    className="animable"
                    style={{
                      transformOrigin: "153.597px 338.69px",
                    }}
                  />
                </g>
              </g>
              <path
                d="M56.46 367.37a17.65 17.65 0 0 1-17.29-16.93v-.39C38.83 335.32 51.45 324 76.63 316c32.61-10.41 50.85-8.51 62.88-4.54 19.77 6.51 27.81 18 30.87 34.09s3 31.06-13.93 32.13c0 0 1.88-45.88-37.49-45.7s-47.13 35.79-47.13 35.79Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "105.542px 342.986px",
                }}
                className="animable"
              />
              <path
                d="M56.46 367.37h3.92l11.46.21-.1.08a46.06 46.06 0 0 1 3.38-9.11 51.53 51.53 0 0 1 6.44-10.08A45.2 45.2 0 0 1 92 339.16a42.49 42.49 0 0 1 6.87-3.59c1.22-.56 2.52-.94 3.8-1.42s2.64-.81 4-1.07A54.41 54.41 0 0 1 124.3 332a41.17 41.17 0 0 1 4.62.76 35.89 35.89 0 0 1 4.56 1.43 31.26 31.26 0 0 1 8.48 4.93c5.2 4.25 8.95 10.36 11.3 17a59.41 59.41 0 0 1 2.62 10.45 63.78 63.78 0 0 1 .83 11l-.27-.26c3.46-.24 7.09-1.1 9.84-3.41s4.33-5.79 4.93-9.39a41.66 41.66 0 0 0 .11-11.16 91.43 91.43 0 0 0-1.94-11.26 41.52 41.52 0 0 0-8.47-17.23 43 43 0 0 0-15.19-10.85c-1.42-.6-2.83-1.23-4.28-1.71l-2.16-.77-2.18-.67a63.62 63.62 0 0 0-8.82-1.81 77.39 77.39 0 0 0-8.81-.63c-2.91 0-5.79.1-8.62.34a154 154 0 0 0-31.61 6.55c-2.44.7-4.79 1.53-7.1 2.31s-4.54 1.68-6.69 2.64a73.62 73.62 0 0 0-11.9 6.34 38.52 38.52 0 0 0-9 8.18 24.08 24.08 0 0 0-4.69 9.75c-.15.84-.25 1.67-.38 2.48s-.08 1.62-.12 2.42a17.34 17.34 0 0 0 4.09 11.55 17.66 17.66 0 0 0 4.91 4 18.29 18.29 0 0 0 4.34 1.72 16.74 16.74 0 0 0 2.83.47l1 .1h-1a16.07 16.07 0 0 1-2.86-.43 17.61 17.61 0 0 1-13-12.83 17.43 17.43 0 0 1-.53-4.58c0-.79 0-1.61.11-2.44s.23-1.66.38-2.51a24.3 24.3 0 0 1 4.7-9.89 39 39 0 0 1 9.11-8.29 74.76 74.76 0 0 1 12-6.4c2.15-1 4.41-1.79 6.71-2.67s4.67-1.61 7.11-2.32a153.11 153.11 0 0 1 31.7-6.61c2.84-.26 5.74-.35 8.67-.36a76 76 0 0 1 8.86.62 64.76 64.76 0 0 1 8.9 1.82l2.2.68 2.17.77c1.47.49 2.89 1.12 4.32 1.72a43.56 43.56 0 0 1 15.38 11 41.89 41.89 0 0 1 8.42 17.45 90.57 90.57 0 0 1 2 11.32 42 42 0 0 1-.12 11.31c-.61 3.67-2.19 7.34-5.11 9.7s-6.62 3.27-10.14 3.51h-.27v-.28a62.85 62.85 0 0 0-.82-10.92 58.26 58.26 0 0 0-2.58-10.37c-2.32-6.61-6-12.64-11.14-16.83a30.31 30.31 0 0 0-8.34-4.87 36.64 36.64 0 0 0-4.5-1.42 40.32 40.32 0 0 0-4.57-.76 54.16 54.16 0 0 0-17.46 1c-1.38.25-2.68.7-4 1s-2.57.84-3.77 1.39a42.73 42.73 0 0 0-6.83 3.55 45 45 0 0 0-10.4 9.24 50.88 50.88 0 0 0-6.45 10 46.06 46.06 0 0 0-3.41 9v.09h-.08l-11.47-.31-2.91-.09c-.72.14-1.05.11-1.05.11Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "105.671px 342.89px",
                }}
                className="animable"
              />
              <rect
                x={20.63}
                y={349.14}
                width={16.46}
                height={13.87}
                rx={1.58}
                style={{
                  fill: "#263238",
                  transformOrigin: "28.86px 356.075px",
                }}
                className="animable"
              />
              <path
                d="M230 350.3c0 .14-13 .26-29 .26s-29-.12-29-.26 13-.26 29-.26 29 .11 29 .26Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "201px 350.3px",
                }}
                className="animable"
              />
              <circle
                cx={414.31}
                cy={376.6}
                r={36.61}
                style={{
                  fill: "#263238",
                  transformOrigin: "414.31px 376.6px",
                }}
                className="animable"
              />
              <circle
                cx={414.31}
                cy={376.6}
                r={23.43}
                style={{
                  fill: "#fafafa",
                  transformOrigin: "414.31px 376.6px",
                }}
                className="animable"
              />
              <g>
                <circle
                  cx={414.31}
                  cy={376.6}
                  r={17.22}
                  style={{
                    fill: "#263238",
                    transformOrigin: "414.31px 376.6px",
                    transform: "rotate(-45deg)",
                  }}
                  className="animable"
                />
              </g>
              <g>
                <circle
                  cx={414.31}
                  cy={376.6}
                  r={11.77}
                  style={{
                    fill: "#e0e0e0",
                    transformOrigin: "414.31px 376.6px",
                    transform: "rotate(-45deg)",
                  }}
                  className="animable"
                />
              </g>
              <path
                d="M413.11 367.12c-.24-.52-1-.49-1.52-.34a11.06 11.06 0 0 0-6.44 5.09c-1.27 2.32-1.95 5.75-.51 7.48.43.07.68-.6.73-1.06a7.88 7.88 0 0 0-.12-1.45 6.29 6.29 0 0 1 2.4-5 55.67 55.67 0 0 1 4.74-3.3c.46-.36.96-.9.72-1.42Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "408.502px 373.02px",
                }}
                className="animable"
              />
              <path
                d="M415.89 386.27c.28.5 1 .42 1.55.23a11.1 11.1 0 0 0 6-5.58c1.09-2.42 1.49-5.89-.08-7.5-.43 0-.63.66-.64 1.11A7.1 7.1 0 0 0 423 376a6.33 6.33 0 0 1-2 5.2c-1.33 1.39-3 2.41-4.46 3.66-.47.34-.93.92-.65 1.41Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "420.103px 380.033px",
                }}
                className="animable"
              />
              <circle
                cx={114.67}
                cy={376.6}
                r={36.61}
                style={{
                  fill: "#263238",
                  transformOrigin: "114.67px 376.6px",
                }}
                className="animable"
              />
              <circle
                cx={114.67}
                cy={376.6}
                r={23.43}
                style={{
                  fill: "#fafafa",
                  transformOrigin: "114.67px 376.6px",
                }}
                className="animable"
              />
              <g>
                <circle
                  cx={114.67}
                  cy={376.6}
                  r={17.22}
                  style={{
                    fill: "#263238",
                    transformOrigin: "114.67px 376.6px",
                    transform: "rotate(-45deg)",
                  }}
                  className="animable"
                />
              </g>
              <g>
                <circle
                  cx={114.67}
                  cy={376.6}
                  r={11.77}
                  style={{
                    fill: "#e0e0e0",
                    transformOrigin: "114.67px 376.6px",
                    transform: "rotate(-45deg)",
                  }}
                  className="animable"
                />
              </g>
              <path
                d="M113.47 367.12c-.23-.52-1-.49-1.52-.34a11.09 11.09 0 0 0-6.44 5.09c-1.27 2.32-1.94 5.75-.5 7.48.42.07.68-.6.72-1.06a7.1 7.1 0 0 0-.12-1.45 6.3 6.3 0 0 1 2.41-5 57.14 57.14 0 0 1 4.73-3.3c.46-.36.96-.9.72-1.42Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "108.865px 373.02px",
                }}
                className="animable"
              />
              <path
                d="M116.26 386.27c.27.5 1 .42 1.54.23a11.15 11.15 0 0 0 6-5.58c1.08-2.42 1.49-5.89-.08-7.5-.43 0-.63.66-.64 1.11a7.08 7.08 0 0 0 .23 1.44 6.33 6.33 0 0 1-2 5.2c-1.34 1.39-3 2.41-4.47 3.66-.41.37-.84.95-.58 1.44Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "120.469px 380.033px",
                }}
                className="animable"
              />
              <path
                d="M230.67 280.23c.14 0 .26 17.7.26 39.53s-.12 39.53-.26 39.53-.26-17.7-.26-39.53.12-39.53.26-39.53Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "230.67px 319.76px",
                }}
                className="animable"
              />
              <path
                d="M228.17 304.32H26.68A4.28 4.28 0 0 1 22.4 300a4.28 4.28 0 0 1 4.28-4.29h201.49a4.28 4.28 0 0 1 4.28 4.29 4.28 4.28 0 0 1-4.28 4.32Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "127.425px 300.015px",
                }}
                className="animable"
              />
              <path
                d="M228.17 304.32a7.69 7.69 0 0 0 1.09-.17 4.27 4.27 0 0 0 3.13-4.16 4.3 4.3 0 0 0-1-2.62 4.2 4.2 0 0 0-2.85-1.51h-3.84l-46.07.08-152 .07a4 4 0 0 0-2.15 7.43 4.21 4.21 0 0 0 2.49.62H96.9l68.32.05 46.06.09h16.89-4.36l-12.53.05-46.06.08-68.32.06H27a4.68 4.68 0 0 1-2.76-.7 4.54 4.54 0 0 1 2.42-8.39l152 .08 46.07.08h3.85a4.33 4.33 0 0 1 3 1.58 4.4 4.4 0 0 1 1 2.72 4.31 4.31 0 0 1-.66 2.31 4.24 4.24 0 0 1-2.58 1.9 3.46 3.46 0 0 1-1.17.35Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "127.343px 299.849px",
                }}
                className="animable"
              />
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "332.19px 291.5px",
                  }}
                  className="animable"
                >
                  <path
                    d="M230.38 293.83H434a2.33 2.33 0 1 0 0-4.66H230.38a2.33 2.33 0 1 0 0 4.66Z"
                    className="animable"
                    style={{
                      transformOrigin: "332.19px 291.5px",
                    }}
                  />
                </g>
              </g>
              <path
                d="M229.36 292.85H433a2.33 2.33 0 1 0 0-4.66H229.36a2.33 2.33 0 1 0 0 4.66Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "331.18px 290.52px",
                }}
                className="animable"
              />
              <path
                d="M229.36 292.85h-.27a2.41 2.41 0 0 1-.8-.19 2.23 2.23 0 0 1-1-.9 2.55 2.55 0 0 1-.25-1.83 2.34 2.34 0 0 1 .5-1 2.18 2.18 0 0 1 1.06-.67 5.15 5.15 0 0 1 1.37-.12h8.58l45.21-.08 149.24-.13a2.52 2.52 0 0 1 2.4 1.54 2.75 2.75 0 0 1-.44 2.83 2.66 2.66 0 0 1-1.3.74 7.55 7.55 0 0 1-1.4.07H358.22l-67.06-.11h-45.22l-12.29-.05h-4.29 4.29l12.29-.05 45.22-.08 67.06-.06h74a6.73 6.73 0 0 0 1.29-.06 2 2 0 0 0 1-.58 2.26 2.26 0 0 0 .35-2.28 2 2 0 0 0-1.92-1.22l-149.18-.07-45.21-.08H230a4.39 4.39 0 0 0-1.33.1 2.09 2.09 0 0 0-1.5 1.58 2.43 2.43 0 0 0 .22 1.76 2.23 2.23 0 0 0 .95.9 2.29 2.29 0 0 0 .77.2Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "331.29px 290.523px",
                }}
                className="animable"
              />
              <path
                d="M330.63 279.92a9.66 9.66 0 0 1 .56 1.33 14.4 14.4 0 0 1 .83 4.14c.06 3.7.05 9.14.08 16.11 0 13.95 0 34 .09 58.33v.17h-83.1V248.61a13.24 13.24 0 0 1 .59-4.29 11.71 11.71 0 0 1 5.25-6.48 11.52 11.52 0 0 1 3.9-1.42 22.28 22.28 0 0 1 4.06-.18h36.59a17.75 17.75 0 0 1 6.4.8 15.28 15.28 0 0 1 5.3 3.07 15.12 15.12 0 0 1 3.5 4.61c.81 1.68 1.53 3.33 2.27 4.91l7.41 16.37c2 4.46 3.6 7.93 4.67 10.3.53 1.17.93 2.06 1.2 2.68l.4.92s-.16-.3-.44-.9-.71-1.5-1.25-2.66l-4.76-10.25c-2.07-4.46-4.58-9.92-7.51-16.24-.73-1.58-1.47-3.24-2.28-4.9a14.77 14.77 0 0 0-8.63-7.48 17.23 17.23 0 0 0-6.29-.77h-36.59a22.89 22.89 0 0 0-4 .18 11.38 11.38 0 0 0-3.75 1.37 11.25 11.25 0 0 0-5 6.24 12.71 12.71 0 0 0-.56 4.14V359.82l-.26-.26 82.66.05-.21.21c0-24.36.07-44.38.09-58.33v-16.11a14.76 14.76 0 0 0-.77-4.12c-.15-.45-.28-.79-.37-1s-.08-.34-.08-.34Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "290.637px 298.105px",
                }}
                className="animable"
              />
              <g>
                <g
                  style={{
                    opacity: 0.2,
                    transformOrigin: "275.725px 260.28px",
                  }}
                  className="animable"
                >
                  <path
                    d="M292.57 244.82s-1.79 8.31-2.33 12-1.7 7.58-4.55 10a16 16 0 0 1-4.81 2.64c-7.14 2.71-14.88 3.58-22 6.28l.37-20.27a10.36 10.36 0 0 1 10.1-10.17Z"
                    style={{
                      fill: "#fff",
                      transformOrigin: "275.725px 260.28px",
                    }}
                    className="animable"
                  />
                </g>
              </g>
              <path
                d="M301.35 255.62c.07.12-7.58 5.16-17.1 11.26s-17.3 10.93-17.37 10.81 7.57-5.16 17.09-11.25 17.3-10.94 17.38-10.82Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "284.115px 266.655px",
                }}
                className="animable"
              />
              <path
                d="M292.57 256.88c.07.13-4.4 2.86-10 6.11s-10.17 5.78-10.24 5.66 4.39-2.86 10-6.11 10.17-5.78 10.24-5.66Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "282.45px 262.765px",
                }}
                className="animable"
              />
              <path
                d="M297.84 263.85a13.09 13.09 0 0 1-2.18 1.33l-5.36 3-5.3 3.08a13.94 13.94 0 0 1-2.25 1.21 11.2 11.2 0 0 1 2.05-1.52c1.32-.87 3.17-2 5.26-3.22s4-2.19 5.44-2.88a11.77 11.77 0 0 1 2.34-1Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "290.295px 268.16px",
                }}
                className="animable"
              />
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "86.03px 299px",
                  }}
                  className="animable"
                >
                  <path
                    d="M144.86 300H27.2a1 1 0 0 1-1-1 1 1 0 0 1 1-1h117.66a1 1 0 0 1 1 1 1 1 0 0 1-1 1Z"
                    style={{
                      fill: "#fff",
                      transformOrigin: "86.03px 299px",
                    }}
                    className="animable"
                  />
                </g>
              </g>
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "141.44px 298.93px",
                  }}
                  className="animable"
                >
                  <path
                    d="M142.33 298.93a.89.89 0 1 1-.89-.89.88.88 0 0 1 .89.89Z"
                    style={{
                      fill: "#fff",
                      transformOrigin: "141.44px 298.93px",
                    }}
                    className="animable"
                  />
                </g>
              </g>
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "61.9002px 339.563px",
                  }}
                  className="animable"
                >
                  <path
                    d="M77.24 321.52a4.72 4.72 0 0 0-3 .13c-5.89 2.09-11.9 4.1-17.21 7.43-4.93 3.08-9.28 7.43-11.29 12.89-1.79 4.86-2 9.94 2.18 14.32a4.79 4.79 0 0 0 7.62-.88 4.17 4.17 0 0 0 .51-2.19c-.13-2.62-2.39-4.77-2.5-7.39-.13-3.12 2.74-5.44 5.34-7.17q8.07-5.37 16.53-10.13a9.71 9.71 0 0 0 3-2.24c1.2-1.48 1.4-3.96-1.18-4.77Z"
                    style={{
                      fill: "#fff",
                      transformOrigin: "61.9002px 339.563px",
                    }}
                    className="animable"
                  />
                </g>
              </g>
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "89.4052px 319.968px",
                  }}
                  className="animable"
                >
                  <path
                    d="M89.64 317.39a2.8 2.8 0 0 0-3 2.35 2.85 2.85 0 0 0 2.36 3 2.9 2.9 0 0 0 3.14-2.25 3 3 0 0 0-2-3.31"
                    style={{
                      fill: "#fff",
                      transformOrigin: "89.4052px 319.968px",
                    }}
                    className="animable"
                  />
                </g>
              </g>
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "370.913px 326.541px",
                  }}
                  className="animable"
                >
                  <path
                    d="M385.76 313.65c-1.14-1.34-3.29-.91-4.93-.27-11.11 4.31-19.53 11-24.9 21.62a3.65 3.65 0 0 0 2.25 5.22 6.11 6.11 0 0 0 4.72-1.13c4.21-2.82 5.94-8.11 9.33-11.87 3-3.33 7.17-5.31 10.94-7.74a8 8 0 0 0 2.65-2.43 3 3 0 0 0-.06-3.4Z"
                    style={{
                      fill: "#fff",
                      transformOrigin: "370.913px 326.541px",
                    }}
                    className="animable"
                  />
                </g>
              </g>
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "394.96px 312.36px",
                  }}
                  className="animable"
                >
                  <circle
                    cx={394.96}
                    cy={312.36}
                    r={3.12}
                    style={{
                      fill: "#fff",
                      transformOrigin: "394.96px 312.36px",
                    }}
                    className="animable"
                  />
                </g>
              </g>
              <path
                d="M146.6 319.19s-.66-.35-1.82-1a46.47 46.47 0 0 0-5.08-2.43 54.28 54.28 0 0 0-18.08-3.8 83.86 83.86 0 0 0-18.5 1.46c-2.35.42-4.24.82-5.54 1.1l-1.5.32a2 2 0 0 1-.54.08 2.22 2.22 0 0 1 .51-.18c.34-.1.84-.25 1.48-.41 1.29-.35 3.17-.8 5.52-1.28a78.21 78.21 0 0 1 18.59-1.61 52 52 0 0 1 18.2 4 39.38 39.38 0 0 1 5 2.59c.58.34 1 .65 1.29.85s.48.29.47.31Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "121.07px 315.293px",
                }}
                className="animable"
              />
              <path
                d="M105.24 331.82c0 .08-1.27.36-3.31.93a60.31 60.31 0 0 0-7.8 2.74 62.55 62.55 0 0 0-7.34 3.81c-1.81 1.11-2.89 1.85-2.94 1.79s.23-.25.69-.62 1.17-.88 2-1.48a47.51 47.51 0 0 1 15.25-6.6c1-.24 1.88-.4 2.47-.49a3.26 3.26 0 0 1 .98-.08Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "94.5421px 336.453px",
                }}
                className="animable"
              />
              <path
                d="M128.51 297.12c0 .14-21.81.26-48.7.26s-48.7-.12-48.7-.26 21.8-.26 48.7-.26 48.7.14 48.7.26Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "79.81px 297.12px",
                }}
                className="animable"
              />
              <path
                d="M217.16 297.78c0 .15-14.44.26-32.26.26s-32.27-.11-32.27-.26 14.44-.26 32.27-.26 32.26.12 32.26.26Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "184.895px 297.78px",
                }}
                className="animable"
              />
              <path
                d="M243.28 289.8a47.81 47.81 0 0 1-7 .26 47.61 47.61 0 0 1-7-.26 47.61 47.61 0 0 1 7-.26 47.81 47.81 0 0 1 7 .26Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "236.28px 289.8px",
                }}
                className="animable"
              />
              <path
                d="M279 289.3c0 .14-6 .26-13.3.26s-13.31-.12-13.31-.26 6-.26 13.31-.26 13.3.12 13.3.26Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "265.695px 289.3px",
                }}
                className="animable"
              />
              <path
                d="M303 239.23c0 .15-8.26.26-18.46.26s-18.46-.11-18.46-.26 8.26-.26 18.46-.26 18.46.12 18.46.26Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "284.54px 239.23px",
                }}
                className="animable"
              />
              <path
                d="M371.74 348c0 .14-4.68.26-10.44.26s-10.45-.12-10.45-.26a103 103 0 0 1 10.45-.26 102.84 102.84 0 0 1 10.44.26Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "361.295px 347.983px",
                }}
                className="animable"
              />
              <path
                d="M370.65 353.79a58.29 58.29 0 0 1-7.93.27 58.29 58.29 0 0 1-7.93-.27 61.46 61.46 0 0 1 7.93-.26 61.46 61.46 0 0 1 7.93.26Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "362.72px 353.796px",
                }}
                className="animable"
              />
              <path
                d="M363.76 359.7a28.34 28.34 0 0 1-7.66 0 28.34 28.34 0 0 1 7.66 0Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "359.93px 359.7px",
                }}
                className="animable"
              />
              <path
                d="M436.68 308.59a4.34 4.34 0 0 1-.8-.14l-2.26-.53c-1-.23-2.2-.44-3.6-.74s-3-.53-4.8-.77a98.22 98.22 0 0 0-28 .2 94.94 94.94 0 0 0-15.05 3.58 62.11 62.11 0 0 0-11.62 4.89 33.83 33.83 0 0 0-6.87 5c-.73.69-1.27 1.26-1.62 1.66a5.46 5.46 0 0 1-.57.58 4.36 4.36 0 0 1 .49-.65 19.45 19.45 0 0 1 1.55-1.73 32.1 32.1 0 0 1 6.83-5.16 60.7 60.7 0 0 1 11.66-5 94.12 94.12 0 0 1 15.12-3.64 95.2 95.2 0 0 1 28.16 0c1.79.27 3.4.58 4.81.86s2.61.56 3.59.83l2.24.61a6.83 6.83 0 0 1 .74.15Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "399.085px 313.706px",
                }}
                className="animable"
              />
              <path
                d="M351.42 332.38a10.07 10.07 0 0 1 2-2.53 10.58 10.58 0 0 1 2.38-2.18 10 10 0 0 1-2 2.53 10.43 10.43 0 0 1-2.38 2.18Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "353.61px 330.025px",
                }}
                className="animable"
              />
              <path
                d="M423.36 289.71c0 .14-8.84.26-19.74.26s-19.74-.12-19.74-.26 8.84-.26 19.74-.26 19.74.12 19.74.26Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "403.62px 289.71px",
                }}
                className="animable"
              />
              <path
                d="M283.46 289.71c0-.14 17.89-.26 40-.26s40 .12 40 .26-17.89.26-40 .26-40-.12-40-.26Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "323.46px 289.71px",
                }}
                className="animable"
              />
              <path
                d="M72.51 322.92a11.13 11.13 0 0 1-1.69.69c-1.09.42-2.69 1-4.63 1.78a68.81 68.81 0 0 0-6.7 3 37.38 37.38 0 0 0-7.4 5 24.75 24.75 0 0 0-5.46 7 20.14 20.14 0 0 0-2.16 6.92 15.94 15.94 0 0 0 .18 4.89c.24 1.14.44 1.76.39 1.78a1.65 1.65 0 0 1-.18-.44 8.89 8.89 0 0 1-.4-1.29 14.74 14.74 0 0 1-.35-5 19.8 19.8 0 0 1 2.09-7.1 24.87 24.87 0 0 1 5.54-7.15 37 37 0 0 1 7.53-5 64.7 64.7 0 0 1 6.79-3c2-.73 3.58-1.26 4.7-1.62l1.29-.39a2 2 0 0 1 .46-.07Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "58.2725px 338.45px",
                }}
                className="animable"
              />
              <path
                d="M36.73 353.24c-.15 0-.26-10.95-.26-24.46s.11-24.46.26-24.46.26 10.95.26 24.46-.12 24.46-.26 24.46Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "36.73px 328.78px",
                }}
                className="animable"
              />
              <path
                d="M221.71 362c-.14 0-.26-12.88-.26-28.78s.12-28.78.26-28.78.26 12.88.26 28.78-.12 28.78-.26 28.78Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "221.71px 333.22px",
                }}
                className="animable"
              />
              <g>
                <g
                  style={{
                    opacity: 0.2,
                    transformOrigin: "247.37px 241.985px",
                  }}
                  className="animable"
                >
                  <path
                    d="M261.54 227.62c0 1.13-2.55 1.85-5.93 3.43a27.91 27.91 0 0 0-16.75 20.79c-.82 3.64-1 6.25-2.08 6.53-.52.13-1.18-.38-1.86-1.51a13.92 13.92 0 0 1-1.58-5.21 22 22 0 0 1 .6-8.14A24 24 0 0 1 246.43 228a21.74 21.74 0 0 1 7.82-2.32 13.77 13.77 0 0 1 5.43.43c1.25.44 1.88.99 1.86 1.51Z"
                    style={{
                      fill: "#fff",
                      transformOrigin: "247.37px 241.985px",
                    }}
                    className="animable"
                  />
                </g>
              </g>
              <path
                d="M251.86 250.94a5 5 0 0 1-.08-2.05 11.84 11.84 0 0 1 4.85-8.38 5.19 5.19 0 0 1 1.82-.95 19 19 0 0 1-1.59 1.24 13.67 13.67 0 0 0-3.1 3.65 13.84 13.84 0 0 0-1.62 4.49 17.93 17.93 0 0 1-.28 2Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "255.08px 245.25px",
                }}
                className="animable"
              />
              <path
                d="M232.73 265a92.59 92.59 0 0 1 .26 9.74 92.59 92.59 0 0 1-.26 9.74 89.44 89.44 0 0 1-.26-9.74 89.44 89.44 0 0 1 .26-9.74Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "232.728px 274.74px",
                }}
                className="animable"
              />
              <path
                d="M312.91 226.59c0 .14-9.88.26-22.06.26s-22.06-.12-22.06-.26 9.87-.26 22.06-.26 22.06.12 22.06.26Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "290.85px 226.59px",
                }}
                className="animable"
              />
              <path
                d="M448.52 300s-1.79-9.55 19.21-12.46v24.92s-19.21-4.2-19.21-12.46Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "458.106px 300px",
                }}
                className="animable"
              />
              <path
                d="M448.52 300a11.45 11.45 0 0 0 .39 1.73 9 9 0 0 0 3 3.84c3.32 2.66 9 5 15.86 6.65l-.29.24v-24.92l.28.25a51.7 51.7 0 0 0-9.7 2.25 19.24 19.24 0 0 0-6.73 3.86 8.86 8.86 0 0 0-2.62 4.28 6.65 6.65 0 0 0-.19 1.35 2.16 2.16 0 0 1 0 .47 1.62 1.62 0 0 1-.07-.47 5.31 5.31 0 0 1 .11-1.38 8.85 8.85 0 0 1 2.56-4.47 19.29 19.29 0 0 1 6.8-4 50.83 50.83 0 0 1 9.78-2.35h.28v25.52l-.3-.08c-6.9-1.67-12.61-4.11-15.95-6.89a11.74 11.74 0 0 1-2-2.1 7.12 7.12 0 0 1-1-1.92 4.42 4.42 0 0 1-.23-1.32 2.69 2.69 0 0 1 .02-.54Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "458.211px 300.09px",
                }}
                className="animable"
              />
              <ellipse
                cx={468.04}
                cy={299.76}
                rx={2.31}
                ry={12.24}
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "468.04px 299.76px",
                }}
                className="animable"
              />
              <path
                d="M470.35 299.76a1.55 1.55 0 0 1-.05-.51c0-.4-.05-.9-.08-1.49-.08-1.29-.19-3.17-.53-5.45a16.79 16.79 0 0 0-.9-3.62 2.6 2.6 0 0 0-.48-.81c-.22-.2-.37-.16-.59.08a5.74 5.74 0 0 0-.8 2 53 53 0 0 0 0 19.67 5.66 5.66 0 0 0 .8 2c.22.24.37.28.59.07a2.44 2.44 0 0 0 .48-.8 16.79 16.79 0 0 0 .9-3.62c.34-2.28.45-4.16.53-5.45 0-.59 0-1.09.08-1.49a1.65 1.65 0 0 1 .05-.52 2.19 2.19 0 0 1 0 .53v1.49a42.8 42.8 0 0 1-.37 5.49 16.76 16.76 0 0 1-.86 3.74 2.87 2.87 0 0 1-.58 1 .81.81 0 0 1-.65.26 1 1 0 0 1-.59-.36 5.85 5.85 0 0 1-.91-2.14 51.15 51.15 0 0 1 0-19.93 5.85 5.85 0 0 1 .91-2.14 1 1 0 0 1 .59-.35.78.78 0 0 1 .65.25 2.87 2.87 0 0 1 .58 1 16.76 16.76 0 0 1 .86 3.74 42.8 42.8 0 0 1 .37 5.49v1.49a2 2 0 0 1 0 .38Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "467.888px 299.869px",
                }}
                className="animable"
              />
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "457.475px 295.985px",
                  }}
                  className="animable"
                >
                  <path
                    d="M463.81 292.76a1.72 1.72 0 0 0-2.12-2.08 20.77 20.77 0 0 0-8 4.16 8.22 8.22 0 0 0-2.15 2.33 3.29 3.29 0 0 0-.14 3.06 2.1 2.1 0 0 0 2.71.94c.78-.43 1.09-1.38 1.59-2.13a10.4 10.4 0 0 1 3.05-2.78c1.17-.74 2.44-1.12 3.63-1.77a3.15 3.15 0 0 0 1.43-1.73Z"
                    style={{
                      fill: "#fff",
                      transformOrigin: "457.475px 295.985px",
                    }}
                    className="animable"
                  />
                </g>
              </g>
              <path
                d="M461.29 291a12.32 12.32 0 0 1-2.23.9 17.83 17.83 0 0 0-5 2.64 8.22 8.22 0 0 0-2.9 4.7 10.37 10.37 0 0 0 0 2.35s-.14-.2-.24-.61a4.93 4.93 0 0 1-.09-1.8 7.94 7.94 0 0 1 2.93-5 15.64 15.64 0 0 1 5.25-2.59 9.86 9.86 0 0 1 2.28-.59Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "456.038px 296.295px",
                }}
                className="animable"
              />
              <path
                d="M464.65 290.25c0 .14-.19.32-.5.42s-.6.05-.64-.09.18-.32.49-.41.61-.06.65.08Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "464.078px 290.421px",
                }}
                className="animable"
              />
              <path
                d="M369.47 290.61s-1.34-7.14 14.31-9.37a.16.16 0 0 1 .19.16v18.41a.15.15 0 0 1-.19.16c-1.72-.4-14.31-3.53-14.31-9.36Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "376.706px 290.606px",
                }}
                className="animable"
              />
              <path
                d="M369.47 290.61a5.69 5.69 0 0 0 .66 2.05 10.94 10.94 0 0 0 4.44 3.75 38.44 38.44 0 0 0 8.23 3.07l.6.15.31.08h.11a.12.12 0 0 0-.08 0V281.33s.08.08.06.07l-.31.06-1.24.21a26.79 26.79 0 0 0-8.32 2.65 8.66 8.66 0 0 0-4 4.11 5.61 5.61 0 0 0-.41 2.1 1.41 1.41 0 0 1-.07-.56 4.79 4.79 0 0 1 .29-1.61 8.63 8.63 0 0 1 4-4.36 26.67 26.67 0 0 1 8.42-2.81l1.26-.22.31-.05a.42.42 0 0 1 .5.41v18.21c0 .12.06.15-.07.45a.42.42 0 0 1-.36.17h-.19l-.31-.08-.62-.16a37.37 37.37 0 0 1-8.28-3.21 10.71 10.71 0 0 1-4.44-4 4.46 4.46 0 0 1-.49-1.57 3.2 3.2 0 0 1 0-.53Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "376.845px 290.536px",
                }}
                className="animable"
              />
              <path
                d="M386 290.45c0 5.11-.78 9.25-1.74 9.25s-1.74-4.14-1.74-9.25.78-9.24 1.74-9.24 1.74 4.14 1.74 9.24Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "384.26px 290.455px",
                }}
                className="animable"
              />
              <path
                d="M386 290.45a11.08 11.08 0 0 1-.13-1.51 41.2 41.2 0 0 0-.41-4.11 13.12 13.12 0 0 0-.68-2.71 2 2 0 0 0-.36-.59c-.15-.14-.2-.11-.36.05a4.3 4.3 0 0 0-.59 1.46 40.13 40.13 0 0 0 0 14.82 4.22 4.22 0 0 0 .59 1.46c.16.16.21.2.36.06a2.26 2.26 0 0 0 .36-.59 13.2 13.2 0 0 0 .68-2.72c.27-1.72.35-3.13.41-4.1a11.13 11.13 0 0 1 .13-1.52 7.31 7.31 0 0 1 0 1.55 32.88 32.88 0 0 1-.26 4.15 13.13 13.13 0 0 1-.64 2.84 2.54 2.54 0 0 1-.45.74 1.12 1.12 0 0 1-.22.16.7.7 0 0 1-.32.05.8.8 0 0 1-.48-.29A4.55 4.55 0 0 1 383 298a38.18 38.18 0 0 1 0-15.06 4.55 4.55 0 0 1 .7-1.64.79.79 0 0 1 .48-.28.51.51 0 0 1 .32.05c.09 0 .14.1.22.15a2.58 2.58 0 0 1 .45.75 13.05 13.05 0 0 1 .64 2.83 33 33 0 0 1 .26 4.15 7.31 7.31 0 0 1-.07 1.5Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "384.166px 290.477px",
                }}
                className="animable"
              />
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "376.053px 287.695px",
                  }}
                  className="animable"
                >
                  <path
                    d="M380 286.45a1.49 1.49 0 0 0-1.22-2.68 16.45 16.45 0 0 0-5.39 3 6.17 6.17 0 0 0-1.61 1.77 2.44 2.44 0 0 0-.11 2.3 1.57 1.57 0 0 0 2 .71c.59-.32.83-1 1.2-1.6a7.73 7.73 0 0 1 2.31-2.1c.88-.56 1.84-.85 2.74-1.34Z"
                    style={{
                      fill: "#fff",
                      transformOrigin: "376.053px 287.695px",
                    }}
                    className="animable"
                  />
                </g>
              </g>
              <path
                d="M379.11 283.82a7.25 7.25 0 0 1-1.67.72 13.45 13.45 0 0 0-3.77 2 6.14 6.14 0 0 0-2.19 3.5 10.7 10.7 0 0 0-.07 1.77 2.64 2.64 0 0 1-.3-1.83 6 6 0 0 1 2.23-3.85 11.41 11.41 0 0 1 4-1.95 6.12 6.12 0 0 1 1.77-.36Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "375.085px 287.815px",
                }}
                className="animable"
              />
              <path
                d="M381.65 283.27c0 .14-.12.3-.36.37s-.47 0-.51-.12.12-.31.36-.38.47-.01.51.13Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "381.212px 283.389px",
                }}
                className="animable"
              />
              <path
                d="M332.34 272.49s.73-7.15-7.74-9.38c-.05 0-.1.06-.1.16v18.42c0 .1.05.18.1.16.93-.4 7.74-3.54 7.74-9.36Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "328.428px 272.482px",
                }}
                className="animable"
              />
              <path
                d="M332.34 272.49a1.64 1.64 0 0 1 0 .46v.55c0 .2-.08.47-.13.76a8.88 8.88 0 0 1-2.35 4.21 15.24 15.24 0 0 1-2.58 2.15c-.5.34-1 .66-1.61 1-.28.15-.57.29-.88.43h-.2c-.14 0-.28-.2-.31-.26a1.27 1.27 0 0 1 0-.31v-18.21a.53.53 0 0 1 0-.23.4.4 0 0 1 .13-.14c0-.07.28 0 .25 0l.48.15.93.3a15.72 15.72 0 0 1 1.7.81 9.69 9.69 0 0 1 2.61 2.14 8.69 8.69 0 0 1 1.94 4.42 6.5 6.5 0 0 1 .06 1.32 1.15 1.15 0 0 1-.06.46s0-.64-.2-1.74a8.85 8.85 0 0 0-2-4.22 9.46 9.46 0 0 0-2.54-2 14.74 14.74 0 0 0-1.65-.76l-.91-.28-.46-.15c.23-.26.17.06.18.2v18.16c-.05 0-.17.1-.15.11a1.78 1.78 0 0 1-.07-.17h.05l.86-.41a16 16 0 0 0 1.58-.92 15.12 15.12 0 0 0 2.55-2.05 8.9 8.9 0 0 0 2.42-4c.07-.27.14-.51.18-.73s0-.38.06-.54a1.38 1.38 0 0 1 .12-.51Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "328.329px 272.459px",
                }}
                className="animable"
              />
              <path
                d="M323.43 272.33c0 5.1.42 9.24.94 9.24s.94-4.14.94-9.24-.42-9.25-.94-9.25-.94 4.14-.94 9.25Z"
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "324.37px 272.325px",
                }}
                className="animable"
              />
              <path
                d="M323.43 272.33a6.47 6.47 0 0 1-.09-1.48c0-1 0-2.33.09-4a25.65 25.65 0 0 1 .3-2.79 5 5 0 0 1 .22-.77 1 1 0 0 1 .12-.22.36.36 0 0 1 .14-.13.36.36 0 0 1 .29 0 .77.77 0 0 1 .33.46 8 8 0 0 1 .35 1.65 69.17 69.17 0 0 1 0 14.67 7.83 7.83 0 0 1-.35 1.65c-.07.14-.06.29-.33.46a.33.33 0 0 1-.29 0 .44.44 0 0 1-.14-.12 1.24 1.24 0 0 1-.12-.22 5.48 5.48 0 0 1-.22-.78 25.65 25.65 0 0 1-.3-2.79c-.1-1.7-.11-3.08-.09-4a6.33 6.33 0 0 1 .09-1.47 9.14 9.14 0 0 1 .11 1.47c0 .95.11 2.32.26 4a24.46 24.46 0 0 0 .36 2.73 3.48 3.48 0 0 0 .2.69.44.44 0 0 0 .06.12s0 0 0 .07 0 .06 0 0a.25.25 0 0 0-.05-.08.11.11 0 0 0 0-.05 1.07 1.07 0 0 0 .07-.15 8.87 8.87 0 0 0 .3-1.55 77.89 77.89 0 0 0 0-14.54 8.81 8.81 0 0 0-.3-1.56 1.07 1.07 0 0 0-.07-.15v-.05s0-.07.05-.08 0 0 0 .07a.67.67 0 0 0-.06.12 3.69 3.69 0 0 0-.2.69 24.46 24.46 0 0 0-.36 2.73c-.15 1.69-.21 3.06-.26 4a9.38 9.38 0 0 1-.11 1.4Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "324.45px 272.386px",
                }}
                className="animable"
              />
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "328.793px 269.583px",
                  }}
                  className="animable"
                >
                  <path
                    d="M326.66 268.32c-.79-.85-.21-3.16.66-2.67a9.27 9.27 0 0 1 2.92 3 6.42 6.42 0 0 1 .87 1.76 4.32 4.32 0 0 1 .06 2.31c-.21.7-.73 1.1-1.11.71a5.35 5.35 0 0 1-.65-1.61 7.07 7.07 0 0 0-1.24-2.1c-.48-.56-1-.84-1.49-1.34Z"
                    style={{
                      fill: "#fff",
                      transformOrigin: "328.793px 269.583px",
                    }}
                    className="animable"
                  />
                </g>
              </g>
              <path
                d="M327.12 265.69a3.47 3.47 0 0 1 1.33.58 5.89 5.89 0 0 1 2.36 2.58 7.75 7.75 0 0 1 .75 3.42 2.68 2.68 0 0 1-.27 1.42 12.52 12.52 0 0 0-1-4.61 6.59 6.59 0 0 0-2.1-2.51c-.64-.51-1.11-.81-1.07-.88Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "329.344px 269.69px",
                }}
                className="animable"
              />
              <path
                d="M325.76 265.14a.25.25 0 0 1 .35-.1.26.26 0 0 1 .11.35.27.27 0 0 1-.36.11.27.27 0 0 1-.1-.36Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "325.989px 265.267px",
                }}
                className="animable"
              />
              <path
                d="M34.57 336.45s1.35-7.2-14.5-9.4v18.81s14.5-3.16 14.5-9.41Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "27.3343px 336.455px",
                }}
                className="animable"
              />
              <path
                d="M34.57 336.45a3.29 3.29 0 0 1-.16 1.36 6.59 6.59 0 0 1-2.24 3.05c-2.52 2.12-6.84 4-12 5.24l-.3.07v-19.41l.28.05a38.49 38.49 0 0 1 7.39 1.78 14.7 14.7 0 0 1 5.14 3.07 6.6 6.6 0 0 1 1.93 3.39 4.32 4.32 0 0 1 .08 1.05.87.87 0 0 1-.07.35 6.11 6.11 0 0 0-2.15-4.58 14.83 14.83 0 0 0-5.12-2.87 40.09 40.09 0 0 0-7.35-1.71l.28-.24V345.86l-.3-.24c5.16-1.22 9.46-3 12-5a6.76 6.76 0 0 0 2.28-2.88 10.62 10.62 0 0 0 .31-1.29Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "27.2823px 336.465px",
                }}
                className="animable"
              />
              <ellipse
                cx={19.83}
                cy={336.29}
                rx={1.74}
                ry={9.24}
                style={{
                  fill: "#e0e0e0",
                  transformOrigin: "19.83px 336.29px",
                }}
                className="animable"
              />
              <path
                d="M18.09 336.29a7.31 7.31 0 0 1-.08-1.52 33 33 0 0 1 .26-4.15 12.54 12.54 0 0 1 .65-2.83 2.34 2.34 0 0 1 .44-.75c.08-.05.13-.12.22-.15s.21-.09.32-.05a.79.79 0 0 1 .48.28 4.55 4.55 0 0 1 .7 1.64 32.65 32.65 0 0 1 .75 7.53 32.59 32.59 0 0 1-.75 7.53 4.55 4.55 0 0 1-.7 1.64.8.8 0 0 1-.48.29c-.11 0-.21 0-.32-.05a1.77 1.77 0 0 1-.22-.16 2.3 2.3 0 0 1-.44-.74 12.74 12.74 0 0 1-.65-2.84 32.88 32.88 0 0 1-.26-4.15 7.31 7.31 0 0 1 .08-1.52 11.13 11.13 0 0 1 .13 1.52 39 39 0 0 0 .42 4.1 12.54 12.54 0 0 0 .67 2.72 2.26 2.26 0 0 0 .36.59c.15.14.2.1.36-.06a4.22 4.22 0 0 0 .59-1.46 34.32 34.32 0 0 0 .69-7.41 34.32 34.32 0 0 0-.69-7.41 4.3 4.3 0 0 0-.59-1.46c-.16-.16-.21-.19-.36-.05a2 2 0 0 0-.36.59 12.46 12.46 0 0 0-.67 2.71 38.89 38.89 0 0 0-.42 4.11 11.08 11.08 0 0 1-.13 1.51Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "19.9175px 336.288px",
                }}
                className="animable"
              />
              <g>
                <g
                  style={{
                    opacity: 0.3,
                    transformOrigin: "27.784px 333.43px",
                  }}
                  className="animable"
                >
                  <path
                    d="M23 331a1.3 1.3 0 0 1 1.6-1.57 15.86 15.86 0 0 1 6.05 3.14 6.21 6.21 0 0 1 1.62 1.77 2.47 2.47 0 0 1 .1 2.3 1.57 1.57 0 0 1-2 .71c-.59-.32-.83-1-1.2-1.6a7.62 7.62 0 0 0-2.31-2.1c-.88-.56-1.84-.85-2.74-1.34A2.38 2.38 0 0 1 23 331Z"
                    style={{
                      fill: "#fff",
                      transformOrigin: "27.784px 333.43px",
                    }}
                    className="animable"
                  />
                </g>
              </g>
              <path
                d="M24.93 329.66a6.06 6.06 0 0 1 1.79.37 11.41 11.41 0 0 1 4 2 6 6 0 0 1 2.23 3.85 2.58 2.58 0 0 1-.3 1.82 10.58 10.58 0 0 0-.07-1.76 6.12 6.12 0 0 0-2.18-3.5 13.62 13.62 0 0 0-3.78-2 7.25 7.25 0 0 1-1.69-.78Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "28.9663px 333.68px",
                }}
                className="animable"
              />
              <path
                d="M22.4 329.11c0-.14.26-.2.5-.13s.4.24.36.38-.27.19-.51.12-.4-.23-.35-.37Z"
                style={{
                  fill: "#fff",
                  transformOrigin: "22.8285px 329.231px",
                }}
                className="animable"
              />
            </g>
            <g
              id={"freepik--Sun--inject-139"}
              className="animable"
              style={{
                transformOrigin: "356.695px 109.965px",
              }}
            >
              <circle
                cx={356.37}
                cy={109.89}
                r={13.49}
                style={{
                  fill: "#ff725e",
                  transformOrigin: "356.37px 109.89px",
                  transform: "rotate(-80.82deg)",
                }}
                className="animable"
              />
              <path
                d="M354.45 140a54.4 54.4 0 0 1-.14-5.56 54.4 54.4 0 0 1 .14-5.56 54.4 54.4 0 0 1 .14 5.56 54.4 54.4 0 0 1-.14 5.56Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "354.45px 134.44px",
                }}
                className="animable"
              />
              <path
                d="M346.68 125.78c.07 0-1.2 2.36-2.83 5.19s-3 5.09-3.08 5.05 1.2-2.37 2.83-5.19 3.01-5.09 3.08-5.05Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "343.725px 130.9px",
                }}
                className="animable"
              />
              <path
                d="M338.7 120.81a28.26 28.26 0 0 1-3.15 2.69 30.82 30.82 0 0 1-3.32 2.46 30.23 30.23 0 0 1 3.15-2.68 30.67 30.67 0 0 1 3.32-2.47Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "335.465px 123.385px",
                }}
                className="animable"
              />
              <path
                d="M367.9 134.56a7.78 7.78 0 0 1-.35-1.37c-.2-.85-.47-2-.82-3.3s-.69-2.43-1-3.26a7.67 7.67 0 0 1-.38-1.36 5.63 5.63 0 0 1 .57 1.29c.31.82.69 2 1 3.26s.59 2.47.73 3.33a5.77 5.77 0 0 1 .25 1.41Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "366.625px 129.915px",
                }}
                className="animable"
              />
              <path
                d="M381.58 124.86a49.86 49.86 0 0 1-4-3.3 47.51 47.51 0 0 1-3.8-3.51 45.57 45.57 0 0 1 4 3.3 45.42 45.42 0 0 1 3.8 3.51Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "377.68px 121.455px",
                }}
                className="animable"
              />
              <path
                d="M386.82 111.52a11.25 11.25 0 0 1-1.63-.24c-1-.16-2.38-.38-3.91-.55s-2.93-.28-3.94-.35a10.82 10.82 0 0 1-1.64-.14 9.3 9.3 0 0 1 1.65-.06c1 0 2.42.09 4 .26s2.93.43 3.92.65a7.38 7.38 0 0 1 1.55.43Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "381.26px 110.844px",
                }}
                className="animable"
              />
              <path
                d="M386.83 98.4c0 .08-2.9.85-6.52 1.74s-6.56 1.53-6.58 1.45 2.9-.85 6.52-1.73 6.57-1.53 6.58-1.46Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "380.28px 99.9958px",
                }}
                className="animable"
              />
              <path
                d="M371.6 83.12c.06 0-1.33 2.27-3.12 5s-3.29 4.86-3.36 4.82 1.33-2.27 3.12-5 3.29-4.86 3.36-4.82Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "368.36px 88.03px",
                }}
                className="animable"
              />
              <path
                d="M356.47 79.93a12.43 12.43 0 0 1 0 1.85v8.92a13.58 13.58 0 0 1 0 1.85 10.32 10.32 0 0 1-.19-1.84c-.07-1.14-.12-2.72-.13-4.47s.06-3.33.12-4.47a12.61 12.61 0 0 1 .2-1.84Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "356.327px 86.24px",
                }}
                className="animable"
              />
              <path
                d="M345 94.19c-.06 0-1.49-2.16-3.17-4.92a58.18 58.18 0 0 1-2.93-5.07 58.08 58.08 0 0 1 3.17 4.92 58.18 58.18 0 0 1 2.93 5.07Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "341.95px 89.195px",
                }}
                className="animable"
              />
              <path
                d="M338.18 100a6.39 6.39 0 0 1-1.43-.22c-.88-.19-2.08-.48-3.39-.87s-2.49-.79-3.32-1.11a6.3 6.3 0 0 1-1.33-.59 8.37 8.37 0 0 1 1.39.4c.85.27 2 .64 3.34 1s2.49.71 3.35.94a10.29 10.29 0 0 1 1.39.45Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "333.445px 98.605px",
                }}
                className="animable"
              />
              <path
                d="M335.19 110.37a69.25 69.25 0 0 1-8.63.83 64.53 64.53 0 0 1 8.63-.83Z"
                style={{
                  fill: "#ff725e",
                  transformOrigin: "330.875px 110.785px",
                }}
                className="animable"
              />
            </g>
            <g
              id={"freepik--Birds--inject-139"}
              className="animable"
              style={{
                transformOrigin: "121.22px 129.92px",
              }}
            >
              <path
                d="M113.82 147.36s-.78-.27-2.22-.59a17.8 17.8 0 0 0-6.17-.24 16.65 16.65 0 0 0-8.32 3.59 17.3 17.3 0 0 0-5.87 9.32v.1l-.17.67-.26-.63a18.5 18.5 0 0 0-7-8.49 18 18 0 0 0-8.58-2.86 19 19 0 0 0-6.13.56c-1.42.37-2.17.7-2.19.66a4.35 4.35 0 0 1 .54-.26 14.59 14.59 0 0 1 1.6-.57 18.35 18.35 0 0 1 6.2-.71 18.09 18.09 0 0 1 8.75 2.83 18.86 18.86 0 0 1 7.22 8.67h-.43v-.1a17.5 17.5 0 0 1 6-9.54 16.77 16.77 0 0 1 8.54-3.58 16.94 16.94 0 0 1 6.25.38 13.7 13.7 0 0 1 1.63.51 3.09 3.09 0 0 1 .61.28Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "90.365px 153.134px",
                }}
                className="animable"
              />
              <path
                d="M175.53 113.49s-.44-.12-1.23-.28a9.94 9.94 0 0 0-3.38-.1 9.17 9.17 0 0 0-4.52 2 9.5 9.5 0 0 0-3.19 5.08v.06l-.18.66-.25-.63a10.2 10.2 0 0 0-3.82-4.63 10 10 0 0 0-4.68-1.58 10.94 10.94 0 0 0-3.36.28c-.78.19-1.19.36-1.21.32a1.56 1.56 0 0 1 .29-.16 6.82 6.82 0 0 1 .88-.33 10.05 10.05 0 0 1 8.3 1.13 10.37 10.37 0 0 1 4 4.8h-.42v-.06a9.77 9.77 0 0 1 3.37-5.3 9.41 9.41 0 0 1 8.2-1.72 5 5 0 0 1 .89.3Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "162.62px 116.818px",
                }}
                className="animable"
              />
              <path
                d="M135.18 99.63A16.21 16.21 0 0 1 134 101a29.14 29.14 0 0 0-2.89 3.91 28.51 28.51 0 0 0-4.31 15.22v.19h-.44a25.1 25.1 0 0 0-2.79-8.25 25.87 25.87 0 0 0-7.9-8.83c-.94-.65-1.48-1-1.46-1s.15 0 .41.2.67.34 1.14.66a22.7 22.7 0 0 1 3.8 3 25.28 25.28 0 0 1 4.38 5.74 25 25 0 0 1 2.86 8.38h-.45v-.2a28 28 0 0 1 4.48-15.39 25.43 25.43 0 0 1 3-3.86c.39-.43.74-.72 1-.93a1.63 1.63 0 0 1 .35-.21Z"
                style={{
                  fill: "#263238",
                  transformOrigin: "124.695px 109.975px",
                }}
                className="animable"
              />
            </g>
          </svg>);
    }
}
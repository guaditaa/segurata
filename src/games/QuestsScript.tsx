import { countLinesElement, getRandomInt, messArray, waitTo } from "../scripts/Utils";
import { QuertionsType, QuestionsFile } from "./QuestsJSON";

export default new class QuestsScript {
    constructor() {
        this.escoger_pregunta = this.escoger_pregunta.bind(this);
        this.press_button = this.press_button.bind(this);
    }
    // Elements
    private HTMLEncabezado: HTMLDivElement | undefined;
    private HTMLPuntaje: HTMLDivElement | undefined;
    private HTMLCategoria: HTMLDivElement | undefined;
    private HTMLNumero: HTMLDivElement | undefined;
    private HTMLPregunta: HTMLDivElement | undefined;
    private HTMLImagen: HTMLDivElement | undefined;
    private HTMLBoton1: HTMLDivElement | undefined;
    private HTMLBoton2: HTMLDivElement | undefined;
    private HTMLBoton3: HTMLDivElement | undefined;
    private HTMLBoton4: HTMLDivElement | undefined;
    private HTMLDialogMessage: HTMLDivElement | undefined;

    // Variables
    private preguntas_echas: number = 0;
    private preguntas_correctas: number = 0;
    private preguntas_usadas: number[] = [];
    private current_quest: number = -1;
    private disableButtons: boolean = false;

    init() {
        this.preguntas_echas = 0;
        this.preguntas_correctas = 0;
        this.preguntas_usadas = [];
        this.current_quest = -1;
        this.disableButtons = false;

        this.HTMLEncabezado = document.getElementById('encabezado') as HTMLDivElement;
        this.HTMLPuntaje = document.getElementById('puntaje') as HTMLDivElement;
        this.HTMLCategoria = document.getElementById('categoria') as HTMLDivElement;
        this.HTMLNumero = document.getElementById('numero') as HTMLDivElement;
        this.HTMLPregunta = document.getElementById('pregunta') as HTMLDivElement;
        this.HTMLImagen = document.getElementById('imagen') as HTMLDivElement;
        this.HTMLBoton1 = document.getElementById('btn1') as HTMLDivElement;
        this.HTMLBoton2 = document.getElementById('btn2') as HTMLDivElement;
        this.HTMLBoton3 = document.getElementById('btn3') as HTMLDivElement;
        this.HTMLBoton4 = document.getElementById('btn4') as HTMLDivElement;
        this.HTMLDialogMessage = document.getElementById('dialog-message') as HTMLDivElement;

        this.startEvents();
    }
    escoger_pregunta(next?: boolean) {
        var nquestion = (next)? this.preguntas_echas: 0;
        if (this.preguntas_usadas.length == QuestionsFile.length) return this.finishGame();
        while (this.preguntas_usadas.includes(nquestion)) {
            nquestion += 1;
            if (nquestion >= QuestionsFile.length) nquestion = 0;
        }
        this.preguntas_usadas.push(nquestion);
        this.preguntas_echas += 1;
        this.empezar_pregunta(nquestion);
    }
    private async finishGame() {
        const content = this.HTMLDialogMessage!.querySelector('div.content') as HTMLDivElement;
        console.log(content);
        const extraText = content.querySelector('p.extraText') as HTMLParagraphElement;
        extraText.style.display = 'block';
        extraText.innerHTML = `Correcto: ${this.preguntas_correctas}<br>Incorrecto: ${this.preguntas_echas - this.preguntas_correctas}`;
        this.showDialog(true, 'Juego finalizado');
        await waitTo(5000);
        this.showDialog(false);
        await waitTo(700);
        extraText.style.display = 'none';
        return document.dispatchEvent(new CustomEvent('reset_screen'));
    }
    private startEvents() {
        this.HTMLBoton1?.addEventListener('click', this.press_button, false);
        this.HTMLBoton2?.addEventListener('click', this.press_button, false);
        this.HTMLBoton3?.addEventListener('click', this.press_button, false);
        this.HTMLBoton4?.addEventListener('click', this.press_button, false);
    }
    private empezar_pregunta(index: number) {
        this.resetButtons();

        this.HTMLEncabezado!.style.height = '50%';
        this.HTMLImagen!.style.top = '84px';
        this.HTMLImagen!.classList.remove('without');

        this.current_quest = index;
        const question = QuestionsFile[index];
        this.HTMLCategoria!.innerHTML = question.categoria;
        this.HTMLPregunta!.innerHTML = question.pregunta;
        this.HTMLNumero!.innerHTML = `${(index + 1).toString()}/${QuestionsFile.length}`;

        const lines = countLinesElement(this.HTMLPregunta!);
        this.HTMLEncabezado!.style.height = `${this.HTMLEncabezado!.clientHeight + (lines * 20)}px`;
        const actualTop = parseFloat(this.HTMLImagen!.style.top.replace('px', ''));
        this.HTMLImagen!.style.top = `${actualTop + ((lines - 1) * 30)}px`;
        
        if (question.imagenID !== 'none')
            this.HTMLImagen!.style.backgroundImage = `url("${question.imagenID}")`;
        else
            this.HTMLImagen?.classList.add('without');
        
        this.iniciarRespuestas(question);
    }
    private iniciarRespuestas(question: QuertionsType) {
        const buttons: (string | undefined)[] = [question.incorrecta1, question.incorrecta2, question.incorrecta3, question.respuesta];
        const final: (string | undefined)[] = messArray(buttons);
        final.forEach((value, index)=>{
            const element = this.getElementButton(index + 1);
            if (value == undefined) return element.style.height = '0px';
            element.innerHTML = value;
            element.style.height = '60px';
        });
    }
    private getElementButton(index: number): HTMLDivElement {
        switch (index) {
            case 1:
                return this.HTMLBoton1!;
            case 2:
                return this.HTMLBoton2!;
            case 3:
                return this.HTMLBoton3!;
            case 4:
                return this.HTMLBoton4!;
            default:
                return this.HTMLBoton1!;
        }
    }
    private press_button(ev: MouseEvent) {
        if (this.disableButtons) return;
        this.disableButtons = true;
        const buttonQuest = ev.target as HTMLDivElement;
        const correct = QuestionsFile[this.current_quest].respuesta;
        var result = 'INCORRECTO :(';
        if (buttonQuest.innerHTML == correct) {
            result = 'CORRECTO';
            this.preguntas_correctas += 1;
            buttonQuest.style.background = 'linear-gradient(to bottom, #00ff00 5%, #00b900 100%)';
        } else {
            buttonQuest.style.background = 'linear-gradient(to bottom, #ff0000 5%, #b90000 100%)';
            for (let i = 1; i < 5; i++) {
                const element = this.getElementButton(i);
                if (element.innerHTML == correct) {
                    element.style.background = 'linear-gradient(to bottom, #00ff00 5%, #00b900 100%)';
                    break;
                }
            }
        }
        setTimeout(()=>this.showDialog(true, result), 1000);
        setTimeout(()=>this.showDialog(false), 3000);
        setTimeout(()=>this.escoger_pregunta(true), 4000);
    }
    private resetButtons() {
        this.disableButtons = false;
        for (let i = 1; i < 5; i++) {
            const element = this.getElementButton(i);
            element.style.background = 'linear-gradient(to bottom, #f6b03f 5%, #998746 100%)';
        }
    }
    private showDialog(visible: boolean, text?: string) {
        const content = this.HTMLDialogMessage!.querySelector('div.content') as HTMLDivElement;
        if (!visible) {
            this.HTMLDialogMessage!.style.opacity = '0';
            content.style.transform = 'translateY(-100px)';
            setTimeout(() => {
                this.HTMLDialogMessage!.style.height = '0%';
                content.style.transform = 'translateY(100px)';
            }, 550);
            return;
        }
        this.HTMLDialogMessage!.style.height = '100%';
        this.HTMLDialogMessage!.style.opacity = '1';
        content.style.transform = 'translateY(0px)';
        const textTitle = content.querySelector('p.title') as HTMLParagraphElement;
        textTitle.innerText = text!;
    }
}
export function waitTo(time: number): Promise<void> {
    return new Promise((resolve)=>setTimeout(resolve, time));
}
export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
export function generateRandomExclude(min: number, max: number, exclude: number[]): number {
    var random;
    while (!random) {
        const x = getRandomInt(min, max);
        if (exclude.indexOf(x) === -1) random = x;
    }
    return random;
}
export function messArray(unArray: any[]){
    var t = unArray.sort((a, b)=>(Math.random() - 0.5));
    return [...t];
}
export function countLinesElement(target: HTMLElement) {
    var style = window.getComputedStyle(target, null);
    var height = parseInt(style.getPropertyValue("height"));
    var font_size = parseInt(style.getPropertyValue("font-size"));
    var line_height = parseInt(style.getPropertyValue("line-height"));
    var box_sizing = style.getPropertyValue("box-sizing");
    if(isNaN(line_height)) line_height = font_size * 1.2;
    if(box_sizing=='border-box') {
      var padding_top = parseInt(style.getPropertyValue("padding-top"));
      var padding_bottom = parseInt(style.getPropertyValue("padding-bottom"));
      var border_top = parseInt(style.getPropertyValue("border-top-width"));
      var border_bottom = parseInt(style.getPropertyValue("border-bottom-width"));
      height = height - padding_top - padding_bottom - border_top - border_bottom
    }
    var lines = Math.ceil(height / line_height);
    return lines;
}
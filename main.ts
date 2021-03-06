/**
 * 変換処理を実行する.
 */
function execute():void{
    const spaceNumHtml:HTMLInputElement = <HTMLInputElement> document.getElementById("spaceNum");
    const spaceNum:number = Number(spaceNumHtml.value);
    const inputTextHtml:HTMLInputElement = <HTMLInputElement> document.getElementById("inputTextarea");
    const inputText:string = inputTextHtml.value;
    const inputTexts:string[] = inputText.split("\n");
    const maxLength = getMaxLength(inputTexts);

    for (let i = 0; i < inputTexts.length; i++){
        let space:string = " ".repeat((maxLength-inputTexts[i].length)+spaceNum);
        inputTexts[i] = inputTexts[i]+space;
    }
    let outputTextarea:HTMLInputElement = <HTMLInputElement>document.getElementById("outputTextarea");
    outputTextarea.value = inputTexts.join("\n");
}

/**
 * 文字列のリストから最大の長さを持つ要素の長さを返す.
 * @param inputTexts 文字列のリスト
 */
function getMaxLength(inputTexts:string[]):number{
    let maxLength:number = 0;
    for (let i = 0; i < inputTexts.length; i++){
        if (inputTexts[i].length > maxLength){
            maxLength = inputTexts[i].length;
        }
    }
    return maxLength;
}
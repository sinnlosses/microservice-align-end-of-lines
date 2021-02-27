/**
 * 
 */
function execute(){
    const spaceNum = Number(document.getElementById("spaceNum").value);
    const inputText = document.getElementById("inputTextarea").value;
    const inputTexts = inputText.trim().split('\n');
    const maxLength = getMaxLength(inputTexts);

    for (let i = 0; i < inputTexts.length; i++){
        let space = " ".repeat((maxLength-inputTexts[i].length)+spaceNum)
        inputTexts[i] = inputTexts[i]+space;
    }
    document.getElementById("outputTextarea").value = inputTexts.join("\n");
}

/**
 * 文字列のリストから最大の長さを持つ要素の長さを返す.
 * @param {文字列のリスト} inputTexts 
 */
function getMaxLength(inputTexts){
    let maxLength = 0;
    for (let i = 0; i < inputTexts.length; i++){
        if (inputTexts[i].length > maxLength){
            maxLength = inputTexts[i].length;
        }
    }
    return maxLength;
}
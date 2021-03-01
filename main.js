/**
 * 変換処理を実行する.
 */
function execute() {
    var spaceNumHtml = document.getElementById("spaceNum");
    var spaceNum = Number(spaceNumHtml.value);
    var inputTextHtml = document.getElementById("inputTextarea");
    var inputText = inputTextHtml.value;
    var inputTexts = inputText.split("\n");
    var maxLength = getMaxLength(inputTexts);
    for (var i = 0; i < inputTexts.length; i++) {
        var space = " ".repeat((maxLength - inputTexts[i].length) + spaceNum);
        inputTexts[i] = inputTexts[i] + space;
    }
    var outputTextarea = document.getElementById("outputTextarea");
    outputTextarea.value = inputTexts.join("\n");
}
/**
 * 文字列のリストから最大の長さを持つ要素の長さを返す.
 * @param inputTexts 文字列のリスト
 */
function getMaxLength(inputTexts) {
    var maxLength = 0;
    for (var i = 0; i < inputTexts.length; i++) {
        if (inputTexts[i].length > maxLength) {
            maxLength = inputTexts[i].length;
        }
    }
    return maxLength;
}

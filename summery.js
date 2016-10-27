var text = "hi, i love chocolate. no, i hate chocolate. really, i love eating chocolate a lot.";
var sentences = text.split('.').filter((sentence) => sentence.length > 0);
console.log(sentences);
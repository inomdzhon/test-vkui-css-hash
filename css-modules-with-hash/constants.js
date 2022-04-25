function shortBemName(bemName) {
  function strToThreeChar(str) {
    const length = str.length;
    if (length < 3) {
      return str;
    }

    const arrStr = str.split("");
    const firstChar = arrStr[0];
    const middleChar = arrStr[Math.floor((length - 1) / 2)];
    const lastChar = arrStr[length - 1];

    return `${firstChar}${middleChar}${lastChar}`;
  }

  return bemName
    .toLowerCase()
    .replace(/([^__|\-\-]*)(.*)/, function replacer(match, p1, p2) {
      const shortedBlockName = strToThreeChar(p1);
      const result = [shortedBlockName];

      if (p2 && /^__|\-\-/.test(p2)) {
        const shortedValue = p2
          // Исключаем префикс __ и --
          .substring(2)
          .split("-")
          .map(strToThreeChar)
          .join("");
        result.push(shortedValue);
      }

      return result.join("");
    });
}

module.exports.generateScopedName = function (originName) {
  if (originName.startsWith("vkui") || originName === "mount") {
    return originName;
  }
  const shortedName = shortBemName(originName);
  return `vkui${shortedName}`;
};

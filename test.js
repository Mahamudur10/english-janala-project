const createElement = (arr) => {
    const htmlElement = arr.map((el) => `<span class="btn">${el}</span>`);
    console.log(htmlElement.join(" "));
};

const synonyms = ["hellow","hi","konnichiwa"];
createElement(synonyms);
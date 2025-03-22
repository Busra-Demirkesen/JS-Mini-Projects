const getElem = (id) => document.getElementById(id);

function app(state, output, dispatch) {
  //state bir dizi
  //output: DOM öğesi — Mesajların ekleneceği HTML elementi.

  append(view(state), output);

  dispatch = (e) => {
    const newText = getText();
    const newState = [...state, newText];

    app(newState,output,dispatch);
  };
}

function view(state) {
  const el = elem("div");

  return R.pipe(
    ...state.map((content, index) => append(message(content, index)))
  )(elem("div"));
}

function message(content, index) {
  return R.compose(
    append(text(content)),
    attr("data-index", index),
    addClass("bg-light"),
    addClass("p-2")
  )(elem("div"));
}

app(
  Object.freeze(["This is the first message", "Second message"]),
  getElem("message-list") // HTMLdeki listeleme divimiz.
);

const getText = () => getElem("message-text").value;

const on = R.curry(function (eventType, element, fn) {
  element.eventListener(eventType, fn);
});

const buttonClick = on("click", getElem("message-button"));

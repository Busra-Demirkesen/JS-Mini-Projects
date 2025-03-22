/*

(new Element('div'))
    .addClass('css-class')
    .appendClass('another-class')
    .append(new Text('content to display'));

    append(new Text ('content to display'), addClass('another-class' , addClass('css-elem', elem)))



//React Redux gibi yapılarda genellikle fonksiyonel programlama görülür.Fonksiyonel programlamada kullanılan bir yapı da compose yapısıdır.Genellikle sağdan sola doğru okunur.yani bu durumda en alttaki fonksiyon en önce calıştırılmış olur.Yani ilk önce elem elemanına css-class clasını ekleyecektir.




    compose(
        append(new Text('content to display'),elem),
        addClass('another-class', elem),
        addClass('css-class',elem)
    )(elem)


//Burada da akış soldan sağa olur yani en üstteki fonksiyon ilk önce çağırılır.
    pipe(
        addClass('css-class',elem),
        addClass('another-class',elem),
        append(new Text('content to display'),elem)

    )


    */





const elem = (tag) => document.createElement(tag);
const text = (content) => document.createTextNode(content);



/*Curry, bir fonksiyonu tek seferde değil, adım adım çağırmaya izin verir.
Bu sayede aynı fonksiyonu tekrar tekrar kullanmak kolaylaşır.*/
const append = R.curry(function (node, element) {
  element.appendChild(node);

  return element;
});

const addClass = R.curry(function (className, element) {
  element.classList.add(className);

  return element;
});

const attr = R.curry(function (attributeName, attributeValue, element) {
  element.setAttribute(attributeName, attributeValue);
  return element;
});





document.body.appendChild(message('This is some text'));

const el = R.compose(
  append(text("Our Message")),
  attr("data-message", "whatever"),
  addClass("bg-light"),
  addClass("p-2") // compose olduğu için önce p-2 classını ekledi
)(elem("div"));

const setDataId = attr("data-id");

document.body.appendChild(el);

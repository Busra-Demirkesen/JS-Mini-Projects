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
import { Stack } from "./estruturas.js";
import { baseConverter } from "./algoritmos.js";

//  ALGORITMOS  -   CONVERSOR BASE DECIMAL-N
$('#conversor-article div').empty()
$('#conversor-article div').append(`
    <ul class="list-disc list-inside text-sm py-2 bg-sky-200">
        <li>100345 -> base2 = <strong>${baseConverter(100345)}</strong></li>
        <li>100345 -> base8 = <strong>${baseConverter(100345, 8)}</strong></li>
        <li>100345 -> base16 = <strong>${baseConverter(100345, 16)}</strong></li>
        <li>100345 -> base35 = <strong>${baseConverter(100345, 35)}</strong></li>
        <li><input type="number" id="conversor-article-number" min="0" class="max-w-20 bg-orange-100 pl-1"> -> <input type="number" id="conversor-article-base" min="2" max="36" class="bg-orange-100 pl-1"> = <strong><span id="conversor-article-span">???</span></strong> <input type="button" id="conversor-article-button" value="Aleluia Glória a Deus" class="bg-orange-200 active:bg-orange-100 px-2 font-bold"></li>
    </ul>
`)
$('#conversor-article-button').on('click', function (event) {
    event.preventDefault()
    const number = $('#conversor-article-number').val()
    const base = $('#conversor-article-base').val()

    let convertido = baseConverter(number, base)
    convertido = convertido ? convertido : '???'
    
    $('#conversor-article-span').empty()
    $('#conversor-article-span').append(convertido)
})

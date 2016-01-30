/// <reference path="../defs/jquery.d.ts"/>

const imgPath = '../images/';
const $immaginiSelect = $('#immagine');
const $addFilterButton = $('#aggiungiFiltro');
const $filtersContainer = $('#filtri');
const $generateButton = $('#genera');
const canvas = <HTMLCanvasElement>document.getElementById('canvas');


$.get('/images').then(images => {
    images.forEach(name => $immaginiSelect.append(
        `<option value="${imgPath + name}">${name}</option>`
    ));
});


$addFilterButton.click(event => {
    event.preventDefault();
    var newFilter = $('<select></select>');
    for (let key of Object.keys(filters))
        newFilter.append(`<option value="${key}">${key}</option>`);

    let filterContainer = $('<div></div>');
    filterContainer.addClass('filtro');

    let removeBtn = $('<a href="#"><i class="remove icon"></i></a>');
    removeBtn.click(function(e) {
        e.preventDefault();
        filterContainer.remove();
    });

    filterContainer.append(newFilter);
    filterContainer.append(removeBtn);

    $filtersContainer.append(filterContainer);
});

$generateButton.click(event => {
    event.preventDefault();
    var filtersToApply = [];
    $filtersContainer.find('.filtro').each((index, elem) =>
        filtersToApply.push(filters[$(elem).val()])
    );
    applyFilters(filtersToApply.reverse(), $immaginiSelect.val());
});

function applyFilters(filters:any, url:string):void {
    var img:HTMLImageElement = new Image();
    img.onload = function ():void {
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.getContext('2d').drawImage(img, 0, 0);
        var localFilter = filters.pop();
        localFilter(canvas);
        if (filters.length > 0)
            applyFilters(filters, canvas.toDataURL());
    };
    img.src = url;
}

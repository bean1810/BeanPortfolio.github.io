"use strict";


let LocDau = {

    LocdauFunc: function (str) {
        str = str.toLowerCase();

        str = str.replace(/(å|ä|ā|à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|ä|ą)/g, 'a');
        str = str.replace(/(ß|ḃ)/g, "b");
        str = str.replace(/(ç|ć|č|ĉ|ċ|¢|©)/g, 'c');
        str = str.replace(/(đ|ď|ḋ|đ)/g, 'd');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ę|ë|ě|ė)/g, 'e');
        str = str.replace(/(ḟ|ƒ)/g, "f");
        str = str.replace(/ķ/g, "k");
        str = str.replace(/(ħ|ĥ)/g, "h");
        str = str.replace(/(ì|í|î|ị|ỉ|ĩ|ï|î|ī|¡|į)/g, 'i');
        str = str.replace(/ĵ/g, "j");
        str = str.replace(/ṁ/g, "m");

        str = str.replace(/(ö|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ö|ø|ō)/g, 'o');
        str = str.replace(/ṗ/g, "p");
        str = str.replace(/(ġ|ģ|ğ|ĝ)/g, "g");
        str = str.replace(/(ü|ù|ú|ū|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ü|ų|ů)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ|ÿ)/g, 'y');
        str = str.replace(/(ń|ñ|ň|ņ)/g, 'n');
        str = str.replace(/(ŝ|š|ś|ṡ|ș|ş|³)/g, 's');
        str = str.replace(/(ř|ŗ|ŕ)/g, "r");
        str = str.replace(/(ṫ|ť|ț|ŧ|ţ)/g, 't');

        str = str.replace(/(ź|ż|ž)/g, 'z');
        str = str.replace(/(ł|ĺ|ļ|ľ)/g, "l");
        str = str.replace(/(ẃ|ẅ)/g, "w");

        str = str.replace(/æ/g, "ae");
        str = str.replace(/þ/g, "th");
        str = str.replace(/ð/g, "dh");
        str = str.replace(/£/g, "pound");
        str = str.replace(/¥/g, "yen");

        str = str.replace(/ª/g, "2");
        str = str.replace(/º/g, "0");
        str = str.replace(/¿/g, "?");

        str = str.replace(/µ/g, "mu");
        str = str.replace(/®/g, "r");

        str = str.replace(/!|@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|\\|,|\.|\:|\'| |\"|\&|\#|\[|\]|~/g, "-");
        str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1-
        str = str.replace(/^\-+|\-+$/g, "");//cắt bỏ ký tự - ở đầu và cuối chuỗi

        return str;
    }
};
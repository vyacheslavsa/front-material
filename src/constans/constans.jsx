export const Element_Pages = 12;

export const noImage = "https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png"

export const CarInfo = [
    {
        url:'https://www.avtovzglyad.ru/media/article/2021/04/19/VAZ_2101.jpg.740x555_q85_box-28%2C0%2C1132%2C828_crop_detail_upscale.jpg',
        name: '«Жигули» ВАЗ-2101',
        id: 1
    },
    {
        url:'https://www.zr.ru/d/story/3a/915514/000-vaz-2102-_zr_01.jpg',
        name: '«Жигули» ВАЗ-2102',
        id: 2
    },
    {
        url:'https://autoiwc.ru/images/lada/vaz-2103.jpg',
        name: '«Жигули» ВАЗ-2103',
        id: 3
    },
    {
        url:'https://s.auto.drom.ru/i24250/c/photos/fullsize/lada/2104/lada_2104_977983.jpg',
        name: '«Жигули» ВАЗ-2104',
        id: 4
    },
    {
        url: 'https://a.d-cd.net/b-AAAgOC0eA-960.jpg',
        name: '«Жигули» ВАЗ-2105',
        id: 5
    },
    {
        url:'https://wroom.ru/i/cars2/lada_2106_1.jpg',
        name: '«Жигули» ВАЗ-2106',
        id: 6
    },
    {
        url:'https://kolesospec.ru/wp-content/uploads/2019/10/Avto.jpg',
        name: '«Жигули» ВАЗ-2107',
        id: 7
    },
    {
        url:'https://autoreview.ru/images/Article/1562/Article_156201_860_575.jpg',
        name: 'ВАЗ-2108',
        id: 8
    },
    {
        url: 'https://wroom.ru/i/cars2/lada_2109_1.jpg',
        name: 'ВАЗ-2109',
        id: 9
    },
    {
        url: 'https://kolesa-uploads.ru/-/20a5deff-dbac-410d-9c0f-69925d301a88/samara0.jpg',
        name: 'ВАЗ-21099',
        id: 10
    },
    {
        url:'https://auto.ironhorse.ru/wp-content/uploads/2009/02/2110.jpg',
        name: 'ВАЗ-2110',
        id: 11
    },
    {
        url: 'https://quto.ru/service-imgs/4c/bd/a5/8c/4cbda58cad8ad.jpeg',
        name: 'ВАЗ-2111',
        id: 12
    },
    {
        url:'https://avatars.mds.yandex.net/get-verba/216201/2a000001609a350783de0d3a8c593d7f8dd0/cattouchret',
        name: 'ВАЗ-2112',
        id: 13
    },
    {
        url:'https://avatars.mds.yandex.net/get-verba/787013/2a000001609d1344680d5a3c57f1dc42513e/cattouch',
        name: 'ВАЗ-2113',
        id: 14
    },
    {
        url:'https://wroom.ru/i/cars2/lada_2114_1.jpg',
        name: 'ВАЗ-2114',
        id: 15
    },
    {
        url:'http://avatars.mds.yandex.net/get-verba/787013/2a000001609d341aeef60be4fac88e7821f4/cattouchretcr',
        name: 'ВАЗ-2115',
        id: 16
    }
];

export const carInfoCalculate = (array) => {
    let count = 0
    let countnum = 1
    for (let i = 0; i < array.length; i++) {
        array[i].numberPage = countnum
        count++
        if(count === Element_Pages){
            count = 0
            countnum++
        }
    }
    return {
        'number_pages':countnum,
        'info': array
    }
}


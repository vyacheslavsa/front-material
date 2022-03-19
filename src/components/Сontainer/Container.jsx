import React from 'react';
import Card from "../Card/Card";
import style from "./Container.module.scss"

function Container({CarInfo,currentPage,openModal}) {

    console.log(CarInfo)


    return (
        <div className={style.container}>
            {CarInfo.info.map((item,i) => currentPage === item.numberPage && <Card info={item} key={`key-${i}`}  />
            )}
            <button onClick={openModal}>click</button>
        </div>

    );
}

export default Container;
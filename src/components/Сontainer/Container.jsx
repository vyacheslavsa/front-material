import React from 'react';
import Card from "../Card/Card";
import style from "./Container.module.scss"

function Container({CarInfo,currentPage,openModal}) {

    const getParameters = (value) => {
        openModal()
        console.log(value)
    }

    return (
        <div className={style.container}>
            {CarInfo.info.map((item,i) => currentPage === item.numberPage &&
                <div onClick={()=>getParameters(item)} key={`key-${i}`}>
                    <Card info={item}/>
                </div>
            )}
        </div>

    );
}

export default Container;
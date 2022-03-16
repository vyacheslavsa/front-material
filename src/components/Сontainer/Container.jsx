import React from 'react';
import Card from "../Card/Card";
import style from "./Container.module.scss"
import {CarInfo} from "../../constans/constans";

function Container() {


    return (
        <div className={style.container}>
            {CarInfo.map((item,i)=>
                (
                    <Card
                        info = {item}
                        key={`key-${i}`}
                    />
                )
            )}
        </div>
    );
}

export default Container;
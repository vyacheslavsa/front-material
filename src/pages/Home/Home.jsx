import React, { useMemo, useState} from 'react';
import Header from "../../components/Header/Header";
import Container from "../../components/Сontainer/Container";
import PaginationOutlined from "../../components/Pagination/PaginationOutlined";
import {CarInfo,carInfoCalculate} from "../../constans/constans";

function Home() {

    const Calculate = useMemo(()=>{
        return  carInfoCalculate(CarInfo)
    },[])

    const [currentPage,setCurrentPage] = useState(1)
    // const [ scrollTop,setScrollTop ] = useState(0)


    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div>
          <Header/>
          <Container CarInfo={Calculate} currentPage={currentPage}/>
          <PaginationOutlined CarInfo={Calculate} handleChange={handleChange} currentPage={currentPage}/>
        </div>
    );
}

export default Home;
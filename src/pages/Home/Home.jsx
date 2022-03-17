import React, {useState} from 'react';
import Header from "../../components/Header/Header";
import Container from "../../components/Сontainer/Container";
import PaginationOutlined from "../../components/Pagination/PaginationOutlined";
import {carInfoCalculate} from "../../constans/constans";

function Home() {

    const [currentPage,setCurrentPage] = useState(1)
    const handleChange = (event, value) => {
        setCurrentPage(value);
    };
    return (
        <div>
          <Header/>
          <Container CarInfo={carInfoCalculate} currentPage={currentPage}/>
          <PaginationOutlined CarInfo={carInfoCalculate} handleChange={handleChange} currentPage={currentPage}/>
        </div>
    );
}

export default Home;
import React, {useEffect, useMemo, useState} from 'react';
import Header from "../../components/Header/Header";
import Container from "../../components/Сontainer/Container";
import PaginationOutlined from "../../components/Pagination/PaginationOutlined";
import {CarInfo,carInfoCalculate} from "../../constans/constans";
import CustomizedDialogs from "../../components/CustomizedDialogs/CustomizedDialogs";

function Home() {

    const [currentPage,setCurrentPage] = useState(1)
    const [openModal,setOpenModal] = useState(false)



    const Calculate = useMemo(()=>carInfoCalculate(CarInfo),[])//расчитываем для каждого элемента номер страницы на которой он будет находиться
    const handleChange = (event, value) => setCurrentPage(value);//функция которая меняет страницу

    // этот код меняет поведение прокрутки на "smooth"
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    },[currentPage])

    return (
        <div>
          <Header/>
          <Container CarInfo={Calculate} currentPage={currentPage} openModal={()=>{setOpenModal(true)}}/>
          <PaginationOutlined CarInfo={Calculate} handleChange={handleChange} currentPage={currentPage}/>
          <CustomizedDialogs openModal={openModal} closeModal={()=>{setOpenModal(false)}}/>
        </div>
    );
}

export default Home;
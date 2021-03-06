import React, { useEffect, useMemo, useState } from 'react';
import Header from "../../components/Header/Header";
import Container from "../../components/Сontainer/Container";
import PaginationOutlined from "../../components/Pagination/PaginationOutlined";
import { CarInfo, carInfoCalculate } from "../../constans/constans";
import CustomizedDialogs from "../../components/CustomizedDialogs/CustomizedDialogs";

function Home() {

    const [currentPage, setCurrentPage] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [currentAutoMoadal, setCurrentAutoMoadal] = useState({});

    const Calculate = useMemo(() => carInfoCalculate(CarInfo), [])//расчитываем для каждого элемента номер страницы на которой он будет находиться
    const handleChange = (event, value) => setCurrentPage(value);//функция которая меняет страницу

    // этот код меняет поведение прокрутки на "smooth"
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [currentPage])

    return (
        <>
            <Header /> {/* Шапка */}
            <Container CarInfo={Calculate} currentPage={currentPage} openModal={() => { setOpenModal(true) }} infoModal={setCurrentAutoMoadal} /> {/* Сонтейнер с карточками */}
            <PaginationOutlined CarInfo={Calculate} handleChange={handleChange} currentPage={currentPage} /> {/* Пагинация */}
            <CustomizedDialogs openModal={openModal} closeModal={() => { setOpenModal(false) }} currentAuto={currentAutoMoadal} /> {/* Модалка */}
        </>
    );
}

export default Home;
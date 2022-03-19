import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import style from './PaginationOutlined.module.scss'

export default function PaginationOutlined({ CarInfo, handleChange, currentPage }) {
    return (
        <Stack spacing={2} className={style.pagination} >
            <Pagination count={CarInfo.number_pages} variant="outlined" color="primary" defaultPage={1} page={currentPage} onChange={handleChange} />
        </Stack>
    );
}
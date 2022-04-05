import React from 'react'
import Pagination from '@mui/material/Pagination';


function AppPagination(props) {

    function handleChange(page) {
        props.setPage(page)
        window.scroll(0, 0)
    }

    return (
        <div className="app-pagination-container">
            <div className="app-pagination">
                <Pagination 
                    size='medium'
                    variant="outlined" 
                    count={props.pageCount}
                    onChange={(event) => handleChange(event.target.textContent)}
                />
            </div>
        </div>
    )
}

export default AppPagination
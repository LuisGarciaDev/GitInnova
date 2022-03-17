import React from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import ReactPaginate from 'react-paginate';


const TableData = ({ data, repositories }) => {

    /* const [itemsPerPage, setItemsPerPage] = useState({})

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    /*   const handlePageClick = (data) => {
          console.log(data)
      } */

    /* useEffect(() => {
        console.log('pruebaa')
        setItemsPerPage(4)
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(repositories.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(repositories.length / itemsPerPage));

    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % repositories.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };  */

    return (
        <div className='container m-5'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Lenguage</th>
                        <th>Url Git</th>
                        <th>Repositorios</th>
                    </tr>
                </thead>
                <tbody>
                    {repositories.map(e => (
                        <tr key={e.name}>

                            <td>{data.name}</td>
                            <td>{data.bio}</td>
                            <td>{e.language}</td>


                            <td>{data.html_url}</td>
                            <td><Link to={e.html_url}>{e.name}
                            </Link></td>
                            <td>{e.usuariogit}</td>
                        </tr>
                    )
                    )}
                </tbody>

            </Table>
           {/*  <div>
                <ReactPaginate previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                    renderOnZeroPageCount={null}


                />

            </div> */}
        </div >

    );
};

export default TableData
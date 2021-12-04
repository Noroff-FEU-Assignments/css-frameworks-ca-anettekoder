import React from "react";
import { Pagination } from "react-bootstrap";
import styled from "styled-components";

const PaginationStyles = styled.div`


.pagination {

    padding: 20px 0;
  
    
  }

.page-link {    
  width: 53px;
  height: 48px !important;
  border-color: #E92569 !important;
  color: #E92569;

  
  }

  .active .page-link {
    background-color: #E92569 !important;
    color: white;
  }

    
  }


`;
export const NewsPagination = () => (
  <PaginationStyles>
    <Pagination class="pagination">
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
    </Pagination>
  </PaginationStyles>
);

import styled from "styled-components";
import { MdDelete, MdUpdate } from "react-icons/md";

export const Delete = styled(MdDelete)`
  color: var(--white);

  &:hover {
    color: var(--primary);
    transition: color 0.3s;
  }
`;

export const Update = styled(MdUpdate)`
  color: var(--white);

  &:hover {
    color: var(--primary);
    transition: color 0.3s;
  }
`;

export const TableStyle = styled.table`
  margin-top: 30px;
  width: 450px;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 10px;

  td {
    text-align: center;
    padding: 5px;
  }

  a {
    cursor: pointer;
  }

  input.Categoria {
    background: #53585d;
    color: #f5f5f5;
    width: 250px;
    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #53585d;
    resize: none;
    border-radius: 4px;
    transition: border-color 0.3s;

    &:focus {
      border-bottom-color: var(--primary);
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

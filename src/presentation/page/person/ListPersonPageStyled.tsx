import styled from "styled-components";

export const ListPersonPageStyled = styled.div`
  padding-top: 100px;

  background-color: #f4f4f9;
  min-height: 100vh;
  padding: 20px;

  .title-page {
    text-align: center;
    margin-bottom: 20px;

    h3 {
      font-size: 24px;
      font-weight: bold;
      color: #4c4c6d;
      position: relative;
      display: inline-block;
      padding-bottom: 5px;

      &::after {
        content: "";
        position: absolute;
        width: 50%;
        height: 3px;
        background-color: #6c63ff;
        bottom: 0;
        left: 25%;
      }
    }
  }

  .filter-section {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;

    .btn-add {
      background-color: #6c63ff;
      color: #fff;
      padding: 10px 15px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #5a55d9;
      }

      svg {
        font-size: 16px;
      }
    }
  }

  .table-container {
    display: flex;
    justify-content: center;

    .card {
      border: none;
      border-radius: 12px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      width: 100%;
      max-width: 1200px;

      .card-header {
        background-color: #6c63ff;
        color: #fff;
        font-weight: bold;
        text-align: center;
        padding: 15px;
        font-size: 18px;
      }

      .card-body {
        padding: 20px;

        .table {
          width: 100%;
          border-collapse: collapse;

          th {
            background-color: #f8f9fa;
            text-align: left;
            padding: 10px;
            font-size: 16px;
            font-weight: bold;
            color: #4c4c6d;
          }

          td {
            padding: 10px;
            border-bottom: 1px solid #e6e6e6;
          }

          tr:hover {
            background-color: #f1f1f9;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

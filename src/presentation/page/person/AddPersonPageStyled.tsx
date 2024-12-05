import styled from "styled-components";

export const AddPersonPageStyled = styled.div`
  padding-top: 100px;

  .title-page {
    text-align: center;
    margin-bottom: 20px;
    h3 {
      color: #007bff;
      font-weight: bold;
    }
  }

  .form-container {
    display: flex;
    justify-content: center;

    .form-card {
      width: 100%;
      max-width: 800px;
      border: none;
      border-radius: 8px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    .section-header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      .icon {
        font-size: 1.5rem;
        color: #007bff;
        margin-right: 8px;
      }

      h6 {
        font-weight: bold;
        color: #007bff;
        margin: 0;
      }
    }

    .form-actions {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      button {
        display: flex;
        align-items: center;

        svg {
          margin-right: 8px;
        }
      }
    }
  }
`;

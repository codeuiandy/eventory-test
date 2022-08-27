import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 30px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  .form {
    display: flex;
    flex-direction: column;
    width: 30%;
    border-radius: 4px;
    border: 1px solid var(--primary);
    margin-right: 15px;
    margin-bottom: 15px;
    @media (max-width: 1127px) {
      width: 48%;
    }
    @media (max-width: 857px) {
      width: 100%;
    }
    .header {
      background: rgba(211, 211, 211, 0.55);
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
    }

    .inputCont {
      padding-left: 20px;
      padding-right: 20px;
      margin-bottom: 12px;
    }
  }
  .removeBorder {
    padding-right: 0 !important;
  }
  .borderNone {
    border: none !important;
  }
  .btn {
    background: var(--primary);
    border-radius: 6px;
  }
  .btnClass {
    color: #fff !important;
  }
  .delBtn {
    cursor: pointer;
    padding: 2px;
    background: #fff;
    border-radius: 3px;
    color: #000;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Wrapper;

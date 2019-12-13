import styled from "styled-components"
import * as V from "../../styles/variables"

export const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;
  }
  .ais-SearchBox {
    padding-top: 6rem;
  }
  .ais-Stats {
    color: #8899a6;
  }
  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid #38444d;
    color: #8899a6;
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;
    &::placeholder {
      color: #8899a6;
    }
    &:focus {
      outline: none;
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`

import styled from 'styled-components'

const StyleCommonButton = styled.div.attrs(() => ({ tabIndex: 0 }))`
  &.add {
    margin-left: 970px;
    padding: var(--padding-x-sm);
    width: 30px;
    border-radius: 8px;
    color: var(--cl--white-100);
    background-color: var(--cl--light-blue-100);
    font-size: var(--font-size-2xlg);
    &:hover {
      background-color: var(--cl--light-pink-300);
      color: var(--cl--white-100);
    }
  }

  &.edit {
    position: absolute;
    font-size: var(--font-size-3xl);
    color: var(--cl--light-yellow-100);
    border: none;
    cursor: pointer;
  }

  &.delete {
    font-size: var(--font-size-3xl);
    color: var(--cl--red-200);
    margin-left: var(--margin-x6x-lg);
    border: none;
    cursor: pointer;
  }
`
export { StyleCommonButton }

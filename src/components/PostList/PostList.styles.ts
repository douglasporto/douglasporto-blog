import { Flex, GridItem } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { US } from 'country-flag-icons/react/3x2'
import { BR } from 'country-flag-icons/react/3x2'

import theme from 'styles/theme'

export const List = styled.ol`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
export const PostItem = styled.li<{ colorMode?: 'dark' | 'light' }>`
  font-family: 'Fira Code', monospace, arial;
  display: block;
  position: relative;
  cursor: pointer;

  padding: 15px 0;
  &:before {
    color: ${({ colorMode }) =>
      colorMode === 'dark'
        ? theme.colors.primary.main
        : theme.colors.pink[700]};
    content: '~/';
  }
  &:not(:last-child) {
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        to right,
        #1f1e1e 25%,
        transparent 25%,
        transparent 75%,
        #1f1e1e 75%
      );
      background-size: 15px;
      background-position: calc(-15px / 1.5);
    }
  }
`

export const PostPath = styled.span<{ colorMode?: 'dark' | 'light' }>`
  color: ${({ colorMode }) =>
    colorMode === 'dark' ? theme.colors.primary.main : theme.colors.pink[700]};
  &:after {
    content: '»';
    display: inline-block;
    margin: 0 calc(var(15px) / 2);
    color: purple;
  }
`

export const PostDate = styled.span`
  color: ${theme.colors.green[600]};
  &:before,
  &:after {
    color: blue;
  }
  &:before {
    content: '(';
  }
  &:after {
    content: ')';
  }
`

export const cursor = `
  width: calc(var(15px) / 2);
  display: inline-block;
  background: white;
  margin-left: calc(var(15px) / 2);
  animation: blink 1s infinite;
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`

export const PostCursor = styled.span`
  ${cursor}
`

export const PostLast = styled.span`
  color: ${theme.colors.yellow[500]};
`

export const PostTitle = styled.span``

export const CardContainer = styled(GridItem)`
  list-style: none;
  img {
    height: auto;
    border-radius: 0.75rem;
    border: 1px solid rgb(63 63 70 / 1);
    max-width: 100%;
    @media (min-width: 768px) {
      max-width: 352px;
      max-height: 177px;
      object-fit: cover;
    }
  }
`

export const Title = styled(Flex)`
  margin-top: 0.75rem;
`

export const FlagBR = styled(BR)`
  max-width: 20px;
  margin: 0 8px;
`
export const FlagUS = styled(US)`
  max-width: 20px;
  margin: 0 8px;
`
import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corBorda};
  padding: 16px;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  text-decoration: none;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  padding: 8px;
  margin-top: 24px;
  display: inline-block;
  cursor: pointer;
`

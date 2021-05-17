import styled, { css } from 'styled-components'
import { device } from '../MediaQueries'

// import interface
import { PokemonInterface } from '../../interface/index'

type Props = {
  list?: Array<PokemonInterface | null>
  searchResult?: Array<PokemonInterface | null>
  setSearchResult?: (searchValue: Array<PokemonInterface | null>) => void
  setUrl?: (urlValue: string) => void | null
  CardPoke?: boolean
  CardDetail?: any
  PokeName?: string
  height?: number
  weight?: number
  image?: string
}

// Styling

export const CardDiv = styled.div`
  ${(props: Props) =>
    props.CardPoke &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0.5rem;
      border: 1px solid black;
      border-radius: 10px;
      padding: 20px;
      cursor: pointer;
      &:hover {
        background: aquamarine;
      }
      @media ${device.mobileS} {
        flex-basis: 90%;
      }
      @media ${device.mobileM} {
      }
      @media ${device.mobileL} {
      }
      @media ${device.tablet} {
        flex-basis: 40%;
      }
      @media ${device.laptop} {
        flex-basis: 25%;
      }
      @media ${device.desktop} {
      }
    `}
  ${(props: Props) =>
    props.CardDetail &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 1px solid black;
      border-radius: 30px;
      padding: 25px;
      margin: 0 auto 3vh auto; // atas-kanan-bawah-kiri
      @media ${device.mobileS} {
        width: 70vw;
        flex-basis: 45%;
      }
      @media ${device.mobileM} {
      }
      @media ${device.mobileL} {
      }
      @media ${device.tablet} {
        width: 50vw;
        flex-basis: 45%;
      }
      @media ${device.laptop} {
      }
      @media ${device.laptopL} {
        width: 30vw;
      }
    `}
`
export const Heading = styled.h1`
  font-size: 1.5rem;
`

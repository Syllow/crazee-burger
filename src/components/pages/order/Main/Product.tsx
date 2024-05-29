import styled from 'styled-components';
import { theme } from '../../../../theme';
import PrimaryButton from '../../../reusable-ui/PrimaryButton';
import { formatPrice } from '../../../../utils/maths';
import formatText from '../../../../utils/text';

type PropsType = {
  id: number;
  imageSource: string;
  title: string;
  price: number;
};

export default function Product({ title, imageSource, price }: PropsType) {
  return (
    <ProductStyled>
      <div className='image'>
        <img src={imageSource} alt={title} />
      </div>
      <div className='info-text'>
        <div className='title'>{formatText(title)}</div>
        <div className='description'>
          <div className='left-description'>{formatPrice(price)}</div>
          <div className='right-description'>
            <PrimaryButton label='Ajouter' className='add-button' />
          </div>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  background: ${theme.colors.white};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};

  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 30px 20px 10px 20px;

  .info-text {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      padding-top: 5px;
      margin: auto 0;
      font-size: ${theme.fonts.size.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: 'Amatic SC', cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};

        .add-button {
          font-size: ${theme.fonts.size.XS};
          cursor: pointer;
          padding: 12px;
        }
      }
    }
  }

  .image {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

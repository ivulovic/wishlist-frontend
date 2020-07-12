import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { FiTrash } from 'react-icons/fi';
import { WishProps } from '../types';

const STORE_IMAGE_PATH = '/images/stores/';

export function Wish(props: WishProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="wish-item">
        {props.onRemoveWish && (
          <div
            className="wish-controls"
            onClick={() => {
              if (props.onRemoveWish) {
                props.onRemoveWish(props._id);
              }
            }}
          >
            <button type="button">
              <FiTrash />
            </button>
          </div>
        )}
        <div
          className="image-wrapper"
          style={{ backgroundImage: `url(${props.image})` }}
        />
        <div className="wish-info">
          <p className="title">{props.title}</p>
          <div className="price">
            {/* {props.oldPrice && (
              <span className="old-price">
                {props.oldPrice} {props.currency}
              </span>
            )} */}
            <span className="current-price">
              {props.currentPrice} {props.currency}
            </span>
          </div>
        </div>
        <div className="store-info">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="store-link"
            href={props.url}
          >
            <div
              className="store-image-wrapper"
              style={{
                backgroundImage: `url(${STORE_IMAGE_PATH}${props.store.logo})`,
              }}
            />
            <p className="link-text">
              {/* See this product on {props.store.name} website.{' '} */}
              {t(translations.wishlists.seeProduct(), {
                storeName: props.store.name,
              })}
            </p>
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  box-shadow: 1px 1px 15px ${p => p.theme.border};
  border-radius: 5px;
  position: relative;
  &:hover{
    .wish-controls{
      display: block;
    }
  }
  .wish-controls {
    display:none;
    position: absolute;
    right: 0;
    top: 0;
    margin: 5px 5px;
    button {
      border-radius: 3px;
      cursor: pointer;
      color: ${p => p.theme.text};
      background: ${p => p.theme.borderLight};
      &:hover {
        // background: ${p => p.theme.border};
        box-shadow: 0px 0px 8px ${p => p.theme.border};
      }
      outline: none;
      border: none;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .image-wrapper {
    height: 200px;
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin: 15px 0px 15px 0px;
  }
  .wish-info {
    padding: 0px 25px;

    .title {
      text-align: center;
      font-weight: 500;
      color: ${p => p.theme.text};
      min-height: 3rem;
      max-height: 3rem;
      overflow: hidden;
    }
    .price {
      display: flex;
      align-items: center;
      width: 100%;
      text-align: center;
      justify-content: center;
      padding: 15px 0px;
    }
    .old-price {
      text-align: center;
      font-size: 1rem;
      color: ${p => p.theme.negative};
      text-decoration: line-through;
      margin-right: 10px;
      margin-left: -10px;
    }
    .current-price {
      text-align: center;
      font-size: 1.5rem;
      color: ${p => p.theme.positive};
    }
  }

  .underline {
    text-decoration: underline;
  }

  .store-info {
    border-radius: 0px 0px 5px 5px;
    background: ${p => p.theme.borderLight};
    transition: all 0.2s ease-in-out;
    color: ${p => p.theme.textSecondary};
    &:hover {
      background: ${p => p.theme.border};
    }
    .store-image-wrapper {
      height: 32px;
      width: 32px;
      margin: 10px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 5px;
    }
    .store-title {
      margin: 0;
      padding: 0;
      font-weight: 500;
      color: ${p => p.theme.text};
      white-space: nowrap;
    }
    .store-link {
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: center;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    .link-text {
      color: ${p => p.theme.textSecondary};
      font-size: 13px;
      display: flex;
      flex-direction: row;
      align-items: center;

      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }
`;

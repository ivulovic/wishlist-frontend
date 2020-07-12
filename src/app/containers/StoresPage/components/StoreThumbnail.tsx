import React from 'react';
import styled from 'styled-components/macro';
import { Store } from 'types/Store';

const STORE_IMAGE_PATH = '/images/stores/';

export function StoreThumbnail(props: Store): JSX.Element {
  return (
    <Wrapper>
      <div className="store-info">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="store-link"
          href={props.origin}
        >
          <div
            className="store-image-wrapper"
            style={{
              backgroundImage: `url(${STORE_IMAGE_PATH}${props.logo})`,
            }}
          />
          <p className="link-text">{props.name}</p>
        </a>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .store-info {
    border-radius: 0px 0px 5px 5px;
    background: ${p => p.theme.borderLight};
    transition: all 0.2s ease-in-out;
    color: ${p => p.theme.textSecondary};
    a {
      justify-content: start!important;
    }
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
`;

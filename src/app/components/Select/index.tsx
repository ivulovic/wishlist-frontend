import React, { memo } from 'react';
import styled from 'styled-components/macro';

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

interface Option {
  value: string;
  label: string;
}
interface Props extends SelectProps {
  id: string;
  value: string;
  className?: string;
  options: Array<Option>;
}

export const Select = memo(
  ({ id, value, className, options, ...restOf }: Props) => {
    return (
      <Wrapper className={className}>
        {/* <input type="radio" id={id} checked={isSelected} {...restOf} /> */}
        <select {...restOf} value={value}>
          <option value={''}>Select</option>
          {options && options.length
            ? options.map((option: Option) => (
                <option value={option.value}>{option.label}</option>
              ))
            : null}
        </select>
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  select {
    color: ${p => p.theme.text};
    background: ${p => p.theme.background};
    border: 1px solid ${p => p.theme.borderLight};
    outline: none;
    width: 100%;
    font-size: 0.875rem;
  }
`;

import React, { ButtonHTMLAttributes } from 'react';
import { Select } from './style';

type SelectListProps = ButtonHTMLAttributes<HTMLSelectElement> & {
  loading?: boolean;
  items?: any[];
  key?: string;
  name?: string;
  preSelected?: any;
};

const SelectList: React.FC<SelectListProps> = ({ items, key, name, preSelected, ...rest }) => {
  return (
    <Select>
      {
        items && items.map((item, index) => {
          const value = key ? item[key] : item;
          const desc = name ? item[name] : item;

          return <option
                  key={index}
                  value={value}
                  defaultValue={preSelected}
                  selected={value == preSelected}
                  >
                    {desc}
                 </option>
        })
      }
    </Select>
  );
};

export default SelectList;
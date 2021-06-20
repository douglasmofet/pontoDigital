import { useCallback, useEffect, useState } from 'react';
import SelectList from '../../../components/forms/selectList';
import { HasValue } from '../../../components/others/utils';
import { useAuth } from '../../../hooks/auth';
import api from '../../../services/shared/api';
import handleErrors from '../../../services/shared/errorsService';
import { Container } from '../../shared/style';
import { Table } from './style';

interface EntracesPageProps {
}

interface Month {
  id: number;
  name: string;
}

export enum EntranceStatusEnum {
  active = 1,
  inactive = 2
};

export enum EntranceTypeEnum {
  start = 1,
  middleStart = 2,
  middleEnd = 3,
  end = 4
};

export interface IEntranceEdit {
  id?: number | string;
  userId: number;
  hour?: Date;
  date?: Date;
  type?: EntranceTypeEnum;
  status?: EntranceStatusEnum;
}

export interface Item {
  id: number;
  hour: string;
  date: string;
}

const months: Month[] = [
  { id: 1, name: 'Janeiro' },
  { id: 2, name: 'Fevereiro' },
  { id: 3, name: 'Março' },
  { id: 4, name: 'Abril' },
  { id: 5, name: 'Maio' },
  { id: 6, name: 'Junho' },
  { id: 7, name: 'Julho' },
  { id: 8, name: 'Agosto' },
  { id: 9, name: 'Setembro' },
  { id: 10, name: 'Outubro' },
  { id: 11, name: 'Novembro' },
  { id: 12, name: 'Dezembro' }
];

const getActualmonth = () => {
  return months.filter(m => m.id == new Date().getMonth() + 1)[0];
}

const EntracesPage = (props: EntracesPageProps) => {
  const { user } = useAuth();
  const [years, setYear] = useState<number[]>([]);

  const [yearFilter, setYearFilter] = useState<number | any>();
  const [yearMonth, setMounthFilter] = useState<Month | any>();

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    renderYears();
    getContent();
  }, []);

  const renderYears = () => {
    api.get('/entrance/getYears', { params: { userId: user.id } })
      .then((response) => {
        setYear(response.data);
      })
      .catch((error) => {
        handleErrors(error);
      });
  }

  const renderFilters = () => {
    return (
      HasValue(years) &&
      <>
        <SelectList
          items={years}
          onChange={v => setYearFilter(v.currentTarget.value)}
        />
        <SelectList
          preSelected={getActualmonth()}
          items={months}
          key={'id'}
          name={'name'}
          onChange={v => setMounthFilter(v.currentTarget.value)}
        />
      </>
    )
  }

  const getContent = () => {
    api.get('/entrance/list', { params: { userId: user.id } })
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        handleErrors(error);
      });
  }

  const renderContent = () => {
    const table =
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Data</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.date}</td>
                <td>{item.hour}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>

    return table;
  }

  return (
    <>
      <h2>Lançamentos</h2>
      {/* {renderFilters()} */}
      <Container>
        {renderContent()}
      </Container>
    </>
  );
}

export default EntracesPage;
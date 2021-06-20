import React, { ChangeEvent, FormEvent, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { IEntranceEdit } from ".";
import Button from "../../../components/forms/button";
import { useAuth } from "../../../hooks/auth";
import { createEntranceService } from "../../../services/admin/entrances/entranceService";
import { Container, InputGroup } from "../../shared/style";
import { EntranceStyle } from "./style";

// import MomentUtils from '@date-io/moment';
// import {
//   DatePicker,
//   TimePicker,
//   DateTimePicker,
//   MuiPickersUtilsProvider,
// } from '@material-ui/pickers';

interface EntraceEditProps {
}

interface EntraceEditParams {
	id?: string;
}

interface EntranceEditState extends IEntranceEdit{};

const EntranceEdit = (props: EntraceEditProps) => {
	const { user } = useAuth();
	const history = useHistory();
	const { params } = useRouteMatch<EntraceEditParams>();

	const entranceId = params.id;
	const title = <h2>{`${entranceId ? 'Editar': 'Novo'} lançamento`}</h2>;

	const [formData, setFormData] = useState<EntranceEditState>({
		userId: user && user.id,
		id: entranceId,
		date: new Date()
	});

	const handleInputChange = (event: ChangeEvent<HTMLInputElement> | any) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { id, userId, hour, date } = formData;

    const data = {
      id,
      userId,
      hour,
			date
    };

    const entrance = await createEntranceService(data);

    if(entrance != null)
      history.push('/admin/lancamentos');
  }

	return (
		<>
		{title}
    <Container>
      <EntranceStyle>

        <form onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="hour">Hora</label>
            <input
              name="hour"
              required
							type="time"
              onChange={handleInputChange}
            />
						{/* <MuiPickersUtilsProvider utils={MomentUtils}>
						<DatePicker value={formData.hour} onChange={v => handleInputChange(v)} />
						</MuiPickersUtilsProvider> */}
          </InputGroup>

          <InputGroup>
            <label htmlFor="date">Data</label>
            <input
              name="date"
              required
              type="date"
              onChange={handleInputChange}
            />
          </InputGroup>

          <Button type="submit">Enviar</Button>
        </form>

      </EntranceStyle >
    </Container>
		</>
	);
}

export default EntranceEdit;
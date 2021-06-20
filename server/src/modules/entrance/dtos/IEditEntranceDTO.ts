import EntranceStatusEnum from "../enums/EntranceStatusEnum";
import EntranceTypeEnum from "../enums/EntranceTypeEnum";

export default interface IEntranceEditDTO {
	userId: number;
	hour: Date;
	date: Date;
	type: EntranceTypeEnum;
	status: EntranceStatusEnum;
}
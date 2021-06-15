import EntranceStatusEnum from "../enums/EntranceStatusEnum";
import EntranceTypeEnum from "../enums/EntranceTypeEnum";

export default interface EntranceEdit {
	userId: number;
	hour: Date;
	day: Date;
	type: EntranceTypeEnum;
	status: EntranceStatusEnum;
}
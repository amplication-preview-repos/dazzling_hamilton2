import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type HolidayWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};

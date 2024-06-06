import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const H5PList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"H5PS"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Accessibility" source="accessibility" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Discipline" source="discipline" />
        <TextField label="ID" source="id" />
        <TextField label="Language" source="language" />
        <TextField label="LearningOutcomes" source="learningOutcomes" />
        <TextField label="Owner" source="owner" />
        <TextField label="Subject" source="subject" />
        <TextField label="Title" source="title" />
        <TextField label="Topic" source="topic" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const QuizCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Accessibility" source="accessibility" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Discipline" source="discipline" />
        <TextInput label="Language" source="language" />
        <TextInput
          label="LearningOutcomes"
          multiline
          source="learningOutcomes"
        />
        <TextInput label="Owner" source="owner" />
        <TextInput label="Subject" source="subject" />
        <TextInput label="Title" source="title" />
        <TextInput label="Topic" source="topic" />
      </SimpleForm>
    </Create>
  );
};

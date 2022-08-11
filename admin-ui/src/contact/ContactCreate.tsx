import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { NewsItemTitle } from "../newsItem/NewsItemTitle";

export const ContactCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Cellphone number"
          source="cellphoneNumber"
        />
        <TextInput label="Company" source="company" />
        <ReferenceArrayInput
          source="lastUsed"
          reference="NewsItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NewsItemTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Surname" source="surname" />
      </SimpleForm>
    </Create>
  );
};

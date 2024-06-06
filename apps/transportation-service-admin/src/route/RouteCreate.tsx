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

import { PickUpDropOffPointTitle } from "../pickUpDropOffPoint/PickUpDropOffPointTitle";
import { PsvTitle } from "../psv/PsvTitle";

export const RouteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="distance" source="distance" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="pickUpDropOffPoints"
          reference="PickUpDropOffPoint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PickUpDropOffPointTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="psvs"
          reference="Psv"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PsvTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

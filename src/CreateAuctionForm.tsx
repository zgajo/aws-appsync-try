import React from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Mutation } from "react-apollo";
import { createAuction } from "./graphql/mutations";
import gql from "graphql-tag";

import { CreateAuctionMutation, CreateAuctionMutationVariables } from "./API";

interface FormValues {
  name: string;
  price: number;
}

export const CreateAuctionForm = () => {
  return (
    <Mutation<CreateAuctionMutation, CreateAuctionMutationVariables>
      mutation={gql(createAuction)}
    >
      {createAuction => (
        <Formik<FormValues>
          initialValues={{
            name: "",
            price: 0
          }}
          onSubmit={async ({ name, price }) => {
            // call mutation
            console.log(name, price);
            const response = await createAuction({
              variables: {
                input: {
                  name,
                  price
                }
              }
            });
            console.log(response);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                margin="normal"
              />
              <br />
              <TextField
                label="Price"
                name="price"
                value={values.price}
                onChange={handleChange}
                margin="normal"
              />
              <br />
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
          )}
        </Formik>
      )}
    </Mutation>
  );
};

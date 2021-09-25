/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Student
// ====================================================

export interface Account_account {
  __typename: "Student";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface Account {
  student: Account_account;
}

export interface AccountVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Year } from "../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: Posts
// ====================================================

export interface Posts_posts_pageInfo {
  __typename: "PageInfo";
  /**
   * Indicates whether more edges exist following the set defined by the clients arguments.
   */
  hasNextPage: boolean;
  /**
   * Indicates whether more edges exist prior the set defined by the clients arguments.
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface Posts_posts_edges {
  __typename: "ProjectEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface Posts_posts_nodes_student {
  __typename: "Account";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface Posts_posts_nodes {
  __typename: "Post";
  id: string;
  name: string;
  description: string;
  link: string;
  year: Year;
  modified: any;
  created: any;
  student: Posts_posts_nodes_student;
}

export interface Posts_posts {
  __typename: "PostConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: Posts_posts_pageInfo;
  /**
   * A list of edges.
   */
  edges: Posts_posts_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: Posts_posts_nodes[] | null;
}

export interface Projects {
  projects: Posts_posts | null;
}

export interface ProjectsVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}

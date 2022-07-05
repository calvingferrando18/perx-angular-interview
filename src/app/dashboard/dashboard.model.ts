export interface IBook {
  id: string;
  type: string;
  links: { self: string; };
  attributes: IBookAttributes,
  relationships: IBookRelationships
}

export interface IBookAttributes {
  urn: string;
  created_at: string;
  updated_at: string;
  content: string;
  properties: string;
  display_properties: { type: string; image: string };
}

export interface IBookRelationships {
  authors: { links: IRelationshipsLinks };
  publishers: { links: IRelationshipsLinks };
}

export interface IRelationshipsLinks {
  self: string;
  related: string;
}

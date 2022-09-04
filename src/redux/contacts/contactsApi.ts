import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "redux/axiosSetup";

export interface IContactsItem {
  id: string;
  name: string;
  number: string;
}

export type IContacts = IContactsItem[];

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
  }),
  tagTypes: ["Contacts"],
  endpoints: (build) => ({
    getContacts: build.query<IContacts, void>({
      query() {
        return {
          url: `/contacts`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 1,
      providesTags: ["Contacts"],
    }),

    editContact: build.mutation<
      IContactsItem,
      { editId: string; data: Partial<IContactsItem> }
    >({
      query({ editId, data }) {
        return {
          url: `/contacts/${editId}`,
          method: "PATCH",
          data,
        };
      },
      invalidatesTags: ["Contacts"],
    }),

    addContact: build.mutation<IContactsItem, Partial<IContactsItem>>({
      query(data) {
        return {
          url: `/contacts`,
          method: "POST",
          data,
        };
      },
      invalidatesTags: ["Contacts"],
    }),

    deleteContact: build.mutation<IContactsItem, string>({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactMutation,
} = contactsApi;

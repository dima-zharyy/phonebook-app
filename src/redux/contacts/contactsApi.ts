import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from 'redux/axiosSetup';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contacts'],
  endpoints: build => ({
    getContacts: build.query({
      query() {
        return {
          url: `/contacts`,
          method: 'GET',
        };
      },
      keepUnusedDataFor: 1,
      providesTags: ['Contacts'],
    }),

    editContact: build.mutation({
      query({ editId, data }) {
        return {
          url: `/contacts/${editId}`,
          method: 'PATCH',
          data,
        };
      },
      invalidatesTags: ['Contacts'],
    }),

    addContact: build.mutation({
      query(data) {
        return {
          url: `/contacts`,
          method: 'POST',
          data,
        };
      },
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: build.mutation({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactMutation,
} = contactsApi;

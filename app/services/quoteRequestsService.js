import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({
    baseURL: apiEndpoint
  });
  return {
    getQuoteRequests: () => client.request({
      method: 'GET',
      url: '/quoterequest'
    }),
    deleteQuoteRequest: ({id}) => client.request({
      method: 'DELETE',
      url: `/quoterequest/${id}`
    }),
    updateQuoteRequest: ({id, data}) => client.request({
      method: 'PUT',
      url: `/quoterequest/${id}`,
      data
    }),
    createQuoteRequest: ({id, data}) => client.request({
      method: 'POST',
      url: `/quoterequest/${id}`,
      data
    })
  };
};


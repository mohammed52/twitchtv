import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({
    baseURL: apiEndpoint
  });
  return {
    getSelectedOptionRequests: () => client.request({
      method: 'GET',
      url: '/selectedoption'
    }),
    deleteSelectedOptionRequest: ({id}) => client.request({
      method: 'DELETE',
      url: `/selectedoption/${id}`
    }),
    updateSelectedOptionRequest: ({id, data}) => client.request({
      method: 'PUT',
      url: `/selectedoption/${id}`,
      data
    }),
    createSelectedOptionRequest: ({id, data}) => client.request({
      method: 'POST',
      url: `/selectedoption/${id}`,
      data
    })
  };
};


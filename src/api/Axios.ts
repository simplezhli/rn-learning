import Axios, { AxiosInstance } from 'axios';

export const client: AxiosInstance = Axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 10000,
  headers: {
    // 不缓存get请求数据
    'Cache-Control': 'no-cache'
  }
});

export const getUrl = (endpoint: string, ...extraParams: string[]): string => {
  const extra = !!extraParams.length ? extraParams.join('&') : '';
  return `${ endpoint }?${ extra }`;
};
